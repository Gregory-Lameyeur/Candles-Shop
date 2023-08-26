import React from 'react';

export const Item = () => {
 
  return (
    <section className="py-5 bg-body">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top card mb-5 mb-md-0"
              src="/late_afternoons_candle_rising_sun_0.jpg"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-5 fw-bolder">Cloud Nine</h1>
            <div className="fs-5 mb-5">
              <span>14.99€</span>
            </div>
            <p className="lead"> Laissez-vous emporter dans une pure sérénité avec notre bougie "Cloud Nine". Enveloppez-vous dans l'étreinte onirique de la vanille douce et de la lavande, qui se marient parfaitement pour vous transporter dans un état de relaxation profonde. Comme une journée douillette passée sous un ciel ensoleillé, l'arôme apaisant de cette bougie vous enveloppe dans une étreinte réconfortante, faisant fondre le stress et les soucis.</p>
            <div className="d-flex">
              <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="num"
                defaultValue="1"
                style={{ maxWidth: '3rem' }}
              />
              <button className="btn btn-outline-dark flex-shrink-0" type="button">
                <i className="bi-cart-fill me-1"></i>
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
