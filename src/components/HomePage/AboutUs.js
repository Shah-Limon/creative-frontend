import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AboutUs = () => {
  const { id } = useParams();
  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/about/${id}`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, [id]);

  return (
    <>
      {/* <section className="about" data-aos="fade-up" data-aos-duration={3000}>
        <div className="container">
          {about.map((AboutData) => (
            <div className="row rev">
              <div className="col-xl-6 col-md-12">
                <div className="about__right">
                  <div className="images">
                    <img className="img1" src={AboutData.img} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="block-text">
                  <h6 className="sub-heading">
                    <span>About us</span>
                  </h6>
                  <h3 className="heading wow" data-splitting="">
                    {AboutData.title}
                  </h3>
                  <p className="mb-17">
                    {about.map((AboutData, index) => (
                      <div key={index}>
                        {AboutData.subText
                          .split(". ")
                          .map((sentence, sentenceIndex, sentencesArray) => (
                            <React.Fragment key={sentenceIndex}>
                              {sentenceIndex > 0 && sentenceIndex % 2 === 0 && (
                                <br />
                              )}{" "}
                              <p>{sentence}</p>
                            </React.Fragment>
                          ))}
                      </div>
                    ))}
                  </p>

                  <Link to={AboutData.btnUrl} className="main-btn">
                    <span>{AboutData.btnText}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <section className="about-area about-area-v2 pt-130">
        <div className="container">
          {about.map((e) => (
            <div className="row">
              <div className="col-lg-5">
                <div className="img-holder mb-50 wow fadeInLeft">
                  <div className="shape shape-one animate-float-y">
                    <span>
                      <img src="assets/images/shape/shape-5.png" alt="images" />
                    </span>
                  </div>
                  <img src={e.img} alt="about-images" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="text-wrapper mb-50 wow fadeInRight">
                  <div className="section-title mb-25">
                    <h2> {e.title}</h2>
                  </div>
                  <p>
                    {about.map((AboutData, index) => (
                      <div key={index}>
                        {AboutData.subText
                          .split(". ")
                          .map((sentence, sentenceIndex, sentencesArray) => (
                            <React.Fragment key={sentenceIndex}>
                              {sentenceIndex > 0 && sentenceIndex % 2 === 0 && (
                                <p />
                              )}{" "}
                              <p>{sentence}</p>
                            </React.Fragment>
                          ))}
                      </div>
                    ))}
                  </p>

                  <Link
                    to={e.btnUrl}
                    className="main-btn bordered-btn btn-blue"
                  >
                    {e.btnText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
