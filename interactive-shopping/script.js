const itemInput = document.getElementById("item-input");

const addButton = document.getElementById("add-button");
const shoppingList = document.querySelector("#shopping-list")

addButton.addEventListener("click", function(e) {
    const newListItem = document.createElement("li");
    newListItem.innerHTML = itemInput.value
    e.preventDefault();
    shoppingList.appendChild(newListItem);
})
