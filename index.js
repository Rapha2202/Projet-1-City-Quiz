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
    },
    {
        "id": 6,
        "questiontxt": "Dans quelle discipline ne trouve t-on pas de hakas?",
        "image": "",
        "answer1": "Karaté",
        "answer2": "Judo",
        "answer3": "Chez Maître Anthony",
        "answer4": "MMA",
        "repv": ["answer4"],
        "info": ""
    },
    {
        "id": 7,
        "questiontxt": "Lequel de ces acteurs n'est pas Britannique?",
        "image": "",
        "answer1": "Sean CONNERY",
        "answer2": "Emma WATSON",
        "answer3": "Cate BLANCHETT",
        "answer4": "Idris ELBA",
        "repv": ["answer3"],
        "info": ""
    },
    {
        "id": 8,
        "questiontxt": "Quel est le titre de la version originale de la chanson Gangsta's paradise reprise par Coolio?",
        "image": "",
        "answer1": "Present Paradise",
        "answer2": "Futur Paradise",
        "answer3": "Pastime Paradise",
        "answer4": "Ah?! Il y a une version originale?",
        "repv": ["answer3"],
        "info": ""
    },
    {
        "id": 9,
        "questiontxt": "Dans 'Dragon Ball', sur quelle île se déroule les championnats du monde d'arts martiaux?",
        "image": "",
        "answer1": "L'île papaye",
        "answer2": "L'île kiwi",
        "answer3": "L'île coco",
        "answer4": "L'île bleue",
        "repv": ["answer1"],
        "info": ""
    },
    {
        "id": 10,
        "questiontxt": "Dans Hunter x Hunter que représente les numeros de la brigade fantome?",
        "image": "",
        "answer1": "Les mois de l'année",
        "answer2": "Les jours de la semaine",
        "answer3": "Les saisons",
        "answer4": "Les doigts de la main",
        "repv": ["answer1"],
        "info": ""
    },
    {
        "id": 11,
        "questiontxt": "Quel est le nom de \"l\'anciennement fifa\" en 2023?",
        "image": "",
        "answer1": "UFC 24",
        "answer2": "Call of Duty 24",
        "answer3": "OFC 24",
        "answer4": "EA Sports FC 24",
        "repv": ["answer4"],
        "info": ""
    },
    {
        "id": 12,
        "questiontxt": "Quand est mort Michael Jackson?",
        "image": "",
        "answer1": "25 juin 2009",
        "answer2": "25 janvier 2009",
        "answer3": "25 decembre (an 1)",
        "answer4": "jamais(il vit tjr dans nos coeur)",
        "repv": ["answer1", "answer4"],
        "info": ""
    },
    {
        "id": 13,
        "questiontxt": "Au catch, Undertaker possède une gimmick lors de son entrée, quelle est-elle?",
        "image": "",
        "answer1": "Selfie filtre mort vivant",
        "answer2": "Il met thriller et danse",
        "answer3": "Il tourne ses yeux au blancs",
        "answer4": "Il sort d'une tombe",
        "repv": ["answer3"],
        "info": ""
    },
    {
        "id": 14,
        "questiontxt": "Dans Bocchi The Rock, quel est le problème de l'héroine: ",
        "image": "",
        "answer1": "Harcélement imaginaire",
        "answer2": "Full raciste",
        "answer3": "Point faible, trop forte",
        "answer4": "Timide jusqu'a la mort",
        "repv": ["answer1", "answer4"],
        "info": ""
    },
    {
        "id": 15,
        "questiontxt": "La bonne reponse est la quatrième, choisis la",
        "image": "",
        "answer1": "C'est une mauvaise réponse",
        "answer2": "Je ne te la conseille pas",
        "answer3": "Celle la elle sent pas bon",
        "answer4": "Celle ci c'est la meilleure",
        "repv": ["answer4"],
        "info": ""
    },
    {
        "id": 16,
        "questiontxt": "Parmis ces Mike, lequel a composé la musique de l'Exorciste",
        "image": "",
        "answer1": "Mike Tyson",
        "answer2": "Mike Jagger",
        "answer3": "Mike Oldfield",
        "answer4": "Mike Maignan",
        "repv": ["answer3"],
        "info": ""
    },/*
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

/**
 * Variables
 */

let runningQuestion = 0
let numberGoodAnswer = 0
let time
let startTime

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

const nextButton = document.querySelector(".nextButton")

const goodNumber = document.querySelector("#numv")


/**
 * Execution au lancement
 */

questionNumber.innerHTML = `Question 1 sur ${questions.length} :`
goodNumber.innerHTML = `0 Bonne réponse sur ${questions.length}`
nextButton.disabled = true


/**
 * Après vérification d'une réponse
 */

function answerColor() {
    allButtons.forEach((buttons) => {
        buttons.disabled = true
        nextButton.disabled = false
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
}


/**
 * Timer
 */

function timer() {
    clearTimeout(time)
    runningTimer.classList.add("animation")

    time = window.setTimeout(function () {
        answerColor()
    }, 10000)
}


/**
 * Start Button
 */

startButton.addEventListener("click", function () {
    startTime = Math.round(Date.now() / 1000)

    start.style.display = "none"
    quest.innerHTML = questions[runningQuestion].questiontxt
    img.src = questions[runningQuestion].image

    answer1.innerHTML = questions[runningQuestion].answer1
    answer2.innerHTML = questions[runningQuestion].answer2
    answer3.innerHTML = questions[runningQuestion].answer3
    answer4.innerHTML = questions[runningQuestion].answer4
    timer()
})


/**
 * Appui sur reponse
*/

allButtons.forEach((buttons) => {
    buttons.addEventListener("click", function (event) {
        clearTimeout(time)
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
        answerColor()
    })
})


/**
 * Next Button
 */
nextButton.addEventListener("click", function (event) {

    nextButton.disabled = true

    allButtons.forEach((buttons) => {
        buttons.disabled = false
        buttons.style.color = "#F7F7F7"
    })
    runningQuestion++
    if (runningQuestion < questions.length) {

        quest.innerHTML = questions[runningQuestion].questiontxt
        img.src = questions[runningQuestion].image
        backQuest.classList.remove("info")

        answer1.innerHTML = questions[runningQuestion].answer1
        answer2.innerHTML = questions[runningQuestion].answer2
        answer3.innerHTML = questions[runningQuestion].answer3
        answer4.innerHTML = questions[runningQuestion].answer4

        questionNumber.innerHTML = `Question ${questions[runningQuestion].id} sur ${questions.length}`

        timer()
    } else {    //Affichage du menu de fin
        let endTime = (Math.round(new Date().getTime() / 1000)) - startTime

        end.style.display = "flex"
        if (numberGoodAnswer > 1) {
            endTxt.innerHTML = `Tu as finit notre Quiz sur un total de ${numberGoodAnswer} Bonnes réponses sur ${questions.length} en ${endTime} secondes`
        } else {
            endTxt.innerHTML = `Tu as finit notre Quiz sur un total de ${numberGoodAnswer} Bonne réponse sur ${questions.length} en ${endTime} secondes`
        }
    }

})