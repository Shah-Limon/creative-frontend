import React from "react";

const CtaSection = () => {
  return (
    <>
      <section className="cta-area cta-area-v2 position-relative z-2 wow fadeInDown">
        <div className="container">
          <div className="cta-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="text-wrapper">
                  <div className="section-title section-title-white">
                    <h2>Need Any Projects?</h2>
                    <p>Professional Design Agency to provide solutions</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="button-box float-lg-right">
                  <a
                    href="contact.html"
                    className="main-btn bordered-btn btn-white arrow-btn"
                  >
                    Let’s Work Together
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
