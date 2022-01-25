var correct = 0
var incorrect = 0
function openbox(givenid) {
    let luck = Math.random() * 100
    if (luck > 50) {
        document.getElementById(givenid).src = "https://cliply.co/wp-content/uploads/2021/03/372103860_CHECK_MARK_400px.gif"
        correct = correct + 1
    }
    else {
        document.getElementById(givenid).src = "https://cliply.co/wp-content/uploads/2021/07/372107370_CROSS_MARK_400px.gif"
        incorrect = incorrect + 1
    }
    if (correct >= 6) {
        document.write("Your luck is really good!")
    }
    if (incorrect >= 5) {
        document.write("Your luck is really bad.")
    }
    document.getElementById("tickScore").innerText = correct
    document.getElementById("crossScore").innerText = incorrect
}
var scoreboard = document.querySelector(".scoreboard")
        function showhideInstructionsGOL(){
            scoreboard.classList.toggle("smallScoreboard")
        }