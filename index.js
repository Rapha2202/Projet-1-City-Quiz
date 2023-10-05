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
        "image": "assets/championnat.jpg",
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
let name
let timerSong = new Audio('assets/Timer.mp3')
let fond = new Audio('assets/info-tapis.mp3')
let fondGod = new Audio('assets/Skyrim_Theme.mp3')

fondGod.loop = true
fond.loop = true

const questionNumber = document.querySelector("#num-question")

const img = document.querySelector("#img")
const quest = document.querySelector("#quest")
const backQuest = document.querySelector(".question")

const start = document.querySelector(".start")
const startButton = document.querySelector("#start-button")

const end = document.querySelector(".end")
const endTxt = document.querySelector("#endTxt")

const runningTimer = document.querySelector(".progressbar")

const allButtons = document.querySelectorAll(".buttons button")
const answer1 = document.querySelector(".answer1")
const answer2 = document.querySelector(".answer2")
const answer3 = document.querySelector(".answer3")
const answer4 = document.querySelector(".answer4")

const nextButton = document.querySelector("#nextButton")

const goodNumber = document.querySelector("#numv")

const table = document.querySelector("#leaderboard")

const muteButton = document.querySelector("#mute")


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
    if(name.toLowerCase() === "sacod"){
        allButtons.forEach((buttons) => {
            buttons.disabled = true
            nextButton.disabled = false
            buttons.style.color = "green"
            runningTimer.classList.remove("animation")
            timerSong.pause()
            timerSong.currentTime = 0
        })

        quest.innerHTML = "Pas d'information pour toi tu es en Godmode"
        backQuest.classList.add("info")
    }else {
        allButtons.forEach((buttons) => {
            buttons.disabled = true
            nextButton.disabled = false
            buttons.style.color = "red"
            runningTimer.classList.remove("animation")
            timerSong.pause()
            timerSong.currentTime = 0
        })
        for (let i = 0; i < questions[runningQuestion].repv.length; i++) {
            let goodAnswer = [];
            goodAnswer[i] = document.querySelector(`.${questions[runningQuestion].repv[i]}`)
            goodAnswer[i].style.color = "green"
        }

        quest.innerHTML = questions[runningQuestion].info
        backQuest.classList.add("info")
    }



}


/**
 * Timer
 */

function timer() {
    clearTimeout(time)
    runningTimer.classList.add("animation")
    timerSong.play()

    time = window.setTimeout(function () {
        answerColor()
    }, 10000)
}


/**
 * Start Button
 */

startButton.addEventListener("click", function (event) {
    name = document.forms["name"]["name"].value
    event.preventDefault();

    if(name.toLowerCase() === "sacod"){
        const godmode = new Audio("assets/God_Mode.mp3")
        godmode.play()
        setTimeout(function () {
            fondGod.play()
        }, 1000)

    } else {
        fond.play()
    }

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
        if(name.toLowerCase() === "sacod"){
            numberGoodAnswer++
        } else {
            clearTimeout(time)
            for (let i = 0; i < questions[runningQuestion].repv.length; i++) {
                if (questions[runningQuestion].repv[i] == event.srcElement.className) {
                    numberGoodAnswer++
        }
    }
}
                if (numberGoodAnswer > 1) {
                    goodNumber.innerHTML = `${numberGoodAnswer} Bonnes réponses sur ${questions.length}`
                } else {
                    goodNumber.innerHTML = `${numberGoodAnswer} Bonne réponse sur ${questions.length}`
                }


        answerColor()
    })
})


/**
 * Next Button
 */
