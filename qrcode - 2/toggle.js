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

// let imgBox = document.getElementById("imgBox");
// let qrImage = document.getElementById("qrImage");
// let qrText = document.getElementById("qrText");
// let btnDl = document.querySelector("#btn-download");

// function generateQR() {
//   if (qrText.value.length > 0) {
//     qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
//     imgBox.classList.add("show-img");
//     btnDl.classList.add("show-btn");
//   } else {
//     qrText.classList.add("error");
//     setTimeout(() => {
//       qrText.classList.remove("error");
//     }, 1000);
//   }
// }

// btnDl.addEventListener("click", (e) => {
//   qrImage.download({ name: "QR Code kamu", extenstion: "png" });
// });

// function saveBtn() {
//   qrCode = new QRCodeStyling(op);
//   let canvasEl = document.querySelector("#qrImage");
//   canvasEl.innerHTML = "";
//   qrCode.append(canvasEl);
//   canvasEl.nextElementSibling.innerHTML = `${op.width}px x ${op.height}px`;
// }

// btnDl.addEventListener("click", (e) => {
//   qrImage.download({ name: "QR Code kamu", extenstion: "png" });
// });

const form = document.querySelector(".colm");
const qr = document.querySelector("#qrImage");
const imgBox = document.querySelector("#imgBox");
const qrText = document.querySelector("#qrText");
const btnDl = document.querySelector("#btn-download");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.classList.add("show-img");
    btnDl.classList.add("show-btn");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

// const createSaveBtn = (saveUrl) => {
//   const link = document.createElement("a");
//   link.id = "save-link";
//   link.classList = "cs";
//   link.href = saveUrl;
//   link.download = "qrcode";
//   link.innerHTML = "Save Image";
//   document.getElementById("generated").appendChild(link);
// };

// form.addEventListener("submit", generateQR);
