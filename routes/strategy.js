/*
  Strategy routes
  host + /api/strategy
*/

const { Router } = require("express");
const { check } = require("express-validator");
const {
  createStrategy,
  getStrategy,
  updateStrategy,
  deleteStrategy,
} = require("../controllers/strategy");
const { validateInputs } = require("../middlewares/validateInputs");
const { validateJWT } = require("../middlewares/validateJwt");
const router = Router();

router.use(validateJWT);

router.post(
  "/new",
  [
    check("name", "name is required"),
    check("shortname", "shortname is required"),
    validateInputs,
  ],
  createStrategy
);
router.get("/strategy", getStrategy);
router.put("/:id", updateStrategy);
router.delete("/:id", deleteStrategy);

module.exports = router;
