const express    = require("express");
const siteRoutes = express.Router();

siteRoutes.get("/", (req, res, next) => {
  res.render("home");
});

siteRoutes.use((req, res, next) => {
    if (req.session.currentUser) {
      next();
    } else {
      res.redirect("/login");
    }
  });
  
  siteRoutes.get("/secret", (req, res, next) => {
    res.render("secret");
  });

  siteRoutes.get("/main", (req, res, next) => {
    res.render("private/main");
  });

  siteRoutes.get("/private", (req, res, next) => {
    res.render("private/private");
  });

module.exports = siteRoutes;