nextButton.addEventListener("click", function () {

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

        const multiName = ['Abigail', 'Alice', 'Amber', 'Amelia', 'Amy', 'Ava', 'Brooke','Caitlin', 'Charlotte', 'Chloe', 'Daisy', 'Elizabeth', 'Ella', 'Ellie','Emily', 'Emma', 'Erin', 'Eva', 'Evie', 'Freya', 'Grace', 'Hannah','Holly', 'Imogen', 'Isabel', 'Isabella', 'Isabelle', 'Isla', 'Jasmine','Jessica', 'Katie', 'Keira', 'Leah', 'Lilly', 'Lily', 'Lola', 'Lucy','Matilda', 'Megan', 'Mia', 'Millie', 'Molly', 'Olivia', 'Phoebe','Poppy', 'Ruby', 'Scarlett', 'Sophia', 'Sophie', 'Summer', 'Adam','Alex', 'Alexander', 'Alfie', 'Archie', 'Benjamin', 'Callum','Cameron', 'Charlie', 'Connor', 'Daniel', 'Dylan', 'Edward', 'Ethan','Finley', 'George', 'Harrison', 'Harry', 'Harvey', 'Henry', 'Isaac','Jack', 'Jacob', 'Jake', 'James', 'Jayden', 'Joseph', 'Joshua', 'Leo','Lewis', 'Liam', 'Logan', 'Lucas', 'Luke', 'Matthew', 'Max','Mohammed', 'Muhammad', 'Nathan', 'Noah', 'Oliver', 'Oscar', 'Owen','Rhys', 'Riley', 'Ryan', 'Samuel', 'Thomas', 'Tyler', 'William']


        const leaderboard = [
            {
                "user": multiName[Math.floor(Math.random() * multiName.length)],
                "time": Math.floor(Math.random() * (90 - 20 + 1) ) + 20,
                "good": Math.floor(Math.random() * (20 - 1 + 1) ) + 1,
            },
            {
                "user": "Boss",
                "time": 20,
                "good": 20,
            },
            {
                "user": multiName[Math.floor(Math.random() * multiName.length)],
                "time": Math.floor(Math.random() * (90 - 20 + 1) ) + 20,
                "good": Math.floor(Math.random() * (20 - 1 + 1) ) + 1,
            },
            {
                "user": multiName[Math.floor(Math.random() * multiName.length)],
                "time": Math.floor(Math.random() * (90 - 20 + 1) ) + 20,
                "good": Math.floor(Math.random() * (20 - 1 + 1) ) + 1,
            },
            {
                "user": multiName[Math.floor(Math.random() * multiName.length)],
                "time": Math.floor(Math.random() * (90 - 20 + 1) ) + 20,
                "good": Math.floor(Math.random() * (20 - 1 + 1) ) + 1,
            },
            {
                "user": multiName[Math.floor(Math.random() * multiName.length)],
                "time": Math.floor(Math.random() * (90 - 20 + 1) ) + 20,
                "good": Math.floor(Math.random() * (20 - 1 + 1) ) + 1,
            },
            {
                "user": multiName[Math.floor(Math.random() * multiName.length)],
                "time": Math.floor(Math.random() * (90 - 20 + 1) ) + 20,
                "good": Math.floor(Math.random() * (20 - 1 + 1) ) + 1,
            },
            {
                "user": multiName[Math.floor(Math.random() * multiName.length)],
                "time": Math.floor(Math.random() * (90 - 20 + 1) ) + 20,
                "good": Math.floor(Math.random() * (20 - 1 + 1) ) + 1,
            },
            {
                "user": multiName[Math.floor(Math.random() * multiName.length)],
                "time": Math.floor(Math.random() * (90 - 20 + 1) ) + 20,
                "good": Math.floor(Math.random() * (20 - 1 + 1) ) + 1,
            },
            {
                "user": multiName[Math.floor(Math.random() * multiName.length)],
                "time": Math.floor(Math.random() * (90 - 20 + 1) ) + 20,
                "good": Math.floor(Math.random() * (20 - 1 + 1) ) + 1,
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
            endTxt.innerHTML = `Bravo ${name} ! Tu as fini notre Quiz sur un total de ${numberGoodAnswer} / ${questions.length} en ${endTime} secondes </br>`
        } else {
            endTxt.innerHTML = `Bravo ${name} ! Tu as fini notre Quiz sur un total de ${numberGoodAnswer} / ${questions.length} en ${endTime} secondes </br>`
        }

        function displayLeaderboard() {
            let theExport = ""
            leaderboardFiltered(leaderboard).forEach((player) => theExport += '<tr><td>' + player.user + '</td><td>' + player.good + '</td><td>' + player.time + '</td></tr>');
            table.innerHTML = theExport;
        }
    
        displayLeaderboard()
    }

})


/**
 * Mute Button
*/

muteButton.addEventListener("click", function () {
        if(mute == false){
            mute = true
        } else {
            mute = false
        }

        if(name.toLowerCase() === "sacod"){
            if(mute == true){
                fondGod.pause()
            } else {
                fondGod.play()
            }

        } else {
            if(mute == true){
                fond.pause()
            } else {
                fond.play()
            }
        }
})