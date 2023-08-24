const express = require("express");
const cors = require("cors");
const app = express();
const movieRoute = require("./routes/movieRoute");

app.use(express.json());
app.use(cors());

// routes
app.use("/favourite", movieRoute);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to backend of Movies</h1>");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listeming on port ${PORT}`);
});
