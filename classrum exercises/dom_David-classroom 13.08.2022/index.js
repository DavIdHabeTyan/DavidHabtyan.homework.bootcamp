const button = document.getElementById("button");
const tableBody = document.getElementById("employees");


button.addEventListener("click", function () {

        return fetch("./data.json").then((response) => response.json())
            .then((employees) =>{
                employees.forEach((data) => {

                    tableBody.innerHTML += getRowHTML(
                        data.id,
                        data.name,
                        data.status
                    )
                })
        })

});

function getRowHTML(id, name, status) {
   return  `
    <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${status ? 'active' : 'disabled'}</td>
        </tr>
    `
}