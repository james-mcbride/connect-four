var windowWidth= window.innerWidth
var centerNewGame=(windowWidth-754)/2
$("#new-game").css("left", centerNewGame)
var centerTurnTracker=(windowWidth-178)/2
 $("#turn-tracker").css("left", centerTurnTracker )

//will check to see if computer has winning move. This will have to be executed before checking to see if player has winning move
//that needs to be blocked
function computerWinningMove (board){
    for (let i=0; i< board.length; i++){
        for (let j=0; j<board[i].length; j++){
            //will only consider move if it is a valid move.
            let currentRow=i;
            let currentColumn=j;
            let currentTotal=0;
            if (board[i][j]==="-"&&(i===5 || board[i+1][j]!=="-" )){

                //first will check number of vertical streak.
                if (i<5) {
                    while (board[i + 1][j] === "Y") {
                        currentTotal++
                        if (i<4){
                            i++;
                        } else{
                            break;
                        }
                    }
                }
                if(currentTotal===3){
                    return [currentRow,currentColumn]
                } else{
                    currentTotal=0;
                    i=currentRow;
                }

                //next, will check number of horizontal streak.

                //will check total to the right first.
                if (j<6) {
                    while (board[i][j + 1] === "Y") {
                        currentTotal++
                        if (j<5) {
                            j++;
                        } else{
                            break;
                        }
                    }
                }
                j=currentColumn;
                //and then check total to the left.
                if (j>0) {
                    while (board[i][j - 1] === "Y") {
                        currentTotal++
                        if (j>1) {
                            j--;
                        } else{
                            break;
                        }
                    }
                }
                if(currentTotal===3){
                    return [currentRow,currentColumn]
                } else{
                    currentTotal=0;
                    j=currentColumn
                }

                //next will check downwards diagonal
                //first will check to the right
                if (i>0 && j<6) {
                    while (board[i - 1][j + 1] === "Y") {
                        currentTotal++;
                        if (i>1 && j<5) {
                            j++;
                            i--;
                        } else{
                            break;
                        }
                    }
                }
                j=currentColumn;
                i=currentRow;
                //and then check total to the left.
                if (i<5&& j>0) {
                    while (board[i + 1][j - 1] === "Y") {
                        currentTotal++
                        if (i<4 && j>1) {
                            i++;
                            j--;
                        } else{
                            break;
                        }
                    }
                }
                if(currentTotal===3){
                    return [currentRow,currentColumn]
                } else{
                    currentTotal=0;
                    i=currentRow
                    j=currentColumn
                }

                //next will check upwards diagonal
                //first will check to the right
                if (i<5 && j<6) {
                    while (board[i + 1][j + 1] === "Y") {
                        currentTotal++;
                        if (i<4 && j<5) {
                            j++;
                            i++;
                        } else{
                            break;
                        }
                    }
                }
                j=currentColumn;
                i=currentRow;
                //and then check total to the left.
                if (i>0 && j>0) {
                    while (board[i - 1][j - 1] === "Y") {
                        currentTotal++
                        if (i>1 && j>1) {
                            i--;
                            j--;
                        } else{
                            break;
                        }
                    }
                }
                if(currentTotal===3){
                    return [currentRow,currentColumn]
                } else{
                    currentTotal=0;
                    i=currentRow
                    j=currentColumn
                }

            }
        }
    }
}



