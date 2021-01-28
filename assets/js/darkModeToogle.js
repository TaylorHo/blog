var html = document.querySelector("html");
var moon = document.getElementById("moon");
var sun = document.getElementById("sun");

if(localStorage.getItem('theme') == 'dark'){
  html.classList.add("dark_mode");
  sun.classList.remove("d-none");
  moon.classList.add("d-none");
}

function toogleColor() {
  if(html.classList.contains("dark_mode")){
    html.classList.remove("dark_mode");
    sun.classList.add("d-none");
    moon.classList.remove("d-none");
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add("dark_mode");
    sun.classList.remove("d-none");
    moon.classList.add("d-none");
    localStorage.setItem('theme', 'dark');
  }
}