// Add user
const addUserButton = document.getElementById("add-user");
const doubleMoney = document.getElementById("double");
const showMillionaires = document.getElementById("show-millionaires");
const sort = document.getElementById("sort");

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

function getWealth() {
  let maxDollars = 1500000;
  let randomnum = Math.floor(Math.random() * maxDollars) + 1;
  return randomnum.toLocaleString();
}

function addUserRow({ name: { first: firstName, last: lastName } }) {
  const userRow = document.querySelector("table#userList > tbody").insertRow(0);
  userRow.insertCell(0).innerText = `${firstName} ${lastName}`;
  userRow.insertCell(1).innerText = `$${getWealth()}`;
}

function cleanWealth(number) {
  let cleanWealth = number.replace(/[^0-9.]/g, "");
  let currentWealth = Number(cleanWealth);
  return currentWealth;
}

function doubleWealth() {
  const elements = Array.from(
    document.querySelectorAll("table#userList > tbody > tr > td:nth-child(2)")
  );
  elements.forEach((row) => {
    //use textContent instead of innerText to get contents whenever you can because it's less performance-heavy
    const cleanNum = cleanWealth(row.textContent);
    const double = cleanNum * 2;
    row.innerText = "$" + double.toLocaleString();
  });
}

function showOnlyMillionaires() {
  Array.from(document.querySelectorAll("table#userList > tbody > tr")).forEach(
    (row) => {
      if (cleanWealth(row.cells[1].innerText) < 1000000) row.remove();
    }
  );
}

function sortByWealth() {
  const tbody = document.querySelector("table#userList > tbody");
  const unsorted = Array.from(tbody.children);
  const sorted = unsorted
    .map((el) => ({ el, wealth: cleanWealth(el.children[1].textContent) }))
    .sort(({ wealth: a }, { wealth: b }) => (a > b ? 1 : -1)) // swap -1 and 1 if you want the inverse sort direction
    .map(({ el }) => el);
  unsorted.forEach((child) => child.remove());
  sorted.forEach((tr) => tbody.appendChild(tr));
}

showMillionaires.addEventListener("click", showOnlyMillionaires);
addUserButton.addEventListener("click", retrieveUser);
doubleMoney.addEventListener("click", doubleWealth);
sort.addEventListener("click", sortByWealth);
