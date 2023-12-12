import SideBarContainer from "./../components/SideBar/SideBarContainer";
import BlogsList from "./../components/Blogs/BlogsList";

export default function Home() {
  return (
    <section className="wrapper">
      <SideBarContainer />
      <BlogsList />
    </section>
  );
}
