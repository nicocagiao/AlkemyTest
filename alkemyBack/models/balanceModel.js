const pool = require('../db');

async function getBalance() {
    try {
        let query = "SELECT * from balance";
        const rows = await pool.query(query);
        return rows;      
    } catch (error) {
        throw error;
    }
}

async function insertBalance(obj) {
    try {
        let query = "INSERT INTO balance SET ?";
        const rows = await pool.query(query, obj);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function updateBalance(obj) {
    try {
        let query = "UPDATE balance SET concepto= ?, valor= ? WHERE id= ?";
        console.log(query)
        const rows = await pool.query(query, [obj.concepto, obj.valor, obj.id.id]);
        return rows;
    } catch (error) {
        throw error;
    }
}


async function deleteBalance(obj) {
    try {
        let query = "DELETE FROM balance WHERE id= ?";
        const rows = await pool.query(query, obj);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getBalance, insertBalance, deleteBalance, updateBalance}