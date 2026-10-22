const itemInput = document.getElementById("item-input");

const addButton = document.getElementById("add-button");
const shoppingList = document.querySelector("#shopping-list")

const editModal = document.getElementById("editModal")
const submitEdit = document.getElementById("submit-edit")


addButton.addEventListener("click", function(e) {
    const newListItem = document.createElement("li");
    newListItem.innerHTML = itemInput.value
    e.preventDefault();
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    newListItem.append(removeBtn);
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    newListItem.append(editBtn);
    shoppingList.appendChild(newListItem);

    removeBtn.addEventListener("click", function() {
        newListItem.remove();
    })

    editBtn.addEventListener("click", function() {
        editModal.style.display = 'block';

    })

    const editValue = document.getElementById("edit-input")

    submitEdit.addEventListener("click", function() {
        newListItem.textContent = editValue;
        editModal.style.display = 'none';

    })

})



