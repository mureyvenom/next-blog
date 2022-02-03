import Image from "next/image";
import Link from "next/link";
import classes from "../styles/post-item.module.css";
import { PostItemType } from "../types";

interface PostItemProps {
  post: PostItemType;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <li className={classes.post}>
      <Link href={`/posts/${post.slug}/${post.id}`}>
        <a>
          <div className={classes.image}>
            <Image height={300} width={300} src={post.image} alt="Post" />
          </div>
          <div className={classes.content}>
            <h3>{post.title}</h3>
            <time>
              {new Date(post.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <p>{post.excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
