const buttons = document.querySelectorAll(".btn");
const message = ["WINNER", "NOT WINNER"];
let winnerNumber = Math.floor(Math.random() * 3);

for (let i = 0; i < buttons.length; ++i) {
  buttons[i].addEventListener("click", function onClick() {
    checkWinner(i);
  });
}
function checkWinner(index) {
  if (index === winnerNumber) {
    alert("Winner");
  } else {
    alert("Not Winner");
  }
}
document.querySelector(".number").addEventListener("click", function () {
  let value = document.querySelector(".input").value;
  let number = 1;
  for (let i = 0; i < value; ++i) {
    let btn = document.createElement("BUTTON");
    btn.innerHTML = `Button ${number}`;
    document.body.appendChild(btn);
    btn.addEventListener("click", function onClick() {
      checkWinner(i);
    });
    ++number;
  }
});
