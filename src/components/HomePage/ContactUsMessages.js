import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackToAdminDashboard from "../../Pages/Admin/BackToAdminDashboard";

const ContactUsMessages = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/contact-messages`)
      .then((res) => res.json())
      .then((info) => setMessage(info.reverse()));
  }, []);

  return (
    <>
      <div className="container">
        <BackToAdminDashboard></BackToAdminDashboard>
        <div className="custom-ordermenu d-flex justify-content-center align-items-center">
          <div className="header__right container custom-orders">
            <nav id="main-nav" className="main-nav mt-5">
              <ul
                id="menu-primary-menu"
                className="menu custom-orders-ul d-flex justify-content-center"
              >
                <li className="menu-item menu-item-has-children mx-2">
                  <Link
                    to="/admin/contact-message-unread/"
                    className="main-btn"
                  >
                    Unread Contact Messages
                  </Link>
                </li>
                <li className="menu-item menu-item-has-children mx-2">
                  <Link to="/admin/contact-message-read/" className="main-btn">
                    Read Contact Messages
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <table className="rwd-table">
          <tbody>
            <tr>
              <th>SL No.</th>
              <th>Date</th>
              <th>Sender</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
            {message.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.date}</td>
                <td>{item.name}</td>

                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td>{item.messageStatus}</td>
                <td>
                  <Link
                    to={`/admin/contact-message/${item._id}`}
                    className="title"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactUsMessages;
