// Currency box 

const languageBtn = document.querySelector(".nav-language");
const currencyBox = document.querySelector(".nav-currency");
const saveButton = document.querySelector("#save-currency");


languageBtn.addEventListener("click", function () {

    if (currencyBox.style.display === "block") {
        currencyBox.style.display = "none";
    }
    else {
        currencyBox.style.display = "block";
    }

});


saveButton.addEventListener("click", function () {

    currencyBox.style.display = "none";

});

// Active Category

const categories = document.querySelectorAll(".category_menu");

categories.forEach(category => {

    category.addEventListener("click", () => {

        categories.forEach(item => item.classList.remove("active"));

        category.classList.add("active");

    });

});



// ======================================
// ===========================
// AMAZON SIDE NAVIGATION
// ===========================

// Select Elements
const menuBtn = document.querySelector(".category.active");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

// Open Sidebar
menuBtn.addEventListener("click", function (e) {
    e.preventDefault();

    sidebar.classList.add("active");
    overlay.classList.add("active");
    closeBtn.classList.add("active");

    document.body.style.overflow = "hidden";
});

// Close Sidebar
function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    closeBtn.classList.remove("active");

    document.body.style.overflow = "auto";
}

// Close Button
closeBtn.addEventListener("click", closeSidebar);

// Overlay Click
overlay.addEventListener("click", closeSidebar);

// ESC Key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeSidebar();
    }
});




// banner section
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
}, 3000)