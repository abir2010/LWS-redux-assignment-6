import GoHome from "./../components/UI/GoHome";
import BlogItem from "./../components/Description/BlogItem";
import RelatedBlogsList from "./../components/RelatedBlogs/RelatedBlogsList";

export default function BlogPage() {
  return (
    <>
      <GoHome />
      <section className="post-page-container">
        <BlogItem />
        <RelatedBlogsList />
      </section>
    </>
  );
}
