let winningScore,
    guessNum,
    guessesLeft = 3,
    maxPrize = 10,
    maxPrizeCounter = 10,
    prize = 0,
    restartGame = true,
    range = 6;

if (confirm("Do you want to play a game?")) {
    while (guessesLeft !== 0 && restartGame) {
        winningScore = Number(Math.floor(Math.random() * range));
        guessNum = Number(
          prompt(
            `Enter the number from 0 to ${range - 1}
            Attempts left: ${guessesLeft}
            Total prize: ${prize}$
            Possible prize on current attempt: ${maxPrizeCounter}$`,
            "0"
          )
        );
        if (guessNum === winningScore && winningScore !== "") {
            if (guessesLeft === 3) {
              prize += maxPrize;
            } else if (guessesLeft === 2) {
              prize += Math.floor(maxPrize / 2);
            } else if (guessesLeft === 1) {
              prize += Math.floor(maxPrize / 4);
            }
            restartGame = confirm(
              `Congratulation! Your prize is: ${prize}$. Do you want to try again ?`
            );
        } else if (guessNum !== winningScore) {
            guessesLeft -= 1;
            maxPrizeCounter = Math.floor(maxPrizeCounter / 2);
            if (guessesLeft === 0) {
                alert(
                  `Thank you for a game. Your prize is: ${prize}$`
                );
                restartGame = confirm("Do you want to play again ?");
                if (!restartGame) {
                    break;
                } else {
                    range = 11;
                    prize = 0;
                    maxPrize = 10 * 3;
                    maxPrizeCounter = 10 * 3;
                    guessesLeft = 3;
                }
            }
        }
    }
} else {
    alert("You did not become a millionaire, but can.");
}
