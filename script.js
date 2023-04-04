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
var scoreEl = document.getElementById("score")
var saveEl = document.getElementById("save-score")

var timerObject;
var timerCount = 50;
var QNo = 0;
var score = 0;

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
            //timer ==0 scoreEl to be display block display_score()
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
//after gone through all quiz questions want to show the score
  //  if (currentQuestionObject is the last question, quiz is over to display the score

function onChooseOption(choiceIndex){
    checkAnswer (choiceIndex)
    proceedToNextQuestion ()
    //endScore ()

}

function checkAnswer (choiceIndex){
    var currentQuestionObject = questionsList[QNo]
    var correctAnswer = currentQuestionObject.answer
    var userAnswer = currentQuestionObject.choices[choiceIndex]
    if (userAnswer == correctAnswer){
        answerEl.textContent = "Correct!"
        score++    
    } else {
        answerEl.textContent = "Wrong!"
        timerCount-= 5
    }
    
}

function proceedToNextQuestion (){
    if(QNo < questionsList.length-1){
    QNo++
    display_Questions()
    }else{
        display_score()
        
    }
}

function display_score (){
    timerCount = 0
    timerEl.textContent ="Times Reamining:" + timerCount
    quizSectEl.style.display = "none"
    endResultsEl.style.display = "block"
    scoreEl.innerText = "This is Your Final Score: " + (score + timerCount )
    clearInterval(timerObject)
}

saveEl.addEventListener("click", function(){
    var userAnswer = document.getElementById("user") 
    var storeScore = JSON.parse(localStorage.getItem("codelist")) || []
    storeScore.push({
        user:userAnswer.value,score:(score + timerCount)

    })
    localStorage.setItem("codelist",JSON.stringify(storeScore))
        var htmlCode ="" //Empty String
    for (var i=0; i<storeScore.length; i++){
        htmlCode += "<li>User: "+storeScore[i].user+" -- "+storeScore[i].score+"</li>" // htmlCode = htmlCode + ""
    }
    htmlCode += `<br /><a href="#">PlAY AGAIN</a>`
    document.getElementById("Scoreboard").innerHTML=htmlCode
    saveEl.style.display="none"
    userAnswer.style.display="none"
}
)

function display_Questions (){
    var currentQuestionObject = questionsList[QNo]
    questionsEl.textContent = currentQuestionObject.question
    options1El.textContent = currentQuestionObject.choices[0]
    options2El.textContent = currentQuestionObject.choices[1]
    options3El.textContent = currentQuestionObject.choices[2]
    options4El.textContent = currentQuestionObject.choices[3]
}

