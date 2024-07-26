const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controllers");



router.route('/me').get(userController.verifyToken);
router.route("/register").post(userController.register);
router.route("/login").post(userController.login);

router.route('/address/:id').post(userController.saveAddress);
router.route("/request-password-reset/:id").post(userController.requestPasswordReset);
router.route("/reset-password/:id/:token").post(userController.resetPassword);


module.exports = router;
