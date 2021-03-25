var kérdések;

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