import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRBlogs from "./relatedBlogsAPI";

const initialState = {
  relatedBlogs: [],
  isLoading: false,
  error: "",
  isError: false,
};

export const fetchRBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async ({tags,id}) => {
    const rblogs = await getRBlogs(tags,id);

    return rblogs;
  }
);

const relatedBlogsSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.relatedBlogs = action.payload;
      })
      .addCase(fetchRBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.relatedBlogs = [];
        state.error = action.error.message;
      });
  },
});

export default relatedBlogsSlice.reducer;
