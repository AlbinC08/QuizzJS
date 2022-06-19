let tab_question = ["En quelle année fut lancée la sonde Voyager 1 ?", "Que représente une unité astronomique (UA) ?", "comment se nomme la planète naine qui a une période de révolution (années) supérieure à celle de Pluton ?", "Que représente, en années terrestres, une année galactique ?", "Dans quel bras spiral de la voie lactée se situe le système solaire ?", "Quelle est la galaxie la plus proche de la nôtre ?", "Qui a inventé la première lunette astronomique au début du XVIIème siècle ?", "Comment appelle t-on les voyageurs spatiaux européens ?", "Qu’est ce que le programme SETI ?", "Quelle est, à ce jour (juin 2011) l’estimation la plus précise de l’âge de l’Univers ?"];
let tab_answer = [
    ["1975", "1977", "1979", "1981"],
    ["La distance entre le Soleil et l’étoile la plus proche de celui-ci", "La distance Soleil-Pluton", "La distance Terre-Soleil", "La distance Terre-Mars"],
    ["Eris", "Io", "Charon", "Titan"],
    ["Entre 500 et 600 millions d’années", "Entre 350 et 400 millions d’années", "Entre 225 et 250 millions d’années", "Plus d’un milliard d’années"],
    ['Le bras d’Orion', 'Le bras de Persée', 'Le bras Sagittaire-Carène', 'Le bras Règle-Cygne'],
    ['Sagittaire', 'Andromède', 'Phœnix', 'Vierge'],
    ['Aristote', 'Platon', 'Socrate', 'Galilée'],
    ['Les astronautes', 'Les spationautes', 'Les cosmonautes', 'Les taïkonautes'],
    ['Un programme de recherche sur les exoplanètes', 'Un programme de recherche d’intelligence extraterrestre', 'Un programme sur les moteurs spatiaux', 'Un programme concernant la planète Mars'],
    ['11,7 milliards d’années', '12,7 milliards d’années', '13,7 milliards d’années', '14,7 milliards d’années'],
]
let good_answer = [tab_answer[0][1], tab_answer[1][2], tab_answer[2][0], tab_answer[3][2], tab_answer[4][0], tab_answer[5][1], tab_answer[6][3], tab_answer[7][1], tab_answer[8][1], tab_answer[9][2]]
let score = 0
let time = 30
let random = 0
let num = 4
let nmb = aleatoire(1, 4)
function aleatoire(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function displayTime(chrono) {
    document.querySelector('#rebour').innerText = chrono
}
function updateTime() {
    if (time > 0) {
        setTimeout(function () {
            time--
            displayTime(time)
            updateTime()
        }, 1000)
    } if (time === 0) {
        changeStyle(nmb)
        suppr_question()
        quizz()
        displayTime(time = 30)
        updateTime()
    } if (tab_question.length == 0) {
        document.querySelector('.aiguille').classList.remove("hand", "seconds");
        document.querySelector('.horloge').classList.remove('clock');
        document.querySelector('#rebour').innerText = ''
    }
}
function question() {
    document.querySelector("#question").innerText = tab_question[random]
}
function answer() {
    let btns = document.querySelectorAll(".button")
    for (let i = 0; i < btns.length; i++) {
        btns[i].innerText = tab_answer[random][i]
    }
}
function color_button() {

}
function check_answer(element) {
    if (element.innerText == good_answer[random]) {
        score++
        document.querySelector("#score").innerText = "score = " + score
        changeStyle(nmb)
    } if (tab_question.length == 0) {
        document.querySelector('#rebour').innerText = ''

    } else {

        restart_animation(restart)
        displayTime(time = 30)
        suppr_question()
        changeStyle(nmb)
        quizz()
    }
}
function suppr_question() {
    tab_question.splice(random, 1)
    tab_answer.splice(random, 1)
    good_answer.splice(random, 1)
}
function quizz() {
    if (tab_question.length == 0) {
        win()
        time = 0
        displayTime(0)
        let buttons = document.querySelectorAll('.button')
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].innerHTML = '';
        }
    } else {
        random = aleatoire(0, tab_question.length - 1);
        question()
        answer()
    }
}
function win() {
    if (score == 10) {
        document.querySelector("#question").innerText = "bravo la connaissance tu as, tu es incollable!!"
    } else if (score == 8 || score == 9) {
        document.querySelector("#question").innerText = "continue comme ça et maître Jedi tu sauras"
    } else if (score == 6 || score == 7) {
        document.querySelector("#question").innerText = "pas mal, jeune padawan, continue de t'entrainer"
    } else if (score == 4 || score == 5) {
        document.querySelector("#question").innerText = "bof, attention, tu bascule du côté obscur..."
    } else if (score == 2 || score == 3) {
        document.querySelector("#question").innerText = "vraiment pas terrible, encore un effort et t'es une quiche"
    } else {
        document.querySelector("#question").innerText = "ton cerveau c'est comme l'espace, beaucoup de vide"
    }
}
function changeStyle(nmb) {
    if (tab_question.length > 0) {
        nmb = aleatoire(1, 4)
        document.querySelector("#style").href = "assets/css/position" + nmb + ".css"
    }
}
function restart_animation(element) {
    element.classList.toggle('alt')
}
function play(idPlayer) {
    var player = document.querySelector('#' + idPlayer);
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}
function resume(idPlayer) {
    var player = document.querySelector('#' + idPlayer);
    player.currentTime = 0;
    player.pause();
}
document.querySelector('#score').addEventListener('dblclick', function (e) {
    console.log('stop_music');
    resume('audioPlayer')
});
displayTime(time)
updateTime()
quizz()