let gameSeq=[];
let userSeq=[];
let highScore=[];


let started=false;
let level=0;
let h3= document.querySelector("h3");
let h1=document.createElement("h1");
let btns=["red","yellow","green","purple"];
document.addEventListener("keypress",()=>{

    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});


function gameflash(randombtn){
   
    randombtn.classList.add("flash");

   
    setTimeout(()=>{
        randombtn.classList.remove("flash");
    },250);
    

}
function userflashButton(randombtn){
   
    randombtn.classList.add("userFlash");

   
    setTimeout(()=>{
        randombtn.classList.remove("userFlash");
    },250);
    

}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`level ${level}`;
     
    //random button choose
    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameflash(randomBtn);

}

let max=0;
function checkAns(idx){
    // console.log(`current level is ${level}`);

if(userSeq[idx]===gameSeq[idx]){
    // console.log("same value");
    if(userSeq.length==gameSeq.length){
       setTimeout(levelUp,1000);
    }

}else{

    h3.innerHTML=`game over! your score was <b>${level}</b> press any key to restart `;
    highScore.push(level);
   
    highScore.forEach((a)=>{ if(max<a){max=a; } });
    console.log(`this is max ${max}`);
    h1.innerText=`max is ${max}`;
    document.querySelector("body").appendChild(h1);
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(()=>{
        document.querySelector("body").style.backgroundColor="white";

    },1000);
       
    reset();
   
}



}




function btnPress(){
    console.log(this);
    let btn=this;
     userflashButton(btn);
      userColor=btn.getAttribute("id");
      console.log(userColor);
      userSeq.push(userColor);
      
    checkAns(userSeq.length-1);

}


let allBtns=document.querySelectorAll(".btn");
console.log(allBtns)
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
   
}