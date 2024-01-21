const userInput = document.querySelector(".user-input");
const playButton = document.querySelector(".button");
const resetButton = document.querySelector(".reset");
const feedbackContainer = document.getElementById("feedback-container");
const menuSelectionInput = document.querySelector(".selection");

userInput.value = "";

//L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

resetButton.addEventListener("click", function() {
  userInput.value = "";
  feedbackContainer.innerHTML = "";
  console.log
  // location.reload();
})


playButton.addEventListener("click", function() {

  const userNumber = parseInt(userInput.value);
  const menuSelection = menuSelectionInput.value;

  if (isNaN(userNumber)) {
    alert("Inserisci un numero da 1 a 5");
    userInput.value = "";
    feedbackContainer.innerHTML = "";
  }
  
  else if (userNumber > 5) {
    alert("Puoi solo inserire un numero da 1 a 5");
    userInput.value = "";
    feedbackContainer.innerHTML = "";
    // Ricarica la pagina
    // location.reload();
  }

  else if ((menuSelection == "even") && (userNumber % 2 == 1)) {
    alert("Hai selezionato 'Pari' ma hai inserito un numero dispari");
    userInput.value = "";
    feedbackContainer.innerHTML = "";
    // Ricarica la pagina
    //location.reload();
  }

  else if ((menuSelection == "odd") && (userNumber % 2 == 0)) {
    alert("Hai selezionato 'Dispari' ma hai inserito un numero pari");
    userInput.value = "";
    feedbackContainer.innerHTML = "";
    // Ricarica la pagina
    // location.reload();
  }

  else {
    // console.log(userNumber);

    //Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    function getRandomNumber() {
      return Math.floor(Math.random() * 5 + 1);
    }

    const pcNumber = getRandomNumber();
    // console.log(pcNumber);

    //Sommiamo i due numeri
    const somma = userNumber + pcNumber;
    // console.log(somma);

    
    //Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

    function oddEven() {
      let feedback;

      if (somma % 2 == 0) {
        return feedback = "è pari";
      } else {
        return feedback = "è dispari";
      }
    }

    // console.log(oddEven());

    feedbackContainer.innerHTML = `<h2>Il computer ha fatto ${pcNumber}</h2>`
    feedbackContainer.innerHTML += `<h2>La somma è ${somma}, ${oddEven()}</h2>`

    if ((menuSelection == "even") && (somma % 2 == 0) || (menuSelection == "odd") && (somma % 2 == 1)) {
      console.log("Hai vinto");
      feedbackContainer.innerHTML += `<h2>Hai vinto!</h2>`
    } 

    if ((menuSelection == "even") && (somma % 2 == 1) || (menuSelection == "odd") && (somma % 2 == 0)) {
      console.log("Hai perso");
      feedbackContainer.innerHTML += `<h2>Hai perso!</h2>`
    }
    
  }

})