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
fetch('/questions/1')
    .then(response => response.json())
    .then(data => k�rd�sMegjelen�t�s(data)
    );

function k�rd�sMegjelen�t�s(k�rd�s) {
    console.log(k�rd�s);
    document.getElementById("k�rd�s_sz�veg").innerText = k�rd�s.questionText
    document.getElementById("v�lasz1").innerText = k�rd�s.answer1
    document.getElementById("v�lasz2").innerText = k�rd�s.answer2
    document.getElementById("v�lasz3").innerText = k�rd�s.answer3
    document.getElementById("k�p").src = "https://szoft1.comeback.hu/hajo/" + k�rd�s.image;
}
function k�rd�sBet�lt�s(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hib�s v�lasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => k�rd�sMegjelen�t�s(data));
}    