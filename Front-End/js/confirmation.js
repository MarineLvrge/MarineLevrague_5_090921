// Fonction qui formate le prix
function getFormatedPrice(price) {
    let newPrice = price / 100;
    return Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"}).format(newPrice)
};

// Fonction qui se déclenche après le chargement de la page
window.addEventListener("load", function() {
    let orderInCart = JSON.parse(localStorage.order); // Retourne en objet JSON la commande complète
    console.log(orderInCart);
    let orderIdCart = orderInCart.orderId; // Retourne le numéro de commande
    console.log(orderIdCart);
    let productsAsOrder = orderInCart.products; // Retourne un tableau contenant en objets les détails de chaque produit
    console.log(productsAsOrder);
    let totalCart = 0;

    for(i in productsAsOrder){
        totalCart += productsAsOrder[i].price;
        console.log(totalCart);
    }
    document.getElementById("idOrder").innerHTML += `${orderIdCart}`;
    document.getElementById("totalPriceOrder").innerHTML += `${getFormatedPrice(totalCart)}`;
    localStorage.clear();
    products = [];
})