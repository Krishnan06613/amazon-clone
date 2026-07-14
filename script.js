var banner = document.getElementById("banner-container")
var slider = document.getElementById("image-slider")
var imglist = slider.querySelectorAll("img")
var rhtbtn = document.getElementById("right")
var lftbtn = document.getElementById("left")



var index = 0
var totalslides = imglist.length
console.log(totalslides)
function updateSlide() {
    var slideWidth = banner.clientWidth
    var offset = -index * slideWidth
    slider.style.transform = `translateX(${offset}px)`
}

rhtbtn.addEventListener("click", function () {
    index = (index + 1) % totalslides
    updateSlide()
})
lftbtn.addEventListener("click", function () {
    index = (index - 1 + totalslides) % totalslides
    updateSlide()
})

setInterval(() => {
    index = (index + 1) % totalslides
    updateSlide()
}, 4000)