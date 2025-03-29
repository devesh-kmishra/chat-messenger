import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL:
//     import.meta.env.MODE === "development"
//       ? "http://localhost:3000/api"
//       : "https://chat-messenger-ten.vercel.app/api",
//   withCredentials: true,
// });

export const axiosInstance = axios.create({
  baseURL: "https://chat-messenger-ten.vercel.app/api",
  withCredentials: true,
});
