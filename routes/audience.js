/*
  Routes audience database
  host + /api/audience
*/

const { Router } = require("express");
const { check } = require("express-validator");
const {
  createAudience,
  getAudiences,
  updateAudience,
  deleteAudience,
} = require("../controllers/audience");
const { validateInputs } = require("../middlewares/validateInputs");
const { validateJWT } = require("../middlewares/validateJwt");
const router = Router();

router.use(validateJWT);

router.post(
  "/new",
  [
    check("name", "name audience is required"),
    check("shortname", "shortname audience is required"),
    validateInputs,
  ],
  createAudience
);
router.get("/audiences", getAudiences);
router.put("/audience/:id", updateAudience);
router.delete("/audience/:id", deleteAudience);

module.exports = router;
