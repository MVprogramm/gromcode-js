export function getTitle(elem) {
  const element = document.querySelector(elem);

  return element.textContent;
}

export function getDescription(elem) {
  const element = document.querySelector(elem);

  return element.innerText;
}

export function getPlans(elem) {
  const element = document.querySelector(elem);

  return element.innerHTML;
}

export function getGoal(elem) {
  const element = document.querySelector(elem);

  return element.outerHTML;
}
