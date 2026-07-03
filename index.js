const express = require("express");
const urlroutes = require("./routes/url");
const staticroutes = require("./routes/statucroutes");
const userroutes = require("./routes/user");
const { connectmongoDB } = require("./connect");
const URL = require("./models/url");
const path = require('path');

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/test", async (req, res) => {
    const allurls = await URL.find({});

    return res.render("home", {
        urls: allurls,
        name: "Kunal",
    });
});



app.use("/urls", urlroutes);
app.use("/user", userroutes);
app.use("/", staticroutes);

// Keep this LAST
app.get("/:shortID", async (req, res) => {
    const shortID = req.params.shortID;

    const entry = await URL.findOneAndUpdate(
        { shortID },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );

    if (!entry) {
        return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectURL);
});

connectmongoDB("mongodb://localhost:27017/shortenurl")
  .then(() => console.log("MongoDB Connected"));


  app.set("view engine","ejs");
  app.set('views',path.resolve("./views"));

app.listen(8001, () => {
  console.log("Server running on port 8001");
});