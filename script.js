const botao = document.getElementById("playMusic");
const musica = document.getElementById("musica");

botao.addEventListener("click", () => {
    musica.play();
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

musicButton.addEventListener("click", () => {
  alert("Aqui você pode colocar uma música especial depois, usando uma tag <audio> no HTML. Por enquanto, fica como um botão simbólico da surpresa ♡");
});
