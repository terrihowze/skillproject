const router = require('express').Router();
const { resolve } = require('path');
const { addProduct, deleteProduct, getAllProducts, updateProduct } = require('../../controllers/product.js');


router.get('/', async (req, res) =>{
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req,res) => {
    try{
        const data = await addProduct(req.body);
        console.log(data);
        res.sendFile(resolve('public', 'views', 'index.html'));
    }catch (err){
        res.status(500).json(err);
    }
});

router.delete('/:productName', async (req, res) => {
    try{
        await deleteProduct(req.params.productName);
        res.status(200).json({message: `${req.params.productName} has been succesfully deleted`});
    }catch(err){
        res.status(500).json({error: 'Unable to delete product'});
    }
})

router.put('/:id', async(req,res) =>{
    try{
        console.log(req.body);
        const data = await updateProduct(req.params.id, req.body.name);
        console.log(data);
    }catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;