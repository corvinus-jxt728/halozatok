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