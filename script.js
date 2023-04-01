var quizSectEl = document.querySelector(".quiz-section")
var endResultsEl = document.querySelector("#end-results")
var startButtonEl = document.querySelector(".startbutton")
var startTextEl = document.querySelector(".starttext")
var timerEl = document.getElementById("timer")
var questionsEl = document.getElementById("question")
var options1El = document.getElementById("option-1")
var options2El = document.getElementById("option-2")
var options3El = document.getElementById("option-3")
var options4El = document.getElementById("option-4")
var answerEl = document.getElementById("answer")

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
        if (timerCount >0){
            timerCount--
        } else {
            display_score()
        }
     },1000)

    display_Questions()
})
addOnClickListenersForOptions()

function addOnClickListenersForOptions(){

    options1El.addEventListener("click", function(){
        onChooseOption(0);  
    });

    options2El.addEventListener("click", function(){
        onChooseOption(1);
    });

    options3El.addEventListener ("click", function(){
        onChooseOption(2);  
    });

    options4El.addEventListener ("click", function(){
        onChooseOption(3);  
    });

}

function onChooseOption(choiceIndex){
    checkAnswer (choiceIndex)
    proceedToNextQuestion ()

}

function checkAnswer (choiceIndex){
    var currentQuestionObject = questionsList[QNo]
    var correctAnswer = currentQuestionObject.answer
    var userAnswer = currentQuestionObject.choices[choiceIndex]
    if (userAnswer == correctAnswer){
        answerEl.textContent = "Correct!"
    } else {
        answerEl.textContent = "Wrong!"
        //change box to red 
        // green style.backgroundColor = "green"
        //decrease score and timer
    }
}

function proceedToNextQuestion (){
    QNo++
    display_Questions()
}

function display_Questions (){
    var currentQuestionObject = questionsList[QNo]
    questionsEl.textContent = currentQuestionObject.question
    options1El.textContent = currentQuestionObject.choices[0]
    options2El.textContent = currentQuestionObject.choices[1]
    options3El.textContent = currentQuestionObject.choices[2]
    options4El.textContent = currentQuestionObject.choices[3]
}


function answerIsCorrect (){
    document.getElementById(questionsList).style.backgroundColor = "green"; 
}

function answerIsWrong (){
    document.getElementById(questionsList).style.backgroundColor = "red"; 
}