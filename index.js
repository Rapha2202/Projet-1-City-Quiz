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
        "questiontxt": "Dans quelle discipline ne trouve t-on pas de Kata?",
        "image": "assets/kata.jpg",
        "answer1": "Karaté",
        "answer2": "Judo",
        "answer3": "Chez Maître Anthony",
        "answer4": "MMA",
        "repv": ["answer4"],
        "info": "C'est bien en MMA qu'il n'y a pas de Kata (sacré CodeWars)"
    },
    {
        "id": 7,
        "questiontxt": "Lequel de ces acteurs n'est pas Britannique?",
        "image": "assets/londre.jpg",
        "answer1": "Sean Connery",
        "answer2": "Emma Watson",
        "answer3": "Cate Blanchett",
        "answer4": "Idris Elba",
        "repv": ["answer3"],
        "info": "C'est Cate Blanchett qui n'est pas Britanique"
    },
    {
        "id": 8,
        "questiontxt": "Quel est le titre de la version originale de la chanson Gangsta's paradise reprise par Coolio?",
        "image": "assets/gangstaparadise.jpg",
        "answer1": "Present Paradise",
        "answer2": "Futur Paradise",
        "answer3": "Pastime Paradise",
        "answer4": "Ah?! Il y a une version originale?",
        "repv": ["answer3"],
        "info": "Et oui il y a bien une version originale du nom de Pastime Paradise"
    },
    {
        "id": 9,
        "questiontxt": "Dans 'Dragon Ball', sur quelle île se déroule les championnats du monde d'arts martiaux?",
        "image": "assets/championat.jpg",
        "answer1": "L'île Papaya",
        "answer2": "L'île Kiwi",
        "answer3": "L'île Coco",
        "answer4": "L'île Blue",
        "repv": ["answer1"],
        "info": "C'est bien l'île Papaya et le savait tu cette île ne possède aucune autres saisons que l'été, elle possède un climat doux et chaud en permanence"
    },
    {
        "id": 10,
        "questiontxt": "Dans Hunter x Hunter que représente les numeros de la brigade fantome?",
        "image": "assets/brigade-fantome.jpg",
        "answer1": "Les mois de l'année",
        "answer2": "Les jours de la semaine",
        "answer3": "Les saisons",
        "answer4": "Les doigts de la main",
        "repv": ["answer1"],
        "info": "Il y a en bien 12 membres comme le nombres de mois dans une année"
    },
    {
        "id": 11,
        "questiontxt": "Quel est le nom de \"l\'anciennement fifa\" en 2023?",
        "image": "assets/fifa.jpg",
        "answer1": "UFC 24",
        "answer2": "Call of Duty 24",
        "answer3": "OFC 24",
        "answer4": "EA Sports FC 24",
        "repv": ["answer4"],
        "info": "Et oui le jeux a changer de nom pour s'appeler EA Sports FC 24"
    },
    {
        "id": 12,
        "questiontxt": "Quand est décédé Michael Jackson?",
        "image": "assets/michael.jpg",
        "answer1": "25 juin 2009",
        "answer2": "25 janvier 2009",
        "answer3": "25 decembre (an 1)",
        "answer4": "jamais(il vit tjr dans nos coeur)",
        "repv": ["answer1", "answer4"],
        "info": "C'est bien le 25 Juin 2009 qu'il est décédé"
    },
    {
        "id": 13,
        "questiontxt": "Au catch, Undertaker possède une gimmick lors de son entrée, quelle est-elle?",
        "image": "assets/undertaker.jpg",
        "answer1": "Selfie filtre mort vivant",
        "answer2": "Il met thriller et danse",
        "answer3": "Il tourne ses yeux au blancs",
        "answer4": "Il sort d'une tombe",
        "repv": ["answer3"],
        "info": "Et oui il tourne ses yeux au blanc lors de son entrée"
    },
    {
        "id": 14,
        "questiontxt": "Dans Bocchi The Rock, quel est le problème de l'héroine?",
        "image": "assets/bocchi.jpg",
        "answer1": "Harcélement imaginaire",
        "answer2": "Full raciste",
        "answer3": "Point faible, trop forte",
        "answer4": "Timide jusqu'a la mort",
        "repv": ["answer1", "answer4"],
        "info": "Elle a en effet 2 problèmes, elle s'imagine un harcelement et est extremement timide"
    },
    {
        "id": 15,
        "questiontxt": "La bonne reponse est la quatrième, choisis la",
        "image": "assets/confusion.jpg",
        "answer1": "C'est une mauvaise réponse",
        "answer2": "Je ne te la conseille pas",
        "answer3": "Celle la elle sent pas bon",
        "answer4": "Celle ci c'est la meilleure",
        "repv": ["answer4"],
        "info": "Et oui je te l'avais dit la bonne réponse est la 4eme"
    },
    {
        "id": 16,
        "questiontxt": "Parmis ces Mike, lequel a composé la musique de l'Exorciste?",
        "image": "assets/exorciste.jpg",
        "answer1": "Mike Tyson",
        "answer2": "Mike Jagger",
        "answer3": "Mike Oldfield",
        "answer4": "Mike Maignan",
        "repv": ["answer3"],
        "info": "C'est bien Mike Oldfield qui a composer la musique de l'exorciste"
    },
    {
        "id": 17,
        "questiontxt": "Dans l'animé Sword Art Online comment s'appel le systeme qui entretien le Jeux Vidéo dans lequel le héro est bloqué?",
        "image": "assets/aincrad.jpg",
        "answer1": "Cardinal",
        "answer2": "Administrator",
        "answer3": "Aincrad",
        "answer4": "Yggdrasil",
        "repv": ["answer1"],
        "info": "Le systeme porte bien le nom de Carbinal et le monde virtuel de la saison 1 est l'Aincrad que tu peux voir afficher ci contre"
    },
    {
        "id": 18,
        "questiontxt": "Quel est le meilleur language orienté objet?",
        "image": "assets/java.jpg",
        "answer1": "PHP",
        "answer2": "JavaScript",
        "answer3": "HTML",
        "answer4": "Java",
        "repv": ["answer2"],
        "info": "C'est bien le JavaScript le meilleur :) (Oui c'est une photo de Java et alors?)"
    },
    {
        "id": 19,
        "questiontxt": "Dans Hunter x Hunter comment est mort Meruem le roi des fourmi chimeres?",
        "image": "assets/Meruem.jpg",
        "answer1": "Super attaque du Héro",
        "answer2": "Insecticide",
        "answer3": "Bombe Nucléaire",
        "answer4": "Noyade",
        "repv": ["answer2"],
        "info": "Meruem est bien mort de l'incecticide contenu dans la bombe nucléaire donc logiquement ce n'est pas la bombe qui la tuer"
    },
    {
        "id": 20,
        "questiontxt": "Dans One Piece quel est le meilleur navire?",
        "image": "assets/one-piece.jpg",
        "answer1": "Vogue merry qui ne coule pas",
        "answer2": "Le Thousand Sunny (ca brille)",
        "answer3": "Oro Jackson (avec roger vivant)",
        "answer4": "Red Force gitanos",
        "repv": ["answer1"],
        "info": "Et oui le meilleur bateau reste le Vogue Merry"
    }
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

