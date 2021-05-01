//var kerdesek;

var joValasz = 1;
var questionId = 4;
//window.onload = letoltes();
//window.onload = kerdesMegjelenites(0);
window.onload = function (e) {
    console.log("Oldal betöltve...");

    document.getElementById("elore_gomb").onclick = elore;
    document.getElementById("vissza_gomb").onclick = vissza;
    kerdesBetoltes(questionId)
}
function kerdesBetoltes(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                kerdesMegjelenites(response.json())
            }
        })
}  
function kerdesMegjelenites(kerdes) {
    if (!kerdes) return; //Ha undefined a kerdes objektum, nincs mit tenni
    console.log(kerdes);
    document.getElementById("kerdes_szoveg").innerText = kerdes.questionText
    document.getElementById("valasz1").innerText = kerdes.answer1
    document.getElementById("valasz2").innerText = kerdes.answer2
    document.getElementById("valasz3").innerText = kerdes.answer3
    joValasz = kerdes.correctAnswer
    //joValasz = 1;
    if (kerdes.image) {
        document.getElementById("kep").src = "https://szoft1.comeback.hu/hajo/" + kerdes.image;
        document.getElementById("kep").classList.remove("rejtett");
    }
    else {
        document.getElementById("kep").classList.add("rejtett");
    }
    //Jó és rossz kerdesek jelölésének levétele
    document.getElementById("valasz1").classList.remove("jo", "rossz");
    document.getElementById("valasz2").classList.remove("jo", "rossz");
    document.getElementById("valasz3").classList.remove("jo", "rossz");
}
function valasztas(n) {
    if (n != joValasz) {
        document.getElementById(`valasz${n}`).classList.add("rossz");
        document.getElementById(`valasz${joValasz}`).classList.add("jo");
    }
    else {
        document.getElementById(`valasz${joValasz}`).classList.add("jo");
    }
}



function elore() {
    questionId++;
    kerdesBetoltes(questionId);
}

function vissza() {
    questionId--;
    kerdesBetoltes(questionId);
}




