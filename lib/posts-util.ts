import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostItemType } from "../src/types";

const postsDirectory = path.join(process.cwd(), "/posts");

export const getPostFIles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, "");

  const fileContent = fs.readFileSync(
    path.join(postsDirectory, `${postSlug}.md`),
    "utf-8"
  );

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostFIles();

  const allPosts: any[] = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  return allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
};

export const getFeaturedPosts = () => {
  const allPosts: PostItemType[] = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
};
