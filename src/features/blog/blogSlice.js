import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog, postCountToBlog, postStatusToBlog } from "./blogAPI";

const initialState = {
  blog: {},
  isLoading: false,
  error: "",
  isError: false,
};

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
  const blog = await getBlog(id);

  return blog;
});

export const postBlogLikeCount = createAsyncThunk(
  "blog/postBlogLikeCount",
  async ({ likes, id }) => {
    const blog = await postCountToBlog(likes, id);

    return blog;
  }
);

export const postSavedStatus = createAsyncThunk(
  "blog/postSavedStatus",
  async ({ isSaved, id }) => {
    const blog = await postStatusToBlog(isSaved, id);

    return blog;
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blog = {};
        state.error = action.error.message;
      })
      .addCase(postBlogLikeCount.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(postBlogLikeCount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blog = action.payload;
      })
      .addCase(postBlogLikeCount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(postSavedStatus.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(postSavedStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blog = action.payload;
      })
      .addCase(postSavedStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
export const { likeIncrement } = blogSlice.actions;
