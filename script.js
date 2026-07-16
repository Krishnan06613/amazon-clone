// BANNER SECTION
var slider = document.getElementById("image-slider");

if (slider) {

    var imglist = slider.querySelectorAll("img");
    var rhtbtn = document.getElementById("right");
    var lftbtn = document.getElementById("left");

    var index = 0;
    var totalslides = imglist.length;

    function updateSlide() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    rhtbtn.addEventListener("click", function () {
        index = (index + 1) % totalslides;
        updateSlide();
    });

    lftbtn.addEventListener("click", function () {
        index = (index - 1 + totalslides) % totalslides;
        updateSlide();
    });

    setInterval(function () {
        index = (index + 1) % totalslides;
        updateSlide();
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