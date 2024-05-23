import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import imageTwo from "../../images/image2.jpg";
import imageThree from "../../images/image3.jpg";
import imageFour from "../../images/image4.jpg";
import imageFive from "../../images/image5.jpg";
import "./style.scss";

const portfolioData = [
  {
    id: 2,
    name: "Pulsora",
    image: imageFive,
    link: "https://pulsora.com/",
  },

  {
    id: 2,
    name: "Zipinmail.com",
    image: imageTwo,
    link: "https://www.zipinmail.com/",
  },

  {
    id: 1,
    name: "Gotara",
    image: imageThree,
    link: "",
  },

  {
    id: 3,
    name: "Tracking Application",
    image: imageFour,
    link: "",
  },
];

const filteredData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];
const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoverValue, setHoverValue] = useState(null)

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index){
    setHoverValue(index)
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filteredData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
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
              className="portfolio__content__cards__items"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={()=>handleHover(index)}
              onMouseLeave={()=>handleHover(null)}
            >
              <div className="portfolio__content__cards__items__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">

                {
                  index === hoverValue && (
                    <div>
                      <p>
                        {item.name}
                        <button>Visit</button>
                      </p>
                    </div>
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
