module.exports = () => {
    const { Product } = require("../../models/product");

    return require("./product.factory")({
        Product, 
    });
}