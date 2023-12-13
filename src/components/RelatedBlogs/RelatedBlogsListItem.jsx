import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function RelatedBlogsListItem({ blog }) {
  const { title, id, tags, createdAt, image } = blog;
  return (
    <div className="card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={`/blogs/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">
          {tags?.map((tag) => (
            <span key={tag.index}>#{tag} </span>
          ))}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
}
