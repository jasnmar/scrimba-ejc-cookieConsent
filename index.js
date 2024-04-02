
const modalEl = document.getElementById("modal")

setTimeout(function() {
    
    modalEl.style.display = "inline";
    console.log("Modal Opened!")
}, 1500)

const modalCloseBtn = document.getElementById("modal-close-btn")

modalCloseBtn.addEventListener("click", function() {
    modalEl.style.display = "none"
})

const consentForm = document.getElementById("consent-form")

consentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form Submitted")
})