var quizSectEl = document.querySelector(".quiz-section")
var endResultsEl = document.querySelector("#end-results")
var startButtonEl = document.querySelector(".startbutton")
var startTextEl = document.querySelector(".starttext")
var timerEl = document.getElementById("timer")
var questionsEl = document.getElementById("question")
var options1El = document.getElementById("option-1")
var options1E2 = document.getElementById("option-2")
var options1E3 = document.getElementById("option-3")
var options1E4 = document.getElementById("option-4")


var timerObject;
var timerCount = 50;
var QNo = 0;


quizSectEl.style.display = "none"
endResultsEl.style.display = "none"
startButtonEl.addEventListener("click", function(){
    quizSectEl.style.display = "block"
    startTextEl.style.display ="none"
    timerObject = setInterval(function(){
    timerEl.textContent ="Time Remaining:" + timerCount
    if (timerCount >1){
        timerCount--
    } else {
        display_score()
    }
    },1000)
    display_Questions()
})

function display_Questions (){
  questionsEl.textContent=questionsList[QNo].question
  options1El.textContent=questionsList[QNo].choices[0]
  options1E2.textContent=questionsList[QNo].choices[1]
  options1E3.textContent=questionsList[QNo].choices[2]
  options1E4.textContent=questionsList[QNo].choices[3]
}