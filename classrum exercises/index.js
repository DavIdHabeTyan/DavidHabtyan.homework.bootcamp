function getEmployees() {
    return fetch("./employed.json").then((response) => response.json());
}

getEmployees().then((employees) => console.log(employees));