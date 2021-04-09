const express = require("express");
const router = express.Router();
let { shortenUrl, getUrl } = require("../controllers/urlController");

router.post("/shorten", async (req, res) => {
  try {
    let response = await shortenUrl(req);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.get("/:shortenedUrl", async (req, res) => {
  try {
    let response = await getUrl(req);
    console.log(response);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

module.exports = router;
