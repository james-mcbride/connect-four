// var windowWidth= window.innerWidth
// $("body").css("margin-left", windowWidth*.1)
// $("body").css("width", windowWidth*.8)
// $(".circle").css("width", windowWidth*.64/7)
//
//
// var windowHeight=window.innerHeight
// $("body").css("height", windowWidth*6/7)
// $("body").css("padding-top", windowWidth*1/14)
// $(".row-").css("height", windowHeight*.8/6)

function connectFour(board) {
    var emptyCounter=0;
    for (let i=0; i< board.length; i++){
        for (let j=0; j<board[i].length; j++){
            let currentColor=board[i][j];

            //now I want to check if any of the eight discs around me match mine.

            if (currentColor==="-"){
                emptyCounter++
            } else{
                let winnerCheck=[]
                if (j<=3){
                    //horizontal check
                    winnerCheck.push([board[i][j],board[i][j+1], board[i][j+2], board[i][j+3]])

                    //upward diagonal check
                    if (i>=3) {
                        winnerCheck.push([board[i][j], board[i - 1][j + 1], board[i - 2][j + 2], board[i - 3][j + 3]])
                    }

                    // //downward diagonal check
                    if (i<=2) {
                        winnerCheck.push([board[i][j], board[i + 1][j + 1], board[i + 2][j + 2], board[i + 3][j + 3]])
                    }
                }
                if (i<=2) {
                    //vertical check
                    winnerCheck.push([board[i][j], board[i+1][j], board[i+2][j], board[i+3][j]])
                }

                //will now loop through the four directional checks, and check to see if any contain four in a row.
                for (var k=0; k<winnerCheck.length; k++){
                    var connectFourCount = winnerCheck[k].reduce(function(total,x){
                        if (x===currentColor){
                            return total+1
                        }
                    },0)
                    if (connectFourCount===4){
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

var initialBoard=[ [ '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-' ],
    [ '-', '-', '-', '-', '-', '-', '-' ] ]
var keepPlaying=true;
var turnTracker=0;
    $(".circle").click(function (x) {
        var column = $(this).attr('class')[7];
        var row=$(this).parent().attr('class')[5]
        var spotOpen=true;
        if (row!==6) {
            for (let i = row; i < initialBoard.length; i++) {
                if (initialBoard[i][column-1] === "-") {
                    spotOpen = false;
                }
            }
        }
        //This will update board to show latest chip added and will update our array of values.
        if (spotOpen && initialBoard[row-1][column-1]==="-") {
            if (turnTracker % 2 === 0) {
                $(this).css("background-color", "red")
                initialBoard[row-1][column-1]="R";
                $("#turn-tracker").html("Yellow Player's Turn")
                $("#turn-tracker").css("color", "yellow")

            } else {
                $(this).css("background-color", "yellow")
                initialBoard[row-1][column-1]="Y";
                $("#turn-tracker").html("Red Player's Turn")
                $("#turn-tracker").css("color", "red")
            }

            turnTracker++
        }
        //This will check our array of values to see if there is a winner yet.
        var gameProgress=connectFour(initialBoard);
        if (gameProgress==="R"){
            alert("Red Team Wins!")
        } else if(gameProgress==="Y"){
            alert("Yellow Team Wins!")
        } else if(gameProgress==="draw"){
            alert("Booooo its a tie.")
        }



    })
