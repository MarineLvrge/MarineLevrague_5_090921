                                    // FORMULAIRE //

let regexText =  new RegExp(/^[\w\s'\-àáâãäæçèéêëìíîïñòóôõöùúûüýÿœÀÁÂÃÄÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÜŒ]+$/g); // RegExp(/^[\w\s-']+$/g)  àáâãäæçèéêëìíîïñòóôõöùúûüýÿœÀÁÂÃÄÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÜŒ
let regexTextOnly = new RegExp(/^[a-zA-Z\s'\-àáâãäæçèéêëìíîïñòóôõöùúûüýÿœÀÁÂÃÄÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÜŒ]+$/g);
let regexEmail = new RegExp(/^[\w\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,6}$/g); // /^.+@.+\..+$/g
let regexZip = new RegExp(/^\d{5}$/g);

// Création d'un objet qui récupère les champs du formulaire
let contact = {
    firstName: null,
    lastName: null,
    email: null,
    address: null,
    city: null,
    zip: null,
}

// Création de constantes pour récupérer les inputs
const idFirstName = "firstName";
const idLastName = "lastName";
const idEmail = "email";
const idAddress = "address";
const idCity = "city";
const idZip = "zip";

// Fonction de message sous l'input
function displayMessage(inputElement, message) {
    let errorElement = inputElement.nextElementSibling;
    errorElement.classList.add('active');
    errorElement.textContent = message;
}

// Fonction de vérification des inputs
function checkInputs(idInput, regex) {
    let input = document.getElementById(idInput);
    let valueInput = input.value;
    if(valueInput.match(regex)) {
        contact[idInput] = valueInput;
        input.style.border = "solid 3px #009900";
        displayMessage(input, "Ce champ est correct");
        return true;
    } else {
        input.style.border = "solid 3px #FF3300";
        displayMessage(input, "Ce champ est vide ou incorrect");
        return false;
    }
}

// Fonction d'envoi du formulaire
function sendForm() {
    fetch("http://localhost:3000/api/teddies/order", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({contact: contact, products: productInStorage})
    })
    .then(function(response) {
        if(response.ok) {
            return response.json();
        }
    })
    .then(function(value) {
        let validOrder = JSON.stringify(value);
        localStorage.setItem("order", validOrder);
        document.getElementById("form").submit();
    })
    .catch(function(err) {
        window.alert("La page semble rencontrer une erreur, contactez-nous si le problème persiste.")
    });
}

// Fonction d'écoute des inputs
function listenInputs() {
    document.getElementById(idFirstName).addEventListener("blur", () => {
        checkInputs(idFirstName, regexTextOnly);
    })
    document.getElementById(idLastName).addEventListener("blur", () => {
        checkInputs(idLastName, regexTextOnly);
    })
    document.getElementById(idEmail).addEventListener("blur", () => {
        checkInputs(idEmail, regexEmail);
    })
    document.getElementById(idAddress).addEventListener("blur", () => {
        checkInputs(idAddress, regexText);
    })
    document.getElementById(idCity).addEventListener("blur", () => {
        checkInputs(idCity, regexTextOnly);
    })
    document.getElementById(idZip).addEventListener("blur", () => {
        checkInputs(idZip, regexZip);
    })

    document.getElementById("form").addEventListener("click", (e) => {
        e.preventDefault();
        if(checkInputs(idFirstName, regexTextOnly) &&
        checkInputs(idLastName, regexTextOnly) &&
        checkInputs(idEmail, regexEmail) &&
        checkInputs(idAddress, regexText) &&
        checkInputs(idCity, regexTextOnly) &&
        checkInputs(idZip, regexZip)) {
            sendForm();
        }
    })
}

listenInputs();