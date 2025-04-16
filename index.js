const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

// POST request - Create a user
app.post("/user", (req, res) => {
    const { name, age } = req.body;
    res.json({ message: "User created", name, age });
});

// PUT request - Update user
app.put("/user/:id", (req, res) => {
    res.json({ message: `User with ID ${req.params.id} updated` });
});

// DELETE request - Delete user
app.delete("/user/:id", (req, res) => {
    res.json({ message: `User with ID ${req.params.id} deleted` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
