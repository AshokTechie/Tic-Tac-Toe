let boxes = document.querySelectorAll(".bx");
let reset = document.getElementById("rst");
let newbtn= document.querySelector("#nw")
let msgcont = document.querySelector(".msgcont")
let msg = document.querySelector("#msg");

const resetgame=()=>{
    turnO=true;
    enblbtn();
    msgcont.classList.add("hide");
};

let turnO=true;

const winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];
boxes.forEach((bx)=>{
bx.addEventListener("click",()=>{
console.log("clicked");

if(turnO){
bx.innerText="O";
turnO=false;
}else{
bx.innerText="X";
turnO=true;
}
bx.disabled=true;
checkWinner();
});
});

const dsblbtn=()=>{
    for(let bx of boxes){
        bx.disabled=true;
    }
}
const enblbtn=()=>{
    for(let bx of boxes){
        bx.disabled=false;
        bx.innerText='';
    }
}
const shoWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is  ${winner}`
    msgcont.classList.remove("hide")
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){

                shoWinner(pos1val);
            }
        }
    }
    let isBoardFull = true;
    for (let bx of boxes) {
        if (bx.innerText === "") {
            isBoardFull = false;
            break; // If any box is empty, the board is not full
        }
    }

    // If the board is full and no winner, declare a draw
    if (isBoardFull) {
        shoWinner("No one, it's a draw");
    }
}

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);


