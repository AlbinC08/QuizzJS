let tab_question = ["En quelle année fut lancée la sonde Voyager 1 ?", "Que représente une unité astronomique (UA) ?", "comment se nomme la planète naine qui a une période de révolution (années) supérieure à celle de Pluton ?", "Que représente, en années terrestres, une année galactique ?"];
let goodanswer = ["b", "c", "a", "c"]
let tab_answer = [
    ["a = 1975", "b = 1977", "c = 1979", "d = 1981"],
    ["a = La distance entre le Soleil et l’étoile la plus proche de celui-ci", "b = La distance Soleil-Pluton", "c = 1La distance Terre-Soleil", "d = La distance Terre-Mars"],
    ["a = Eris", "b = Io", "c = Charon", "d = Titan"],
    ["a = Entre 500 et 600 millions d’années", "b = 1Entre 350 et 400 millions d’années", "c = Entre 225 et 250 millions d’années", "d = Plus d’un milliard d’années"]
]

let score = 0
let answer_user = 0
let round = 1

function display_question() {
    if (round == 1) {
        document.querySelector(".question").innerText = tab_question[1];
        display_answer()
        round++
        console.log(round);

    } else if (round == 2) {
        document.querySelector(".question").innerText = tab_question[2];
        display_answer()
        round++
        console.log(round);

    } else if (round == 3) {
        document.querySelector(".question").innerText = tab_question[3];
        display_answer()
        round++
        console.log(round);

    }
}


function display_answer() {
    if (round == 1) {
        document.querySelector("#button_A").innerText = tab_answer[1][0];
        document.querySelector("#button_B").innerText = tab_answer[1][1];
        document.querySelector("#button_C").innerText = tab_answer[1][2];
        document.querySelector("#button_D").innerText = tab_answer[1][3];
    
    } else if (round == 2) {
        document.querySelector("#button_A").innerText = tab_answer[2][0];
        document.querySelector("#button_B").innerText = tab_answer[2][1];
        document.querySelector("#button_C").innerText = tab_answer[2][2];
        document.querySelector("#button_D").innerText = tab_answer[2][3];
        
    } else if (round == 3) {
        document.querySelector("#button_A").innerText = tab_answer[3][0];
        document.querySelector("#button_B").innerText = tab_answer[3][1];
        document.querySelector("#button_C").innerText = tab_answer[3][2];
        document.querySelector("#button_D").innerText = tab_answer[3][3];
    }
}


