const express = require("express");
const Books = require('./BooksSchema');
const mongodbConnected = require('./MongoDBconnect'); // Assuming this is used for connecting MongoDB
const cors = require('cors');

const app = express();
const bodyParser = require("body-parser");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Log when Books schema is loaded
console.log("BOOKS Schema Loaded: ", Books);

// Routes
// Welcome route
app.get('/', (req, res) => {
    res.send("Welcome to the Book API!");
});

// About route - show document count
app.get('/about', async (req, res) => {
    try {
        const count = await Books.countDocuments().exec();
        console.log("Total documents count before addition: ", count);
        res.send("MongoDB, Express, React, and Mongoose app. React runs in another application.");
    } catch (err) {
        console.error("Error counting documents: ", err);
        res.status(500).send("Error counting documents");
    }
});

// Fetch all books
app.get('/allbooks', async (req, res) => {
    try {
        const books = await Books.find();
        res.json(books);
    } catch (err) {
        console.error("Error fetching all books: ", err);
        res.status(500).send("Error fetching books");
    }
});

// Fetch single book by ID
app.get('/getbook/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const book = await Books.findById(id);
        if (!book) {
            return res.status(404).send("Book not found");
        }
        res.json(book);
    } catch (err) {
        console.error("Error fetching book by ID: ", err);
        res.status(500).send("Error fetching book");
    }
});

// Add a new book
app.post('/addbooks', async (req, res) => {
    console.log("Request Body: ", req.body);
    const newBook = new Books(req.body);

    try {
        await newBook.save();
        res.status(200).json({ message: 'Book added successfully' });
    } catch (err) {
        console.error("Error adding new book: ", err);
        res.status(400).send('Adding new book failed');
    }
});

// Update book by ID
app.post('/updatebook/:id', async (req, res) => {
    const id = req.params.id;
    const updatedBook = req.body;

    try {
        const result = await Books.findByIdAndUpdate(id, updatedBook, { new: true });
        if (!result) {
            return res.status(404).send("Book not found to update");
        }
        res.status(200).json({ message: 'Book updated successfully', result });
    } catch (err) {
        console.error("Error updating book: ", err);
        res.status(500).send("Error updating book");
    }
});

// Delete book by ID
app.post('/deleteBook/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const result = await Books.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send("Book not found to delete");
        }
        res.status(200).send("Book deleted successfully");
    } catch (err) {
        console.error("Error deleting book: ", err);
        res.status(500).send("Error deleting book");
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
