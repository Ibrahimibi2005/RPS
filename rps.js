let j = document.getElementById("J");
let k = document.getElementById("K");
let l = document.getElementById("L");
let p1 = document.getElementById("Player1");
let p2 = document.getElementById("Player2");
let result = document.getElementById("result");
let num = 0,val2=0,val1=0;

function jkl() {
    if (num === 1) {
        p1.setAttribute("src", "./fist.png");
        val1=1
    } else if (num === 2) {
        p1.setAttribute("src", "./hand-paper.png");
        val1=2
    } else if (num === 3) {
        p1.setAttribute("src", "./scissors.png"); 
        val1=3
    }
     if ( val1 === 3&& val2===3){
        result.innerHTML="Draw"
    }
    else if ( val1 === 2&& val2===2){
        result.innerHTML="Draw!"
    } 
     else if ( val1 === 1&& val2===1){
        result.innerHTML="Draw!"
    }
    else if ( val1 === 1&& val2===3){
        result.innerHTML="Computer Wins!"
    }else if ( val1 === 2&& val2===1){
        result.innerHTML="Computer Wins!"
    }
     else if ( val1 === 3&& val2===2){
        result.innerHTML="Computer Wins!"
    }
    //player 2 wins
    
    else if ( val1 === 1&& val2===2){
        result.innerHTML="You Won!"
    } else if ( val1 ===2 && val2===3){
        result.innerHTML="You Won!"
    }else if ( val1 === 3&& val2===1){
        result.innerHTML="You Won!"
    }

}

j.addEventListener("click", () => {
    p2.setAttribute("src", "./fist.png");
    num = Math.floor(Math.random() * 3) + 1;
    val2=1
    jkl();
});

k.addEventListener("click", () => {
    p2.setAttribute("src", "./hand-paper.png");
    num = Math.floor(Math.random() * 3) + 1;
    val2=2
    jkl();
});

l.addEventListener("click", () => {
    p2.setAttribute("src", "./scissors.png");
    num = Math.floor(Math.random() * 3) + 1;
    val2=3
    jkl();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "j") {
        p2.setAttribute("src", "./fist.png");
        val2=1
    } else if (e.key === "k") {
        p2.setAttribute("src", "./hand-paper.png");
        val2=2
    } else if (e.key === "l") {
        p2.setAttribute("src", "./scissors.png");
        val2=3
    } else {
        return; 
    }
    num = Math.floor(Math.random() * 3) + 1;
    jkl();
});
