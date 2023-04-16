const btnChangeColor = document.querySelector("button.change-color");

btnChangeColor.addEventListener("click", () => {
  const colorRandom = getRandomHexColor();
  document.querySelector("span.color").innerText = colorRandom;
  document.querySelector("body").style.backgroundColor = colorRandom;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
