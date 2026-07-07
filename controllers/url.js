const { nanoid } = require("nanoid");
const URL = require("../models/url");

// Generate Short URL
async function handleGenerationofshorturl(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({
            error: "URL is required",
        });
    }

    const shortID = nanoid(8);

    await URL.create({
    shortID,
    redirectURL: body.url,
    visitHistory: [],
    createdBy:req.user._id, // Assuming you have user authentication and req.user is set
});

const allUrls = await URL.find({});

return res.render("home", {
    id: shortID,
    urls: allUrls,
    name: "Kunal",
});
}

// Analytics
async function handleanalytics(req, res) {
    const shortID = req.params.shortID;

    const result = await URL.findOne({ shortID });

    if (!result) {
        return res.status(404).json({
            error: "Short URL not found",
        });
    }

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

module.exports = {
    handleGenerationofshorturl,
    handleanalytics,
};