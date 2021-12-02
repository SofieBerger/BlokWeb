// JavaScript Document

// Dark mode
// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }    
// }

// toggleSwitch.addEventListener('change', switchTheme, false);


// hamburger menu
var dropdownMenu = document.querySelector ("nav");

function menuOpenDicht(){
	dropdownMenu.classList.toggle("transitie_navigatie");
}

dropdownMenu.addEventListener("click", menuOpenDicht);