import React from "react";
import showcasephoto3 from "../../assets/img/showcasephoto3.jpg";
import showcasephoto1 from "../../assets/img/showcasephoto1.jpg";
function HomeMoreDetail() {
  return (
    <>
      <section className="showcase">
        <div className="container">
          <div className="row row1">
            <div className="img-box">
              <img src={showcasephoto3} alt="Showcase" />
            </div>
            <div className="text-box">
              <h2 className="lg-heading text-black">DEGANVY, U.K</h2>
              <p className="text-gray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit incidunt nulla a corporis eveniet pariatur maiores, id
                quis, totam dolore praesentium facere consequatur rem, fuga
                minus! Rerum, dolorem praesentium. Nemo?
              </p>
              <a href="/about" className="btn btn-secondary">
                More
              </a>
            </div>
          </div>
          <div className="row row2">
            <div className="img-box">
              <img src={showcasephoto1} alt="Image Description" />
            </div>
            <div className="text-box">
              <h2 className="lg-heading text-black">DESERT, EGYPT</h2>
              <p className="text-gray">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, amet ratione, quas laborum porro, explicabo vero ipsum
                laudantium nesciunt eos illum pariatur obcaecati fugiat
                asperiores nulla adipisci. Porro, atque itaque.
              </p>
              <a href="./about.html" className="btn btn-secondary">
                More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeMoreDetail;
