
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
