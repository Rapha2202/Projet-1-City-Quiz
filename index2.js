let runningQuestion = 0
let numberGoodAnswer = 0

const questionNumber = document.querySelector("#num-question")

const img = document.querySelector("#img")
const quest = document.querySelector("#quest")
const backQuest = document.querySelector(".question")

const start = document.querySelector(".start")
const startButton = document.querySelector(".start-button")

const end = document.querySelector(".end")
const endTxt = document.querySelector(".endTxt")

const runningTimer = document.querySelector(".progressbar")

const allButtons = document.querySelectorAll(".buttons button")
const answer1 = document.querySelector(".answer1")
const answer2 = document.querySelector(".answer2")
const answer3 = document.querySelector(".answer3")
const answer4 = document.querySelector(".answer4")

const display1 = document.querySelector(".display1")
const display2 = document.querySelector(".display2")
const display3 = document.querySelector(".display3")
const display4 = document.querySelector(".display4")

const goodNumber = document.querySelector("#numv")

const questions = [
    {
        "id": 1,
        "questiontxt": "Au foot, quel équipe Française a gagner le plus de Ligue 1?",
        "image": "assets/ligue1.jpg",
        "answer1": "Saint-Étienne",
        "answer2": "Marseille",
        "answer3": "Bordeaux",
        "answer4": "Paris Saint-Germain",
        "repv": ["answer4"],
        "info": "C'est bien le Paris Saint-Germain qui en a gagné le plus avec un total de 11 Ligue 1 suivi de prés par Saint-Étienne qui en a gagné 10."
    },
    {
        "id": 2,
        "questiontxt": "Dans Dragon Ball Z uniquement, combien Freezer a-t-il de forme?",
        "image": "assets/freezer.jpg",
        "answer1": "3 formes",
        "answer2": "4 formes",
        "answer3": "5 formes",
        "answer4": "6 formes",
        "repv": ["answer3"],
        "info": "Il y a bien 5 formes différentes, Freezer 1ere forme, Freezer 2eme forme, Freezer 3eme Forme, Freezer forme finale et mecha Freezer."
    },
    {
        "id": 3,
        "questiontxt": "Par quelle entreprise le jeu vidéo Minecraft a-t-il était racheté en 2014?",
        "image": "assets/minecraft.jpg",
        "answer1": "Sony",
        "answer2": "Microsoft",
        "answer3": "Mojang",
        "answer4": "Ubisoft",
        "repv": ["answer2"],
        "info": "C'est bien Microsoft qui a racheté le studio Mojang auteur du jeux vidéo Minecraft pour un total de 2.5 milliards de dollars."
    },
    {
        "id": 4,
        "questiontxt": "Tu as 1 chance sur 4 de répondre correctement a cette question",
        "image": "assets/lequel.jpg",
        "answer1": "Clique ici",
        "answer2": "Ou là",
        "answer3": "Peut etre là",
        "answer4": "Ou bien ici",
        "repv": ["answer1"],
        "info": "Petite question piège :p"
    },
    {
        "id": 5,
        "questiontxt": "Dans Pokemon, quel Pokemon possède la meilleure VF?",
        "image": "assets/pokemon.jpg",
        "answer1": "Starros",
        "answer2": "Poissirene",
        "answer3": "Stari",
        "answer4": "Papilusion",
        "repv": ["answer1", "answer2", "answer3", "answer4"],
        "info": "Ce sont toutes des pépites, allez les voir pour bien rigoler"
    },/*
    {
        "id": 6,
        "questiontxt": "",
        "image": "",
        "answer1": "",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "repv": [""],
        "info": ""
    },
    {
        "id": 7,
        "questiontxt": "",
        "image": "",
        "answer1": "",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "repv": [""],
        "info": ""
    },
    {
        "id": 8,
        "questiontxt": "",
        "image": "",
        "answer1": "",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "repv": [""],
        "info": ""
    },
    {
        "id": 9,
        "questiontxt": "",
        "image": "",
        "answer1": "",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "repv": [""],
        "info": ""
    },
    {
        "id": 10,
        "questiontxt": "",
        "image": "",
        "answer1": "",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "repv": [""],
        "info": ""
    },
    {
        "id": 11,
        "questiontxt": "",
        "image": "",
        "answer1": "",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "repv": [""],
        "info": ""
    },
    {
        "id": 12,
        "questiontxt": "",
        "image": "",
        "answer1": "",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "repv": [""],
        "info": ""
    },
    {
        "id": 13,
        "questiontxt": "",
        "image": "",
        "answer1": "",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "repv": [""],
        "info": ""
    },
    {
        "id": 14,
        "questiontxt": "",
        "image": "",
        "answer1": "",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "repv": [""],
        "info": ""
    },
    {
        "id": 15,
        "questiontxt": "",
        "image": "",
        "answer1": "",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "repv": [""],
        "info": ""
    },
    {
        "id": 16,
        "questiontxt": "",
        "image": "",
        "answer1": "",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "repv": [""],
        "info": ""
    },
    {
        "id": 17,
        "questiontxt": "",
        "image": "",
        "answer1": "",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "repv": [""],
        "info": ""
    },
    {
        "id": 18,
        "questiontxt": "",
        "image": "",
        "answer1": "",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "repv": [""],
        "info": ""
    },
    {
        "id": 19,
        "questiontxt": "",
        "image": "",
        "answer1": "",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "repv": [""],
        "info": ""
    },
    {
        "id": 20,
        "questiontxt": "",
        "image": "",
        "answer1": "",
        "answer2": "",
        "answer3": "",
        "answer4": "",
        "repv": [""],
        "info": ""
    }*/
]

