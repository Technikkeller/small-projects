function retrieveTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString("en-US");
  document.getElementById("currentTime").innerHTML = currentTime;
  setInterval(retrieveTime, 1000);
}