//will check to see if player has a three streak that needs to be blocked
function blockPlayersWinningMove (board){
    for (let i=0; i< board.length; i++){
        for (let j=0; j<board[i].length; j++){
            //will only consider move if it is a valid move.
            let currentRow=i;
            let currentColumn=j;
            let currentTotal=0;
            if (board[i][j]==="-"&&(i===5 || board[i+1][j]!=="-" )){

                //first will check number of vertical streak.
                if (i<5) {
                    while (board[i + 1][j] === "R") {
                        currentTotal++
                        if (i<4){
                            i++;
                        } else{
                            break;
                        }
                    }
                }
                if(currentTotal===3){
                    return [currentRow,currentColumn]
                } else{
                    currentTotal=0;
                    i=currentRow;
                }

                //next, will check number of horizontal streak.

                //will check total to the right first.
                if (j<6) {
                    while (board[i][j + 1] === "R") {
                        currentTotal++
                        if (j<5) {
                            j++;
                        } else{
                            break;
                        }
                    }
                }
                j=currentColumn;
                //and then check total to the left.
                if (j>0) {
                    while (board[i][j - 1] === "R") {
                        currentTotal++
                        if (j>1) {
                            j--;
                        } else{
                            break;
                        }
                    }
                }
                if(currentTotal===3){
                    return [currentRow,currentColumn]
                } else{
                    currentTotal=0;
                    j=currentColumn
                }

                //next will check downwards diagonal
                //first will check to the right
                if (i>0 && j<6) {
                    while (board[i - 1][j + 1] === "R") {
                        currentTotal++;
                        if (i>1 && j<5) {
                            j++;
                            i--;
                        } else{
                            break;
                        }
                    }
                }
                j=currentColumn;
                i=currentRow;
                //and then check total to the left.
                if (i<5&& j>0) {
                    while (board[i + 1][j - 1] === "R") {
                        currentTotal++
                        if (i<4 && j>1) {
                            i++;
                            j--;
                        } else{
                            break;
                        }
                    }
                }
                if(currentTotal===3){
                    return [currentRow,currentColumn]
                } else{
                    currentTotal=0;
                    i=currentRow
                    j=currentColumn
                }

                //next will check upwards diagonal
                //first will check to the right
                if (i<5 && j<6) {
                    while (board[i + 1][j + 1] === "R") {
                        currentTotal++;
                        if (i<4 && j<5) {
                            j++;
                            i++;
                        } else{
                            break;
                        }
                    }
                }
                j=currentColumn;
                i=currentRow;
                //and then check total to the left.
                if (i>0 && j>0) {
                    while (board[i - 1][j - 1] === "R") {
                        currentTotal++
                        if (i>1 && j>1) {
                            i--;
                            j--;
                        } else{
                            break;
                        }
                    }
                }
                if(currentTotal===3){
                    return [currentRow,currentColumn]
                } else{
                    currentTotal=0;
                    i=currentRow
                    j=currentColumn
                }

            }
        }
    }
}

//This function will check to see if there are any winners!
function connectFour(board) {
    var emptyCounter = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let currentColor = board[i][j];

            //now I want to check if any of the eight discs around me match mine.

            if (currentColor === "-") {
                emptyCounter++
            } else {
                let winnerCheck = []
                if (j <= 3) {
                    //horizontal check
                    winnerCheck.push([board[i][j], board[i][j + 1], board[i][j + 2], board[i][j + 3]])

                    //upward diagonal check
                    if (i >= 3) {
                        winnerCheck.push([board[i][j], board[i - 1][j + 1], board[i - 2][j + 2], board[i - 3][j + 3]])
                    }

                    // //downward diagonal check
                    if (i <= 2) {
                        winnerCheck.push([board[i][j], board[i + 1][j + 1], board[i + 2][j + 2], board[i + 3][j + 3]])
                    }
                }
                if (i <= 2) {
                    //vertical check
                    winnerCheck.push([board[i][j], board[i + 1][j], board[i + 2][j], board[i + 3][j]])
                }

                //will now loop through the four directional checks, and check to see if any contain four in a row.
                for (var k = 0; k < winnerCheck.length; k++) {
                    var connectFourCount = winnerCheck[k].reduce(function (total, x) {
                        if (x === currentColor) {
                            return total + 1
                        }
                    }, 0)
                    if (connectFourCount === 4) {
                        return currentColor
                    }
                }
            }
        }
    }
    //if no four in a row are found, it will state if game is still in progress or if all slots are full.
    if (emptyCounter>0){
        return "in progress"
    } else{
        return "draw"
    }
}

