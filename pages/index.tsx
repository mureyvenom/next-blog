import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { getFeaturedPosts } from "../lib/posts-util";
import FeaturedPosts from "../src/components/FeaturedPosts";
import Hero from "../src/components/Hero";
import { PostItemType } from "../src/types";

interface HomepageProps {
  posts: PostItemType[];
}

const Home: NextPage<HomepageProps> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Murey&apos;s Blog</title>
        <meta
          name="description"
          content="I post content related to web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const featurePosts: PostItemType[] = getFeaturedPosts();
  return {
    props: {
      posts: featurePosts,
    },
  };
};

export default Home;
