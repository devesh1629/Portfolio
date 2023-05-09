import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import './styles.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contacts");
  }

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>Hello I'm Devesh</h1>
        <br />
        <h1>Full Stack Developer</h1>
      </div>
      <Animate
        play
        duration={1}
        delay={0}
        start={{ transform: 'translateY(250px)' }}
        end={{ transform: 'translateX(0px)' }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigate}>Hire me</button>
        </div>
      </Animate>

    </section>
  )

}

export default Home;