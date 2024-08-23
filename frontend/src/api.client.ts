import { TSignIn } from "./pages/Login";
import { RegisterFormData } from "./pages/Register";
import { HotelType } from "../../backend/src/model/hotel.model";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const register = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/v1/user/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/v1/user/valdate-token`, {
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const login = async (formData: TSignIn) => {
  const response = await fetch(`${API_BASE_URL}/api/v1/user/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const LogOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/v1/user/logout`, {
    method: "POST",
    credentials: "include",
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const addMyHotel = async (hotelFormData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/v1/hotel/create`, {
    method: "POST",
    credentials: "include",
    body: hotelFormData,
  });
  console.log(response);

  if (!response.ok) {
    throw new Error("failed to add hotel");
  }
  return response.json();
};

export const getMyHotel = async (): Promise<HotelType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/v1/hotel/gethotel`, {
    credentials: "include",
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error("failed to get hotel");
  }
  return data;
};
