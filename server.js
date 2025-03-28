const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Fixes CORS issues
app.use(express.json());

app.get("/search", (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.status(400).json({ error: "Query parameter is required" });
    }
    res.json({ message: `Searched for: ${query}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
