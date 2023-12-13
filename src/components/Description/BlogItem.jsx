/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBlog,
  likeIncrement,
  postBlogLikeCount,
  postSavedStatus,
} from "../../features/blog/blogSlice";
import { useEffect } from "react";

export default function BlogItem() {
  const bid = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlog(bid.blogId));
  }, [dispatch, bid.blogId]);

  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );
  let { id, description, title, image, tags, likes, isSaved } = blog;

  const handleLikeBtn = () => {
    likes++;
    dispatch(postBlogLikeCount({ likes, id }));
  };
  const handleSavedBtn = () => {
    isSaved = !isSaved;
    dispatch(postSavedStatus({ isSaved, id }));
  };

  let style = isSaved ? "active save-btn" : "save-btn";

  let content = "";
  if (isLoading) content = "Loading...";
  if (!isLoading && isError) content = error;
  if (!isLoading && !isError && !id) content = "No blogs found :(";
  if (!isLoading && !isError && id !== 0)
    content = (
      <main className="post">
        <img
          src={image}
          alt=""
          className="w-full rounded-md"
          id="lws-megaThumb"
        />
        <div>
          <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
            {title}
          </h1>
          <div className="tags" id="lws-singleTags">
            {tags?.map((tag) => (
              <span key={tag.index}>#{tag} </span>
            ))}
          </div>
          <div className="btn-group">
            {/* handle like on button click */}
            <button
              onClick={handleLikeBtn}
              className="like-btn"
              id="lws-singleLinks"
            >
              <i className="fa-regular fa-thumbs-up" /> {likes}
            </button>
            {/* handle save on button click */}
            {/* use ".active" class and "Saved" text  if a post is saved, other wise "Save" */}
            <button
              onClick={handleSavedBtn}
              className={style}
              id="lws-singleSavedBtn"
            >
              <i className="fa-regular fa-bookmark" />{" "}
              {isSaved ? "Saved" : "Save"}
            </button>
          </div>
          <div className="mt-6">
            <p>{description}</p>
          </div>
        </div>
      </main>
    );

  return content;
}
