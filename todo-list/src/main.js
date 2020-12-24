function addToList() {
  const task = document.getElementById("toDoList-Input").value;
  const myList = document.querySelector("#myList");
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.className = "removeItem";
  span.onclick = function () {
    removeFromList(this);
  };
  span.appendChild(document.createTextNode("(x)"));

  // Throw back an error message when Add is clicked on but the input is empty
  if (task == "") {
    alert("You need to enter a task");
  } else {
    // Pressing the add button should take the value from the input and add it into the UL list as a li
    li.appendChild(document.createTextNode(task));
    li.appendChild(span);
    myList.appendChild(li);
  }
}

// Pressing the X on items in the list removes it
function removeFromList(element) {
  element.parentElement.remove();
}
