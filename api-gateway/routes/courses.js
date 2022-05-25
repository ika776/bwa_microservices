const express = require("express");
const router = express.Router();
const coursesHandler = require("./handler/courses");

const verify_token = require("../middlewares/verifyToken");

router.get("/", coursesHandler.getAll);
router.get("/:id", coursesHandler.get);
router.post("/", verify_token, coursesHandler.create);
router.put("/:id", verify_token, coursesHandler.update);
router.delete("/:id", verify_token, coursesHandler.destroy);

module.exports = router;
