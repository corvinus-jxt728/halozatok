//var kerdesek;

var joValasz = 1;
var questionId = 4;
var hotList = [];           //Az éppen gyakoroltatott kérdések listája 
var questionsInHotList = 3; //Ez majd 7 lesz, teszteléshez jobb a 3. 
var displayedQuestion;      //A hotList-bõl éppen ez a kérdés van kint
var numberOfQuestions;      //Kérdések száma a teljes adatbázisban
var nextQuestion = 1;
var timeoutHandler;
//window.onload = letoltes();
//window.onload = kerdesMegjelenites(0);
window.onload = function (e) {
    console.log("Oldal betöltve...");

    document.getElementById("elore_gomb").onclick = elore;
    document.getElementById("vissza_gomb").onclick = vissza;
    kerdesBetoltes(questionId)
    timeoutHandler = setTimeout(elõre, 3000);
}
function kerdesBetoltes(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hibás letöltés: ${response.status}`)
                }
                else {
                    return result.json()
                }
            }
        )
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
                if (displayedQuestion == undefined && destination == 0) { //!!!!!!!!!!!!!
                    displayedQuestion = 0;
                    kerdesMegjelenites();
            }
        );
} 
function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }

    //Elsõ kérdések letöltése
    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}
function kerdesMegjelenites(kerdes) {
    let kerdes = hotList[displayedQuestion].question;
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
    clearTimeout(timeoutHandler)
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kerdesMegjelenitws()
}

function vissza() {
    clearTimeout(timeoutHandler)
    questionId--;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kerdesMegjelenitws()
}




