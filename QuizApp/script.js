const questions=[
    {
        question:"Which is largest animal in the world?",
        answers:[
            
            {text:"Shark",correct:false},
            {text :"Blue Whale",correct:true},
            {text:"Tiger",correct:false},
            {text :"Elephant",correct:false}
            

        ]
    },
    {  
    question:"Which is smallest continent in the world?",
        answers:[
            
            {text:"Asia",correct:false},
            {text :"USA",correct:false},
            {text:"Austraila",correct:true},
            {text :"Europe",correct:false}
            

        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Seoul", correct: false },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "In which year did Christopher Columbus reach the Americas?",
        answers: [
            { text: "1492", correct: true },
            { text: "1510", correct: false },
            { text: "1601", correct: false },
            { text: "1620", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the currency of Brazil?",
        answers: [
            { text: "Peso", correct: false },
            { text: "Real", correct: true },
            { text: "Rupiah", correct: false },
            { text: "Dollar", correct: false }
        ]
    }


];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz()
{
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
     
}

function showQuestion()
{
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;

    // show the answers
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;// true or false
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState()
{
    nextButton.style.display="none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

 function showScore()
 {
    resetState();
    questionElement.innerHTML= `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
 }
 function handleNextButton()
 {
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion();
    }
    else
    {
        showScore();
    }
 }
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
        
    }
})
startQuiz();

