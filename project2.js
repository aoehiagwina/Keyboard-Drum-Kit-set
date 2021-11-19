const input = document.getElementById("keyValues");
const btn = document.getElementById("btn");
let sound1 = document.getElementById("1");
let sound2 = document.getElementById("2");
let sound3 = document.getElementById("3");
let sound4 = document.getElementById("4");
let sound5 = document.getElementById("5");
let sound6 = document.getElementById("6");
let sound7 = document.getElementById("7");
let sound8 = document.getElementById("8");
let sound9 = document.getElementById("9");
// let sound1 = document.getElementById("1");

input.addEventListener('keypress', (v) => {
    let letter = v.key;
    switch (letter) {
        case "A":
        case "a":
            sound1.currentTime = 0;
            sound1.play();
            break;
        case "S":
        case "s":
            sound2.currentTime = 0;
            sound2.play();
            break;
        case "D":
        case "d":
            sound3.currentTime = 0;
            sound3.play();
            break;
        case "F":
        case "f":
            sound4.currentTime = 0;
            sound4.play();
            break;
        case "G":
        case "g":
            sound5.currentTime = 0;
            sound5.play();
            break;
        case "H":
        case "h":
            sound6.currentTime = 0;
            sound6.play();;
            break;
        case "J":
        case "j":
            sound7.currentTime = 0;
            sound7.play();
            break;
        case "K":
        case "k":
            sound8.currentTime = 0;
            sound8.play();;
            break;
        case "L":
        case "l":
            sound9.currentTime = 0;
            sound9.play();
            break;
        default:
            document.getElementById("not_included").innerHTML = "Not Sound attached to key: " + letter;
            break;
    }

});

btn.addEventListener('click', () => {
    input.value = "";
});


