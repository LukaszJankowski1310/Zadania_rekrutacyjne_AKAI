let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];

let win_game = false;



const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));
const turn_info = document.querySelector(".turn");
const reset_btn = document.querySelector(".reset");

displayTurn(turn)

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1 || classes.includes("board") || win_game ) return;
  console.log(target.classList);
  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[Math.floor(idx / 3)][idx % 3] = turn;
  checkWin();
  turn = turn === "x" ? "o" : "x";
  displayTurn(turn);
  displayBoard()
});


reset_btn.addEventListener("click", (e) => {
  reset();
});


function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  turn_info.textContent = `turn: ${turn}`;
}



function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (symbols[i][0] === turn && symbols[i][1] === turn && symbols[i][2] === turn ||
        symbols[0][i] === turn && symbols[1][i] === turn  && symbols[2][i] === turn ||
        symbols[0][0] === turn && symbols[1][1] === turn && symbols[2][2] === turn ||
        symbols[2][0] === turn && symbols[1][1] === turn && symbols[0][2] === turn) {
          alert(`wygrana ${turn}`)
          win_game = true  
          return
        }
  }
}

function displayBoard() {
  symbols.forEach(item => {
    console.log(item[0], item[1], item[2])
  })
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
function reset() {
  // 4. zresetuj stan gry
  symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
  turn = "x";
  win_game = false
  //tiles.forEach((item) =>  console.log(item));
  tiles.forEach((item) => {
    item.className = "tile";
  } )
  displayTurn(turn);

}
