import React from "react";

import platformImg from "../../images/platform-img.jpg";

const Platform = () => {
  return (
    <section className="platform__background">
      <div className="platform">
        <h2 className="platform__header">Our platform</h2>
        <h5 className="platform__desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
          repellendus voluptas voluptatibus illum praesentium magni est nostrum
          iure, laboriosam a
        </h5>

        <div className="platform__content">
          <div className="platform-info">
            <h4 className="platform-info__header">We are owners</h4>
            <p className="platform-info__desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident iusto earum hic impedit excepturi sint nam qui quas
              adipisci. Minima quas alias laborum veritatis voluptate rerum
              voluptates quidem iste soluta? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nam dolor dolores corporis magni
            </p>
            <div className="platform-info__button-container">
              <button className="platform-info__button">Learn more</button>
            </div>
          </div>
          <div className="platform-img-container">
            <img
              className="platform-img-container__img"
              src={platformImg}
              alt="diamond"
            />
          </div>
          <div className="platform-info">
            <h4 className="platform-info__header">We are operators</h4>
            <p className="platform-info__desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident iusto earum hic impedit excepturi sint nam qui quas
              adipisci. Minima quas alias laborum veritatis voluptate rerum
              voluptates quidem iste soluta? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Incidunt odit nemo consequatur
              quibusdam consectetur laboriosam ab explicabo, eligendi vitae.
              Accusamus veniam exercitationem voluptatem nam
            </p>
            <div className="platform-info__button-container">
              <button className="platform-info__button">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
