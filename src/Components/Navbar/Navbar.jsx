import React from "react";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="aaa navbar-brand" href="#">
            Plant{" "}
            <img
              src="https://www.freeiconspng.com/uploads/leaf-icon-png-9.png"
              width={"20px"}
              alt=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form class="btns d-flex">
            <button class="btn btn-outline-success" type="submit">
                Sign In
              </button>
              <button class="btn btn-outline-success" type="submit">
                Sign Up
              </button>
              <ul class="navbar-nav">
                {/* <!-- Notification dropdown --> */}
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="https://cdn-icons-png.flaticon.com/512/107/107822.png" width={"17px"} alt="" />
                    <span class="badge rounded-pill badge-notification bg-danger">
                      0
                    </span>
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Some news
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another news
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <!-- Notification dropdown --> */}
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
