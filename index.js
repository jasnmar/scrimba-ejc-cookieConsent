
const modalEl = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")



setTimeout(function() {
    
    modalEl.style.display = "inline";
    console.log("Modal Opened!")
}, 1500)



modalCloseBtn.addEventListener("click", function() {
    modalEl.style.display = "none"
})



consentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    loadingDiv()
    console.log("Form Submitted")
    const paragraphText = document.getElementById("upload-text")
    setTimeout(function() {
        paragraphText.textContent = "Making the sale..."
        
    }, 1500)
})

function loadingDiv() {
    const mainDiv = document.createElement('div')
    mainDiv.classList.add("modal-inner-loading")
    const loadingImage = document.createElement('img')
    loadingImage.src = "./images/loading.svg"
    loadingImage.classList.add("loading")
    mainDiv.appendChild(loadingImage)
    const paragraphText = document.createElement('p')
    paragraphText.textContent = "Uploading your data to the dark web..."
    paragraphText.id = "upload-text"
    mainDiv.appendChild(paragraphText)
    modalText.innerHTML = "";
    modalText.appendChild(mainDiv)

}

/*
<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>
*/