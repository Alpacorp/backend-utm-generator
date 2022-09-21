/*
  TypeAd Routes
  host + /api/typead
*/

const { Router } = require("express");
const { check } = require("express-validator");
const {
  createTypeAd,
  getTypeAd,
  updateTypeAd,
  deleteTypeAd,
} = require("../controllers/typeAd");
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
  createTypeAd
);
router.get("/typead", getTypeAd);
router.put("/:id", updateTypeAd);
router.delete("/:id", deleteTypeAd);

module.exports = router;
