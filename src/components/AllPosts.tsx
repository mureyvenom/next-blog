import classes from "../styles/featured-posts.module.css";
import { PostItemType } from "../types";
import PostGrid from "./PostGrid";

interface AllPostsProps {
  posts: PostItemType[];
}

const AllPosts = ({ posts }: AllPostsProps) => {
  return (
    <section className={classes.latest}>
      <h2>All Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