//this function will check to see if the computer has set the player up for a win with its potential move.
function checkComputersMove(board, row, column){

    let boardCopy= JSON.parse(JSON.stringify(board));

    //adds current potential move to board
    boardCopy[row][column]="Y"

    //checks ot see if potential move will cause the player to be set up for a win.
    if (blockPlayersWinningMove(boardCopy)){
        //will return true if the computer just set up the player for a win.
        return true;
    } else{
        return false;
    }
}


    //This is our offensive computer strategy. It will first check and stop the player if they are about to win,
    // then it will focus on picking the move that gives it the best chance of winning.

    function computersMove(board){
        //this function will check to see if the computer has a winning move that it needs to execute.
        if (computerWinningMove(board)){
            return computerWinningMove(board)
        }

        //This function will check to see if the player has a three streak winning move, and will block it if so.
        if (blockPlayersWinningMove(board)){
            return blockPlayersWinningMove(board)
        }

        //now will check to see what our best move is.
        var streakTracker=[0,0];
        var bestMove=[]
        for (let i=0; i< board.length; i++){
            for (let j=0; j<board[i].length; j++){
                //will only consider move if it is a valid move.
                let currentRow=i;
                let currentColumn=j;
                let highestTotal=0;
                let currentTotal=0;
                let totalStreak=0;
               if (board[i][j]==="-"&&(i===5 || board[i+1][j]!=="-" )){

                   //first will check number of vertical streak.
                   if (i<5) {
                       while (board[i + 1][j] === "Y") {
                           currentTotal++
                           totalStreak++
                           if (i<4){
                               i++;
                           } else{
                               break;
                           }
                       }
                   }
                   if(currentTotal>highestTotal){
                       highestTotal=currentTotal;
                       currentTotal=0;
                       i=currentRow;
                   } else{
                       currentTotal=0;
                       i=currentRow;
                   }

                   //next, will check number of horizontal streak.

                   //will check total to the right first.
                   if (j<6) {
                       while (board[i][j + 1] === "Y") {
                           currentTotal++
                           totalStreak++;
                           if (j < 5) {
                               j++;
                           } else {
                               break;

                           }
                       }
                   }
                   j=currentColumn;
                   //and then check total to the left.
                   if (j>0) {
                       while (board[i][j - 1] === "Y") {
                           currentTotal++
                           totalStreak++;
                           if (j>1) {
                               j--;
                           } else {
                               break
                           }

                       }
                   }
                   if(currentTotal>highestTotal){
                       highestTotal=currentTotal;
                       currentTotal=0;
                       j=currentColumn
                   } else{
                       currentTotal=0;
                       j=currentColumn
                   }

                   //next will check downwards diagonal
                   //first will check to the right
                   if (i>0&&j<6) {
                       while (board[i - 1][j + 1] === "Y") {
                           currentTotal++;
                           totalStreak++;
                           if (i >1 && j < 5) {
                               j++;
                               i--;
                           } else {
                               break;

                           }
                       }
                   }
                   j=currentColumn;
                   i=currentRow;
                   //and then check total to the left.
                   if (i<5 && j>0) {
                       while (board[i + 1][j - 1] === "Y") {
                           currentTotal++
                           totalStreak++;
                           if (i<4 && j>1) {
                               i++;
                               j--;
                           } else{
                           break;
                           }
                       }
                   }
                   if(currentTotal>highestTotal){
                       highestTotal=currentTotal;
                       currentTotal=0;
                       i=currentRow
                       j=currentColumn
                   } else{
                       currentTotal=0;
                       i=currentRow
                       j=currentColumn
                   }

                   //next will check upwards diagonal
                   //first will check to the right
                   if (i<5&&j<6) {
                       while (board[i + 1][j + 1] === "Y") {
                           currentTotal++;
                           totalStreak++;
                           if (i<4&&j<5) {
                               j++;
                               i++;
                           } else{
                           break;
                        }
                       }
                   }
                   j=currentColumn;
                   i=currentRow;
                   //and then check total to the left.
                   if (i>0 && j>0) {
                       while (board[i - 1][j - 1] === "Y") {
                           currentTotal++
                           totalStreak++;
                           if (i>1 && j>1) {
                               i--;
                               j--;
                           } else{
                           break;
                           }
                       }
                   }
                   if(currentTotal>highestTotal){
                       highestTotal=currentTotal;
                       currentTotal=0;
                       i=currentRow
                       j=currentColumn
                   } else{
                       currentTotal=0;
                       i=currentRow
                       j=currentColumn
                   }

                   //alright, now we should have our highest streak total for this point.
                   //We will now check and see if this is our best move so far.
                   if (checkComputersMove(board, currentRow, currentColumn)){
                       continue;
                   } else if(highestTotal>streakTracker[0]){
                       bestMove=[[i,j]];
                       streakTracker=[highestTotal, totalStreak]
                   } else if (highestTotal===streakTracker[0]){
                       if (totalStreak>streakTracker[1]){
                           bestMove=[[i,j]];
                           streakTracker=[highestTotal, totalStreak]
                       } else if (totalStreak===streakTracker[1]){
                           bestMove.push([i,j])
                       }
                   }
               }
            }
        }
        if (bestMove.length===1){
            return bestMove[0]
        } else{
            var randomIndex=Math.round(Math.random()*(bestMove.length-1))
            return bestMove[randomIndex]
        }
    }

    //This will be our defensive computer strategy. It will always try to block the highest streak the
