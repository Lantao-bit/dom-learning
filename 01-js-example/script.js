console.log("Hello worrd");

let btn = document.querySelector("#changeBtn");
btn.addEventListener("click", function () {
    // strig is an object
    // object has data and functions
    let s = "the quick brown fox jumps over the lazy dog";
    console.log(s.toUpperCase());

    // we caccess the DOM using document
    // Data of the doucment is the CSS and HTML
    // it has function to select and modify HTML elements

    // querySelector can select an element and return it
    // as a DOM object (aka DOM element)
    let heading = document.querySelector("h1");
    heading.style.backgroundColor = "yellow";

    // when change css, must use camel css
    let heading2 = document.querySelector("h2");

    // to select ty ID
    let skills = document.querySelector("#skills");
    skills.style.border = "1px solid black";


    // querySelector will only select the first one
    // quereySelectorAll will return all elemtns that matches
    // and will retun an Array
    let allExpertSkills = document.querySelectorAll(".expert");

    for (let skill of allExpertSkills) {
        skill.style.color = "red";
    }

})



