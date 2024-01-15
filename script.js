
var overlaypop = document.querySelector(".overlay");
var plusbutton = document.getElementById("addpop");
var popupbox = document.querySelector(".box")

plusbutton.addEventListener("click", function () {
   overlaypop.style.display = "block";
   popupbox.style.display = "block";
})

var cancel = document.getElementById("cancelling");

cancel.addEventListener("click", function (event) {
   event.preventDefault();
   overlaypop.style.display = "none";
   popupbox.style.display = "none";
})


var adddetails = document.getElementById("addingbook");
var bookcontainer = document.querySelector(".container");
var booktitle = document.getElementById("book-title-name");
var bookauthor = document.getElementById("book-author-name");
var shortdescription = document.getElementById("short-des");
adddetails.addEventListener("click", function (event) {
   event.preventDefault();
   var div = document.createElement("div");
   div.setAttribute("class", "popup");
   div.innerHTML = `<h2>${booktitle.value}</h2>
     <h4>${bookauthor.value}</h4>
     <p>${shortdescription.value}</p>
     <button onclick="deletebook(event)">Delete</button>`;
   bookcontainer.append(div);
   overlaypop.style.display = "none";
   popupbox.style.display = "none";
})

function deletebook(event){
   event.target.parentElement.remove();
}



