                                    // FORMULAIRE //

// Récupération des input du formulaire
const idFirstName = "firstName";
const idLastName = "lastName";
const idEmail = "email";
const idAddress = "address";
const idCity = "city";
const idZip = "zip";

// Récupération des input HTML
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let address = document.getElementById("address");
let city = document.getElementById("city");
let zip = document.getElementById("zip");

firstName.addEventListener("blur", () => {
    //firstName.checkValidity();
    console.log(firstName.checkValidity());
})