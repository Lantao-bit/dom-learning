async function loadData(pokemon) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    console.log(response.data);
    return DataTransfer;
}

document.addEventListener("DOMContentLoaded", async function() {

    // get the input field
    const searchBtn = document.querySelector("#pokemon");
    searchBtn.addEventListener("click",async function(){
    // get the value of the input  
        const searchField = document.querySelector("#pokemon");
        const searchText = searchField.value

        let data = await loadData();

    }) 
    
    console.log("in DOMContentLoaded=", data);
    let charmanderData = await loadData("charmander");
    console.log("charmander data=", charmanderData)
    
})