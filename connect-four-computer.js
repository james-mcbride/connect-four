var windowWidth= window.innerWidth
var centerTurnTracker=(windowWidth-178)/2
var newGameWidth=(windowWidth*3/4)
 // $("#turn-tracker").css("left", centerTurnTracker )



function verticalWinningPotential(board,row,column,color){
    var currentRow=row;
    var currentColumn=column;
    let count=1;
    while (row<=4){
        if (board[row+1][column]===color){
            count++
            row++
        } else {
            break;
        }
    }
    row=currentRow;
    column=currentColumn;
    while (row>=1){
        if (board[row-1][column]==="-"){
            count++
            row--
        } else {
            break;
        }
    }
    return count;
}
function horizontalWinningPotential(board,row,column,color){
    var currentRow=row;
    var currentColumn=column;
    let count=1;
    while (column<=5){
        if (board[row][column+1]===color||board[row][column+1]==="-"){
            count++
            column++
        } else {
            break;
        }
    }
    row=currentRow;
    column=currentColumn;
    while (column>=1){
        if (board[row][column-1]===color||board[row][column-1]==="-"){
            count++
            column--
        } else {
            break;
        }
    }
    return count;
}

function upwardDiagonalWinningPotential(board,row,column,color){
    var currentRow=row;
    var currentColumn=column;
    let count=1;
    while (column<=5 && row>=1){
        if (board[row-1][column+1]===color||board[row-1][column+1]==="-"){
            count++
            column++
            row--
        } else {
            break;
        }
    }
    row=currentRow;
    column=currentColumn;
    while (column>=1 && row<=4){
        if (board[row+1][column-1]===color||board[row+1][column-1]==="-"){
            count++
            row++
            column--
        } else {
            break;
        }
    }
    return count;
}

function downwardDiagonalWinningPotential(board,row,column,color){
    var currentRow=row;
    var currentColumn=column;
    let count=1;
    while (column<=5 && row<=4){
        if (board[row+1][column+1]===color||board[row+1][column+1]==="-"){
            count++
            column++
            row++
        } else {
            break;
        }
    }
    row=currentRow;
    column=currentColumn;
    while (column>=1 && row>=1){
        if (board[row-1][column-1]===color||board[row-1][column-1]==="-"){
            count++
            row--
            column--
        } else {
            break;
        }
    }
    return count;
}

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

function computerSettingUpPlayerToBlockWinningMove (board){
    var totalWinningMove=0;
    for (let i=0; i< board.length; i++){
        for (let j=0; j<board[i].length; j++){
            //will only consider move if it is a valid move.
            var winningMove=0;
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
                    winningMove++
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
                    winningMove++
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
                    winningMove++
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
                    winningMove++
                } else{
                    currentTotal=0;
                    i=currentRow
                    j=currentColumn
                }

            }
            if (winningMove>0){
                totalWinningMove++

            }
        }
    }
    return totalWinningMove
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

    //checks to see if potential move will cause the player to be set up for a win, returns 1 if so.
    if (blockPlayersWinningMove(boardCopy)){
        //will return true if the computer just set up the player for a win, or if it just set up the player to block its winning move setup.
        return 1;
    } else if(computerSettingUpPlayerToBlockWinningMove(boardCopy)===1){
        return 2;

    }else {
        return false;
    }
}

