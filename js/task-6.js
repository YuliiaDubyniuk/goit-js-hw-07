function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
  input.value = '';
});

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    return;
  }

  // remove existing boxes before creating new ones
  boxesContainer.innerHTML = '';

  const boxes = [];
  let boxSize = 30;

  // create boxes with increasing size and random colors
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.push(div);
    boxSize += 10;
  }

  boxesContainer.append(...boxes);
};

destroyBtn.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});