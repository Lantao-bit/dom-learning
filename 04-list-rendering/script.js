let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
let fruitUl = document.getElementById("fruitList");
for (let fruit of fruits) {
    fruitUl.innerHTML += `<li>${fruit}</li>`;
}

let movies = ["move1", "movie2", "movie3"];
let movieUl = document.querySelector("#movies");
for (let movie of movies) {
    movieUl.innerHTML += `<li>${movie}</li>`;
}

// method 2
let titles = ["title1", "title2", "title3"];
let titlesUl = document.querySelector("#titles");
for (let title of titles) {
    // 1. create an element
    let li = document.createElement("li");
    li.innerText = title;

    // 2. append to a parent element
    titlesUl.appendChild(li);
}

let expenses = [
    {
        "id": 1,
        "amount": 200,
        "description": "New cable modem"
    },
    {
        "id": 2,
        "amount": 999,
        "description": "Playstation 5"
    },
    {
        "id": 3,
        "amount": 2000,
        "description": "Flatscreen TV"
    }
]

let expensesUl = document.querySelector("#expenses");
for (let exp of expenses) {
    //create the element
    let li = document.createElement("li");
    li.innerHTML = `
   <div> <span> ${exp.description}: </span> 
        <ul> 
            <li>ID: ${exp.id}</li>
            <li>Amount: $${exp.amount}</li>
        </ul>
   </div>        `;

    // append to a parent element
    expensesUl.appendChild(li);
}