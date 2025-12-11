document.addEventListener('DOMContentLoaded', async function () {
    const employees = await loadData();
    renderEmployeeList(employees);

    //add employee to the list
    document.querySelector("#addEmployee").addEventListener("click", function () {
        let name = document.querySelector("#name").value;
        let gender = document.querySelector("#gender").value;
        let position = document.querySelector("#position").value;
        let salary = document.querySelector("#salary").value;
        addEmployee(employees, name, gender, position, salary);
        renderEmployeeList(employees);
    })

    //save employees to JSON BIN
    document.querySelector("#save").addEventListener("click", async function () {
        saveEmployees(employees);
    });
});

// render employee list 
function renderEmployeeList(employees) {
    let tableBody = document.querySelector('#employeeTableBody');
    tableBody.innerHTML = '';

    for (let employee of employees) {

        let newRow = document.createElement('tr');
        newRow.innerHTML = `
           <td> ${employee.id}</td>
           <td> ${employee.name}</td>
           <td> ${employee.gender}</td>            
           <td> ${employee.position}</td>
           <td> ${employee.salary}</td> 
           <td>
              <button class="btn btn-sm btn-warning edit-btn">Edit</button>
              <button class="btn btn-sm btn-danger delete-btn">Delete</button>
           </td>
       `;
        // EDIT: add event listener and process to edit-btn in 2 steps
        const editBtn = newRow.querySelector(".edit-btn");
        editBtn.addEventListener("click", function() {

            let newName = prompt("Edit name", `${employee.name}`);
            let newGender = prompt("Edit gender (Male/Female/Unknown):", `${employee.gender}`);
            let newPostion = prompt("Edit position", `${employee.position}`);
            let newSalary = prompt("Edit salary", `${employee.salary}`);
     
            editEmployee(employees, employee.id, newName, newGender, newPostion, newSalary);
            renderEmployeeList(employees);
        });

        // DELETE add event listener and processes to delete-btn in 1 step
        newRow.querySelector(".delete-btn").addEventListener("click", function () {
            deleteEmployee(employees, employee.id);
            renderEmployeeList(employees);
        });

        // add the row to the table 
        tableBody.appendChild(newRow);

    } // end of FOR 
}