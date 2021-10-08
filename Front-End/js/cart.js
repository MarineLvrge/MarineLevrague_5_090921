                        // LOCALSTORAGE //

// Fonction d'ajout au localStorage
function addToCart(Id) {
    let listProductInCart = getProductToCart();
    listProductInCart.push(Id);
    saveCart(listProductInCart);
}

// Fonction qui récupère les produits sélectionnés
function getProductToCart() {
    let listProductInCart = localStorage.getItem("ProductBasket");
    if (listProductInCart == null) {
        return [];
    }else {
        return JSON.parse(listProductInCart); // Retourne les produits présents dans le panier au format JSON
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
function saveCart(listProductInCart) {
    localStorage.setItem("ProductBasket", JSON.stringify(listProductInCart)); // Sauvegarde les produits dans le localStorage au format chaînes de caractères
    confirmationPopup();
}


            // AFFICHAGE ET RECUPERATION DES PRODUITS DU PANIER //

// Affiche les produits sélectionnés qui sont dans le localStorage
let productInStorage = getProductToCart();
console.log(productInStorage);

// Fonction qui indique le nombre d'éléments dans le panier
function cartLength() {
    return productInStorage.length;
}
console.log(productInStorage.length);

//Fonction d'affichage du nombre d'éléments dans le panier
function displayCounter() {
    if(cartLength == 0) {
        return 0;
    }else {
        document.getElementById("cartCounter").innerHTML = cartLength();
    }
}
// Appel de la fonction d'affichage du nombre d'éléments dans le panier
displayCounter();

// Fonction d'affichage du panier sur la page
function displayCart() {
    
}
