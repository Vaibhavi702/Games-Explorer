import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const RAWG_KEY = process.env.RAWG_API_KEY;

if (!RAWG_KEY) {
  console.error("ERROR: RAWG_API_KEY not set in .env");
  process.exit(1);
}

app.use(cors()); // ब्राऊजरकडून येणारे requests परवानगी देण्यासाठी

// Simple proxy route that forwards query params to RAWG API
app.get("/api/games", async (req, res) => {
  try {
    // take all query params and append key
    const params = new URLSearchParams(req.query);
    params.set("key", RAWG_KEY);

    const rawgUrl = `https://api.rawg.io/api/games?${params.toString()}`;

    console.log(`[Proxy] Request -> ${rawgUrl}`);

    const response = await fetch(rawgUrl);
    const status = response.status;
    const data = await response.json();

    console.log(`[Proxy] RAWG status: ${status}`);

    // forward status code from RAWG if you want; here we send JSON with same status
    res.status(status).json(data);
  } catch (err) {
    console.error("[Proxy] Error:", err);
    res.status(500).json({ error: "Proxy error", details: err.message });
  }
});

// optional generic passthrough for other endpoints (e.g., /api/games/{id})
app.get("/api/*", (req, res) => {
  res.status(404).json({ error: "Use /api/games with query params" });
});

app.listen(PORT, () => {
  console.log(`RAWG proxy running at http://localhost:${PORT}/api/games`);
});