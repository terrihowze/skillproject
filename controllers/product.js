const mongoose = require('mongoose');
const Product = require('../models/product.js');
const Warehouse = require('../models/company.js');

// const addProduct = async() =>{
//     try{
//         //console.log(process.env.URI);
//         await mongoose.connect(process.env.URI);
//         const product = new Product({productName, productCost});
//         const savedProduct = await product.save();
//         mongoose.connection.close();
//         return {status: 201, message: `${productName} has successfully been added to inventory!`};
//     }catch(err){
//         mongoose.connection.close();
//         throw {status: 500, error: 'Could not add product to inventory'};
//     }
// }

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
     
  }