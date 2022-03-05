export function getItemsList() {
  const itemsList = document.querySelectorAll(".technology");

  console.dir(itemsList);

  return itemsList;
}

export function getItemsArray() {
  const itemsArray = document.querySelectorAll(".tool");

  console.dir(Array.from(itemsArray));

  return Array.from(itemsArray);
}
