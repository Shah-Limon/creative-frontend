import React, { useEffect, useState } from "react";
import "./ServicesList.css";
import { Link } from "react-router-dom";

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services-list/`)
      .then((res) => res.json())
      .then((info) => setServices(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/service-title/`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <>
      {/* <section
        className="speciality"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <div className="" />
        <div className="container">
          <div className="row">
            {title.map((e) => (
              <div className="col-12">
                <div className="block-text center">
                  <h6 className="sub-heading">
                    <span>{e.titleTopText}</span>
                  </h6>
                  <h3 className="heading wow" data-splitting="">
                    {e.title}
                  </h3>
                  <p className="">{e.description}</p>
                </div>
              </div>
            ))}

            <div className="col">
              <div className="speciality-box">
                <div className="row">
                  {services.map((e) => (
                    <div className="col-lg-4 col-md-6 mb-4 service_card">
                      <Link to={`/service/${e.postSlug}`}>
                        <div className="card-box w-100">
                          <div className="top d-flex"></div>
                          <div className="content">
                            <div className="image" style={{ height: "200px" }}>
                              <img src={e.img} alt="id" />
                            </div>
                            <div>
                              <h5 className="m-3">{e.title}</h5>
                            </div>
                            <div>
                              <p className="service__text">
                                {truncateText(e.description, 200)}
                              </p>
                            </div>
                            <Link
                              class="action-btn"
                              to={`/service/${e.postSlug}`}
                            >
                              <span>Details</span>
                            </Link>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="service-area service-area-v1">
        <div className="container-1350">
          <div className="service-wrapper pt-75 pb-40">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {title.map((e) => (
                  <div className="section-title text-center mb-55 wow fadeInUp">
                    <h2>{e.title}</h2>
                    <p> {e.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="row justify-content-center">
              {services.map((e) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="service-item service-style-two mb-40 wow fadeInUp"
                    data-wow-delay=".15s"
                  >
                    <div className="icon">
                      <img src={e.img} class="img-fluid rounded-top" alt="" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link to={`/service/${e.postSlug}`}>{e.title}</Link>
                      </h3>
                      <ul className="list-style-two">
                        <li> {truncateText(e.description, 200)} </li>
                      </ul>
                      <Link to={`/service/${e.postSlug}`} className="btn-link">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesList;
