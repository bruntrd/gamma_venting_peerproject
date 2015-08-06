var express = require("express");
var router = express.Router();
var path = require("path");
var adjectives = require("../public/data/adjective.json");
var modifiers = require("../public/data/modifying_adjective.json");
var javaScript = require("../public/data/javascript.json");

router.get("/data1", function(req,res){
        res.json(modifiers);

});

router.get("/data2", function(req,res){
    res.json(adjectives);

});

router.get("/data3", function(req,res){
    res.json(javaScript);

});



router.get("/*", function(req,res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public",file));

});

module.exports = router;