let time

/**
 * Start Button
 */
questionNumber.innerHTML = `Question 1 sur ${questions.length} :`
goodNumber.innerHTML = `0 Bonne réponse sur ${questions.length}`

startButton.addEventListener("click", function () {
    start.style.display = "none"
    quest.innerHTML = questions[runningQuestion].questiontxt
    img.src = questions[runningQuestion].image

    display1.innerHTML = questions[runningQuestion].answer1
    display2.innerHTML = questions[runningQuestion].answer2
    display3.innerHTML = questions[runningQuestion].answer3
    display4.innerHTML = questions[runningQuestion].answer4
    timer()
})

/**
* Timer
*/

function timer() {
    clearTimeout(time);
    runningTimer.classList.add("animation")

    time = window.setTimeout(function () {
        answerColor()
    }, 10000)
}

/**
 * Appui sur reponse
*/

allButtons.forEach((buttons) => {
    buttons.addEventListener("click", function (event) {
        result()
        answerColor()
    })
})

/**
 * Verification bonne reponse
 */

function result() {
    for (let i = 0; i < questions[runningQuestion].repv.length; i++) {
        if (questions[runningQuestion].repv[i] == event.srcElement.className) {
            numberGoodAnswer++

            if (numberGoodAnswer > 1) {
                goodNumber.innerHTML = `${numberGoodAnswer} Bonnes réponses sur ${questions.length}`
            } else {
                goodNumber.innerHTML = `${numberGoodAnswer} Bonne réponse sur ${questions.length}`
            }
        }
    }
}

/**
 * réponses
 */

function answerColor() {
    allButtons.forEach((buttons) => {
        buttons.disabled = true
        buttons.style.color = "red"
        runningTimer.classList.remove("animation")
    })
    for (let i = 0; i < questions[runningQuestion].repv.length; i++) {
        let goodAnswer = [];
        goodAnswer[i] = document.querySelector(`.${questions[runningQuestion].repv[i]}`)
        goodAnswer[i].style.color = "green"
    }

    quest.innerHTML = questions[runningQuestion].info
    backQuest.classList.add("info")

    setTimeout(function () {
        allButtons.forEach((buttons) => {
            buttons.disabled = false
            buttons.style.color = "#F7F7F7"
        })
        runningQuestion++
        next()
    }, 7000)
}

/**
 * Passage a la question suivante
 */

function next() {
    if (runningQuestion < questions.length) {


        quest.innerHTML = questions[runningQuestion].questiontxt
        img.src = questions[runningQuestion].image
        backQuest.classList.remove("info")

        display1.innerHTML = questions[runningQuestion].answer1
        display2.innerHTML = questions[runningQuestion].answer2
        display3.innerHTML = questions[runningQuestion].answer3
        display4.innerHTML = questions[runningQuestion].answer4

        questionNumber.innerHTML = `Question ${questions[runningQuestion].id} sur ${questions.length}`

        timer()
    } else {
        end.style.display = "flex"
        if (numberGoodAnswer > 1) {
            endTxt.innerHTML = `Tu as finit notre Quiz sur un total de ${numberGoodAnswer} Bonnes réponses sur ${questions.length}`
        } else {
            endTxt.innerHTML = `Tu as finit notre Quiz sur un total de ${numberGoodAnswer} Bonne réponse sur ${questions.length}`
        }
    }
}
