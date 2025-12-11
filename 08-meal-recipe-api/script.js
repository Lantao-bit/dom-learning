async function loadData(foodName) {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php",{
        "params":{
            "s": foodName
        }
    })    
    return response.data;
};

document.addEventListener("DOMContentLoaded", async function() {
    const data = await loadData("chicken");
    console.log(data);
    const searchBtn = document.querySelector("#searchBtn");
    searchBtn.addEventListener("click",async function() {
        const searchText = 
    })
    
})