import Image from "next/image";
import classes from "../styles/post-header.module.css";

interface PostHeaderProps {
  title: string;
  image: string;
}

const PostHeader = ({ title, image }: PostHeaderProps) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} height={150} width={200} alt="Post" />
    </header>
  );
};

export default PostHeader;
