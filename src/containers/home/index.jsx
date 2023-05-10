import React from "react";
import { Animate } from "react-simple-animate";
import './styles.scss';

const Home = () => {

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>Hello I'm Devesh</h1>
        <h1>Full Stack Developer</h1>
      </div>
      <Animate
        play
        duration={1}
        delay={0}
        start={{ transform: 'translateY(250px)' }}
        end={{ transform: 'translateX(0px)' }}
      >
      </Animate>

    </section>
  )

}

export default Home;