import { Request, Response } from "express";
import cloudinary from "cloudinary";
import Hotel, { HotelType } from "../model/hotel.model";
import { HotelSearchResponse } from "../shared/types";

export const postHotel = async (req: Request, res: Response) => {
  try {
    const imagefiles = req.files as Express.Multer.File[];
    const newHotel: HotelType = req.body;

    const uploadPromises = imagefiles?.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString("base64");
      let dataUri = `data:${image.mimetype};base64,${b64}`;
      const res = await cloudinary.v2.uploader.upload(dataUri);
      return res.url;
    });
    const imageUrls = await Promise.all(uploadPromises);
    newHotel.imageUrls = imageUrls;
    newHotel.lastUpdated = new Date();
    newHotel.userId = req.userId;
    newHotel.pricePerNight = parseFloat(req.body.pricePerNight);
    newHotel.starRating = parseInt(req.body.starRating);
    newHotel.adultCount = parseInt(req.body.adultCount);
    newHotel.childCount = parseInt(req.body.childCount);
    const hotel = new Hotel(newHotel);
    await hotel.save();
    res.status(200).json(hotel);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "error while creating hotel " + error,
    });
  }
};

export const getMyHotel = async (req: Request, res: Response) => {
  try {
    const hotel = await Hotel.find({ userId: req.userId });
    if (!hotel) {
      return res.status(200).json("no hotel found");
    }
    return res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while getting my hotel " + error,
    });
  }
};

export const searchHotel = async (req: Request, res: Response) => {
  try {
    const pageSize = 5;
    const pageNumber = parseInt(
      req.query.page ? req.query.page.toString() : "1"
    );
    const skip = (pageNumber - 1) * pageSize;
    const hotels = await Hotel.find().skip(skip).limit(pageSize);
    const total = await Hotel.countDocuments();
    const response: HotelSearchResponse = {
      data: hotels,
      pagination: {
        total,
        page: pageNumber,
        pages: Math.ceil(total / pageSize),
      },
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while searching my hotel " + error,
    });
  }
};
