console.log("hello world")

let numberBox = document.querySelector("#number");

let plusButton = document.querySelector("#plusButton");
plusButton.addEventListener("click", function () {

    // select then modify
    let currentNumber = parseInt(numberBox.innerText);
    if (currentNumber < 10) {
        currentNumber += 1;
    }
    numberBox.innerText = currentNumber;
    changeColor(currentNumber);
});

let zeroButton = document.querySelector("#zeroButton");
zeroButton.addEventListener("click", function () {
    let currentNumber = parseInt(numberBox.innerText);
    currentNumber = 0;
    numberBox.innerText = currentNumber;
    changeColor(currentNumber);
})

let minusButton = document.querySelector("#minusButton");
minusButton.addEventListener("click", function () {

    let currentNumber = parseInt(numberBox.innerText);
    if (currentNumber > -10) {
        currentNumber -= 1;
    }
    numberBox.innerText = currentNumber;
    changeColor(currentNumber);
})

function changeColor(currentNumber) {
    if (currentNumber == 0) {
        numberBox.style.color = "black";
    }
    else if (currentNumber % 2 == 0) {
        numberBox.style.color = "green";
    } else {
        numberBox.style.color = "red";
    }
}