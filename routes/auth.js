const express = require("express");
const passport = require("passport");

const router = express.Router();

// Google OAuth
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/failure" }),
  (req, res) => {
    res.send("Google OAuth successful!");
  }
);

// Twitter OAuth
router.get("/twitter", passport.authenticate("twitter"));
router.get(
  "/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/auth/failure" }),
  (req, res) => {
    res.send("Twitter OAuth successful!");
  }
);

// Reddit OAuth
router.get("/reddit", passport.authenticate("reddit"));
router.get(
  "/reddit/callback",
  passport.authenticate("reddit", { failureRedirect: "/auth/failure" }),
  (req, res) => {
    res.send("Reddit OAuth successful!");
  }
);

// Failure route
router.get("/failure", (req, res) => {
  res.send("Authentication failed.");
});

module.exports = router;