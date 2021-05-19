module.exports = ({
    Product
}) => {

//=============add product===========================================
async function addProduct(req,res){
    var return_response = { "status": null, "message": null, "data": {} } 
    try {
        let opt = req.body;
        const product = new Product(opt);
        const doc = await product.save();
        return_response.status = 200;
        return_response.message = "Product added successfully";
        return_response.data = doc;
    } catch (error) {
        return_response.status = 400;
        return_response.message = String(error);
    }
    res.json(return_response);
}

//=============get all Product=================================
async function getProduct(req,res){
    var return_response = { "status": null, "message": null, "data": null } 
    try {
        const doc = await Product.find({})
        return_response.status = 200;
        return_response.message = "Success";
        return_response.data = doc;
    } catch (error) {
        return_response.status = 400;
        return_response.message = String(error);
    }
    res.json(return_response);
}

//=============get product by their id==========================
async function getProductById(req,res){
    var return_response = { "status": null, "message": null, "data": {} } 
    try {
        const doc = await Product.findOne({_id:req.params.id});
        return_response.status = 200;
        return_response.message = "Success";
        return_response.data = doc;
    } catch (error) {
        return_response.status = 400;
        return_response.message = String(error);
    }
    res.json(return_response);
}

//===============update product=================================
async function updateProduct(req,res){
    var return_response = { "status": null, "message": null, "data": {} } 
    try {
        var opt = req.body;
        const doc = await Product.findOneAndUpdate({_id:req.params.id}, opt, {new:true})
        return_response.status = 200;
        return_response.message = "Product updated successfully";
        return_response.data = doc;
    } catch (error) {
        return_response.status = 400;
        return_response.message = String(error);
    }
    res.json(return_response);
}

//============delete Product========================================
async function deleteProduct(req,res){
    var return_response = { "status": null, "message": null, "data": {} } 
    try {
        const doc = await Product.findByIdAndDelete({_id:req.params.id})
        return_response.status = 200;
        return_response.message = "Product deleted successfully";
        return_response.data = doc;
    } catch (error) {
        return_response.status = 400;
        return_response.message = String(error);
    }
    res.json(return_response);
    }


return {
    addProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProduct,
}

}