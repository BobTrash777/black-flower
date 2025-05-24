// Transição suave ao clicar no botão
document.querySelector('.btn').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.main').classList.add('visible');
});

// Pop-up de erro fake
function showPopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");
  popup.classList.add("show");
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("show");
  popup.classList.add("hidden");
}