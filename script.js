const startButton = document.getElementById('startButton')
const results = document.getElementById('resultsHeader')
const questionText = document.getElementById('question')
const answerButtons = document.querySelectorAll('.choice')
const contentDiv = document.querySelector('.content')
const questionNum = document.getElementById('questionNum')
const restartButton = document.getElementById('restartButton'); 


contentDiv.style.display = 'none'
results.style.display = 'none'


class Questions {
    constructor(question, choices, answer){
        this.question = question
        this.choices = choices
        this.answer = answer
    }
}


const questions = [{
    question: "Kam naudingos morkos?",
    choices: ["Niekam", "Hitleriui", "Kepenims", "Odai"],
    answer: "Odai"
 },
 {
    question: "Kam naudingi obuoliai?",
    choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
    answer: "Virškinimui"
 },
 {
    question: "Kokias ligas padeda gydyti agrastai?",
    choices: ["Cukrinį diabetą", "Kepenų cirozę", "Nemigą", "Vėžį"],
    answer: "Cukrinį diabetą"
 },
 {
    question: "Kokio vitamino gausu apelsinuose?",
    choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
    answer: "Vitamino C"
 },
 {
    question: "Kokiais dalykais yra turtingi arbūzai?",
    choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
    answer: "Visi teisingi"
 }
]


let index = 0
let correctAnswers = 0
let answersArr = []


startButton.addEventListener('click', function(){
    contentDiv.style.display = 'flex'
    results.style.display = 'flex'
    startButton.style.display = 'none'
    startQuiz()
})


answerButtons.forEach(button => {
    button.addEventListener('click', function(){
        progressQuiz()
    })
})


function startQuiz(){
    const currentQuestion = questions[index]
    questionText.innerText = currentQuestion.question
    
    answerButtons.forEach((button, i) => {
        button.innerText = currentQuestion.choices[i]
    })

    questionNum.innerText = `Klausimas ${index + 1} iš ${questions.length}`;

    index++
}


function progressQuiz() {
    const selectedAnswerIndex = Array.from(answerButtons).indexOf(event.target)
    const selectedAnswer = questions[index - 1].choices[selectedAnswerIndex]

    answersArr.push(selectedAnswer)

    if (selectedAnswer === questions[index - 1].answer){
        correctAnswers++;
    }

    if (index < questions.length){
        startQuiz()
    } else {
        displayResult()
    }
}


function displayResult() {
    contentDiv.style.display = 'none';
    results.style.display = 'flex';
    results.style.fontSize = "30px"
    results.style.letterSpacing = "3px"

    results.innerText = `Results: ${correctAnswers}`;
}

