const input = document.querySelector(".input");
const search = document.querySelector(".search");
const button = document.querySelector(".btn");

button.addEventListener("click", function() {
    /* přidá aktivní classu a rozvine vyhledávač */
    search.classList.toggle("active");

    input.focus();

})