let result = "";

const sectors = [1, 2, 3];
const lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arena = document.querySelector(".arena");
const board = document.querySelector(".board__selected-seat");

const markup = (classMark, dataMark, elemMark) =>
  `<div class="sector${classMark}" data-${dataMark}>${elemMark}</div>`;

const seatElem = lines
  .map((elem) => markup("__seat", `seat="${elem}"`, ""))
  .join("");
const lineElem = lines
  .map((elem) => markup("__line", `line="${elem}"`, seatElem))
  .join("");
const sectorElem = sectors
  .map((elem) => markup("", `sector="${elem}"`, lineElem))
  .join("");

arena.innerHTML = sectorElem;

const checkArena = (event) => {
  result += `S ${event.target.dataset.seat}`;

  board.textContent = result;
};
arena.addEventListener("click", checkArena);

const line = document.querySelectorAll(".sector__line");
const checkLine = (event) => {
  result = `L ${event.currentTarget.dataset.line} - `;
};
for (let ln of line) {
  ln.addEventListener("click", checkLine);
}

const sector = document.querySelectorAll(".sector");
const checkSector = (event) => {
  result = `S ${event.currentTarget.dataset.sector} - ` + result;
};
for (let sect of sector) {
  sect.addEventListener("click", checkSector);
}
