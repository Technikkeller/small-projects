function addToList() {
  const task = document.getElementById("toDoList-Input").value;
  const myList = document.querySelector("#myList");
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  const deleteDiv = document.createElement("deleteDiv");
  deleteDiv.className = "removeItem";
  deleteDiv.onclick = function () {
    removeFromList(this);
  };
  deleteDiv.appendChild(document.createTextNode("X"));

  // Throw back an error message when Add is clicked on but the input is empty
  if (task == "") {
    alert("You need to enter a task");
  } else {
    // Pressing the add button should take the value from the input and add it into the UL list as a li
    myList.appendChild(taskDiv);
    taskDiv.appendChild(document.createTextNode(task));
    taskDiv.appendChild(deleteDiv);
    // document.getElementById("todoList-right").appendChild(span);
  }
}

// Pressing the X on items in the list removes it
function removeFromList(element) {
  element.parentElement.remove();
}
