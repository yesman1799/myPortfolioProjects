const inputField = document.getElementById("input-field")
const addButton = document.getElementById("add-button")
const shoppingList = document.getElementById("shopping-list")

addButton.addEventListener("click", function(){
    let inputValue = inputField.value
    shoppingList.innerHTML += `
        <li>${inputValue}</li>
    `
    
    console.log(inputField.value)
})