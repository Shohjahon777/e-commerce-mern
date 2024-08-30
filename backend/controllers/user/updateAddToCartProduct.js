const addToCartModel = require("../../models/cartProduct")

const updateAddToCart = async(req,res) => {
    try {

        const currentUserId = req.userId
        const addToCartProductId = req.body._id
        const qty = req.body.quantity

        const updateProduct = await addToCartModel.findByIdAndUpdate(addToCartProductId, {
            ...(qty && {quantity : qty})
        })

        res.json({
            message : "Product updated",
            data : updateProduct,
            success : true,
            error : false
        })
        
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = updateAddToCart