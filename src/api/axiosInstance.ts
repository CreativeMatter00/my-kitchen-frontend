import axios from "axios";
import { useCookies } from "next-client-cookies";

export const url = "https://mykitchen.creativeati.xyz/api";

const axiosInstance = axios.create({
  baseURL: url,
});


export default axiosInstance;
