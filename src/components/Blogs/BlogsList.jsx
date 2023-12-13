import { useDispatch, useSelector } from "react-redux";
import BlogsListItem from "./BlogsListItem";
import { useEffect } from "react";
import { fetchBlogs } from "../../features/blogs/blogsSlice";

export default function BlogsList() {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  let content = "";
  if (isLoading) content = "Loading...";
  if (!isLoading && isError) content = error;
  if (!isLoading && !isError && blogs?.length === 0)
    content = "No blogs found :(";
  if (!isLoading && !isError && blogs?.length > 0)
    content = blogs.map((blog) => <BlogsListItem key={blog.id} blog={blog} />);
    
  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}