function computersIdealmove(board, color){
    //this function will check to see if the computer has a winning move that it needs to execute.
    if (computerWinningMove(board)){
        return [computerWinningMove(board), [1,0]]
    }

    //This function will check to see if the player has a three streak winning move, and will block it if so.
    if (blockPlayersWinningMove(board)){
        return [blockPlayersWinningMove(board), [1,0]]
    }

    //now will check to see what our best move is.
    var streakTracker=[0,0];
    var bestMove=[]
    var badMoves=[]
    for (let i=0; i< board.length; i++){
        for (let j=0; j<board[i].length;  j++){
            //will only consider move if it is a valid move.
            let currentRow=i;
            let currentColumn=j;
            let highestTotal=0;
            let currentTotal=0;
            let totalStreak=0;
            if (board[i][j]==="-"&&(i===5 || board[i+1][j]!=="-" )){

                //first will check number of vertical streak.
                while (i<=4) {
                    if (board[i + 1][j] ===color) {
                        currentTotal++
                        totalStreak++
                        i++
                    }else{
                        break;
                    }
                }
                if(currentTotal>highestTotal && verticalWinningPotential(board, currentRow, currentColumn, color)>=4){
                    highestTotal=currentTotal;
                    currentTotal=0;
                    i=currentRow;
                } else{
                    currentTotal=0;
                    i=currentRow;
                }

                //next, will check number of horizontal streak.
                //will check total to the right first.
                while(j<=5) {
                    if (board[i][j + 1] === color) {
                        currentTotal++
                        totalStreak++;
                        j++
                    } else if(board[i][j + 1] === "-"&&j<=4){
                        if (j<=4 && board[i][j + 2] === color) {
                            j++
                            continue;
                        } else{
                            break;
                        }
                    } else {
                        break;
                    }
                }
                j=currentColumn;
                //and then check total to the left.
                while (j>=1) {
                    if (board[i][j - 1] === color) {
                        currentTotal++
                        totalStreak++
                        j--
                    } else if(board[i][j - 1] === "-"&&j>=2) {
                        if (j>=2 && board[i][j - 2] === color) {
                            j--
                            continue;
                        } else{
                            break;
                        }
                    }else {
                        break
                    }
                }
                if(currentTotal>highestTotal && horizontalWinningPotential(board, currentRow, currentColumn, color)>=4){
                    highestTotal=currentTotal;
                    currentTotal=0;
                    j=currentColumn
                } else{
                    currentTotal=0;
                    j=currentColumn
                }

                //next will check upwards diagonal
                //first will check to the right
                while (i>=1&&j<=5) {
                    if (board[i - 1][j + 1] === color) {
                        currentTotal++;
                        totalStreak++;
                        j++
                        i--
                    } else if(board[i - 1][j + 1] === "-") {
                        if ((i>=2 && j<=4) && board[i-2][j + 2] === color) {
                            j++
                            i--
                            continue;
                        } else{
                            break;
                        }
                    }else {
                        break;
                    }
                }
                j=currentColumn;
                i=currentRow;
                //and then check total to the left.
                while (i<=4 && j>=1) {
                    if (board[i + 1][j - 1] === color) {
                        currentTotal++
                        totalStreak++;
                        i++
                        j--

                    } else if(board[i + 1][j - 1] === "-"){
                        if ((i<=3 && j>=2) && board[i+2][j - 2] === color ) {
                            i++
                            j--
                            continue;
                        } else{

                            break;
                        }
                    }else{
                        break;
                    }
                }
                if(currentTotal>highestTotal && upwardDiagonalWinningPotential(board, currentRow, currentColumn, color)>=4){
                    highestTotal=currentTotal;
                    currentTotal=0;
                    i=currentRow
                    j=currentColumn
                } else{
                    currentTotal=0;
                    i=currentRow
                    j=currentColumn
                }

                //next will check downwards diagonal
                //first will check to the right
                while (i<=4&&j<=5) {
                    if (board[i + 1][j + 1] === color) {
                        currentTotal++;
                        totalStreak++;
                        i++
                        j++
                    }else if(board[i + 1][j + 1] === "-"){
                        if ((i<=3 && j<=4) && board[i+2][j + 2] === color ) {
                            i++
                            j++
                            continue;
                        } else{

                            break;
                        }
                    }  else{

                        break;
                    }
                }
                j=currentColumn;
                i=currentRow;
                //and then check total to the left.
                while (i>=1 && j>=1) {
                    if (board[i - 1][j - 1] === color) {
                        currentTotal++
                        totalStreak++;
                        i--
                        j--
                    }else if(board[i - 1][j - 1] === "-"){
                        if ((i>=2 && j>=2) && board[i-2][j - 2] === color ) {
                            i--
                            j--
                            continue;
                        } else{

                            break;
                        }
                    } else{
                        break;
                    }
                }
                if(currentTotal>highestTotal  && downwardDiagonalWinningPotential(board, currentRow, currentColumn, color)>=4){
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
                if (checkComputersMove(board, currentRow, currentColumn)===1){
                    badMoves.push([i,j])
                } else if(checkComputersMove(board, currentRow, currentColumn)===2){
                    badMoves.unshift([i,j])
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
    if (bestMove.length===0){
        return [badMoves[0], streakTracker]
    } else if (bestMove.length===1){
        return [bestMove[0], streakTracker]
    } else{
        var randomIndex=Math.round(Math.random()*(bestMove.length-1))
        return [bestMove[randomIndex], streakTracker]
    }
}

    //This is our offensive computer strategy. It will first check and stop the player if they are about to win,
    // then it will focus on picking the move that gives it the best chance of winning.

    function computersMoveOffense(board){
        return computersIdealmove(board, "Y")

    }

    //This will be our defensive computer strategy. It will always try to block the highest streak the
//player currently has going on.
function computersMoveDefense(board){
    return computersIdealmove(board, "R")

}



var initialBoard=[ [ '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-' ] ]
var keepPlaying=true;
var gameTracker=0;
$(".circle").click(function (x) {
    if ($(this).hasClass("no-clicking")===false) {
        var column = $(this).attr('class')[7];
        var row = $(this).parent().attr('class')[5]
        // var spotOpen = true;

        //this will automatically stop the rest of the functions from stopping if an already filled
        //spot is chosen
        // if (initialBoard[row - 1][column - 1] !== "-") {
        //     return;
        // }

        //This will check to make sure all spots beneath the chosen spot are already filled.
        // if (row !== 6) {
        //     for (let i = row; i < initialBoard.length; i++) {
        //         if (initialBoard[i][column - 1] === "-") {
        //             spotOpen = false;
        //         }
        //     }
        // }

        if (row != 6) {
            for (let i = row-1; i < initialBoard.length; i++) {
                if (i===5){
                    row=i+1;
                    break;
                }else if (initialBoard[i+1][column-1] === "-") {
                } else{
                    row=i+1;
                    break;
                }
            }
        }

        var playerPlayChildClass = "." + column;
        var playerPlayParentClass = "." + row;
        var player = $(playerPlayChildClass, playerPlayParentClass);

        //This will update board to show latest chip added and will update our array of values.
        if (initialBoard[row - 1][column - 1] === "-") {
            $(player).children().css("background-color", "red")
            $(player).children().css({
                "transition-property": "transform",
                "transition-duration": "1s",
                "transition-timing-function": "linear",
                "transition-delay": "100ms"
            })
            $(player).children().css("transform", "translate(0, 1000px)")

            // $(this).css("background-color", "red")
            initialBoard[row - 1][column - 1] = "R";
            $("#turn-tracker").html("Yellow Player's Turn")
            $("#turn-tracker").css("color", "#cece10")
            $("#turn-tracker").css("left", "unset")
            $("#turn-tracker").css("right", "25px")


            //will check for a winner after you play.

            gameProgress = connectFour(initialBoard);
            if (gameProgress === "R") {
                $("#new-game").html("Red Team wins! Want to play again?<br>" +
                    "<button id='yes'>Yes</button>")
                $("#new-game").toggleClass("hidden")
                $("#turn-tracker").toggleClass("hidden")
                $(".circle").addClass("no-clicking")
                gameProgess=""
                var playerScore = Number($("#player").html())
                playerScore++
                $("#player").html(playerScore)


            } else if (gameProgress === "Y") {
                $("#new-game").html("Yellow Team wins! Want to play again?<br>" +
                    "<button id='yes'>Yes</button>")
                $("#new-game").toggleClass("hidden")
                $("#turn-tracker").toggleClass("hidden")
                $(".circle").addClass("no-clicking")
                gameProgess=""
                var computerScore = Number($("#computer").html())
                computerScore++
                $("#computer").html(computerScore)


            } else if (gameProgress === "draw") {
                $("#new-game").html("Boooo its a tie! Want to play again?<br>" +
                    "<button id='yes'>Yes</button>")
                $("#new-game").toggleClass("hidden")
                $("#turn-tracker").toggleClass("hidden")
                $(".circle").addClass("no-clicking")
                gameProgess=""
                var drawScore = Number($("#draw").html())
                drawScore++
                $("#draw").html(drawScore)
            }

            //if no winner, the computer will do there play.

            //This random function will randomly alternate between an offensive and defensive strategy.
            // var randomMove=Math.round(Math.random())
            // if(randomMove===0) {
            //     var computerPlay = computersMoveOffense(initialBoard);
            // } else{
            //     computerPlay=computersMoveDefense(initialBoard)
            // }

            //This will check the board and see if offense or defense is more adventageous right now.
            var offenseCheck = computersMoveOffense(initialBoard)
            var defenseCheck = computersMoveDefense(initialBoard)

            if (offenseCheck[1][0] > defenseCheck[1][0]) {
                var computerPlay = offenseCheck[0];
            } else if (offenseCheck[1][0] < defenseCheck[1][0]) {
                computerPlay = defenseCheck[0]
            } else if (offenseCheck[1][1] > defenseCheck[1][1]) {
                computerPlay = offenseCheck[0];
            } else if(offenseCheck[1][1] < defenseCheck[1][1]) {
                computerPlay = defenseCheck[0]
            } else{
                let randomMove=Math.round(Math.random())
                if(randomMove===0) {
                    computerPlay = offenseCheck[0]
                } else{
                    computerPlay = defenseCheck[0]
                }
            }
            console.log(offenseCheck)
            console.log(defenseCheck)
            console.log(computerPlay)
            var computerPlayChildClass = "." + (computerPlay[1] + 1);
            var computerPlayParentClass = "." + (computerPlay[0] + 1);
            var element = $(computerPlayChildClass, computerPlayParentClass);
            $(element).children().css("background-color", "yellow")
            $(element).children().css({
                "transition-property": "transform",
                "transition-duration": "1s",
                "transition-timing-function": "linear",
                "transition-delay": "1500ms"
            })
            $(element).children().css("transform", "translate(0, 1000px)")
            initialBoard[computerPlay[0]][computerPlay[1]] = "Y";
            $("#turn-tracker").html("Your turn!")
            $("#turn-tracker").css("color", "red")
            $("#turn-tracker").css("right", "unset")
            $("#turn-tracker").css("left", centerTurnTracker)

            //This will check our array of values to see if there is a winner yet.
            var gameOver= $("#new-game").hasClass("hidden")
            if (gameOver===true) {
                var gameProgress = connectFour(initialBoard);
                if (gameProgress === "R") {
                    $("#new-game").html("You won! Want to play again?  " +
                        "<button id='yes'>Yes</button>")
                    $("#new-game").toggleClass("hidden")
                    $("#turn-tracker").toggleClass("hidden")
                    $(".circle").addClass("no-clicking")
                    var playerScore = Number($("#player").html())
                    playerScore++
                    $("#player").html(playerScore)


                } else if (gameProgress === "Y") {
                    $("#new-game").html("The computer won! Want to play again?  " +
                        "<button id='yes'>Yes</button>")
                    $("#new-game").toggleClass("hidden")
                    $("#turn-tracker").toggleClass("hidden")
                    $(".circle").addClass("no-clicking")
                    var computerScore = Number($("#computer").html())
                    computerScore++
                    $("#computer").html(computerScore)


                } else if (gameProgress === "draw") {
                    $("#new-game").html("Boooo its a tie! Want to play again?  " +
                        "<button id='yes'>Yes</button>")
                    $("#new-game").toggleClass("hidden")
                    $("#turn-tracker").toggleClass("hidden")
                    $(".circle").addClass("no-clicking")
                    var drawScore = Number($("#draw").html())
                    drawScore++
                    $("#draw").html(drawScore)
                }
            }
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
    $(".color").css("transform", "translate(0, -1000px)")
    $("#new-game").toggleClass("hidden")
    $("#turn-tracker").toggleClass("hidden")
    gameTracker++;
    if (gameTracker%2===1){
        //This will check the board and see if offense or defense is more adventageous right now.
        var offenseCheck = computersMoveOffense(initialBoard)
        var defenseCheck = computersMoveDefense(initialBoard)

        if (offenseCheck[1[0] > defenseCheck[1][0]]) {
            var computerPlay = offenseCheck[0];
        } else if (offenseCheck[1[0] < defenseCheck[1][0]]) {
            computerPlay = defenseCheck[0]
        } else if (offenseCheck[1[1] > defenseCheck[1][1]]) {
            computerPlay = offenseCheck[0];
        } else {
            computerPlay = defenseCheck[0]
        }
        var computerPlayChildClass = "." + (computerPlay[1] + 1);
        var computerPlayParentClass = "." + (computerPlay[0] + 1);
        var element = $(computerPlayChildClass, computerPlayParentClass);
        $(element).children().css("background-color", "yellow")
        $(element).children().css({
            "transition-property": "transform",
            "transition-duration": "1s",
            "transition-timing-function": "linear",
            "transition-delay": "1000ms"
        })
        $(element).children().css("transform", "translate(0, 1000px)")
        initialBoard[computerPlay[0]][computerPlay[1]] = "Y";
    }
})




