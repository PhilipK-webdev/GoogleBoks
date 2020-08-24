const Book = require("../models/Book");

module.exports = {
    // creates a new shoe
    newBook: async (req, res) =>
        Book.create(req.body)
            .then((result) => res.send(result))
            .catch((err) => res.send(err)),

    // if req.query is passed it will find the specific shoe
    // otherwise it will return all shoes
    getBooK: (req, res) => {
        !req.query.id
            ? Book.find({})
                .populate("authorId")
                .then((allShoes) => res.send(allShoes))
                .catch((err) => res.send(err))
            : Book.findById(req.query.id)
                .then((foundShoe) => res.send(foundShoe))
                .catch((err) => res.send(err));
    },
    deleteBook: async (req, res) => {

        try {
            const foundBook = await Book.findById(req.body.shoeId);

            await foundBook.save();
            res.send(foundBook);
        } catch (error) {

            res.send(error);
        }
    },
};
