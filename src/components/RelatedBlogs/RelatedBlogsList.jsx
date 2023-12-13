import RelatedBlogsListItem from "./RelatedBlogsListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";

export default function RelatedBlogsList() {
  const dispatch = useDispatch();

  const { blog } = useSelector((state) => state.blog);
  const { tags, id } = blog;

  useEffect(() => {
    dispatch(fetchRBlogs({ tags, id }));
  }, [dispatch, tags, id]);

  const { relatedBlogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlogs
  );

  let content = "";
  if (isLoading) content = "Loading...";
  if (!isLoading && isError) content = error;
  if (!isLoading && !isError && relatedBlogs?.length === 0)
    content = "No blogs found :(";
  if (!isLoading && !isError && relatedBlogs?.length > 0)
    content = relatedBlogs.map((blog) => (
      <RelatedBlogsListItem key={blog.id} blog={blog} />
    ));

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  );
}
