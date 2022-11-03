
const checkPlayerMeetsConditons = (boardNodes,targetPlayer) => {
    const currResult = []

    //winning conditons
    const winningConditons = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,8],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    boardNodes.forEach(({
        innerHTML: val
      }, i) => {
        if (val === targetPlayer) {
          currResult.push(i);
        }
      });

      let isWinner = false

      winningConditons.forEach((condition) => {
        const isMatched = condition.reduce((isMatched, currVal, i) => currResult[i] !== currVal ? false : isMatched, true)

        if (isMatched) {
            isWinner = true;
            return;
        }
      });
      return isWinner;
   }

   //check for winner
const checkWinner = () => {

    const fields = document.querySelectorAll(".field");
    
    const isOWinner = checkPlayerMeetsConditons(fields, "O");
    const isXWinner = checkPlayerMeetsConditons(fields, "X");
  
    if (isOWinner && isXWinner) { // when tie
      document.querySelector(".message").innerHTML = "Game Tie";
    } else if (isOWinner) {
      document.querySelector(".message").innerHTML = "O is Winner";
    } else if (isXWinner) {
      document.querySelector(".message").innerHTML = "X is Winner";
    }
  
  }

//gameboard object
const gameBoard = (() => {
   //create board array
    let board = []
    for (i=0; i<9; i++) {
        board.push("")
    }


    //add event listeners on each field that will mark field and change player's turn state
    const fields = document.querySelectorAll(".field") 
    const nextTurn = document.querySelector(".message")

   
    let turn = 0
    
    fields.forEach((field) => {
        field.addEventListener('click',handleClick,{once:true})

        function handleClick() {

            if (turn %= 2) {
              field.innerHTML = "O"
              field.classList.toggle("marker")
              nextTurn.innerHTML = "Player X's turn"
            } else {
              field.innerHTML = "X"
              field.classList.toggle("marker")
              nextTurn.innerHTML = "Player O's turn"
            }
      
            turn++
      
            checkWinner(); //check the winner

        }
      
    })

    //restart game
    const restart = document.getElementById("restart-button")

    restart.addEventListener("click",clickE)

    function clickE(){
      return location.reload(true)
    }

    return {
      board, 
    }
})()
