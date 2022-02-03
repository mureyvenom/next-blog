import classes from "../styles/featured-posts.module.css";
import { PostItemType } from "../types";
import PostGrid from "./PostGrid";

interface FeaturedPostsProps {
  posts: PostItemType[];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
