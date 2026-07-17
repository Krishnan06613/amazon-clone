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

const slider = document.getElementById("image-slider");

if (slider) {

    const images = slider.querySelectorAll("img");
    const rightBtn = document.getElementById("right");
    const leftBtn = document.getElementById("left");

    let index = 0;
    const totalSlides = images.length;

    function updateSlide() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    rightBtn?.addEventListener("click", () => {
        index = (index + 1) % totalSlides;
        updateSlide();
    });

    leftBtn?.addEventListener("click", () => {
        index = (index - 1 + totalSlides) % totalSlides;
        updateSlide();
    });

    setInterval(() => {
        index = (index + 1) % totalSlides;
        updateSlide();
    }, 3000);
}


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
