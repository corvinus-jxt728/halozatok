var k�rd�sek;
window.onload = let�lt�s();
window.onload = k�rd�sMegjelen�t�s(0);
function let�lt�s() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => let�lt�sBefejez�d�tt(data)
        );
}

function let�lt�sBefejez�d�tt(d) {
    console.log("Sikeres let�lt�s")
    console.log(d)
    k�rd�sek = d;
}

function k�rd�sMegjelen�t�s(k�rd�s) {
    document.getElementById("k�rd�s_sz�veg")

    k�rd�s[i].questionText
    let elem = document.createElement("div")
    elem.innerHTML = k�rd�s[i].questionText
    ide.appendChild(elem)

}