//player currently has going on.
function computersMoveDefense(board){

    //this function will check to see if the computer has a winning move that it needs to execute.
    if (computerWinningMove(board)){
        return computerWinningMove(board)
    }
    //this function will check to see if the player has a three streak winning move that needs to be blocked.
    if (blockPlayersWinningMove(board)){
        return blockPlayersWinningMove(board)
    }

    //now will check to see what our best move to block the player is.
    var streakTracker=[0,0];
    var bestMove=[]
    for (let i=0; i< board.length; i++){
        for (let j=0; j<board[i].length; j++){
            //will only consider move if it is a valid move.
            let currentRow=i;
            let currentColumn=j;
            let highestTotal=0;
            let currentTotal=0;
            let totalStreak=0;
            if (board[i][j]==="-"&&(i===5 || board[i+1][j]!=="-" )){

                //first will check number of vertical streak.
                if (i<5) {
                    while (board[i + 1][j] === "R") {
                        currentTotal++
                        totalStreak++
                        if (i<4){
                            i++;
                        } else{
                            break;
                        }
                    }
                }
                if(currentTotal>highestTotal){
                    highestTotal=currentTotal;
                    currentTotal=0;
                    i=currentRow;
                } else{
                    currentTotal=0;
                    i=currentRow;
                }

                //next, will check number of horizontal streak.

                //will check total to the right first.
                if (j<6) {
                    while (board[i][j + 1] === "R") {
                        currentTotal++
                        totalStreak++;
                        if (j < 5) {
                            j++;
                        } else {
                            break;

                        }
                    }
                }
                j=currentColumn;
                //and then check total to the left.
                if (j>0) {
                    while (board[i][j - 1] === "R") {
                        currentTotal++
                        totalStreak++;
                        if (j>1) {
                            j--;
                        } else {
                            break
                        }

                    }
                }
                if(currentTotal>highestTotal){
                    highestTotal=currentTotal;
                    currentTotal=0;
                    j=currentColumn
                } else{
                    currentTotal=0;
                    j=currentColumn
                }

                //next will check downwards diagonal
                //first will check to the right
                if (i>0&&j<6) {
                    while (board[i - 1][j + 1] === "R") {
                        currentTotal++;
                        totalStreak++;
                        if (i >1 && j < 5) {
                            j++;
                            i--;
                        } else {
                            break;

                        }
                    }
                }
                j=currentColumn;
                i=currentRow;
                //and then check total to the left.
                if (i<5 && j>0) {
                    while (board[i + 1][j - 1] === "R") {
                        currentTotal++
                        totalStreak++;
                        if (i<4 && j>1) {
                            i++;
                            j--;
                        } else{
                            break;
                        }
                    }
                }
                if(currentTotal>highestTotal){
                    highestTotal=currentTotal;
                    currentTotal=0;
                    i=currentRow
                    j=currentColumn
                } else{
                    currentTotal=0;
                    i=currentRow
                    j=currentColumn
                }

                //next will check upwards diagonal
                //first will check to the right
                if (i<5&&j<6) {
                    while (board[i + 1][j + 1] === "R") {
                        currentTotal++;
                        totalStreak++;
                        if (i<4&&j<5) {
                            j++;
                            i++;
                        } else{
                            break;
                        }
                    }
                }
                j=currentColumn;
                i=currentRow;
                //and then check total to the left.
                if (i>0 && j>0) {
                    while (board[i - 1][j - 1] === "R") {
                        currentTotal++
                        totalStreak++;
                        if (i>1 && j>1) {
                            i--;
                            j--;
                        } else{
                            break;
                        }
                    }
                }
                if(currentTotal>highestTotal){
                    highestTotal=currentTotal;
                    currentTotal=0;
                    i=currentRow
                    j=currentColumn
                } else{
                    currentTotal=0;
                    i=currentRow
                    j=currentColumn
                }

                //alright, now we should have our highest streak total for this point.
                //We will now check and see if this is our best move so far.
                if (checkComputersMove(board, currentRow, currentColumn)){
                    continue;
                } else if(highestTotal>streakTracker[0]){
                    bestMove=[[i,j]];
                    streakTracker=[highestTotal, totalStreak]
                } else if (highestTotal===streakTracker[0]){
                    if (totalStreak>streakTracker[1]){
                        bestMove=[[i,j]];
                        streakTracker=[highestTotal, totalStreak]
                    } else if (totalStreak===streakTracker[1]){
                        bestMove.push([i,j])
                    }
                }
            }
        }
    }
    //If there is one clear best move, the computer will choose that one.
    if (bestMove.length===1){
        return bestMove[0]
    } else{
        //If there are multiple moves that are equally advantageous for the computer, one will be randomly chosen.
        var randomIndex=Math.round(Math.random()*(bestMove.length-1))
        return bestMove[randomIndex]
    }
}



