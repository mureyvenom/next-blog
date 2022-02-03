import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { getPostData, getPostFIles } from "../../lib/posts-util";
import PostContent from "../../src/components/PostContent";
import { PostItemType } from "../../src/types";

interface ParamsData extends ParsedUrlQuery {
  slug: string[];
}

interface PostPageProps {
  post: PostItemType;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  return <PostContent post={post} />;
};

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;
  const { slug } = params as ParamsData;

  const postData = getPostData(slug[1]);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default PostPage;
