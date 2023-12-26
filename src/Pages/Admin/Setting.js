import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const Setting = () => {
  const { id } = useParams();
  const [contact, setContact] = useState([]);
  const [meta, setMeta] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/contact/`)
      .then((res) => res.json())
      .then((info) => setContact(info));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/meta-infomations`)
      .then((res) => res.json())
      .then((info) => setMeta(info));
  }, [id]);
  return (
    <>
      <section
        className="project s2 payment-setting"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <div className="shape right" />
        <div className="container">
          <BackToAdminDashboard></BackToAdminDashboard>
          <div className="row mt-15">
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/setting-general/" className="h5 title">
                    General Setting
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/setting-footer" className="h5 title">
                    Footer Setting
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/setting-payment" className="h5 title">
                    Payment Setting
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/setting-homepage" className="h5 title">
                    HomePage Setting
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  {contact.map((e) => (
                    <Link
                      to={`/admin/edit-contact-page/${e._id}`}
                      className="h5 title"
                    >
                      Contact Page Setting
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  {meta.map((e) => (
                    <Link to={`/admin/edit-meta/${e._id}`} className="h5 title">
                      Update Meta Info
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/services-list" className="h5 title">
                    Services List
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-5">
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/setting-general/" className="h5 title">
                    <h5 className="blue-dark">General Setting</h5>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/setting-footer" className="h5 title">
                    <h5 className="blue-dark">Footer Setting</h5>
                  </Link>
                </h4>
              </div>
            </div>
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/setting-payment" className="h5 title">
                    <h5 className="blue-dark">Payment Setting</h5>
                  </Link>
                </h4>
              </div>
            </div>

            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/setting-homepage" className="h5 title">
                    <h5 className="blue-dark">HomePage Setting</h5>
                  </Link>
                </h4>
              </div>
            </div>

            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  {contact.map((e) => (
                    <Link
                      to={`/admin/edit-contact-page/${e._id}`}
                      className="h5 title"
                    >
                      <h5 className="blue-dark"> Contact Page Setting</h5>
                    </Link>
                  ))}
                </h4>
              </div>
            </div>
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  {contact.map((e) => (
                    <Link to={`/admin/edit-meta/${e._id}`} className="h5 title">
                      <h5 className="blue-dark"> Update Meta Info</h5>
                    </Link>
                  ))}
                </h4>
              </div>
            </div>
            <div className="information-style-two col mb-3 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                className="img-fluid rounded-top"
                width={50}
                alt=""
              />
              <div className="info">
                <h4>
                  <Link to="/admin/services-list" className="h5 title">
                    <h5 className="blue-dark">Services List</h5>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Setting;
