document.addEventListener('DOMContentLoaded', function () {
    renderEmployeeList(employees);
});

function renderEmployeeList(employees) {
    let tableBody = document.querySelector('#employeeTableBody');

    tableBody.innerHTML = '';

    let newRow = document.createElement('tr');

    for (let employee of employees) {

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

        tableBody.appendChild(newRow);

    }
};