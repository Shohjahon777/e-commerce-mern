const addToCartModel = require("../../models/cartProduct")

const deleteAddToCartProduct = async(req, res) => {
    try {
        const currentUserId = req.userId
        const addToCartProductId = req.body._id

        const deleteProduct = await addToCartModel.findByIdAndDelete(addToCartProductId)

        res.json({
            message: "Product deleted from cart successfully",
            success : true,
            error: false,
            data : deleteProduct
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = deleteAddToCartProduct