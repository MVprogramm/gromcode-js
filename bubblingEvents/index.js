const div = document.querySelector(".rect_div");
const p = document.querySelector(".rect_p");
const span = document.querySelector(".rect_span");

const eventListElem = document.querySelector(".events-list");

const clear = document.querySelector(".clear-btn");
const remove = document.querySelector(".remove-handlers-btn");
const attach = document.querySelector(".attach-handlers-btn");

const logTarget = (text, color) => {
  eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const divTargetGreen = logTarget.bind(null, "DIV", "green");
const pTargetGreen = logTarget.bind(null, "P", "green");
const spanTargetGreen = logTarget.bind(null, "SPAN", "green");

const divTargetGrey = logTarget.bind(null, "DIV", "grey");
const pTargetGrey = logTarget.bind(null, "P", "grey");
const spanTargetGrey = logTarget.bind(null, "SPAN", "grey");

div.addEventListener("click", divTargetGreen);
p.addEventListener("click", pTargetGreen);
span.addEventListener("click", spanTargetGreen);

div.addEventListener("click", divTargetGrey, true);
p.addEventListener("click", pTargetGrey, true);
span.addEventListener("click", spanTargetGrey, true);

clear.addEventListener("click", () => {
  eventListElem.innerHTML = "";
});

remove.addEventListener("click", () => {
  div.removeEventListener("click", divTargetGreen);
  p.removeEventListener("click", pTargetGreen);
  span.removeEventListener("click", spanTargetGreen);

  div.removeEventListener("click", divTargetGrey, true);
  p.removeEventListener("click", pTargetGrey, true);
  span.removeEventListener("click", spanTargetGrey, true);
});

attach.addEventListener("click", () => {
  div.addEventListener("click", divTargetGreen);
  p.addEventListener("click", pTargetGreen);
  span.addEventListener("click", spanTargetGreen);

  div.addEventListener("click", divTargetGrey, true);
  p.addEventListener("click", pTargetGrey, true);
  span.addEventListener("click", spanTargetGrey, true);
});
