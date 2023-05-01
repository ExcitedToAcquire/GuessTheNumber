//document.querySelector("#message").textContent="Correct Number";

let SN=Math.trunc(Math.random()*20)+1;
//document.querySelector("#message").textContent
let score=Number(document.querySelector("#score").textContent);
let highscore=document.querySelector("#Highscore").textContent

//document.querySelector("#secretNumber").textContent;



document.querySelector("#CheckButton").addEventListener('click', function(){
  let guess= Number(document.querySelector("#input").value);
  if(guess>0 && guess<21){
    if(guess===SN){
      document.querySelector("#message").textContent="Correct Number";
      document.querySelector("#secretNumber").textContent=SN;
      document.querySelector(".body").style.backgroundColor="#60b347";
      document.querySelector("#secretNumber").style.width="200px"
      if(score>=highscore){
        highscore=score;
        document.querySelector("#Highscore").textContent= highscore;
      }
    }
    else if(guess!==SN){
      if(score>0){
        document.querySelector("#message").textContent=(guess>SN)?"TOO HIGH":"TOO LOW";
        score--;
        document.querySelector("#score").textContent=score;
      }
      else{
        document.querySelector("#message").textContent="YOU LOSE THE GAME";
      }
    }
/*    else{
      document.querySelector("#message").textContent="TOO LOW";
      score--;
      document.querySelector("#score").textContent=score;
    }*/
  }
  else{
    document.querySelector("#message").textContent="Invalid Number"
  }
})

document.querySelector("#reset").addEventListener("click", function(){
  SN=Math.trunc(Math.random()*20)+1;
  document.querySelector("#score").textContent=20;
  score=20;
  document.querySelector("#message").textContent="Start Guessing...";
  document.querySelector("#input").value=" ";
  document.querySelector("#secretNumber").textContent="?";
  document.querySelector(".body").style.backgroundColor="dimgrey"; 
})


