const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
    {
        shortID: {
            type: String,
            required: true,
        },
        redirectURL: {
            type: String,
            required: true,
        },
        visitHistory: [
            {
                timestamp: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
        createdBy: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;