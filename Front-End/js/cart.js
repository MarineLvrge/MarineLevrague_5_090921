                        // LOCALSTORAGE //

var ProductBasket = [];

// Fonction d'ajout au localStorage
function addToCart(Id) {
    let productInCart = getProductToCart();
    productInCart.push(Id);
    saveCart(productInCart);
}

// Fonction qui récupère les produits sélectionnés
function getProductToCart() {
    let productInCart = localStorage.getItem("ProductBasket");
    if (productInCart == null) {
        return [];
    }else {
        return JSON.parse(productInCart); // Retourne les produits présents dans le panier au format JSON
    }
}

// Fenêtre type Popup de confirmation d'ajout au panier
const confirmationPopup = () => {
    if(window.confirm("Votre produit a bien été ajouté au panier OK pour consulter votre panier ANNULER pour continuer vos achats")) {
        window.location.href = "cart.html";
    }else {
        window.location.href = "index.html";
    }
}

// Fonction qui sauvegarde/stocke les produits présents dans le panier
function saveCart(productInCart) {
    localStorage.setItem("ProductBasket", JSON.stringify(productInCart)); // Sauvegarde les produits dans le localStorage au format chaînes de caractères
    confirmationPopup();
}


            // AFFICHAGE ET RECUPERATION DES PRODUITS DU PANIER //

// Affiche les produits sélectionnés qui sont dans le localStorage
let productInStorage = getProductToCart();
console.log(productInStorage);

function displayProductCart() {
    let totalCart = 0;

    for(let key of productInStorage) {
        console.log(key)
        fetch(`http://localhost:3000/api/teddies/${Id}`)
        .then(dataCart => {
            let products = new Product(dataCart);
            document.getElementById("cartMain").innerHTML += `<tr>
                                                                <td>${products.name}</td>
                                                                <td>${products._id}</td>
                                                                <td>${getFormatedPrice(products.price)}</td>
                                                            </tr>`
        totalCart += products.price;
        console.log(totalCart);
        })
    }
}










/* function displayCart() {
    let totalCart = 0;
    for(let key of productInStorage) {
        fetch("http://localhost:3000/api/teddies")
        .then(response => response.json())
        .then(dataProductCart => {
            let productsCart = new Product(dataProductCart);
            document.querySelector("#cartMain").innerHTML += `<tr>
                                                                    <td>${productsCart.name}</td>
                                                                    <td>${productsCart._id}</td>
                                                                    <td>${getFormatedPrice(products.price)}</td>
                                                                </tr>`
        
        totalCart += productsCart.price;
        console.log(totalCart);
        document.querySelector(".cartTotal").innerHTML = `${getFormatedPrice(products.price)}`;
        })
    }
}

function seeProductOnPage() {
    if(productInStorage.length > 0) {
        seeProductToCart();
    }else {
        document.querySelector(".emptyCart").innerHTML += `<p>C'est bien vide par ici!</p>`
        document.querySelector(".cartMain").style.display = none;
    }
} */