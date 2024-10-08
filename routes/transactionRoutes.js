const express = require("express");
const { addTransaction, getAllTransaction,editTransaction,deleteTransaction} = require("../controllers/transactionCtrl");

//router object
const router = express.Router();

//routers
// add transaction POST METHOD
router.post('/add-transaction',addTransaction);

// edit transaction POST METHOD
router.post('/edit-transaction',editTransaction);

// delete transaction POST METHOD
router.post('/delete-transaction',deleteTransaction);

//post transactions
router.post('/get-transaction',getAllTransaction);



module.exports = router;