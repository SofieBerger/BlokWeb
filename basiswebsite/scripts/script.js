// JavaScript Document

// hamburger menu
var dropdownMenu = document.querySelector ("nav");

function menuOpenDicht(){
	dropdownMenu.classList.toggle("transitie_navigatie");
}

dropdownMenu.addEventListener("click", menuOpenDicht);
