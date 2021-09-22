// Récupération de l'URL
const url = "http://localhost:3000/api/teddies"

// Récupération des ours en peluche
fetch(url)
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
                                                                            <p id="price">${products.price}</p>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>`
        }
    });







// Création de la fonction de récupération des ours
/* async function getTeddies(){
    fetch(url, {method : 'GET'})
        .then((res) => {
            return res.json();
        }).then((json) => {
            createCard(json);
    });
}

function createCard(teddies){
    teddies.forEach(createCard => {
        console.log(teddies);
    });
}

getTeddies(); */

