const { Schema, model } = require("mongoose");

const saleSchema = Schema({
  totalValue: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    unique: true,
  },
  totalProducts: {
    type: Date,
    required: [true, "El valor es obligatorio"],
  },
  products: {},
  dateSale: {
    type: Date,
    required: [true, "El valor es obligatorio"],
  },
  state: {
    type: Boolean,
    default: true,
    emun: ["IN_PROGRESS", "CANCELLED", "DELIVERED"],
  },
  customerIdNumber: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    unique: true,
  },
  customerName: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    unique: true,
  },
  salesManager: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    unique: true,
  },
});

saleSchema.methods.toJSON = function () {
  const { __v, _id, ...sale } = this.toObject();
  sale.uid = _id;
  return sale;
};

module.exports = model("Sale", saleSchema);
