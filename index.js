
const modalEl = document.getElementById("modal")

setTimeout(function() {
    
    modalEl.style.display = "inline";
    console.log("Modal Opened!")
}, 1500)

const modalCloseBtn = document.getElementById("modal-close-btn")

modalCloseBtn.addEventListener("click", function() {
    modalEl.style.display = "none"
})