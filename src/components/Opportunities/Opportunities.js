import React from "react";

const Opportunities = () => {
  return (
    <section className="opportunities__background">
      <div className="opportunities">
        <div className="opportunities__container container">
          <div className="opportunities__examples">
            <div className="opportunity">
              <h2 className="opportunity__header">exampleName</h2>
            </div>
            <div className="opportunity">
              <h2 className="opportunity__header">exampleName</h2>
            </div>
            <div className="opportunity">
              <h2 className="opportunity__header">exampleName</h2>
            </div>
          </div>
          <div className="opportunities__desc">
            <h3 className="opportunity-desc__header">
              Example page business name specifier
            </h3>
            <h6 className="opportunity-desc__focus">Focus: Doing things</h6>
            <p className="opportunity-desc__about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              cumque dolorum quidem voluptate enim magnam. Quae debitis neque
              recusandae quidem blanditiis sit nam porro
            </p>
            <button className="opportunity-desc__button">
              Learn More about doing things
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
