import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "System Design",
    image: ImageOne,
    link: "https://github.com/devesh1629/System-Design",
  },
  {
    id: 3,
    name: "Video Streaming App",
    link: "https://github.com/devesh1629/Video-Streaming-App/tree/master",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Spring Application",
    image: ImageThree,
    link: "https://github.com/devesh1629/Crud-Application-using-Spring-Boot",
  },
  {
    id: 1,
    name: "Myntra Clone",
    image: ImageFour,
    link: "https://github.com/devesh1629/Myntra-clone",
  },
  {
    id: 3,
    name: "Registration Form",
    image: ImageFive,
    link: "https://github.com/devesh1629/Form-using-React-and-Node",
  },
  {
    id: 1,
    name: "ToDoList",
    image: ImageTwo,
    link: "https://github.com/devesh1629/ToDoList_using_React",
  },
  {
    id: 1,
    name: "Block Game",
    image: ImageFive,
    link: "https://github.com/devesh1629/game1"
  }
];

const filterData = [
  {
    filterId: 1,
    label: "Front end",
  },
  {
    filterId: 2,
    label: "Backend",
  },
  {
    filterId: 3,
    label: "Full Stack",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);


  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  //   console.log("====================================");
  //   console.log(hoveredValue);
  //   console.log("====================================");

  const filteredItems = portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    {/* <p>{item.name}</p> */}
                    <a href={item.link}>Visit</a>
                  </div>
                )}
              </div>
              <h2 className="title">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
