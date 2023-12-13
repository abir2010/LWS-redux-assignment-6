import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blogsSlice";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    // blog: blogReducer,
    // saved: savedReducer,
  },
});

export default store;
