class Product {
    constructor(jsonTeddies) {
        jsonTeddies && Object.assign(this, jsonTeddies);
    }
}