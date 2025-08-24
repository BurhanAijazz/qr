const qrImg = document.getElementById("qr-img");
const qrText = document.getElementById("qr-text");
const imgBox = document.getElementById("img-box");
const downloadBtn = document.getElementById("download-btn");
const copyBtn = document.getElementById("copy-btn");
const themeToggle = document.getElementById("theme-toggle");

function generateQR() {
    const text = qrText.value.trim();

    if (text.length > 0) {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;
        imgBox.classList.add("show-img");
        downloadBtn.style.display = "block";
        copyBtn.style.display = "block";
    } else {
        imgBox.classList.remove("show-img");
        downloadBtn.style.display = "none";
        copyBtn.style.display = "none";
    }
}

// Download QR
downloadBtn.addEventListener("click", async () => {
    try {
        const response = await fetch(qrImg.src);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "qr-code.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (err) {
        alert("Failed to download QR code");
    }
});

// Copy Link
copyBtn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(qrImg.src);
        copyBtn.innerHTML = "✅ Copied!";
        setTimeout(() => copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy Link', 2000);
    } catch (err) {
        alert("Failed to copy link");
    }
});

// Theme Toggle
function setTheme(dark) {
    if (dark) {
        document.body.classList.add("dark");
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem("theme", "light");
    }
}

// Apply saved theme
setTheme(localStorage.getItem("theme") === "dark");

themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");
    setTheme(!isDark);
});
