function addUser(){
    P1Name = document.getElementById("player1-input").value
    P2Name = document.getElementById("player2-input").value

 localStorage.setItem("Player1Name",P1Name)
localStorage.setItem("Player2Name",P2Name)
window.location="Game_page.html"
}