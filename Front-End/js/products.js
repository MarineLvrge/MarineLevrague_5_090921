// Récupération de la chaîne de requête dans l'URL
const queryStringUrlId = window.location.search;
console.log(queryStringUrlId);

// Extraction de l'URL
const urlSearchParams = new URLSearchParams(queryStringUrlId);
console.log(urlSearchParams);

const Id = urlSearchParams.get("_id");
console.log(Id);

// Affichage du produit sélectionné
fetch(`http://localhost:3000/api/teddies/${Id}`)
    .then(response => response.json())
    .then(dataProduct => {
        let products = new Product(dataProduct);
        document.querySelector(".productElt").innerHTML += `<div class="cardProduct">

                                                                <div class="imgProduct">
                                                                    <img id="imgUrlProduct" src="${products.imageUrl}">
                                                                </div>

                                                                <div class="descriptionProducts">
                                                                    <h2 id="name">${products.name}</h2>
                                                                    <p id="description">${products.description}</p>

                                                                        <form class="productOpt">
                                                                            <label for="colors">Choix de la couleur</label>
                                                                            <select name="colors" id="colors" required>
                                                                            <option value="1">Choisissez votre couleur</option>
                                                                            ${products.colors.map(color => `<option>${color}</option>`)}
                                                                            </select>
                                                                        </form>

                                                                    <p id="price">${getFormatedPrice(products.price)}</p>
                                                                    <button type="submit" id="btnCart">Ajouter au Panier</button>
                                                                </div>
                                                            </div>`
                                                           

// localStorage

// Ecouteur du bouton "Ajouter au panier"
    const btnCart = document.querySelector("#btnCart");
    btnCart.addEventListener("click", function(event) {
        event.preventDefault();
        addToCart(Id);
    });

    })
    .catch(function(err) {
        window.alert("La page semble rencontrer une erreur, contactez-nous si le problème persiste.")
    });

// Fonction qui formate le prix
function getFormatedPrice(price) {
    let newPrice = price / 100;
    return Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"}).format(newPrice)
};
