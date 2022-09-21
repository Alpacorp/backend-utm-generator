/*
  Medium Data
  host + /api/medium
*/

const { Router } = require("express");
const { check } = require("express-validator");
const {
  createMedium,
  getMediums,
  updateMedium,
  deleteMedium,
} = require("../controllers/medium");
const { validateInputs } = require("../middlewares/validateInputs");
const { validateJWT } = require("../middlewares/validateJwt");
const router = Router();

router.use(validateJWT);

router.post(
  "/new",
  [
    check("name", "name is required"),
    check("idchanneltype", "number id is required"),
    validateInputs,
  ],
  createMedium
);
router.get("/mediums", getMediums);
router.put("/:id", updateMedium);
router.delete("/:id", deleteMedium);

module.exports = router;
