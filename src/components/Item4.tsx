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
            <h1 className="display-5 fw-bolder">Midnight Bliss</h1>
            <div className="fs-5 mb-5">
              <span>14.99€</span>
            </div>
            <p className="lead">  Plongez dans l'enchantement de la nuit avec notre bougie "Midnight Bliss". Les arômes envoûtants de bois de santal et de jasmin s'entrelacent pour créer une symphonie olfactive captivante, évoquant la magie calme des heures tardives. Laissez cette fragrance vous transporter vers un état de béatitude nocturne, où chaque lueur de flamme réveille un sentiment de tranquillité.</p>
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
