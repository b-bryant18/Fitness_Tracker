const router = require("express").Router();
const path = require("path");


module.exports = function(router) {
//Loads index.html
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Loads exercise.html - Add Your Exercise
router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//Loads stats.html - Workout Dashboard
router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});
}