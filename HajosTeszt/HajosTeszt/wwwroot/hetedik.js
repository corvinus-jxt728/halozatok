var k�rd�sek;

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