/*
  Channel Types Routes
  host + /api/channel
*/

const { Router } = require("express");
const { check } = require("express-validator");
const {
  createChannel,
  getChannels,
  updateChannel,
  deleteChannel,
} = require("../controllers/channel");
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
  createChannel
);
router.get("/channels", getChannels);
router.put("/:id", updateChannel);
router.delete("/:id", deleteChannel);

module.exports = router;
