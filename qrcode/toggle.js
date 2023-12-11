// function showTime() {
//   var date = new Date();
//   var h = date.getHours();
//   var m = date.getMinutes();
//   var s = date.getSeconds();
//   var session = "AM";

//   if (h == 0) {
//     h = 12;
//   }
//   if (h > 12) {
//     h = h - 12;
//     session = "PM";
//   }

//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;

//   var time = h + "  " + " - " + "  " + m;

//   document.getElementById("DisplayClock").innerText = time;
//   document.getElementById("DisplayClock").textContent = time;

//   setTimeout(showTime, 1000);
// }

// showTime();

const textEl = document.querySelector("#data");
const sizeEl = document.querySelector("#size");
const logoEl = document.querySelector("#logo");
const logoA = document.querySelector(".bi-file-earmark-arrow-up-fill");
const clearEl = document.querySelector("#clear");
const marginEl = document.querySelector("#margin");
const dotModeEl = document.querySelector("#dot");
const dotColorEl1 = document.querySelector("#dot-color-1");
const dotColorEl2 = document.querySelector("#dot-color-2");
const bgEl = document.querySelector("#bg-color");
const dlEl = document.querySelector("#btn-dl");

logoA.addEventListener("click", function () {
  marginEl.classList.remove("cursorNone");
  marginEl.removeAttribute("disabled");
  marginEl.classList.remove("gray");
  marginEl.classList.add("white");
});

clearEl.addEventListener("click", function () {
  marginEl.classList.add("cursorNone");
  marginEl.setAttribute("disabled", "disabled");
  marginEl.classList.add("gray");
  marginEl.classList.remove("white");
});

// if (textEl.addEventListener) {
//   textEl.addEventListener(
//     "input",
//     function () {
//       textEl.classList.remove("cursorNone");
//       textEl.removeAttribute("disabled");
//     },
//     false
//   );
// } else if (textEl.attachEvent) {
//   textEl.attachEvent("onpropertychange", function () {
//     sizeEl.classList.add("cursorNone");
//     sizeEl.setAttribute("disabled", "disabled");
//   });
// }

// textEl.addEventListener("onchange", function () {
//   if ("input") {
//     sizeEl.classList.remove("cursorNone");
//     sizeEl.removeAttribute("disabled");
//   } else {
//     sizeEl.classList.add("cursorNone");
//     sizeEl.setAttribute("disabled", "disabled");
//   }
// });

let op = {
  width: 110,
  height: 110,
  type: "jpg",
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

// render();

sizeEl.addEventListener("input", (e) => {
  op.width = e.target.value * 5;
  op.height = e.target.value * 5;
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
  qrCode.download({ name: "© @rynsyy_", extenstion: "jpg, svg, png, jpeg" });
});

// Hamburger menu
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("show");
});

// Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.remove("show");
  }
});
