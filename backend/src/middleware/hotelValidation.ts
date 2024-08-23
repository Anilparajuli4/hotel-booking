import { body } from "express-validator";

export const hotelValidationRules = [
  body("userId").notEmpty().withMessage("User ID is required"),
  body("name").notEmpty().withMessage("Name is required"),
  body("country").notEmpty().withMessage("Country is required"),
  body("city").notEmpty().withMessage("City is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("adultCount")
    .isInt({ min: 1 })
    .withMessage("Adult count must be a positive integer")
    .notEmpty()
    .withMessage("Adult count is required"),
  body("childCount")
    .isInt({ min: 0 })
    .withMessage("Child count must be a non-negative integer")
    .notEmpty()
    .withMessage("Child count is required"),
  body("facilities")
    .notEmpty()
    .isArray()
    .withMessage("Facilities are required"),
  // body("pricePerNight")
  //   .withMessage("Price per night must be a non-negative number")
  //   .notEmpty()
  //   .withMessage("Price per night is required"),
  // body("starRating")
  //   .withMessage("Star rating must be between 1 and 5")
  //   .notEmpty()
  //   .withMessage("Star rating is required"),
  body("imageUrls")
    .isArray({ min: 1 })
    .withMessage("Image URLs must be an array with at least one URL"),
  body("lastUpdated")
    .isISO8601()
    .withMessage("Last updated must be a valid date")
    .notEmpty()
    .withMessage("Last updated date is required"),
];
