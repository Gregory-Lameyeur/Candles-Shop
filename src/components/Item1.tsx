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
            <h1 className="display-5 fw-bolder">Rising Sun</h1>
            <div className="fs-5 mb-5">
              <span>14.99€</span>
            </div>
            <p className="lead"> Laissez-vous enlacer par la chaleur de l'aube avec notre bougie "Rising Sun". Infusée de notes revigorantes d'agrumes et d'une touche de fleurs délicates, cette bougie crée une ambiance qui reflète les premiers rayons de soleil caressant votre peau. Laissez son parfum inspirant emplir votre espace, vous encourageant à démarrer chaque jour avec une nouvelle énergie.</p>
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
