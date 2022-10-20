/*
  SourceMedia
  host + /api/sourcemedia
*/

const { Router } = require("express");
const { check } = require("express-validator");
const {
  createSourceMedia,
  getSourceMedia,
  updateSourceMedia,
  deleteSourceMedia,
} = require("../controllers/sourceMedia");
const { validateInputs } = require("../middlewares/validateInputs");
const { validateJWT } = require("../middlewares/validateJwt");
const router = Router();

router.use(validateJWT);

router.post(
  "/new",
  [
    check("name", "name is requierd").not().isEmpty(),
    check("idchanneltype", "idchanneltype is requierd").not().isEmpty(),
    validateInputs,
  ],
  createSourceMedia
);
router.get("/sourcemedia", getSourceMedia);
router.put("/:id", updateSourceMedia);
router.delete("/:id", deleteSourceMedia);

module.exports = router;
