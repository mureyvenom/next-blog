import Image from "next/image";
import classes from "../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/home.png" width={320} height={320} alt="Home" />
      </div>
      <h1>Hi, I&apos;m Nathaniel</h1>
      <p>
        I blog about web development especially front end tools like React and
        Next Js
      </p>
    </section>
  );
};

export default Hero;
