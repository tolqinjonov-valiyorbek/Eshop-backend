const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishlist,
  getUserCart,
  userCart,
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
  removeProductFromCart,
  updateProductQuantityFromCart,
} = require("../controller/userCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware.js");
const router = express.Router();

router.post("/forgot-password-token", forgotPasswordToken);
router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/cart/", authMiddleware, userCart);
router.post("/cart/create-order", authMiddleware, createOrder);

router.get("/all-users", getallUser);
router.get("/:id", authMiddleware, getaUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);
router.get("/getmyorders", authMiddleware, getMyOrders);
router.get("/getallorders", authMiddleware, getAllOrders);
router.post("/getorderbyuser/:id", authMiddleware, getAllOrders);
// router.get("/getMonthOrder", authMiddleware, getMonthWiseOrderIncome);
// router.get("/getMonthOrderCount", authMiddleware, getMonthWiseOrderCount);
// router.get("/getyearorders", authMiddleware, getYearTotalOrders);

router.delete("/:id", deleteaUser);
router.put("/order/update-order/:id", authMiddleware, updateOrderStatus);
router.delete("/delete-product-cart/:cartItemId", authMiddleware, removeProductFromCart);
router.delete("/update-product-cart/:cartItemId/:newQuantity", authMiddleware, updateProductQuantityFromCart);

router.put("/reset-password/:token", resetPassword);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/password", authMiddleware, updatePassword);
router.put("/block-user/:id", authMiddleware, blockUser);
router.put("/unblock-user/:id", authMiddleware, unblockUser);

module.exports = router;
