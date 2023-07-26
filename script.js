let qr = "https: //api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let imgBox = document.getElementById("img-box");
let qrImg = document.getElementById("qr-img");
let qr_text = document.getElementById("qr-text");
function generateQR() {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qr_text.value;
    imgBox.classList.add("show-img");
}