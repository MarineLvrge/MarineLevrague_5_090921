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
    if(productInStorage == 0) {
        ifCartIsEmpty();
    }else {
        let totalCart = 0;
        for(let key of productInStorage) {
        console.log(key);
            fetch("http://localhost:3000/api/teddies/" + key)
                .then(response => response.json())
                .then(dataTeddy => {
                    let teddy = new Product(dataTeddy);
                    document.getElementById("cartMain").innerHTML += `<tr>
                                                                        <td>${teddy.name}</td>
                                                                        <td>${teddy._id}</td>
                                                                        <td>${getFormatedPrice(teddy.price)}
                                                                    </tr>`;
// Affichage du montant total du panier                                                             
totalCart += teddy.price
console.log(totalCart);
document.querySelector(".numberCartTotal").innerHTML = totalCart / 100 + "€";
            })    
        }
    }
}

// Fonction qui indique un message si le panier est vide
function ifCartIsEmpty() {
    document.getElementById("emptyCart").innerHTML += "C'est bien vide par ici..."
    document.getElementById("tableCart").style.display = "none";
}

// Fonction pour vider le panier
function toClearCart() {
    const btnToClear = document.getElementById("clearBtn");
    btnToClear.addEventListener("click", () => {
        localStorage.clear();
        document.location.reload();
    })
}

// Appel de la fonction pour vider le panier
toClearCart();

// Fonction qui formate le prix
function getFormatedPrice(price) {
    let newPrice = price / 100;
    return Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"}).format(newPrice)
};

// Appel de la fonction d'affichage après le chargement de la page
window.addEventListener("load", displayCart());
    