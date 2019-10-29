var next = document.getElementById("next")
var prew = document.getElementById("prew")
var sliderUl = document.querySelector(".slider ul")
var vaqif = 0;

prew.onclick = function () {
    vaqif++;

    if (vaqif == sliderUl.querySelectorAll("li").length) {
        vaqif = 0
    }
    sliderUl.style.left = -800 * vaqif + "px"
}

next.onclick = function () {
    vaqif--;

    if (vaqif == -1) {
        vaqif = sliderUl.querySelectorAll("li").length - 1
    }
    sliderUl.style.left = -800 * vaqif + "px"

}


var nextbloom = document.getElementById("nextbloom")
var prewbloom = document.getElementById("prewbloom")
var sliderbloom = document.querySelector(".sliderbloom ul")
var start = 0;

prewbloom.onlick = function () {
    start++;

    if (start == sliderbloom.querySelectorAll("li").lenght) {
        start = 0
    }
    sliderbloom.style.left = -800 * start + "px"
}

nextbloom.onclick = function () {
    start--;
    if (start == -1) {
        start = sliderbloom.querySelectorAllll("li").lenght - 1
    }
    sliderbloom.style.left = -800 * start + "px"
}