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

function openSidebar(e){

    e.preventDefault();

    sidebar.classList.add("active");
    overlay.classList.add("active");
    closeBtn.classList.add("active");

    document.body.style.overflow = "hidden";

}

function closeSidebar(){

    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    closeBtn.classList.remove("active");

    document.body.style.overflow = "auto";

}

if(menuBtn){
    menuBtn.addEventListener("click", openSidebar);
}

if(closeBtn){
    closeBtn.addEventListener("click", closeSidebar);
}

if(overlay){
    overlay.addEventListener("click", closeSidebar);
}

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){
        closeSidebar();
    }

});



// ===========================
// HERO SLIDER
// ===========================

const slider = document.getElementById("image-slider");
const imglist = slider.querySelectorAll("img");
const rhtbtn = document.getElementById("right");
const lftbtn = document.getElementById("left");

let index = 0;
const totalslides = imglist.length;

function updateSlide(){

    slider.style.transform = `translateX(-${index * 100}%)`;

}

rhtbtn.addEventListener("click", function(){

    index = (index + 1) % totalslides;
    updateSlide();

});

lftbtn.addEventListener("click", function(){

    index = (index - 1 + totalslides) % totalslides;
    updateSlide();

});

setInterval(function(){

    index = (index + 1) % totalslides;
    updateSlide();

},3000);



// ===========================
// BACK TO TOP
// ===========================

const backTop = document.querySelector(".back-top");

if(backTop){

    backTop.addEventListener("click", function(){

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}



// ===========================
// FOOTER LINKS
// ===========================

const footerLinks = document.querySelectorAll(".footer-box p");

footerLinks.forEach(function(link){

    link.addEventListener("click", function(){

        console.log(link.innerText + " clicked");

    });

});



// ===========================
// LANGUAGE BUTTON
// ===========================

const languageBtn = document.querySelector(".footer-bottom button");

if(languageBtn){

    languageBtn.addEventListener("click", function(){

        alert("Language selection");

    });

}