window.onload = function () {
  alert("Seja bem-vindo ao meu primeiro site.");
};

const titulo = document.querySelector(".titulo");

titulo.addEventListener("mouseover", function () {
  titulo.style.color = "green";
});
titulo.addEventListener("mouseout", function () {
  titulo.style.color = "white";
});
