function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + "  " + " - " + "  " + m;

  document.getElementById("DisplayClock").innerText = time;
  document.getElementById("DisplayClock").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");
const generate = document.getElementById("qrcode");

// Button submit
const onGenerateSubmit = (e) => {
  e.preventDefault();

  clearUI();

  const url = document.getElementById("url").value;
  // const size = document.getElementById("size").value;

  // Validate url
  if (url === "") {
    alert("Masukan Teks atau URL di kolum putih");
    generate.classList.remove("borders");
  } else {
    showSpinner();
    generate.classList.remove("borders");
    setTimeout(() => {
      hideSpinner();
      generateQRCode(url);
      
      // Generate the save button after the qr code image src is ready
      setTimeout(() => {
        // generate.classList.add("borders");
        // Get save url
        const saveUrl = qr.querySelector("img").src;
        // Create save button
        createSaveBtn(saveUrl);
        generate.classList.add("borders");
      }, 50);
    }, 1000);
  }
};

// Generate QR code
const generateQRCode = (url) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: 180,
    height: 180,
  });
};

// Clear QR code and save button
const clearUI = () => {
  qr.innerHTML = "";
  const saveBtn = document.getElementById("save-link");
  if (saveBtn) {
    saveBtn.remove();
  }
};

// Show spinner
const showSpinner = () => {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "block";
};

// Hide spinner
const hideSpinner = () => {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "none";
};

// Create save button to download QR code as image
const createSaveBtn = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "save-link";
  link.classList = "btn-download";
  link.href = saveUrl;
  link.download = "QRCode Kamu";
  link.innerHTML = "Simpan QR Code";
  document.getElementById("qrcode").appendChild(link);
};

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);

function eraseText() {
  document.getElementById("url").value = "";
  // alert("Berhasil dihapus");
}
