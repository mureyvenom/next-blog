import classes from "../styles/post-content.module.css";
import { PostItemType } from "../types";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface PostContentProps {
  post: PostItemType;
}

const PostContent = ({ post }: PostContentProps) => {
  const customRenderers = {
    img(image: any) {
      return (
        <Image src={`${image.src}`} alt={post.title} width={600} height={300} />
      );
    },
    code(code: any) {
      const { node, inline, className, children, ...props } = code;
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          // eslint-disable-next-line react/no-children-prop
          children={String(children).replace(/\n$/, "")}
          style={atomDark}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
      // return (
      //   <SyntaxHighlighter
      //     // eslint-disable-next-line react/no-children-prop
      //     children={value}
      //     style={atomDark}
      //     language={language}
      //   />
      // );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={post.image} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
