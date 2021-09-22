// Récupération de l'URL
const urlApi = "http://localhost:3000/api/teddies"

// Récupération des ours en peluche
function getTeddies() { // Création d'une fonction qui récupère les données de l'API et les affiche
fetch(urlApi)
    .then(data => data.json())
    .then(jsonListTeddies => {
        for(let jsonTeddies of jsonListTeddies) {
            let products = new Product (jsonTeddies);
            document.querySelector(".listProducts").innerHTML += `<div class="cardProducts">
                                                                    <a href="products.html">
                                                                        <div class="imgProducts">
                                                                            <img id="imgUrl" src="${products.imageUrl}">
                                                                        </div>
                                                                        <div class="descriptionProducts">
                                                                            <h2 id="name">${products.name}</h2>
                                                                            <p id="description">${products.description}</p>
                                                                            <p id="price">${getFormatedPrice(products.price)}</p>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>`
        }
    })
    .catch(function(e) {
        alert("La page semble rencontrer une erreur, contactez-nous si le problème persiste.")
    })
}

// Fonction qui formate le prix
function getFormatedPrice(price) {
    let newPrice = price / 100;
    return Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"}).format(newPrice)
};

// Appel de la fonction de récupération
getTeddies();
