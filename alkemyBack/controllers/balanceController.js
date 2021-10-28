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
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+' '+time;

    let objI = {
        tipo : req.body.tipo,
        valor : req.body.valor,
        concepto: req.body.concepto,
        fecha: dateTime
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
        valor : req.body.valor,
        concepto: req.body.concepto,
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