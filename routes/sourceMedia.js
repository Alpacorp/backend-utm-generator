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
const router = Router();

router.post(
  "/new",
  [
    check("name", "name is requierd"),
    check("idchanneltype", "idchanneltype is requierd"),
    validateInputs,
  ],
  createSourceMedia
);
router.get("/sourcemedia", getSourceMedia);
router.put("/:id", updateSourceMedia);
router.delete("/:id", deleteSourceMedia);

module.exports = router;
