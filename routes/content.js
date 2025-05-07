const express = require("express");
const { aggregateContent, setReminder } = require("../controllers/content");

const router = express.Router();

// Aggregate saved content from platforms
router.get("/aggregate", aggregateContent);

// Set reminder for a saved item
router.post("/reminder", setReminder);

module.exports = router;