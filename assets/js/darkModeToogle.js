var html = document.querySelector("html");
if(localStorage.getItem('theme') == 'dark'){
  html.classList.add("dark_mode");
}

function toogleColor() {
  var html = document.querySelector("html");
  if(html.classList.contains("dark_mode")){
    html.classList.remove("dark_mode");
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add("dark_mode");
    localStorage.setItem('theme', 'dark');
  }
}