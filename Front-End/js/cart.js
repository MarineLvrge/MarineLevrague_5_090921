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
        return []; // Retourne un tableau vide
    }else {
        return JSON.parse(productInCart); // Retourne les produits présents dans le panier au format JSON
    }
}

// Fonction qui sauvegarde/stocke les produits présents dans le panier
function saveCart(productInCart) {
    localStorage.setItem("ProductBasket", JSON.stringify(productInCart)); // Sauvegarde les produits dans le localStorage au format chaînes de caractères
}


            // AFFICHAGE ET RECUPERATION DES PRODUITS DU PANIER //

// Affiche les produits sélectionnés qui sont dans le localStorage
let productInStorage = getProductToCart();
console.log(productInStorage);

function seeProductInCart() {
    let totalCart = 0;
}