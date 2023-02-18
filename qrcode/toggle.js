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

const textEl = document.querySelector("#data");
const sizeEl = document.querySelector("#size");
const logoEl = document.querySelector("#logo");
const clearEl = document.querySelector("#clear");
const marginEl = document.querySelector("#margin");
const dotModeEl = document.querySelector("#dot");
const dotColorEl1 = document.querySelector("#dot-color-1");
const dotColorEl2 = document.querySelector("#dot-color-2");
const bgEl = document.querySelector("#bg-color");
const dlEl = document.querySelector("#btn-dl");

let op = {
  width: 100,
  height: 100,
  type: "png",
  data: textEl.value,
  image: "",
  dotsOptions: {
    color: "#4267b2",
    type: "rounded",
    gradient: {
      type: "linear",
      colorStops: [
        {
          offset: 0,
          color: "#000000",
        },
        {
          offset: 1,
          color: "#000",
        },
      ],
    },
  },
  backgroundOptions: {
    color: "#fff",
  },
};

render();

sizeEl.addEventListener("input", (e) => {
  op.width = e.target.value * 10;
  op.height = e.target.value * 10;
  render();
});

textEl.addEventListener("keyup", (e) => {
  op.data = e.target.value;
  render();
});

marginEl.addEventListener("input", (e) => {
  op.imageOptions = { margin: e.target.value };
  render();
});

dotModeEl.addEventListener("change", (e) => {
  op.dotsOptions.type = e.target.value;
  render();
});

dotColorEl1.addEventListener("input", (e) => {
  op.dotsOptions.gradient.colorStops[0].color = e.target.value;
  render();
});

dotColorEl2.addEventListener("input", (e) => {
  op.dotsOptions.gradient.colorStops[1].color = e.target.value;
  render();
});

bgEl.addEventListener("input", (e) => {
  op.backgroundOptions.color = e.target.value;
  render();
});

var qrCode;
function render() {
  qrCode = new QRCodeStyling(op);
  let canvasEl = document.querySelector("#canvas");
  canvasEl.innerHTML = "";
  qrCode.append(canvasEl);
  canvasEl.nextElementSibling.innerHTML = `${op.width}px x ${op.height}px`;
}

function browse() {
  logoEl.click();
}

logoEl.addEventListener("change", (e) => {
  let file = e.target.files[0];
  let reader = new FileReader();
  reader.onload = () => {
    op.image = reader.result;
    render();
  };
  reader.readAsDataURL(file);
});

clearEl.addEventListener("click", (e) => {
  delete op.image;
  render();
});

dlEl.addEventListener("click", (e) => {
  qrCode.download({ name: "QR Code kamu", extenstion: "svg" });
});
