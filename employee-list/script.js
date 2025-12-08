document.addEventListener("DOMContentLoaded", function () {

    // define main function to create some employees    
    function main() {
        let employees = [];
        // add employees using the functions from data.js   
        addEmployee(employees, "Alice Brown", "Data Scientist");
        addEmployee(employees, "Bob White", "DevOps Engineer");
        addEmployee(employees, "Charlie Green", "Product Owner");
    };

    // call main function to create employees
    main();

    //define a function to render the employee list in the DOM
    function renderEmployeeList(employees) {
        const employeeList = document.querySelector("#employee-list");

        employeeList.innerHTML = ""; // Clear the existing list

        for (let employee of employees) {
            const listItem = document.createElement("li");
            //   listItem.className = "list-group-item d-flex justify-content-between align-items-center";
            listItem.innerHTML = listItem.innerHTML
                + `${employee.id} <span class="badge bg-primary"> ${employee.name} 
            <span class="badge bg-primary"> ${employee.position}`;
            employeeList.appendChild(listItem);
        }
    }

    // Initial render of the employee list
    renderEmployeeList(employees);

});