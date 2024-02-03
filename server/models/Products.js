import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    images: {
        type: Array,
        require: true,
        default: []
    },
    brand: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    reviews: {
        type: Array,
        require: true,
        default: []
    },
    rating: {
        type: Number,
        require: true,
        default: 0
    },
    numberOfReviews: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    productIsNew: {
        type: Boolean,
        require: true
    },
    stripeId: {
        type: String
    },
}, {timestamps: true}
);

const Product = mongoose.model('Product', productSchema)

export default Product