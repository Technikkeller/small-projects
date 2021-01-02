// Add user
const addUserButton = document.getElementById("add-user");
const doubleMoney = document.getElementById("double");
const showMillionaires = document.getElementById("show-millionaires");

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
  let cleanWealth = number.replace(/[^a-zA-Z0-9]/g, "");
  let currentWealth = Number(cleanWealth);
  console.log(currentWealth);
  return currentWealth;
}

function doubleWealth() {
  const elements = [...document.getElementsByClassName("currentWealth")];
  elements.forEach((row) => {
    const cleanNum = cleanWealth(row.innerText);
    const double = cleanNum * 2;
    row.innerText = "$" + double.toLocaleString();
  });
}

function showOnlyMillionaires() {
  [...document.getElementsByTagName("tr")].forEach((row) => {
    if (cleanWealth(row.cells[1].innerText) < 1000000) row.remove();
  });
}

showMillionaires.addEventListener("click", showOnlyMillionaires);
addUserButton.addEventListener("click", retrieveUser);
doubleMoney.addEventListener("click", doubleWealth);
