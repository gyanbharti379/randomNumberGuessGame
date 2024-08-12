 let randomNum = parseInt((Math.random()*100)+1);

 //---------------get data from fields --------------//
 const submitBtn = document.querySelector("#submit");
 const userInput = document.querySelector("#guessfield");
 const guessSlot = document.querySelector(".guesses");
 const remaining = document.querySelector(".lastResult");
 const loworHi = document.querySelector(".lowOrHigh");
 const startOver = document.querySelector(".resultParas");

 const p = document.querySelector("p");

 let preGuess = []
 let numGuess = 1

 let playGame = true;

 if (playGame){
    submitBtn.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        if(guess === "" || guess < 0 || isNaN(guess)){
            alert("Please give a valid number");
             
        }else{
            validateGuess(guess);
        }
        
    })
 }

 function validateGuess(guess){
    // --------check valid number -----------
    if(guess <1 ){
            alert("Please enter a number more than 1");
    }else if(guess >100){
            alert("Please enter a number less than 100");
    }else{
        preGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNum}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
 }

 function checkGuess(guess){
        if (guess === randomNum){
            displayMessage(`You guessed it right`);
            endGame();
        }else if(guess < randomNum){
            displayMessage(`Number is Too low`);
        }else if (guess > randomNum){
            displayMessage(`Number is Too High`);
        }
 }

 function displayMessage(message){
    loworHi.innerHTML = `<h2>${message}</h2>`;
 }

 function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
 }

 function newGame(){
   const newGameButton = document.querySelector('#newgame');
   newGameButton.addEventListener('click',function(e){
    randomNum = parseInt((Math.random()*100)+1);
    preGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
    loworHi.innerHTML = "";

   })

 }

 function endGame(){
    userInput.value = "";
    userInput.setAttribute("disabled","");
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame">Start New Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();

 }