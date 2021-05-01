//var kerdesek;

var joValasz = 1;
var questionId = 4;
var hotList = [];           //Az �ppen gyakoroltatott k�rd�sek list�ja 
var questionsInHotList = 3; //Ez majd 7 lesz, tesztel�shez jobb a 3. 
var displayedQuestion;      //A hotList-b�l �ppen ez a k�rd�s van kint
var numberOfQuestions;      //K�rd�sek sz�ma a teljes adatb�zisban
var nextQuestion = 1;
var timeoutHandler;
//window.onload = letoltes();
//window.onload = kerdesMegjelenites(0);
window.onload = function (e) {
    console.log("Oldal bet�ltve...");

    document.getElementById("elore_gomb").onclick = elore;
    document.getElementById("vissza_gomb").onclick = vissza;
    kerdesBetoltes(questionId)
    timeoutHandler = setTimeout(el�re, 3000);
}
function kerdesBetoltes(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hib�s let�lt�s: ${response.status}`)
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
                console.log(`A ${questionNumber}. k�rd�s let�ltve a hot list ${destination}. hely�re`)
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

    //Els� k�rd�sek let�lt�se
    for (var i = 0; i < questionsInHotList; i++) {
        k�rd�sBet�lt�s(nextQuestion, i);
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
    //J� �s rossz kerdesek jel�l�s�nek lev�tele
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