const table = document.querySelector(".leaderboard")


/**
 * Execution au lancement
 */

questionNumber.innerHTML = `Question 1 sur ${questions.length} :`
goodNumber.innerHTML = `0 Bonne réponse sur ${questions.length}`
nextButton.disabled = true
let name = prompt("Quel est votre nom")
while (name === null || name == "") {
    name = prompt("Quel est votre nom")
}



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
        let endTime = (Math.round(Date.now() / 1000)) - startTime

        const leaderboard = [
            {
                "user": "user 1",
                "time": 22,
                "good": 20,
            },
            {
                "user": "user 2",
                "time": 27,
                "good": 18,
            },
            {
                "user": "user 3",
                "time": 31,
                "good": 17,
            },
            {
                "user": "user 4",
                "time": 40,
                "good": 15,
            },
            {
                "user": "user 5",
                "time": 35,
                "good": 13,
            },
            {
                "user": "user 6",
                "time": 31,
                "good": 11,
            },
            {
                "user": "user 7",
                "time": 20,
                "good": 10,
            },
            {
                "user": "user 8",
                "time": 26,
                "good": 8,
            },
            {
                "user": "user 9",
                "time": 38,
                "good": 7,
            },
            {
                "user": "user 10",
                "time": 50,
                "good": 1,
            },
            {
                "user": name,
                "time": endTime,
                "good": numberGoodAnswer,
            }
        ]

        end.style.display = "flex"

        let leaderboardFiltered = (joueur) => {
            return joueur.sort((a, b) => {
                return a.time - b.time
            }).sort((a, b) => {
                return b.good - a.good
            })
        }


        if (numberGoodAnswer > 1) {
            endTxt.innerHTML = `Bravo ${name} tu as finit notre Quiz sur un total de ${numberGoodAnswer} Bonnes réponses sur ${questions.length} en ${endTime} secondes </br>`
        } else {
            endTxt.innerHTML = `Bravo ${name} tu as finit notre Quiz sur un total de ${numberGoodAnswer} Bonne réponse sur ${questions.length} en ${endTime} secondes </br>`
        }

        /*for (let i = 0; i < leaderboard.length; i++) {
            endTxt.innerHTML += `#${[i + 1]} Nom: ${leaderboardFiltered(leaderboard)[i].user}, Points: ${leaderboardFiltered(leaderboard)[i].good}, Temps:${leaderboardFiltered(leaderboard)[i].time} secondes</br>`
        }*/

        function displayLeaderboard() {
            let theExport = ""
            leaderboardFiltered(leaderboard).forEach((player) => theExport += '<tr><td>' + player.user + '</td><td>' + player.good + '</td><td>' + player.time + '</td></tr>');
            table.innerHTML = theExport; //Why have good ID's when you can have bad ones? | Who needs children when we can use innerHTML?
        }
    
        displayLeaderboard()
    }

})