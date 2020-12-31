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
    let maxDollars = 100000000;
    let randomnum = Math.floor(Math.random() * maxDollars);
    return randomnum.toLocaleString();
  }

  const randomWealthAmount = getWealth();
  cell2.style.textAlign = "right";
  cell2.classList.add("currentWealth");
  cell1.innerText = user.name.first + " " + user.name.last;
  cell2.innerText = `$${randomWealthAmount}`;
  console.log(user.name.first);
}

function doubleWealth() {
  const getCurrentWealth = document.querySelectorAll("currentWealth");

  // document.querySelectorAll("currentWealth").innerText =
  Number(number.replace(/[^0-9\.-]+/g, ""));
  getCurrentWealth.forEach(number);
}

addUserButton.addEventListener("click", retrieveUser);
doubleMoney.addEventListener("click", doubleWealth);
