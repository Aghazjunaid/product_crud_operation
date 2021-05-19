var express = require('express'),
apiRouter = express.Router();

product = require('./product/product')();


apiRouter.get('', (req, res) => {
    res.status(200).send("Node api demo")
})

//===============product api===================
apiRouter.post('/api/v1/addProduct', product.addProduct);
apiRouter.get('/api/v1/getProducts', product.getProduct);
apiRouter.get('/api/v1/getProduct/:id', product.getProductById);
apiRouter.put('/api/v1/updateProduct/:id', product.updateProduct);
apiRouter.delete('/api/v1/deleteProduct/:id', product.deleteProduct);


module.exports = apiRouter;
