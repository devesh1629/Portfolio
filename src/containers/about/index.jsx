import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import { FaReact, FaJava, FaDev, FaDatabase } from "react-icons/fa";
import './styles.scss';

const About = () => {

  const personalDetails = [
    {
      label: "Name",
      value: "Devesh Agarwal"
    },
    {
      label: "Age",
      value: "23"
    },
    {
      label: "Address",
      value: "Bengaluru, India"
    },
    {
      label: "Email",
      value: "agarwaldevesh.08@gmail.com"
    },
    {
      label: "Contact no",
      value: "+91 7044074956"
    }
  ];

  const jobSummary = "Software Engineer with professional experience of working in MNC's like Amazon and Xiaomi";

  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__left">
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: 'translateX(-250px)' }}
            end={{ transform: 'translateX(0px)' }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: 'translateX(500px)' }}
            end={{ transform: 'translateX(0px)' }}
          >
            <h3>Personal Details</h3>
            <ul>
              {
                personalDetails.map((item, i) => (
                  <li key={i}>
                    <span className="title">{item.label}: </span>
                    <span className="value">{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate>
        </div>
        <div className="about__content__right">
          <div className="about__content__right__inner">
            <div>
              <FaReact size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaJava size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About;