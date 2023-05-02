const express = require("express");
const router = express.Router();

router.use("/api", require("./api"));

router.route.get("/", (req, res) => {
  res.send("App running on port 8000");
});
module.exports = router;
