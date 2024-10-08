import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
            quantity: { type: Number, required: true },
            size: { type: String },
            color: { type: String }
        }
    ],
    totalAmount: { type: Number, required: true }
}, { timestamps: true });

export const Cart = mongoose.model("Cart", cartSchema);