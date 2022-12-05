import dbConnect from '../../../util/mongo.js'
import Product from '../../../models/Product.js'
import Order from "../../../models/Order";
const handler = async (req,res) =>{
    const {method} = req

    await dbConnect()

    if(method === 'GET'){
        try{
            const orders = await Order.find()
            res.status(201).json(orders)
        }catch(err){
            res.status(500).json(err)
        }
    }
    if(method === 'POST'){
        try{
            const order = await Order.create(req.body)
            res.status(201).json(order)
        }catch(err){
            res.status(500).json(err)
        }
    }

}

export default handler