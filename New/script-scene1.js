const lines = [
  "( after the hour of frost )",
  "parallel to her shadow i moved",
  "a small wing trembled above the earth",
  "on the waking day i will return",
  "**POPUP**",
  "the wind carries your outline back to me",
  "**FINAL**"
];

let i = 0;

const textEl = document.getElementById("dialogue-text");
const pill = document.querySelector(".dialogue-pill");
const finalMsg = document.getElementById("final-message");
const popupLayer = document.getElementById("popup-layer");

textEl.textContent = lines[0];

pill.addEventListener("click", () => {
  i++;

  if (i >= lines.length) return;

  if (lines[i] === "**POPUP**") {
    createPopup();
    return;
  }

  if (lines[i] === "**FINAL**") {
    pill.style.opacity = 0;
    setTimeout(() => finalMsg.style.opacity = 1, 300);

    finalMsg.addEventListener("click", () => {
      window.location.href = "scene2.html";
    });

    return;
  }

  fadeText(lines[i]);
});

function fadeText(t) {
  textEl.style.opacity = 0;
  setTimeout(() => {
    textEl.textContent = t;
    textEl.style.opacity = 1;
  }, 150);
}

function randomPos(max) {
  return Math.random() * max * 0.7;
}

function createPopup() {
  const win = document.createElement("div");
  win.className = "popup-window";

  const header = document.createElement("div");
  header.className = "popup-header";

  const icon = document.createElement("div");
  icon.className = "popup-icon";

  const url = document.createElement("div");
  url.className = "popup-url";
  url.textContent = "https://browser/";

  const dots = document.createElement("div");
  dots.className = "popup-dots";
  dots.textContent = "● ● ●";

  header.append(icon, url, dots);

  const body = document.createElement("div");
  body.className = "popup-body";

  const img = document.createElement("img");
  img.src = "picture/pop-up.gif";
  body.appendChild(img);

  win.append(header, body);

  win.style.left = randomPos(window.innerWidth) + "px";
  win.style.top = randomPos(window.innerHeight) + "px";

  popupLayer.appendChild(win);

  makeDraggable(win, header);
}

function makeDraggable(win, handle) {
  let drag = false, x = 0, y = 0, left = 0, top = 0;

  handle.addEventListener("mousedown", e => {
    drag = true;
    x = e.clientX;
    y = e.clientY;
    const r = win.getBoundingClientRect();
    left = r.left;
    top = r.top;
  });

  window.addEventListener("mousemove", e => {
    if (!drag) return;
    win.style.left = left + (e.clientX - x) + "px";
    win.style.top = top + (e.clientY - y) + "px";
  });

  window.addEventListener("mouseup", () => drag = false);
}
