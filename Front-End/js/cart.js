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

// Fonction qui indique le nombre d'éléments dans le panier
function cartLength() {
    return productInCart.length
}
console.log(cartLength);

// Fonction d'affichage du nombre d'éléments dans le panier
function cartCount() {
    let count = cartLength();
    let countProducts = document.getElementById("#cartCounter");
    if (count == 0) {
        countProducts.innerHTML = "";
    }else {
        countProducts.innerHTML = count;
    }
}
console.log(cartCount);

function seeProductInCart() {
    let totalCart = 0;
    
}