// Auth Routes
// host + /api/auth

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  renewToken,
  loginUser,
} = require("../controllers/auth");
const { validateInputs } = require("../middlewares/validateInputs");
const { validateJWT } = require("../middlewares/validateJwt");

router.post(
  "/",
  [
    check("email", "email is required").not().isEmpty(),
    check("password", "password is required")
      .not()
      .isEmpty()
      .isLength({ min: 6 }),
    validateInputs,
  ],
  loginUser
);

router.post(
  "/new",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "email is required").isEmail(),
    check("role", "role is required").not().isEmpty(),
    check("password", "password is required")
      .not()
      .isEmpty()
      .isLength({ min: 6 }),
    validateInputs,
  ],
  createUser
);

router.use(validateJWT);

router.get("/users", getUsers);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

router.get("/renew", [validateInputs], renewToken);

module.exports = router;
