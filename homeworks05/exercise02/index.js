const URL = "src/employees.json"
const URLSettings = "src/settings.json"

const button = document.getElementById('button');
const tableBody = document.getElementById('employees');

button.addEventListener("click", handleButtonClick);

function deleteCurrentRowHTML(event){
   let e = event.target;
   let i = e.parentNode.parentNode.rowIndex;
   document.getElementById('table').deleteRow(i);
}

function handleButtonClick() {
   tableBody.innerHTML = getLoaderHTML();

   fetch(URLSettings)
      .then(res => res.json())
      .then(settings => {
         const fetchedSettings = {};
         settings.forEach(setting => {
         fetchedSettings[setting.name] = setting.value;
         })

         fetch(URL)
            .then(res => res.json())
            .then(employeesCollection => {
               tableBody.innerHTML = "";

               const filteredEmployees = employeesCollection.filter(employe => `${employe.status}` === fetchedSettings.show_only_active)
               filteredEmployees.length = fetchedSettings.max_items_to_show;
               filteredEmployees.forEach(elem => {
                  tableBody.innerHTML += getRowHTML(
                     elem.id, elem.name, elem.status,
                     fetchedSettings.show_description ? employee.description : 'N/A'
                  )
               })
            })
            .then(() => {
               const deleteButtons = document.querySelectorAll('input[value = "Delete"]');
               deleteButtons.forEach(button =>
                  button.addEventListener('click', deleteCurrentRowHTML)
               );
         })
            .catch((err) => {
               tableBody.innerHTML = getFailMsgHTML();
            })
      })
}

function getRowHTML(id, name, status, description) {
   return `
      <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${status}</td>
        <td>${description}</td>
        <td>
        <input type="button" value="Delete">
        </td>
      </tr>`
}

function getLoaderHTML() {
   return `
   <tr> 
      <td colspan="5">
          <img src="https://icons8.com/preloaders/preloaders/1487/%E2%80%8B%E2%80%8BIphone-spinner-1.gif" alt="">
      </td>
   </tr>`
}

function getFailMsgHTML() {
   return `
   <tr>
      <td colspan="5">
      <p>Failed to load Employees</p>
      </td>
   </tr>  `;
}