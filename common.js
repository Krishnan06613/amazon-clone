var cartoption = document.getElementById("cart")
var storeoption = document.querySelector(".stored")

var count = 0

cartoption?.addEventListener("click", function (event) {
    event.preventDefault()
    count++
    storeoption.textContent = count
})

var buy = document.getElementById("buy")
buy.addEventListener("click", () => {
    window.location.href = "sign.html"
})