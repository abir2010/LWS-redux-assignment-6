import axiosInstance from "./../../utils/axios";

const getRBlogs = async (tags,id) => {
  let qString = "";

  if (tags?.length > 0)
    qString += tags.map((tag) => `tags_like=${tag}`).join("&");
  // console.log(qString);
  qString += `&id_ne=${id}`;

  const res = await axiosInstance.get(`/blogs?${qString}`);

  return res.data;
};

export default getRBlogs;
