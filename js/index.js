/* GETTING REFERENCES TO ACTIVE ELEMENTS */
const navItems = document.querySelectorAll("nav a");
const container = document.querySelector(".container");

let path = "./partials/home.html";

function handleClick(ev) {
    
    // prevetns link from redirecting
    ev.preventDefault();
    
    // current url is collected:
    path = ev.target.href;
    
    handleAjax(path);
}

// handling fetching data
function handleAjax(urlValue) {
    fetch (urlValue)
        .then(function (rsp) {
            return rsp.text();
        })
        .then(function (data) {
            container.innerHTML = data;
        })
}

handleAjax(path);

navItems[0].addEventListener("click", handleClick);
navItems[1].addEventListener("click", handleClick);