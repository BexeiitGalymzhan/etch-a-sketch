const container = document.querySelector(".container");

const sizeBtn = document.querySelector(".size");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }
}

sizeBtn.addEventListener("click", () => {
  let size;
  do {
    size = prompt("Enter size of the grid(max: 100)");
  } while (size > 100 || size <= 0 || isNaN(size));

  container.innerHTML = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      const dim = 480 / size;
      div.style.width = `${dim}px`;
      div.style.height = `${dim}px`;
      container.appendChild(div);
    }
  }
});

function randomColor() {
  const color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;

  return color;
}

let isMouseDown = false;

document.body.addEventListener("mousedown", () => {
  isMouseDown = true;
});

document.body.addEventListener("mouseup", () => {
  isMouseDown = false;
});

container.addEventListener("mouseover", (event) => {
  if (isMouseDown && event.target !== container) {
    event.target.style.backgroundColor = randomColor();
  }
});

// container.addEventListener("mousedown", (event) => {
//   event.target.style.backgroundColor = "red";
// });
