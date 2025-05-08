// import express from "express";
// import {
//   registerController,
//   loginController,
//   testController,
//   forgotPasswordController,
//   updateProfileController,
//   getOrdersController,
//   getAllOrdersController,
//   orderStatusController,
// } from "../controllers/authController.js";
// import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// //router object
// const router = express.Router();

// //routing
// //REGISTER || METHOD POST
// router.post("/register", registerController);

// //LOGIN || POST
// router.post("/login", loginController);

// //Forgot Password || POST
// router.post("/forgot-password", forgotPasswordController);

// //test routes
// router.get("/test", requireSignIn, isAdmin, testController);

// //protected User route auth
// router.get("/user-auth", requireSignIn, (req, res) => {
//   res.status(200).send({ ok: true });
// });
// //protected Admin route auth
// router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
//   res.status(200).send({ ok: true });
// });

// //update profile
// router.put("/profile", requireSignIn, updateProfileController);

// //orders
// router.get("/orders", requireSignIn, getOrdersController);

// //all orders
// router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// // order status update
// router.put(
//   "/order-status/:orderId",
//   requireSignIn,
//   isAdmin,
//   orderStatusController
// );

// export default router;

import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Routing
router.post("/register", registerController); // Register
router.post("/login", loginController); // Login
router.post("/forgot-password", forgotPasswordController); // Forgot Password

// Test Route
router.get("/test", requireSignIn, isAdmin, testController);

// Protected routes for user and admin
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// Profile update
router.put("/profile", requireSignIn, updateProfileController);

// Orders
router.get("/orders", requireSignIn, getOrdersController);

// All orders (admin only)
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// Update order status (admin only)
router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusController);

export default router;
