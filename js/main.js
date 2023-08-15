let squareItems = document.querySelectorAll(".square");
let info=document.querySelector(".info");
let boardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
let currentTurn="X";
let gameOver=false;
squareItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (gameOver)return;
    let value=item.getAttribute("value");
    let index=value-1

    if(boardArray[index]=="X" || boardArray[index]=="O")return;
    // FILLING THE VALUE VIVUALY
    let squareContent=document.querySelector(`.square[value="${value}"]`)
    squareContent.innerHTML=currentTurn
    
    // FILLING THE VALUE IN ARRAY
    boardArray[index]=currentTurn
    console.log(boardArray)
    determineBoard()
    if(currentTurn=="X"){ 
        currentTurn="O"
    }
    else{
        currentTurn="X"
    }
    info.innerText=`${currentTurn} turn`;
  });
  function determineBoard(){
    let winner=currentTurn=="O" ? "O" : "X"

    if(
        (boardArray[0]==boardArray[1] && boardArray[1]==boardArray[2]) ||
        (boardArray[0]==boardArray[3] && boardArray[3]==boardArray[6]) ||
        (boardArray[6]==boardArray[7] && boardArray[7]==boardArray[8]) ||
        (boardArray[1]==boardArray[4] && boardArray[4]==boardArray[7]) ||
        (boardArray[2]==boardArray[5] && boardArray[5]==boardArray[8]) ||
        (boardArray[3]==boardArray[4] && boardArray[4]==boardArray[5]) ||
        (boardArray[2]==boardArray[4] && boardArray[4]==boardArray[6]) ||
        (boardArray[0]==boardArray[4] && boardArray[4]==boardArray[8]) 
        )
        {
            gameOver=true
          alert(`${winner} Won !`)

    }
    let isDraw=true; //تعادل
    boardArray.forEach((item)=>{
        if(item !="X" && item !="O"){
            isDraw=false;
        }
    })
    if(isDraw){
        gameOver=true;
        alert("Draw => تعادل")
    }
  }
 
});
let resetBtn=document.querySelector(".resetBtn");
resetBtn.addEventListener("click",(e)=>{
    squareItems.forEach((item) => {
      item.innerHTML=""
    })
    boardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    gameOver=false;
    currentTurn="X"
    info.innerText=`${currentTurn} turn`;
 
})