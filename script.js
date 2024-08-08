const msg = document.querySelector(".msg");
let user1score = 0;
let user2score = 0;

const user_1_score = document.querySelector("#user-1-score")
const user_2_score = document.querySelector("#user-2-score")
const user_1_choices = document.querySelectorAll(".user-1-choice");

const genrateCompChoice= ()=>{
    const options= ["rock" , "paper" , "scissors"];
    const randomIdx  = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const gameDraw =()=>{
    msg.innerText="Game was Draw, Play Again";
    msg.style.color="black";
}

const showWinner = (userWin , user_1_choiceId , compChoice)=>{
    if(userWin){
        user1score++
        msg.innerText= `You Win! your ${user_1_choiceId} beats ${compChoice}`;
        msg.style.color="green";
        user_1_score.innerText=user1score;
    }else{
        user2score++
        msg.innerText=`You lose! ${compChoice} beats your ${user_1_choiceId}`;
        msg.style.color="red";
        user_2_score.innerText=user2score;
    }
}

const playGame = (user_1_choiceId)=>{
    const compChoice = genrateCompChoice();

    if(user_1_choiceId === compChoice){
        gameDraw();
    }else{
        let userWin = true;
        if(user_1_choiceId === "rock"){
            // paper scissors
            userWin = compChoice ==="paper" ? false : true;
        }else if(user_1_choiceId === "paper"){
            // scissors rock 
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , user_1_choiceId , compChoice) ;
        
    }
}

user_1_choices.forEach((choice)=>{
    const user_1_choiceId = choice.getAttribute("id");
    choice.addEventListener("click" , ()=>{
        playGame(user_1_choiceId);
    })
})