import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}><Image src="" alt="An Image showing Max" wdith={} height={} /></div>
      <h1>Hi, I am Max</h1>
      <p>
        I blog about web development - especially frontend fremeworks like
        angular react
      </p>
    </section>
  );
}

export default Hero;
