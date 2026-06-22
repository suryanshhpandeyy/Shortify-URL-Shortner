const { nanoid } = require("nanoid");
const URL = require('../model/url');

//Handle Post Request
async function handlePost(req,res) {
    try {
        const body = req.body;
        if(!body.redirectURL)
            return res.status(400).json({ error: "URL is Required" });
        const ShortURL = await URL.create({
        RedirectURL: body.redirectURL,
        ShortID : nanoid(8),
        visitHistory : []
    }
);
        return res.redirect(`/?short=${ShortURL.ShortID}`);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

//Redirect To Main URL
async function Redirect(req, res) {
    try {
        const ShortID = req.params.ShortID;

        const entry = await URL.findOneAndUpdate(
            { ShortID: ShortID },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    },
                },
            }
        );
        if (!entry) {
            return res.status(404).json({
                error: "Short URL not found",
            });
        }

        return res.redirect(entry.RedirectURL);

    } catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
}

// Get Analytics
async function GetAnalytics(req, res) {
    try {
        const ShortID = req.params.ShortID;

        if (!ShortID) {
            return res.status(400).json({
                error: "Short URL Not Found"
            });
        }

        const entry = await URL.findOne({ ShortID });

        if (!entry) {
            return res.status(404).json({
                error: "URL does not exist"
            });
        }

    return res.render("analytics", {
    shortId: entry.ShortID,
    redirectURL: entry.RedirectURL,
    totalClicks: entry.visitHistory.length,
    analytics: entry.visitHistory
});

    } catch (err) {
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

module.exports = {handlePost,Redirect,GetAnalytics};