const express = require("express");
const router = express.Router();
const User = require("../models/customerSchema");
var moment = require("moment");
const userController = require("../Controllers/userController");

// GET Requst
router.get("/", userController.user_index_get);

router.get("/edit/:id", userController.user_edit_get);

router.get("/view/:id", userController.user_view_get);

router.post("/search", userController.user_search_get);

// DELETE Request
router.delete("/edit/:id", userController.user_delete_delete);

// PUT Requst
router.put("/edit/:id", userController.user_update_put);

module.exports = router;
