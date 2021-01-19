module.exports = mongoose => {
    const Produto = mongoose.model(
        "produto",
        mongoose.Schema(
        {
            title: String,
            description: String,
            price: Number
        },
        { timestamps: true }
        )
    );
    return Produto;
};