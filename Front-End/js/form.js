                                    // FORMULAIRE //

// Récupération des input HTML depuis le DOM
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let address = document.getElementById("address");
let city = document.getElementById("city");
let zip = document.getElementById("zip");
const btnValidOrder = document.getElementById("btnValidOrder");

// Récupération du formulaire
let form = document.getElementById("form");
console.log(form);

// Déclaration des Regex
let regexText = (/^[a-zA-Z\w\s'\-àáâãäæçèéêëìíîïñòóôõöùúûüýÿœÀÁÂÃÄÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÜŒ]+$/g);
let regexOnlyText = (/^[a-zA-Z\s'\-àáâãäæçèéêëìíîïñòóôõöùúûüýÿœÀÁÂÃÄÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÜŒ]+$/g);
let regexEmail = (/^[\w\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,6}$/g);
let regexZip = (/^\d{5}$/g);

// Ecouteur de changement sur le champ prénom
form.firstName.addEventListener("change", function() {
    validInput(this);
})

// Vérifie que le champ prénom respecte le format attendu
const validInput = function(firstName) {
    let textOnly = regexOnlyText;
    let testTextOnly = textOnly.test(firstName.value);
    let small = firstName.nextElementSibling;

    if(testTextOnly) {
        small.innerHTML = "Le champ est correct";
        return true;
    }else {
        small.innerHTML = "Le champ est vide ou incorrect";
        return false;
    }
};

// Ecouteur de changement sur le champ nom
form.lastName.addEventListener("change", function() {
    validInput2(this);
})

// Vérifie que le champ nom respecte le format attendu
const validInput2 = function(lastName) {
    let textOnly = regexOnlyText;
    let testTextOnly = textOnly.test(lastName.value);
    let small = lastName.nextElementSibling;

    if(testTextOnly == true) {
        small.innerHTML = "Le champ est correct";
        return true;
    }else {
        small.innerHTML = "Le champ est vide ou incorrect";
        return false;
    }
};

// Ecouteur de changement sur le champ email
form.email.addEventListener("change", function() {
    validInput3(this);
})

// Vérifie que le champ email respecte le format attendu
const validInput3 = function(email) {
    let inputEmail = regexEmail;
    let inputEmailOnly = inputEmail.test(email.value);
    let small = email.nextElementSibling;

    if(inputEmailOnly) {
        small.innerHTML = "Le champ est correct";
        return true;
    }else {
        small.innerHTML = "Le champ est vide ou incorrect";
        return false;
    }
};

// Ecouteur de changement sur le champ adresse
form.address.addEventListener("change", function() {
    validInput4(this);
})

// Vérifie que le champ adresse respecte le format attendu
const validInput4 = function(address) {
    let inputAddress = regexText;
    let inputAddressOnly = inputAddress.test(address.value);
    let small = address.nextElementSibling;

    if(inputAddressOnly) {
        small.innerHTML = "Le champ est correct";
        return true;
    }else {
        small.innerHTML = "Le champ est vide ou incorrect";
        return false;
    }
};

// Ecouteur de changement sur le champ ville
form.city.addEventListener("change", function() {
    validInput5(this);
})

// Vérifie que le champ ville respecte le format attendu
const validInput5 = function(city) {
    let inputCity = regexOnlyText;
    let inputCityOnly = inputCity.test(city.value);
    let small = city.nextElementSibling;

    if(inputCityOnly) {
        small.innerHTML = "Le champ est correct";
        return true;
    }else {
        small.innerHTML = "Le champ est vide ou incorrect";
        return false;
    }
};

// Ecouteur de changement sur le champ zip
form.zip.addEventListener("change", function() {
    validInput6(this);
})

// Vérifie que le champ zip respecte le format attendu
const validInput6 = function(zip) {
    let inputZip = regexZip;
    let inputZipOnly = inputZip.test(zip.value);
    let small = zip.nextElementSibling;

    if(inputZipOnly) {
        small.innerHTML = "Le champ est correct";
        return true;
    }else {
        small.innerHTML = "Le champ est vide ou incorrect";
        return false;
    }
};

// Fonction d'envoi du formulaire
function sendForm() {
    fetch("http://localhost:3000/api/teddies/" + "order", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
}

// Fonction de vérification que tous les inputs sont valides
function verifyInputBeforeCheck() {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        if(validInput(form.firstName) &&
        validInput2(form.lastName) &&
        validInput3(form.email) &&
        validInput4(form.address) &&
        validInput5(form.city) &&
        validInput6 (form.zip)) {
            sendForm();
        }
    })
}

verifyInputBeforeCheck();