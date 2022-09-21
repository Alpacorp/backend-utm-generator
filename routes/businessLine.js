/*
  Business Line Routes
  host + /api/businessline
*/

const { Router } = require("express");
const { check } = require("express-validator");
const {
  createBusinessLine,
  getBusinessLines,
  updateBusinessLine,
  deleteBusinessLine,
} = require("../controllers/businessLine");
const { validateInputs } = require("../middlewares/validateInputs");
const { validateJWT } = require("../middlewares/validateJwt");
const router = Router();

router.use(validateJWT);

router.post(
  "/new",
  [
    check("name", "name is required").not().isEmpty(),
    check("shortname", "shortname is required").not().isEmpty(),
    validateInputs,
  ],
  createBusinessLine
);
router.get("/businesslines", getBusinessLines);
router.put("/:id", updateBusinessLine);
router.delete("/:id", deleteBusinessLine);

module.exports = router;
