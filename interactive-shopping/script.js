const itemInput = document.getElementById("item-input");
const addButton = document.getElementById("add-button");
const shoppingList = document.querySelector("#shopping-list")

const editModal = document.getElementById("editModal")
const submitEdit = document.getElementById("submit-edit")
const editValue = document.getElementById("edit-input")



addButton.addEventListener("click", function(e) {
    e.preventDefault();
    if(!itemInput.value.trim()) 
        return;

    const newListItem = document.createElement("li");
    newListItem.innerHTML = itemInput.value
    

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    newListItem.append(removeBtn);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    newListItem.append(editBtn);

    shoppingList.appendChild(newListItem);
    itemInput.value = '';

    removeBtn.addEventListener("click", function() {
        newListItem.remove();
    });

    editBtn.addEventListener("click", function() {
        editedItem = newListItem;
        editValue.value = newListItem.firstChild.textContent;
        editModal.style.display = 'block';
        });

    });


    submitEdit.addEventListener("click", function() {
        if(editedItem) {
            const updatedText = document.createTextNode(editValue.value);
           editedItem.replaceChild(updatedText, editedItem.firstChild);
           editModal.style.display = 'none';        
    }

});



