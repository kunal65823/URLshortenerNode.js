const express = require("express");
const { handleGenerationofshorturl ,handleanalytics} = require("../controllers/url");


const router = express.Router();

router.post("/", handleGenerationofshorturl,);

router.get("/analytics/:shortID",handleanalytics);

module.exports = router;