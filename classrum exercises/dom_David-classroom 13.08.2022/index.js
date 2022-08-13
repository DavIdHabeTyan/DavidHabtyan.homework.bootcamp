const button = document.getElementById("button");
const tableBody = document.getElementById("employees");
const URL = "./data.json"
button.addEventListener("click", handleButtonClick);
tableBody.addEventListener("click", handleBodyClick)

function handleBodyClick(e) {
    if(e.target.nodeName === "TD") {
        e.target.parentNode.remove();
    }
}

handleBodyClick("click")


    function handleButtonClick() {
    tableBody.innerHTML = getImage();

    return fetch(URL)
        .then((response) => response.json())
        .then((employees) => {
            tableBody.innerHTML = ""
            employees.forEach((data) => {

                tableBody.innerHTML += getRowHTML(
                    data.id,
                    data.name,
                    data.status
                )
            })
        }).catch(error => {
            tableBody.innerHTML= errorURL(error)
        });

};

function getRowHTML(id, name, status) {
    return `
    <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${status ? 'active' : 'passed'}</td>
        </tr>
    `
}

function getImage() {
    return `<tr>
             <td colspan="3">
                <img
                        src="https://icons8.com/preloaders/preloaders/1487/%E2%80%8B%E2%80%8BIphone-spinner-1.gif"
                />
              </td>   
            </tr>`
}

function errorURL() {
    return new Error("wrong URL...")
}

console.log(tableBody)