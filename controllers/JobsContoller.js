// =============================================================================
// Routes
// =============================================================================

// Default route
var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var jobs = require("../models/jobs.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    jobs.all(function (data) { // (jobs) match hbs 
        var hbsObject = {
            jobs: data // (jobs) match hbs 
        };
        console.log(hbsObject);
        res.render("index", hbsObject); // match index.hbs
    });
});
router.post("/api/job", function (req, res) {
    jobs.create([  //*  cols, vals, cb
        "category", 
        "company", 
        "description",
        "salary",
        "skills"
    ], [
        req.body.category, req.body.company, req.body.description, req.body.salary, req.body.salary, req.body.skills,
    ], function (result) {
        // Send back the ID of the new quote
        res.json({
            id: result.insertId
        });
    });
});
router.put("/api/job/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    jobs.update({
        sleepy: req.body.sleepy
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
router.delete("/api/jobs/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    jobs.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;