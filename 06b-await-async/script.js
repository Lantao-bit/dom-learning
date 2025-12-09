let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt";

async function main() {

    let promise = axios.get(url);

    let response = await axios.get(url);
    console.log(response.data);

    let fruitUl = document.querySelector("#fruits");
    let fruits = response.data.trim().split("\n");

    for (let f of fruits){
       console.log(f);
    }
};

main();
for (let i = 0; i < 10; i++) {
    console.log(i);
}