var initialBoard=[ [ '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-' ] ]
var keepPlaying=true;
var turnTracker=0;
$(".circle").click(function (x) {
    if ($(this).hasClass("no-clicking")===false) {
        var column = $(this).attr('class')[7];
        var row = $(this).parent().attr('class')[5]
        var spotOpen = true;

        //this will automatically stop the rest of the functions from stopping if an already filled
        //spot is chosen
        if(initialBoard[row - 1][column - 1] !== "-"){
            return;
        }

        //This will check to make sure all spots beneath the chosen spot are already filled.
        if (row !== 6) {
            for (let i = row; i < initialBoard.length; i++) {
                if (initialBoard[i][column - 1] === "-") {
                    spotOpen = false;
                }
            }
        }
        //This will update board to show latest chip added and will update our array of values.
        if (spotOpen && initialBoard[row - 1][column - 1] === "-") {
                $(this).children().css("background-color", "red")
                $(this).children().css({
                    "transition-property": "transform",
                    "transition-duration": "1s",
                    "transition-timing-function": "linear",
                    "transition-delay": "100ms"
                })
                $(this).children().css("transform", "translate(0, 500px)")

                // $(this).css("background-color", "red")
                initialBoard[row - 1][column - 1] = "R";
                $("#turn-tracker").html("Yellow Player's Turn")
                $("#turn-tracker").css("color", "#cece10")
                $("#turn-tracker").css("left", "unset")
                $("#turn-tracker").css("right", "25px")

        }
        //will check for a winner after you play.

        var gameProgress = connectFour(initialBoard);
        if (gameProgress === "R") {
            $("#new-game").html("Red Team wins! Want to play again?<br>" +
                "<button id='yes'>Yes</button>")
            $("#new-game").show()
            $("#turn-tracker").hide()
            $(".circle").addClass("no-clicking")


        } else if (gameProgress === "Y") {
            $("#new-game").html("Yellow Team wins! Want to play again?<br>" +
                "<button id='yes'>Yes</button>")
            $("#new-game").show()
            $("#turn-tracker").hide()
            $(".circle").addClass("no-clicking")


        } else if (gameProgress === "draw") {
            $("#new-game").html("Boooo its a tie! Want to play again?<br>" +
                "<button id='yes'>Yes</button>")
            $("#new-game").show()
            $("#turn-tracker").hide()
            $(".circle").addClass("no-clicking")
        }

        //if no winner, the computer will do there play.

        //This random function will randomly alternate between an offensive and defensive strategy.
        var randomMove=Math.round(Math.random())
        if(randomMove===0) {
            var computerPlay = computersMove(initialBoard);
        } else{
            computerPlay=computersMoveDefense(initialBoard)
        }
        var computerPlayChildClass="."+(computerPlay[1]+1);
        var computerPlayParentClass="."+(computerPlay[0]+1);
        console.log(computerPlayParentClass)
        var element = $(computerPlayChildClass, computerPlayParentClass);
        $(element).children().css("background-color", "yellow")
        $(element).children().css({
            "transition-property": "transform",
            "transition-duration": "1s",
            "transition-timing-function": "linear",
            "transition-delay": "1000ms"
        })
        $(element).children().css("transform", "translate(0, 500px)")
        initialBoard[computerPlay[0]][computerPlay[1]] = "Y";
        $("#turn-tracker").html("Your turn!")
        $("#turn-tracker").css("color", "red")
        $("#turn-tracker").css("right", "unset")
        $("#turn-tracker").css("left", centerTurnTracker)

        //This will check our array of values to see if there is a winner yet.
        var gameProgress = connectFour(initialBoard);
        if (gameProgress === "R") {
            $("#new-game").html("Red Team wins! Want to play again?<br>" +
                "<button id='yes'>Yes</button>")
            $("#new-game").show()
            $("#turn-tracker").hide()
            $(".circle").addClass("no-clicking")


        } else if (gameProgress === "Y") {
            $("#new-game").html("Yellow Team wins! Want to play again?<br>" +
                "<button id='yes'>Yes</button>")
            $("#new-game").show()
            $("#turn-tracker").hide()
            $(".circle").addClass("no-clicking")


        } else if (gameProgress === "draw") {
            $("#new-game").html("Boooo its a tie! Want to play again?<br>" +
                "<button id='yes'>Yes</button>")
            $("#new-game").show()
            $("#turn-tracker").hide()
            $(".circle").addClass("no-clicking")
        }
    }



})
$(document).on('click','#yes',function(){
    $(".circle").removeClass("no-clicking")
    initialBoard=[ [ '-', '-', '-', '-', '-', '-', '-' ],
        [ '-', '-', '-', '-', '-', '-', '-' ],
        [ '-', '-', '-', '-', '-', '-', '-' ],
        [ '-', '-', '-', '-', '-', '-', '-' ],
        [ '-', '-', '-', '-', '-', '-', '-' ],
        [ '-', '-', '-', '-', '-', '-', '-' ] ]
    $(".color").css("transform", "translate(0, -500px)")
    $("#new-game").hide()
    $("#turn-tracker").show()
})
