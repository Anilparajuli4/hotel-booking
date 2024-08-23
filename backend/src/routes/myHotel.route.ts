import express from "express";
import multer from "multer";
import { verifyToken } from "../middleware/verifiyUser";
import {
  getMyHotel,
  postHotel,
  searchHotel,
} from "../controller/hotel.controller";
import { hotelValidationRules } from "../middleware/hotelValidation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

router.post(
  "/create",
  verifyToken,

  upload.array("imagefiles", 6),
  postHotel
);

router.get("/gethotel", verifyToken, getMyHotel);
router.get("search", searchHotel);

export default router;
