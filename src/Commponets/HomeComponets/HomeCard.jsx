import React from "react";

function HomeCard() {
  return (
    <>
      <section className="features">
        <div className="container">
          <div className="box-wrapper">
            <div className="box box-1">
              <i className="fas fa-route fa-2x text-red"></i>
              <h2 className="md-heading">Adventure</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, quia. Corporis dolores ipsa a veniam molestias beatae,
                fuga ex laboriosam.
              </p>
            </div>
            <div className="box box-2">
              <i className="fas fa-strikethrough fa-2x"></i>
              <h2 className="md-heading">Less Price</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, quia. Corporis dolores ipsa a veniam molestias beatae,
                fuga ex laboriosam.
              </p>
            </div>
            <div className="box box-3">
              <i className="fas fa-user-check fa-2x text-red"></i>
              <h2 className="md-heading">Experice</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, quia. Corporis dolores ipsa a veniam molestias beatae,
                fuga ex laboriosam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeCard;
