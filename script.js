// ===========================
// Active Category
// ===========================

const categories = document.querySelectorAll(".category");

categories.forEach(category => {
    category.addEventListener("click", () => {
        categories.forEach(item => item.classList.remove("active"));
        category.classList.add("active");
    });
});

// ===========================
// AMAZON SIDE NAVIGATION
// ===========================

const menuBtn = document.querySelector(".category.active");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

function openSidebar(e) {
    if (e) e.preventDefault();

    sidebar?.classList.add("active");
    overlay?.classList.add("active");
    closeBtn?.classList.add("active");

    document.body.style.overflow = "hidden";
}

function closeSidebar() {
    sidebar?.classList.remove("active");
    overlay?.classList.remove("active");
    closeBtn?.classList.remove("active");

    document.body.style.overflow = "auto";
}

menuBtn?.addEventListener("click", openSidebar);
closeBtn?.addEventListener("click", closeSidebar);
overlay?.addEventListener("click", closeSidebar);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeSidebar();
    }
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