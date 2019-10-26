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
        vaqif = sliderUl.querySelectorAll("li").length-1
    }
    sliderUl.style.left = -800 * vaqif + "px"

}