var magic8 = ["Yup!", "Fuhgeddaboutit", "Maybe", "What would your mother do?", "What would an Australian do? Then do the opposite.", "Try Again Later"]

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

function magic8Ball(){
  x = 0;
  while (x < 5){
  var question = document.getElementById("question").value;

  if (question == "STOP"){
    x = 10000;
    document.getElementById("answer").innerHTML = "Thank you for playing."
    break;
  }
    else {
      document.getElementById("answer").innerHTML = (magic8[getRandomNumber(0, magic8.length-1)]);
      break;
    }
  }
}
