var express = require('express');
var router = express.Router();

const balanceModel = require('../models/balanceModel');

router.get('/api/balance', async (req, res, next) => {
try {
    let balance = await balanceModel.getBalance();
    res.json({data : balance});
} catch (error) {
    res.status(500).json({status : 'error'});
    throw error;
}
})

router.post('/api/add', async (req, res, next) => {
    let objI = {
        tipo : req.body.tipo,
        valor : req.body.valor
    }
    try {        
        let balance = await balanceModel.insertBalance(objI);
        res.json({data : balance});
    } catch (error) {
        res.status(500).json({status : 'error'});
        throw error;
    }
});

router.put('/api/update/:id', async (req, res, next) => {
    let objU = {
        id: req.params,
        tipo : req.body.tipo,
        valor : req.body.valor
    }
    try {        
        let balance = await balanceModel.updateBalance(objU);
        res.json({ data : balance});
    } catch (error) {
        res.status(500).json({status : 'error'});
        throw error;
    }
});

router.delete('/api/delete/:id', async (req, res, next) => {
    const { id } = req.params;
    try {        
        let balance = await balanceModel.deleteBalance(id);
        res.json({ data : balance});
    } catch (error) {
        res.status(500).json({status : 'error'});
        throw error;
    }
});


module.exports = router;