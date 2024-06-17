const Transaction = require("../models/transaction.model.js");
const asyncHandler = require("../utils/asyncHandler.js");
const ApiErrorHandler = require("../utils/ApiErrorHandler.js");

// create Transaction
exports.createTransaction = asyncHandler(async (req, res, next) => {
  const transaction = await Transaction.create(req.body);

  res.status(201).json({
    success: true,
    transaction,
  });
});

// get borrow/Lend Transactions of user
// Search Transaction by some search keyword
exports.getTransactions = asyncHandler(async (req, res, next) => {
  const { userId, type } = req.body;

  const keyword = req.query.keyword
    ? {
        $or: [
          {
            name: {
              $regex: req.query.keyword,
              $options: "i",
            },
          },
          {
            description: {
              $regex: req.query.keyword,
              $options: "i",
            },
          },
        ],
      }
    : {};

  const transactions = await Transaction.find({ userId, type, ...keyword });

  res.status(200).json({
    success: true,
    transactions,
  });
});

// get Single Transaction
exports.getSingleTransaction = asyncHandler(async (req, res, next) => {
  let transaction = await Transaction.findById(req.params.id);

  if (!transaction) {
    return next(new ApiErrorHandler(404, "Transaction not found"));
  }

  transaction = await Transaction.findById(req.params.id);

  res.status(200).json({
    success: true,
    transaction,
  });
});

// update Transaction details
exports.updateTransaction = asyncHandler(async (req, res, next) => {
  const { amount, name, description, status } = req.body;
  const transaction = await Transaction.findById(req.params.id);

  if (!transaction) {
    return next(new ApiErrorHandler(404, "Transaction not found"));
  }

  const updatedTransaction = await Transaction.findByIdAndUpdate(
    req.params.id,
    {
      amount,
      name,
      description,
      status,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    transaction: updatedTransaction,
  });
});

// Delete Transaction
exports.deleteTransaction = asyncHandler(async (req, res, next) => {
  let transaction = await Transaction.findById(req.params.id);

  if (!transaction) {
    return next(new ApiErrorHandler(404, "Transaction not found"));
  }

  await Transaction.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Transaction Deleted Successfully",
  });
});
