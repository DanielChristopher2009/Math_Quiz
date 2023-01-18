player1_Name = localStorage.getItem("Player1Name")
player2_Name = localStorage.getItem("Player2Name")

Player1Score = 0
Player2Score = 0

document.getElementById("player1_name").innerHTML = player1_Name + " : "
document.getElementById("player2_name").innerHTML = player2_Name + " : "
document.getElementById("player1-score").innerHTML = Player1Score
document.getElementById("player2-score").innerHTML = Player2Score
document.getElementById("Player-question").innerHTML = "Question Turn - " + player1_Name
document.getElementById("Player-answer").innerHTML = "Answer Turn - " + player2_Name

function Send() {
    getno1 = document.getElementById("no1").value
   getno2 = document.getElementById("no2").value
   ans=parseInt(getno1)* parseInt(getno2)
console.log(ans)


    question_word = "<h4>  " + getno1 + " X "+ getno2 +"</h4>"
    input_box = "<br> <br> answer: <input type= 'text' id = 'input_checkbox'>"
    check_button = "<br> <br> <button class='btn btn-info' onclick = 'check()'>Submit</button>"
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row

    document.getElementById("no1").value = "" 
    document.getElementById("no2").value =""


}

question_turn = "player1"
answer_turn = "player2"

function check(){
    get_answer = document.getElementById("input_checkbox").value
    answer = get_answer.toLowerCase()

    if(answer==ans){
        if(answer_turn== "player1"){
            Player1Score= Player1Score+1 
            console.log(Player1Score)
            document.getElementById("player1-score").innerHTML = Player1Score
        }
        else{
            Player2Score= Player2Score+1
            console.log(Player2Score) 
            document.getElementById("player2-score").innerHTML = Player2Score
        }
    }

    if(question_turn== "player1"){
        question_turn= "player2"
        document.getElementById("Player-question").innerHTML = "Question Turn - " + player2_Name
    }
    else{
        question_turn= "player1"
        document.getElementById("Player-question").innerHTML = "Question Turn - " + player1_Name
    }

    if(answer_turn== "player1"){
        answer_turn= "player2"
        document.getElementById("Player-answer").innerHTML = "Answer Turn - " + player2_Name
    }
    else{
        answer_turn= "player1"
        document.getElementById("Player-answer").innerHTML = "Answer Turn - " + player1_Name
    }
    document.getElementById("output").innerHTML = ""
}