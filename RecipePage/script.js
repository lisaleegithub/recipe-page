

// add header to notes section
const notesHeader = document.createElement("h3")
notesHeader.innerText = "🖊 Your notes!"
document.body.childNodes[9].appendChild(notesHeader);
console.log(document.body.childNodes[11]);

// add a plain white box for notes section
const newDiv = document.createElement("div");
newDiv.style.width = "500px";
newDiv.style.height = "200px";
notesHeader.appendChild(newDiv);


// change description font style to italic
document.getElementsByClassName("description")[0].style.fontStyle = "italic";


// Button for dark mode
let btn = document.createElement("button");
btn.innerHTML = "Click Me for Dark Mode🌚";
document.body.childNodes[1].appendChild(btn);

let button = document.querySelector("button");
button.addEventListener("click",function(){
    document.body.style.backgroundColor="black";
    document.body.style.color = "#D8B6A4";
});

// add another row at the end of how to make
const ol = document.getElementById("orderedList")

const li = document.createElement('li');
li.innerText = "Voila! Enjoy your pastaaa!";
ol.appendChild(li);


// change h3 id myHeader color
// document.getElementById("myHeader").style.color = "color";




