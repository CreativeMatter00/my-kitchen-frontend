import axios from "axios";
import axiosInstance from "./axiosInstance";

let url = "http://103.219.160.253:5454/drug-website";

export const getProductDetails = async () => {
  try {
    const response = await axios.get(`${url}/api/SpecilizedProducts`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiGet = async (endPoint: string) => {
  const { data } = await axiosInstance.get(endPoint);
  return data?.data;
};

export const apiPost = async (endPoint: string, payLoad: any, token?:any) => {
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
  const { data } = await axiosInstance.post(endPoint, payLoad,config);
  return data;
};

export const apiPatch = async (endPoint: string, payLoad: any, token?:any) => {
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
  const { data } = await axiosInstance.patch(endPoint, payLoad, config);
  return data;
};

export const apiDelete = async (endPoint: string) => {
  const { data } = await axiosInstance.delete(endPoint);
  return data;
};
