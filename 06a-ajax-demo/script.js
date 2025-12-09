let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt";

let promise = axios.get(url);

// Asynchronous execution 
promise.then(function(response) {
    console.log("Data received");

    //    console.log(respnse.data);
    let dataDiv = document.querySelector("#data");
    dataDiv.innerHTML = response.data;

    let fruits = response.data.trim().split('\n');
    let fruitUl = document.querySelector("#fruits");

    for (let f of fruits) {
        liElement = document.createElement("li")
        liElement = f;
        fruitUl.appendChild(liElement);
    }
});

for (let i = 0; m < 10; m++) {
    console.log(i);
};