var cartoption = document.getElementById("cart");
var storeoption = document.querySelector(".stored");

// Load saved count (or 0 if nothing saved yet)
var count = Number(localStorage.getItem("cartCount")) || 0;

if (storeoption) {
    storeoption.textContent = count;
}

cartoption?.addEventListener("click", function (event) {
    event.preventDefault();
    count++;
    storeoption.textContent = count;
    localStorage.setItem("cartCount", count);   // save so index.html can read it
});


var buy = document.getElementById("buy")
buy.addEventListener("click", () => {
    window.location.href = "sign.html"
})