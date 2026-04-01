function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener('click', () => {
  const spanColor = document.querySelector('.color');
  spanColor.textContent = getRandomHexColor();
  // color body
  document.body.style.backgroundColor = getRandomHexColor();
});
