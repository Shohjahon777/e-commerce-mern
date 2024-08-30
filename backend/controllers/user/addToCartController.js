const addToCartModel = require("../../models/cartProduct")

const addToCartController = async(req, res) => {
    try {
        const {productId} = req.body 
        const currentUser = req.userId

        const isProductAvailable = await addToCartModel.findOne({productId})

        if(isProductAvailable){
            return res.json({
                message : "Already exist in Add to cart",
                success : true,
                error : false
            })
        }
        
        const payload = {
            productId : productId,
            quantity : 1,
            userId : currentUser
        }

        const newAddToCart = await addToCartModel(payload)
        const saveProduct  = await newAddToCart.save()


        return res.json({
            message : "Product Added",
            data : saveProduct,
            success : true,
            error : false
        })

    }catch(err){
        res.status(400).json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = addToCartController