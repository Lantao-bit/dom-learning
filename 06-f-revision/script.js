// await must be used in an async function 
async function loadData() {
    let response = await axios.get("pets.json");
    return response.data;
};

// 
document.addEventListener("DOMContentLoaded", async function() {
    let data = await loadData();
    renderList(data.pets);
});

function renderList(pets){
    let petsUl = document.querySelector("#pets");
    for (p of pets){
        
    }
}