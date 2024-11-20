import axiosInstance from "../api/axiosInstance";

export const fetchPosts = async () => {
  const { data } = await axiosInstance.get("/posts");
  return data;
};
