const express = require("express");
const router = express.Router();
const coursesHandler = require("./handler/courses");

const verify_token = require("../middlewares/verifyToken");
const can = require("../middlewares/permission");

router.get("/", coursesHandler.getAll);
router.get("/:id", coursesHandler.get);

router.post("/", verify_token, can("admin"), coursesHandler.create);
router.put("/:id", verify_token, can("admin"), coursesHandler.update);
router.delete("/:id", verify_token, can("admin"), coursesHandler.destroy);

module.exports = router;
