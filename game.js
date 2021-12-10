var number1= document.getElementById("number1").value;
var number2= document.getElementById("number2").value;
var actual_answer= parseInt(number1) * parseInt(number2);
var player1_score=0;
var player2_score=0;
var player1_name= localStorage.getItem("player1_name");
var player2_name= localStorage.getItem("player2_name");

function Ask() {
 

    var question_number= "<h4>"+ number1 + "X" + number2+ "</h4>";
    var input_box= '<br>Answer : <input type="number" id="input_check_box">';
    var check_button= '<br><br><button class="Btn btn-info" onclick="check()"> Check </button>'; 
    var row= question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value ="";
    document.getElementById("number2").value ="";
}

var question_turn= "player_1";
var answer_turn= "player_2"

function check() {
    var get_answer= document.getElementById("input_check_box").value

    if(get_answer==actual_answer){
        if (answer_turn=="player1") {
            player1_score=player1_score+100;
            document.getElementById("player1_score").innerHTML=player1_score;
        } 
        else {
            player2_score=player2_score+100;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    
    if (question_turn=="player1") {
        question_turn="player2"
        document.getElementById("player_question").innerHTML="question- "+ player2_name;

    } 
    else {
        question_turn="player1"
        document.getElementById("player_question").innerHTML="question- "+ player1_name;
    }

    if (answer_turn=="player1") {
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="answer- "+ player2_name;

    } 
    else {
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="answer- "+ player1_name;
    }
}

 
