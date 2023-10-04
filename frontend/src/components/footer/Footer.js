import React from 'react';

export default function Footer(){
    return (<>
    <footer className="text-center text-white mt-3">
      <div className="container p-4">
        <section className="">
          <div className="row justify-content-md-center">
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div
                className="bg-image footer-image"
                data-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
                  className="w-100 "
                  alt="test"
                />
                <a href="#!">
                  <div
                    className="mask"
                  ></div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div
                className="bg-image footer-image"
                data-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
                  className="w-100"
                  alt="test"
                />
                <a href="#!">
                  <div
                    className="mask"
                  ></div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div
                className="bg-image footer-image"
                data-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
                  className="w-100"
                  alt="test"
                />
                <a href="#!">
                  <div
                    className="mask"
                  ></div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div
                className="bg-image footer-image"
                data-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
                  className="w-100"
                  alt="test"
                />
                <a href="#!">
                  <div
                    className="mask"
                  ></div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-3">
        © 2023 Copyright: Travel Madrid
      </div>
    </footer>
    </>);
}