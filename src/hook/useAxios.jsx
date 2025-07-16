import axios from "axios";

export const AxiosSource = axios.create({
  baseURL: "https://charino-backend.vercel.app",
  withCredentials: true,
});
const useAxios = () => {
  return AxiosSource;
};

export default useAxios;