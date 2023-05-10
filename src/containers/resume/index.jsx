import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { data } from './utils';
import { VerticalTimeline } from "react-vertical-timeline-component/dist-modules";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import './styles.scss';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="Resume"
        icon={<MdWork size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header">Experience</h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor="var(--yellow-theme-main-color)"
          >
          {
            data.experience.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="timeline__experience__element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)"
                }}
                icon={<MdWork />}
                iconStyle={{
                  color: "var(--yellow-theme-main-color)",
                  background: "#181818"
                }}
              >
                <div className="element-title-wrapper">
                  <h3 className="element-title">
                    {item.title} | {item.company}
                  </h3>
                  <p style={{fontSize: '14px'}}>
                    {item.desc}
                  </p>
                </div>
              </VerticalTimelineElement>
            ))
          }
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header">Education</h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor="var(--yellow-theme-main-color)"
          >
          {
            data.education.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="timeline__education__element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)"
                }}
                icon={<MdWork />}
                iconStyle={{
                  color: "var(--yellow-theme-main-color)",
                  background: "#181818"
                }}
              >
                <div className="element-title-wrapper">
                  <h3 className="element-title">
                    {item.college}
                  </h3>
                  <h4 className="element-subtitle">
                    {item.degree} {item.time}
                  </h4>
                  <p style={{fontSize: '14px'}}>
                    {item.time}
                  </p>
                </div>
              </VerticalTimelineElement>
            ))
          }
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default Resume;