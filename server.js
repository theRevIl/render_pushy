const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/search", async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) return res.status(400).json({ error: "Missing query parameter" });

        const lexicaResponse = await axios.get(`https://lexica.art/api/v1/search?q=${encodeURIComponent(query)}`);
        res.json(lexicaResponse.data);
    } catch (error) {
        res.status(500).json({ error: "Lexica API Error", details: error.message });
    }
});

app.listen(PORT, () => console.log(`Proxy running at port ${PORT}`));
