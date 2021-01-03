var windowWidth= window.innerWidth
var centerNewGame=(windowWidth-754)/2
$("#new-game").css("left", centerNewGame)


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
        if ($(this).hasClass("no-clicking")===false) {
            var column = $(this).attr('class')[7];
            var row = $(this).parent().attr('class')[5]
            var spotOpen = true;
            if (row !== 6) {
                for (let i = row; i < initialBoard.length; i++) {
                    if (initialBoard[i][column - 1] === "-") {
                        spotOpen = false;
                    }
                }
            }
            //This will update board to show latest chip added and will update our array of values.
            if (spotOpen && initialBoard[row - 1][column - 1] === "-") {
                if (turnTracker % 2 === 0) {
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


                } else {
                    $(this).children().css("background-color", "yellow")
                    $(this).children().css({
                        "transition-property": "transform",
                        "transition-duration": "1s",
                        "transition-timing-function": "linear",
                        "transition-delay": "100ms"
                    })
                    $(this).children().css("transform", "translate(0, 500px)")
                    initialBoard[row - 1][column - 1] = "Y";
                    $("#turn-tracker").html("Red Player's Turn")
                    $("#turn-tracker").css("color", "red")
                    $("#turn-tracker").css("right", "unset")
                    $("#turn-tracker").css("left", "25px")

                }

                turnTracker++
            }
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
