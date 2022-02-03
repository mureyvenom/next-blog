import Image from "next/image";
import classes from "../styles/logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Image src="/images/logo-dark.png" width={70} height={70} alt="Logo" />
    </div>
  );
};

export default Logo;
