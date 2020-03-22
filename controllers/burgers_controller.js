const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (burgers) {
      var hbsObject = {
        burgers: burgers
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  router.post("/burgers/insertOne", function (req, res) {
    burger.insertOne(
      req.body.burger_name, function (result) {
        res.redirect('/');
      })
  });
  router.delete("/:id", function (req, res) {
    var id = req.params.id;
    burger.deleteOne(id, function (result) {
      console.log(result);
      res.redirect('/');
    });
  });
  router.put("/burgers/update", function (req, res) {
    burger.updateOne(
      req.body.burger_id, function (result) {
        console.log(result);
        res.redirect('/');
      });
  });

module.exports = router;