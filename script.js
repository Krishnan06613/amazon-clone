// Active Category

const categories=document.querySelectorAll(".category");

categories.forEach(category=>{

    category.addEventListener("click",()=>{

        categories.forEach(item=>item.classList.remove("active"));

        category.classList.add("active");

    });

});


var banner = document.getElementById("banner-container")
var slider = document.getElementById("image-slider")
var imglist = slider.querySelectorAll("img")
var rhtbtn = document.getElementById("right")
var lftbtn = document.getElementById("left")



var index = 0
var totalslides = imglist.length
console.log(totalslides)
function updateSlide() {
    if (index === 0) {
        slider.style.transform = "translateX(0%)";
    }

    if (index === 1) {
        slider.style.transform = "translateX(-100%)";
    }

    if (index === 2) {
        slider.style.transform = "translateX(-200%)";
    }
    if (index === 3) {
        slider.style.transform = "translateX(-300%)";
    }

    if (index === 4) {
        slider.style.transform = "translateX(-400%)";
    }

    if (index === 5) {
        slider.style.transform = "translateX(-500%)";
    }
}
rhtbtn.addEventListener("click",function(){
    index = (index + 1) % totalslides
    updateSlide()
})
lftbtn.addEventListener("click",function(){
    index = (index - 1 + totalslides) % totalslides
    updateSlide()
})
setInterval(()=>{
    index=(index+1)%totalslides
    updateSlide()
},3000)