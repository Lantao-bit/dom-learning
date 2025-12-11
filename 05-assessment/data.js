// load data from JSON bin
const JSON_BIN_BASE_URL = "https://api.jsonbin.io/v3";
const JSON_BIN_ID = "693a375e43b1c97be9e5ddb7";
const MASTER_KEY = "$2a$10$sZ7CFssGsKLIKmA/vRIejukZtbAH/VY0TtUs2YK2Si2l.4ZTEzWgC";

const config = {
            headers: {
                "Content-Type": "application/json",
                "X-MASTER-KEY": MASTER_KEY
            }
        }

// get employee list from JSON BIN 
async function loadData() {
    try {
        //axios get 2 parameters: endpoint, config options
        const response = await axios.get(`${JSON_BIN_BASE_URL}/b/${JSON_BIN_ID}/latest`, config);
        return response.data.record;       
    } catch (e) {
        return [];
    }
}

// save employee list to JSON BIN 
async function saveEmployees(employees) {
    try {
        // axios put - 3 parameters: endpoint, data to save, config options)  
        const response = await axios.put(`${JSON_BIN_BASE_URL}/b/${JSON_BIN_ID}`, employees, config);
        return response.data.record;

    } catch (e) { return { "error": e } }
}

function addEmployee(employees, name, gender, position, salary) {

    if (name.length > 0 && ["male", "female", "unknow"].includes(gender)) {
        let newEmployee = {
            id: Math.floor(Math.random() * 9999 + 1),
            name: name,
            gender: gender,
            position: position,
            salary
        }
        employees.push(newEmployee);
    } else {
        throw "Name or Gender is invalid"
    }

}

function editEmployee(employees, idToEdit,newName,newGender,newPosition,newSalary) {
    //
    let editedEmployee = {
        id: idToEdit,
        name: newName,
        gender: newGender,
        position: newPosition,
        salary: newSalary
    }

    //liner search the index of the employees to edit
    let indexToEdit = null;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id == idToEdit) {
            indexToEdit = i;
            break;
        }
    }

    if (indexToEdit != null) {
        employees[indexToEdit] = editedEmployee;
    }
}

function deleteEmployee(employees, idToDelete) {
    // liner serach the index of of the employee to delete
    let indexToDelete = null;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id == idToDelete) {
            indexToDelete = i;
            break;
        }
    }
    if (indexToDelete != null) {
        employees.splice(indexToDelete, 1);
    }
}

