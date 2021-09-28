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
        document.querySelector(".productElt").innerHTML += `<div class="cardProducts">

                                                                <div class="imgProducts">
                                                                    <img id="imgUrl" src="${products.imageUrl}">
                                                                </div>

                                                                <h2 id="name">${products.name}</h2>
                                                                <p id="description">${products.description}</p>

                                                                        <form class="productOpt">
                                                                            <label for="colors">Choix de la couleur</label>
                                                                            <select name="colors" id="colors">
                                                                            </select>
                                                                        </form>

                                                                    <p id="price">${getFormatedPrice(products.price)}</p>
                                                                    <button type="submit" id="btn">Ajouter au Panier</button>
                                                            </div>`
})
