import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import BackToAdminDashboard from "./BackToAdminDashboard";

const HomaPageSetting = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const [about, setAbout] = useState([]);
  const [banner, setBanner] = useState([]);
  const [speciality, SetSpeciality] = useState([]);
  const [choose, SetChoose] = useState([]);
  const [road, SetRoad] = useState([]);
  const [title, setTitle] = useState([]);
  const [counters, setCounters] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/banner/`)
      .then((res) => res.json())
      .then((info) => setBanner(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/speciality/`)
      .then((res) => res.json())
      .then((info) => SetSpeciality(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/why-choose/`)
      .then((res) => res.json())
      .then((info) => SetChoose(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/road/`)
      .then((res) => res.json())
      .then((info) => SetRoad(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/team-title`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/counters-section`)
      .then((res) => res.json())
      .then((info) => setCounters(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/video-section`)
      .then((res) => res.json())
      .then((info) => setVideo(info));
  }, []);

  return (
    <div>
      <section className="participants payment-setting">
        <div className="container">
          <BackToAdminDashboard></BackToAdminDashboard>
          <div className="row mt-15">
            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Banner Options</h5>

                  {banner.map((e) => (
                    <Link
                      to={`/admin/edit-banner-option/${e._id}`}
                      className="main-btn"
                    >
                      <span>Edit</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">About Us Option</h5>

                  {about.map((editAbout) => (
                    <Link
                      to={`/admin/about-edit/${editAbout._id}`}
                      className="main-btn"
                    >
                      <span>Edit</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div>
            {counters.map((e) => (
              <div className="col-lg-3">
                <div className="block-text center">
                  <div className="col">
                    <h5 className="heading">Edit counter Option</h5>

                    <Link
                      to={`/admin/edit-counter/${e._id}`}
                      className="main-btn"
                    >
                      <span>Edit Counter</span>
                    </Link>
                    <hr></hr>
                  </div>
                </div>
              </div>
            ))}

            {video.map((e) => (
              <div className="col-lg-3">
                <div className="block-text center">
                  <div className="col">
                    <h5 className="heading">Edit Video Option</h5>

                    <Link
                      to={`/admin/edit-video/${e._id}`}
                      className="main-btn"
                    >
                      <span>Edit Video</span>
                    </Link>
                    <hr></hr>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Features Option</h5>

                  <Link to="/admin/feature-page" className="main-btn">
                    <span>Edit</span>
                  </Link>

                  <hr></hr>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Our Speciality Option</h5>

                  {speciality.map((e) => (
                    <Link
                      to={`/admin/speciality-edit/${e._id}`}
                      className="main-btn"
                    >
                      <span>Edit</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Cta Option</h5>

                  {choose.map((e) => (
                    <Link
                      to={`/admin/why-choose-edit/${e._id}`}
                      className="main-btn"
                    >
                      <span>Edit</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Road Map Option</h5>

                  {road.map((e) => (
                    <Link to={`/admin/road-edit/${e._id}`} className="main-btn">
                      <span>Edit</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Team Members Option</h5>

                  {title.map((e) => (
                    <Link to={`/admin/team/`} className="main-btn">
                      <span>Edit</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div> */}
            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Testimonials Option</h5>

                  <Link to="/admin/testimonials" className="main-btn">
                    <span>Edit</span>
                  </Link>

                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomaPageSetting;
