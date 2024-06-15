const express = require("express")
const { createTransaction, getTransactions, updateTransaction, getSingleTransaction, deleteTransaction } = require("../controllers/transaction.controller")

const router = express.Router()

router.route("/transaction/new").post(createTransaction)
router.route("/my/transactions").get(getTransactions)
router.route("/transaction/:id").put(updateTransaction).get(getSingleTransaction).delete(deleteTransaction)


module.exports = router