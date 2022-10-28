//player factory function
const createPlayer = (name,marker) => {
    return {name,marker}
}

//gameboard object
const gameBoard = (() => {
   //create board array
    let board = []
    for (i=0; i<9; i++) {
        board.push("")
    }

    //add event listeners on each field that will mark field
    const fields = document.querySelectorAll(".field") 
    let turn = 0
    fields.forEach((field) => {
        field.addEventListener('click', () => {
            if(turn %= 2) {
                field.innerHTML = "O"}
                else {
                field.innerHTML = "X"}
                turn ++
            
        })
    })

    return {
        board
    }
})()

// game object
const game = (() => {

    //declare players
    const playerOne = createPlayer("player x", "x")
    const playerTwo = createPlayer("player o", "o")

    //starting point
    let activePlayer = playerOne
    let winnerDeclared = false
    let remainingSpots = 9

    //selectors
    let subtext

    
}
)()