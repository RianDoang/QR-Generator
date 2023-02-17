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

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

