
function checkAnswer(tagId, userAnswer, expectedAnswer) {

  userAnswer = userAnswer.toLowerCase().trim();

  if(userAnswer.trim() == ""){
    document.getElementById(tagId).style.border = "";
  }else if(userAnswer == expectedAnswer){
    document.getElementById(tagId).style.border = " solid #00FF00";
  }else{
    document.getElementById(tagId).style.border = " solid #FF0000";
  }
}

function checkAnswerOnEnter(event, tagId, userAnswer, expectedAnswer) {
    if(event.keyCode == 13){
        checkAnswer(tagId, userAnswer, expectedAnswer);
    }
}
