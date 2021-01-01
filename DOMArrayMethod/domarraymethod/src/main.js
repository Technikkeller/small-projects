// Add user
const addUserButton = document.getElementById("add-user");
const doubleMoney = document.getElementById("double");

function retrieveUser() {
  fetch("https://randomuser.me/api", {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];
      addUserRow(user);
    });
}

function addUserRow(user) {
  const table = document.getElementById("userList");
  const userRow = document.createElement("tr");
  table.appendChild(userRow);
  const cell1 = userRow.insertCell(0);
  const cell2 = userRow.insertCell(1);

  function getWealth() {
    let maxDollars = 1500000;
    let randomnum = Math.floor(Math.random() * maxDollars) + 1;
    return randomnum.toLocaleString();
  }

  const randomWealthAmount = getWealth();
  cell2.style.textAlign = "right";
  cell2.classList.add("currentWealth");
  cell1.innerText = user.name.first + " " + user.name.last;
  cell2.innerText = `$${randomWealthAmount}`;
  console.log(user.name.first);
}

function cleanWealth(number) {
  let cleanWealth = number.replace(/\D/g, "");
  let currentWealth = Number(cleanWealth);
  return currentWealth;
}

function doubleWealth() {
  const currentWealthElements = document.getElementsByClassName(
    "currentWealth"
  );

  for (var i = 0; currentWealthElements[i]; i++) {
    let currentWealth = cleanWealth(currentWealthElements[i].innerHTML);
    let newWealth = currentWealth * 2;
    currentWealthElements[i].innerHTML = "$" + newWealth.toLocaleString();
  }
}

function showOnlyMillionaires() {
  const currentWealthElements = document.getElementsByClassName(
    "currentWealth"
  );
  const table = document.getElementById("userList");
  var tableRows = table.getElementsbyTagName("tr");
  var i = 0;
  var thisRow;
  for (i = 0; i < tableRows.length; i++) {
    thisRow = tableRows[i].getElementsbyTagName("td");
    if (cleanWealth(tableRows[i].innerHTML) < 1000000) {
    }
  }
}

addUserButton.addEventListener("click", retrieveUser);
doubleMoney.addEventListener("click", doubleWealth);
