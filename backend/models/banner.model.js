import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    link: { type: String, required: true },
    title: { type: String }
}, { timestamps: true });

export const Banner = mongoose.model("Banner", bannerSchema);
