setTimeout(()=>{ document.getElementById("g1").style.opacity = 1; }, 500);
setTimeout(()=>{ document.getElementById("g2").style.opacity = 1; }, 900);

document.getElementById("g1").addEventListener("click", () => {
  alert("you chose graves — continue story here.");
});

document.getElementById("g2").addEventListener("click", () => {
  alert("you chose gates — continue story here.");
});
