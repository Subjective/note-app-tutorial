const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
const noteRoutes = require("./routes/noteRoutes");

app.use(cors()); // This should enable CORS for all routes and origins
app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api", noteRoutes);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
