import React, { Component } from "react";

import approachItem1 from "../../images/approach-item-1.jpg";
import approachItem2 from "../../images/approach-item-2.jpg";
import approachItem3 from "../../images/approach-item-3.jpg";
import approachItem4 from "../../images/approach-item-4.jpg";

class Approach extends Component {
  render() {
    return (
      <section className="approach__background">
        <div className="approach">
          <div className="approach__container container">
            <h2 className="approach__header">Our approach</h2>
            <p className="approach__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              similique sunt tenetur consequuntur esse eaque, ratione aliquam
              asperiores? Expedita eum suscipit consequuntur culpa fugiat
              obcaecati autem. Dolores voluptates possimus accusantium!
            </p>
            <p className="approach__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium adipisci quae illo recusandae quisquam molestias
              libero unde pariatur architecto nobis, tenetur minima cum? Veniam
              dicta adipisci vel eum commodi eaque!
            </p>

            <div className="approach-items-container">
              <div className="approach-item">
                <img
                  className="approach-item__img"
                  src={approachItem1}
                  alt="1"
                />
                <h5 className="approach-item__header">Do Something</h5>
                <p className="approach-item__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae quia eaque totam vel harum quidem natus modi esse
                  excepturi impedit maiores labore accusamus
                </p>
              </div>
              <div className="approach-item">
                <img
                  className="approach-item__img"
                  src={approachItem2}
                  alt="2"
                />
                <h5 className="approach-item__header">Something Else</h5>
                <p className="approach-item__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae quia eaque totam vel harum quidem natus modi esse
                </p>
              </div>
              <div className="approach-item">
                <img
                  className="approach-item__img"
                  src={approachItem3}
                  alt="3"
                />
                <h5 className="approach-item__header">Another thing</h5>
                <p className="approach-item__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae quia eaque totam vel harum quidem natus modi esse
                  excepturi impedit maiores labore accusamus
                </p>
              </div>
              <div className="approach-item">
                <img
                  className="approach-item__img"
                  src={approachItem4}
                  alt="4"
                />
                <h5 className="approach-item__header">One more thing</h5>
                <p className="approach-item__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae quia eaque totam vel harum quidem natus modi esse
                  excepturi impedit maiores labore accusamus
                </p>
              </div>
            </div>
            <div className="approach__button-container">
              <button className="approach__button">
                Learn more about our example page
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Approach;
