var kérdések;
window.onload = letöltés();
window.onload = kérdésMegjelenítés(0);
function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejezõdött(data)
        );
}

function letöltésBefejezõdött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
}

function kérdésMegjelenítés(kérdés) {
    document.getElementById("kérdés_szöveg")

    kérdés[i].questionText
    let elem = document.createElement("div")
    elem.innerHTML = kérdés[i].questionText
    ide.appendChild(elem)

}
fetch('/questions/1')
    .then(response => response.json())
    .then(data => kérdésMegjelenítés(data)
    );

function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
}
function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}    