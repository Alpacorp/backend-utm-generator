/*
  Strategy routes
  host + /api/strategy
*/

const { Router } = require("express");
const {
  createStrategy,
  getStrategy,
  updateStrategy,
  deleteStrategy,
} = require("../controllers/strategy");
const router = Router();

router.post("/new", createStrategy);
router.get("/strategy", getStrategy);
router.put("/:id", updateStrategy);
router.delete("/:id", deleteStrategy);

module.exports = router;
