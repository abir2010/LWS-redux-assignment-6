import axiosInstance from "./../../utils/axios";

const getBlogs = async () => {
  const res = await axiosInstance.get("/blogs");

  return res.data;
};

export default getBlogs;
