const mongoose = require('mongoose');
const Product = require('../models/product.js');
const Warehouse = require('../models/product.js');

const addProduct = async({id: uid, name: y, quantity: q}) =>{
    try{
        console.log(typeof uid);

        var query = mongoose.Types.ObjectId(uid);
        console.log(typeof query);
        await mongoose.connect(process.env.URI);
        const warehouse = await Warehouse.findOne({_id: query});
        console.log(warehouse);
        warehouse.inventory.push({name: y, quantity: q});
        await warehouse.save();
        mongoose.connection.close();
        return {status: 201, message: `${y} has successfully been added to inventory!`};
    }catch(err){
        mongoose.connection.close();
        throw {status: 500, error: 'Could not add product to inventory'};
    }
}

// const updateProduct = async(oldid, name) =>{
//     try{
//             var query = mongoose.Types.ObjectId(oldid);
//             await mongoose.connect(process.env.URI);
//             await Product.findOneAndUpdate({_id: query}, {productName: name});
//             mongoose.connection.close();
//             return;
//     }catch(err){
//             mongoose.connection.close();
//             throw err;
//     }
// }


// const deleteProduct = async (productName) =>{
//     try{
//         await mongoose.connect(process.env.URI);
//         await Product.deleteOne({productName});
//         mongoose.connection.close();
//         return;
//     }catch(err){
//     mongoose.connection.close();
//     throw err;
//     }
// }







 module.exports = {
     addProduct
  }