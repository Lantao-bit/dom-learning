document.addEventListener("DOMContentLoaded", async function () {
    url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/users.json";
    let response = await axios(url);
    let users = response.data.users;
    renderList(users);
});

// put the list rendering into a function 
function renderList(users) {
    let usersUl = document.querySelector("#users");
    usersUl.innerHTML = "";

    for (let u of users) {
        let liElement = document.createElement("li");
        liElement.innerText = `
        ${u.firstName} ${u.lastName} ( ${u.emailAddress})  
        `;
        usersUl.appendChild(liElement);
    }
}