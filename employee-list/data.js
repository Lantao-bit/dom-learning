let employees = [
    { id: 1, name: "John Doe", position: "Software Engineer" },
    { id: 2, name: "Jane Smith", position: "Project Manager" },
    { id: 3, name: "Emily Johnson", position: "UX Designer" }
];

function addEmployee(name, position) {
    let newEmployee = {
        id: Math.floor(Math.random() * 1000 + 1), // random id between 1 and 1000
        name: name,
        position: position
    };
    employees.push(newEmployee);
}

function modifyEmployee(employees, id, newName, newPosition) {
    // get the index of the employee we want to replace
    let indexToModify = employees.findIndex(function (ee) { return ee.id = id });

    // if the id doesn't exist, then findIndex will return -1
    if (indexToModify !== -1) {
        employees[indexToModify] = {
            id: id,
            name: newName,
            position: newPosition
        };
    }
}

function deleteEmployee(employees, id) {

    // get the index of the employee we want to delete in a differnt way 
    let indexToDelete = null;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            indexToDelete = i;
            break;
        };
    }
    // if we found the index, delete the employee
    if (indexToDelete !== null) {
        employees.splice(indexToDelete, 1);
    } else {
        console.log("Employee with id " + id + " not found.");
    }
}