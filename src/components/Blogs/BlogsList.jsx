import { useDispatch, useSelector } from "react-redux";
import BlogsListItem from "./BlogsListItem";
import { useEffect } from "react";
import { fetchBlogs } from "../../features/blogs/blogsSlice";

export default function BlogsList() {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );

  const { filter, sort } = useSelector((state) => state.filter);

  const savedFilter = (blog) => {
    if (filter === "saved") return blog.isSaved;
    else if (filter === "") return true;
  };
  
  const sortingFunc = (a, b) => {
    if (sort === "most_liked") {
      return parseFloat(b.likes) - parseFloat(a.likes);
    } else if (sort === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else {
      return true;
    }
  };

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  let content = "";
  if (isLoading) content = "Loading...";
  if (!isLoading && isError) content = error;
  if (!isLoading && !isError && blogs?.length === 0)
    content = "No blogs found :(";
  if (!isLoading && !isError && blogs?.length > 0)
    content = blogs
      .filter(savedFilter)
      .sort(sortingFunc)
      .map((blog) => <BlogsListItem key={blog.id} blog={blog} />);

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}
