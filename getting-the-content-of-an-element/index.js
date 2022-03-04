function getTitle(elem) {
  const element = document.querySelector(elem);

  return element.textContent;
}

function getDescription(elem) {
  const element = document.querySelector(elem);

  return element.innerText;
}

function getPlans(elem) {
  const element = document.querySelector(elem);

  return element.innerHTML;
}

function getGoal(elem) {
  const element = document.querySelector(elem);

  return element.outerHTML;
}

console.log(getTitle(".title"));
console.log(getDescription(".about"));
console.log(getPlans(".plans"));
console.log(getGoal(".goal"));
