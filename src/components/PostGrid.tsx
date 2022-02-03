import classes from "../styles/posts-grid.module.css";
import { PostItemType } from "../types";
import PostItem from "./PostItem";

interface PostGridProps {
  posts: PostItemType[];
}

const PostGrid = ({ posts }: PostGridProps) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default PostGrid;
