let qr = "https: //api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let imgBox = document.getElementById("img-box");
let qrImg = document.getElementById("qr-img");
let qr_text = document.getElementById("qr-text");
function generateQR() {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qr_text.value;
    var expression =(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,});
    var regex = new RegExp(expression);
    var t = qr_text.value;
    if (t.match(regex)) {
        imgBox.classList.add("show-img");
    } else {
        alert("Enter Valid URL");
    }
}
