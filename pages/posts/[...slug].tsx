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
  // console.log(post);
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
  const postFileNames = getPostFIles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  // console.log(slugs);

  const returnedSlugs = slugs.map((slug) => {
    return {
      params: {
        slug: ["title", slug],
      },
    };
  });

  return {
    paths: [],
    fallback: "blocking",
  };
};

export default PostPage;
