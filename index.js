let runningQuestion = 0
let numberGoodAnswer = 0

const questionNumber = document.querySelector("#num-question")

const img = document.querySelector("#img")
const quest = document.querySelector("#quest")

const allButtons = document.querySelectorAll("button")
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
    { "id": 1, "questiontxt": "Au foot, quel équipe Française a gagner le plus de Ligue 1?", "image": "assets/ligue1.jpg", "answer1": "Saint-Étienne", "answer2": "Marseille", "answer3": "Bordeaux", "answer4": "Paris-Saint-Germain", "repv": "answer4" },
    { "id": 2, "questiontxt": "Dans Dragon Ball Z uniquement, combien Freezer a-t-il de forme?", "image": "assets/freezer.jpg", "answer1": "3 formes", "answer2": "4 formes", "answer3": "5 formes", "answer4": "6 formes", "repv": "answer3" },
    { "id": 3, "questiontxt": "Par quelle entreprise le jeu vidéo Minecraft a-t-il était racheté en 2014?", "image": "assets/minecraft.jpg", "answer1": "Sony", "answer2": "Microsoft", "answer3": "Mojang", "answer4": "Ubisoft", "repv": "answer2" },
    { "id": 4, "questiontxt": "Tu as 1 chance sur 4 de répondre correctement a cette question", "image": "assets/lequel.jpg", "answer1": "Clique ici", "answer2": "Ou là", "answer3": "Peut etre là", "answer4": "Ou bien ici", "repv": "answer1" },
    { "id": 5, "questiontxt": "A quoi correspondent les chiffres sur les tatouages de la brigade fantomes?", "image": "", "answer1": "Jour de la semaine", "answer2": "Cycle de la lune", "answer3": "Mois de l'année", "answer4": "Nombre de saison", "repv": "answer3" },
    { "id": 6, "questiontxt": "Dans Bocchi The Rock, quel est le problème de l'héroine?", "image": "", "answer1": "Harcélement imaginaire", "answer2": "Full raciste", "answer3": "Point faible, trop forte", "answer4": "Timide jusqu'a la mort", "repv": "answer4" },
    { "id": 7, "questiontxt": "Dans quel sport le kata n'est-il pas pratiqué?", "image": "", "answer1": "Le karaté", "answer2": "Le judo", "answer3": "Le MMA", "answer4": "La Wild code school", "repv": "" },
    { "id": 8, "questiontxt": "Combien de fois la France a t elle organisé les Jeux Olympiques?", "image": "", "answer1": "0 fois", "answer2": "2 fois", "answer3": "3 fois", "answer4": "5 fois", "repv": "" },
    { "id": 9, "questiontxt": "Dans Pokemon: Quel Pokemon possède la meilleure VF?", "image": "", "answer1": "Starros", "answer2": "Poissirene", "answer3": "Stari", "answer4": "Papilusion", "repv": "" },
    { "id": 10, "questiontxt": "Au catch, Undertaker possède une gimmick lors de son entrée, quelle est-elle ?", "image": "", "answer1": "Selfie filtre mort vivant", "answer2": "Il met thriller et danse", "answer3": "Il tourne ses yeux au blancs", "answer4": "Il sort d'une tombe", "repv": "" },
    { "id": 11, "questiontxt": "Quel est le meilleur navire ?", "image": "", "answer1": "Vogue merry qui coule pas", "answer2": "Le Thousand Sunny(ca brille)", "answer3": "Oro Jackson(avec roger vivant)", "answer4": "Red Force gitanos", "repv": "" },
    { "id": 12, "questiontxt": 'Quel est le nom de l"anciennement fifa" en 2023?', "image": "", "answer1": "UFC 24", "answer2": "Call of Duty 24", "answer3": "OFC 24", "answer4": "EA FC 24", "repv": "" },
    { "id": 13, "questiontxt": "Quand est mort michael jackson?", "image": "", "answer1": "25 juin 2009", "answer2": "25 janvier 2009", "answer3": "25 decembre (an 1)", "answer4": "jamais (il vit tjr dans nos coeur)", "repv": "" },/*
    { "id": 14, "questiontxt": "", "image": "", "answer1": "", "answer2": "", "answer3": "", "answer4": "", "repv": "" },
    { "id": 15, "questiontxt": "", "image": "", "answer1": "", "answer2": "", "answer3": "", "answer4": "", "repv": "" },
    { "id": 16, "questiontxt": "", "image": "", "answer1": "", "answer2": "", "answer3": "", "answer4": "", "repv": "" },
    { "id": 17, "questiontxt": "", "image": "", "answer1": "", "answer2": "", "answer3": "", "answer4": "", "repv": "" },
    { "id": 18, "questiontxt": "", "image": "", "answer1": "", "answer2": "", "answer3": "", "answer4": "", "repv": "" },
    { "id": 19, "questiontxt": "", "image": "", "answer1": "", "answer2": "", "answer3": "", "answer4": "", "repv": "" },
    { "id": 20, "questiontxt": "", "image": "", "answer1": "", "answer2": "", "answer3": "", "answer4": "", "repv": "" }*/]

let time
let goodAnswer

if (runningQuestion < questions.length) {


    /**
     * Passage a la question suivante
     */

    function next() {
        quest.innerHTML = questions[runningQuestion].questiontxt
        img.src = questions[runningQuestion].image

        display1.innerHTML = questions[runningQuestion].answer1
        display2.innerHTML = questions[runningQuestion].answer2
        display3.innerHTML = questions[runningQuestion].answer3
        display4.innerHTML = questions[runningQuestion].answer4

        questionNumber.innerHTML = `Question ${questions[runningQuestion].id} sur 20`

        timer()
    }

    /**
     * Verification bonne reponse
     */

    function result() {
        if (questions[runningQuestion].repv == event.srcElement.className) {
            numberGoodAnswer++

            if (numberGoodAnswer > 1) {
                goodNumber.innerHTML = `${numberGoodAnswer} Bonnes réponses sur 20`
            } else {
                goodNumber.innerHTML = `${numberGoodAnswer} Bonne réponse sur 20`
            }
        }
    }

    /**
     * réponses
     */

    function answerColor() {
        goodAnswer = document.querySelector(`.${questions[runningQuestion].repv}`)

        allButtons.forEach((buttons) => {
            buttons.disabled = true
            buttons.style.color = "red"
        })

        goodAnswer.style.color = "green"

        setTimeout(function () {
            allButtons.forEach((buttons) => {
                buttons.disabled = false
                buttons.style.color = "#F7F7F7"
            })
            runningQuestion++
            next()
        }, 3000)
    }

    /**
     * Timer
     */

    function timer() {
        time = window.setTimeout(function () {
            answerColor()
        }, 5000)
    }


    /**
     * Appui sur reponse
     */

    timer()

    allButtons.forEach((buttons) => {
        buttons.addEventListener("click", function () {
            result()
            clearTimeout(time);
            answerColor()
        })
    })
}