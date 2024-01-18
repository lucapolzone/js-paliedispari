//Chiedo all'utente la parola da inserire
const wordInput = prompt("Inserisci una parola");
console.log(`La parola è ${wordInput}`);

//Creo la funzione per invertire la stringa
function reverseWord(wordInput) {
    return wordInput.split("").reverse().join("");
}
console.log(reverseWord(wordInput));

//Assegno la stringa invertita a una variabile
const wordInputReverse = reverseWord(wordInput);

//Stampo la variabile a schermo
const wrapperContainer = document.getElementById("wrapper");
wrapperContainer.innerHTML = `<h2>La parola al contrario è ${wordInputReverse}</h2>`;

// Creo la funzione per verificare se la parola inserita è palindroma
function Palindroma(wordInput) {
    if (wordInput == wordInputReverse) {
        return true;
    }
    return false;
}

//Stampo la funzione in console
console.log(Palindroma(wordInput));