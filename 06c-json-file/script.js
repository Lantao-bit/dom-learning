async function main() {
    let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json";
    let response = await axios(url);
    let outputDiv = document.querySelector("#output");
    outputDiv.innerHTML =
        `<ul>
            <li>Name: ${response.data.Name}</li>
            <li>Mobile Number: ${response.data.Mobile}</li>
            <li>Current Address: ${response.data.Address["current Address"]}</li>
            <li>Permanent Address: ${response.data.Address["Permanent address"]}</li>
        </ul>    
        `
}
main();

