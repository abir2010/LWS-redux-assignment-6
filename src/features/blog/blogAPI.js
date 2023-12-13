import axiosInstance from "./../../utils/axios";

export const getBlog = async (id) => {
  const res = await axiosInstance.get(`/blogs/${id}`);

  return res.data;
};

export const postCountToBlog = async (likes, id) => {
  const res = await axiosInstance.patch(
    `/blogs/${id}`,
    {
      likes,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};

export const postStatusToBlog = async (isSaved, id) => {
  const res = await axiosInstance.patch(
    `/blogs/${id}`,
    {
      isSaved: isSaved,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};
