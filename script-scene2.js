const steps = [
  "she once told me this poem…",
  "**1**","**2**","**3**","**4**","**5**",
  "**NEXT**"
];

let s = 0;

const pill2 = document.querySelector(".dialogue-pill");
const text2 = document.getElementById("dialogue-text");

pill2.addEventListener("click", () => {
  s++;

  if (steps[s] === "**1**") { show("p1"); return; }
  if (steps[s] === "**2**") { show("p2"); return; }
  if (steps[s] === "**3**") { show("p3"); return; }
  if (steps[s] === "**4**") { show("p4"); return; }
  if (steps[s] === "**5**") { show("p5"); return; }

  if (steps[s] === "**NEXT**") {
    window.location.href = "scene3.html";
    return;
  }

  text2.textContent = steps[s];
});

function show(id) {
  document.getElementById(id).style.opacity = 1;
}
