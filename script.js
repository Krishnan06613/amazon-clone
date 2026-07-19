// navbar

// Currency box 

const navLanguageBtn = document.querySelector(".nav-language");
const currencyBox = document.querySelector(".nav-currency");
const saveButton = document.getElementById("save-currency");

navLanguageBtn?.addEventListener("click", function (e) {

    e.preventDefault();

    currencyBox.style.display =
        currencyBox.style.display === "block" ? "none" : "block";

});

saveButton?.addEventListener("click", function () {

    currencyBox.style.display = "none";

});



// ===========================
// Active Category
// ===========================

const categories = document.querySelectorAll(".category");

categories.forEach(category => {

    if (category.id !== "menu-btn") {

        category.addEventListener("click", () => {

            categories.forEach(item => {

                if (item.id !== "menu-btn") {
                    item.classList.remove("active");
                }

            });

            category.classList.add("active");

        });

    }

});

// ===========================
// AMAZON SIDE NAVIGATION
// ===========================

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", function (e) {

    e.preventDefault();

    sidebar.classList.add("active");
    overlay.classList.add("active");
    closeBtn.classList.add("active");

});

closeBtn.addEventListener("click", function () {

    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    closeBtn.classList.remove("active");

});

overlay.addEventListener("click", function () {

    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    closeBtn.classList.remove("active");

});
// ===========================
// HERO SLIDER
// ===========================

var slider = document.getElementById("image-slider");

if (slider) {

    var imglist = slider.querySelectorAll("img");
    var rhtbtn = document.getElementById("right");
    var lftbtn = document.getElementById("left");

    var index = 0;
    var totalslides = imglist.length;

    var slider1 = () => {
        if (index == 0) {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
        if (index == 1) {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
        if (index == 2) {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
        if (index == 3) {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
        if (index == 4) {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
        if (index == 5) {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
    }

    rhtbtn.addEventListener("click", function () {
        index = (index + 1) % totalslides;
        slider1();
    });

    lftbtn.addEventListener("click", function () {
        index = (index - 1 + totalslides) % totalslides;
        slider1();
    });

    setInterval(function () {
        index = (index + 1) % totalslides;
        slider1();
    }, 3000);


}

var productSlider = document.querySelector(".left-slider");

if (productSlider) {

    document.querySelectorAll(".left-s1 img").forEach((img, i) => {
        img.addEventListener("mouseenter", () => {
            productSlider.style.transform = `translateX(-${i * 100}%)`;
        });
    });

    document.querySelectorAll(".design img").forEach((img, i) => {
        img.addEventListener("mouseenter", () => {
            productSlider.style.transform = `translateX(-${i * 100}%)`;
        });
    });

}


var product1 = document.getElementById("img1")
product1.addEventListener("click", function () {
    window.location.href = "products.html";
})

var product2 = document.getElementById("img2")
var product3 = document.getElementById("img3")
var product4 = document.getElementById("img4")
var product5 = document.getElementById("img5")
var product6 = document.getElementById("img6")

product2.addEventListener("click", function () {
    window.location.href = "mobile.html";
})

product6.addEventListener("click", function () {
    window.location.href = "mobile.html";
})
product3.addEventListener("click", function () {
    window.location.href = "cook.html";
})

product4.addEventListener("click", function () {
    window.location.href = "furni.html";
})

product5.addEventListener("click", function () {
    window.location.href = "tv.html";
})


//electronics page

const products = document.getElementById("products");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

next.addEventListener("click", () => {
    products.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});

prev.addEventListener("click", () => {
    products.scrollBy({
        left: -300,
        behavior: "smooth"
    });
});

// ===========================
// BACK TO TOP
// ===========================

const backTop = document.querySelector(".back-top");

backTop?.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===========================
// FOOTER LINKS
// ===========================

const footerLinks = document.querySelectorAll(".footer-box p");

footerLinks.forEach(link => {
    link.addEventListener("click", () => {
        console.log(link.innerText + " clicked");
    });
});

// ===========================
// LANGUAGE BUTTON
// ===========================

const languageBtn = document.querySelector(".footer-bottom button");

languageBtn?.addEventListener("click", () => {
    alert("Language selection");
});





