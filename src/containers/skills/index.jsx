import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import { Animate } from "react-simple-animate";
import { Line } from "rc-progress";
import './styles.scss';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {
          skillsData.map((item, i) => (
            <div key={i} className="skills__content-wrapper__inner">
              <Animate
                play
                duration={0.5}
                delay={0}
                start={{ transform: 'translateX(-250px)' }}
                end={{ transform: 'translateX(0px)' }}
              >
                <h3 className="skills__content-wrapper__inner__category">{item.label}</h3>
                <div>
                  {
                    item.data.map((skill, j) => (
                      <div className="progress-wrapper" key={j}>
                        <p>{skill.skillName}</p>
                        <Line
                          percent={skill.percentage}
                          strokeWidth="2"
                          strokeColor="var(--yellow-theme-main-color)"
                          trailWidth="2"
                          strokeLinecap="square"
                        />
                      </div>
                    ))
                  }
                </div>
              </Animate>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills;