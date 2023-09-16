import express from "express";
import * as pageController from "../controllers/pageController.js";
import * as authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router();


router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/product").get(pageController.getProductPage);
router.route("/testimonial").get(pageController.getTestimonialPage);
router.route("/contact").get(pageController.getContactPage);
router.route("/login").get(pageController.getLoginPage);
router.route("/logout").get(pageController.getLogout);
router.route("/register").get(pageController.getRegisterPage);

export default router;