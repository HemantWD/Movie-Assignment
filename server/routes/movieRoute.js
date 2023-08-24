const express = require("express");
const { favourite, receive } = require("../contollers/movieController");

const router = express.Router();

router.post("/movie", favourite);
router.get("/receive", receive);

module.exports = router;
