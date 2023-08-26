import React from 'react';

export const Body = () => {
  return (
    <section className="py-5 bg-body">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div className="col mb-5">
            <div className="card h-100">
              {/* Product image */}
              <img
                className="card-img-top"
                src="/late_afternoons_candle_rising_sun_0.jpg"
                alt="..."
              />
              {/* Product details */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* Product name */}
                  <h5 className="fw-bolder">Rising Sun</h5>
                  {/* Product price */}
                  14.99€
                </div>
              </div>
              {/* Product actions */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="/Item1">
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
          <div className="card h-100">
              {/* Product image */}
              <img
                className="card-img-top"
                src="/late_afternoons_candle_cloud_nine_0.jpg"
                alt="..."
              />
              {/* Product details */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* Product name */}
                  <h5 className="fw-bolder">Cloud Nine</h5>
                  {/* Product price */}
                  14.99€
                </div>
              </div>
              {/* Product actions */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="/Item2">
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
          <div className="card h-100">
              {/* Product image */}
              <img
                className="card-img-top"
                src="/late_afternoons_candle_happy_hour_0.jpg"
                alt="..."
              />
              {/* Product details */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* Product name */}
                  <h5 className="fw-bolder">Happy Hour</h5>
                  {/* Product price */}
                  14.99€
                </div>
              </div>
              {/* Product actions */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="/Item3">
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
          <div className="card h-100">
              {/* Product image */}
              <img
                className="card-img-top"
                src="/late_afternoons_candle_midnight_bliss_0.jpg"
                alt="..."
              />
              {/* Product details */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* Product name */}
                  <h5 className="fw-bolder">Midnight Bliss</h5>
                  {/* Product price */}
                  14.99€
                </div>
              </div>
              {/* Product actions */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="/Item4">
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
