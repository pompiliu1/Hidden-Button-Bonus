const buttons = document.querySelectorAll(".btn");
const message = ["WINNER", "NOT WINNER"];
let winnerNumber = Math.floor(Math.random() * 3);

function addEvent(btn, index) {
  btn.addEventListener("click", function onClick() {
    checkWinner(index);
  });
}
function initGame() {
  for (let i = 0; i < buttons.length; ++i) {
    addEvent(buttons[i], i);
  }
}
initGame();
function checkWinner(index) {
  if (index === winnerNumber) {
    alert("Winner");
  } else {
    alert("Not Winner");
  }
}
function increase() {
  let value = document.querySelector(".input").value;
  let number = 1;
  for (let i = 0; i < value; ++i) {
    let btn = document.createElement("BUTTON");
    btn.innerHTML = `Button ${number}`;
    document.body.appendChild(btn);
    addEvent(btn, i);
    ++number;
  }
}
