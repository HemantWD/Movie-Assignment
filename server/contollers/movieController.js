const db = require("../Config/db");

const favourite = (req, res) => {
  const { Title, Year, Type, Poster } = req.body;
  const chechQuery =
    "INSERT INTO favourite (TITLE,YEAR,TYPE,POSTER) VALUES (?,?,?,?)";
  db.query(chechQuery, [Title, Year, Type, Poster], (error, result) => {
    if (error) {
      res.status(500).json({ message: "Error in Saving Favourite", error });
    } else {
      res.json({ message: "Added to favourites" });
    }
  });
};

const receive = (req, res) => {
  const getQuery = "SELECT * FROM favourite";
  db.query(getQuery, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Unable to get the favourite" });
    } else {
      res.json(results);
    }
  });
};

module.exports = { favourite, receive };
