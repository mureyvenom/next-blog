import type { GetStaticProps, NextPage } from "next";
import { getAllPosts } from "../../lib/posts-util";
import AllPosts from "../../src/components/AllPosts";
import { PostItemType } from "../../src/types";

interface AllPostsProps {
  posts: PostItemType[];
}

const AllPostsPage: NextPage<AllPostsProps> = ({ posts }) => {
  return (
    <div>
      <AllPosts posts={posts} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  };
};

export default AllPostsPage;
