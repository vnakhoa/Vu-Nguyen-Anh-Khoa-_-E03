function demo() {
    var input = document.getElementById("img-name");
    var fileName = input.value;
    var imgA = document.getElementById("dice-1");
    imgA.src = './img/' + fileName;
    var imgB = document.getElementById("dice-2");
    imgB.src = './img/' + fileName;
}
function roll() {
    var max = 6;
    var min = 1;
    var a = Math.floor(Math.random() * (max - min + 1)) + min;
    var imgA = document.getElementById("dice-1");
    imgA.src = './img/dice' + a + '.png';
    var b = Math.floor(Math.random() * (max - min + 1)) + min;
    var imgB = document.getElementById("dice-2");
    imgB.src = './img/dice' + b + '.png';
}
