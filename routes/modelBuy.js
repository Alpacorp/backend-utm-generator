/*
  ModelBuy Data
  host + /api/modelbuy
*/

const { Router } = require("express");
const { check } = require("express-validator");
const {
  createModelBuy,
  getModelBuys,
  updateModelBuy,
  deleteModelBuy,
} = require("../controllers/modelBuy");
const { validateInputs } = require("../middlewares/validateInputs");
const { validateJWT } = require("../middlewares/validateJwt");
const router = Router();

router.use(validateJWT);

router.post(
  "/new",
  (check("name", "name is required"),
  check("shortname", "shortname is required"),
  validateInputs),
  createModelBuy
);
router.get("/modelbuys", getModelBuys);
router.put("/:id", updateModelBuy);
router.delete("/:id", deleteModelBuy);

module.exports = router;
