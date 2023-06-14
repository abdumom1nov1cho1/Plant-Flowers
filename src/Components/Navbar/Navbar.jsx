import React from "react";
import "../Navbar/Navbar.scss";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <!-- Container wrapper --> */}
        <div className="container">
         <a href="" className="ffff">
          Plant 
         <img
          data-aos='fade-right'
            className="nav1__left__img1"
            style={{ width: "25px" }}
            src="https://www.pngkey.com/png/full/442-4420682_landscape-clipart-landscaping-maintenance-plant-icon.png"
            alt=""
          />
         </a>
          
        
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i style={{color:'red'}} className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="asdf navbar-nav m-auto mb-2 mb-lg-0"data-aos='fade-up'>
              <li className=" li_navbar nav-item">
                <a className="li__a nav-link active" href="#">
                  <a
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "activeLink" : "dropbtn2"
                    }
                  >
                    HOME
                  </a>
                </a>
              </li>
              <li className="li__a nav-link active">
                <a
                  to="/dailyDeals"
                  className={({ isActive }) =>
                    isActive ? "activeLink" : "dropbtn2"
                  }
                >
                  DAILY DEALS
                </a>
              </li>
              <li className="li__a nav-link active">
                <a
                  to="/dailyDeals"
                  className={({ isActive }) =>
                    isActive ? "activeLink" : "dropbtn2"
                  }
                >
                  DAILY DEALS
                </a>
              </li>

              <li className="li__a nav-link active">
                <a
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "activeLink" : "dropbtn2"
                  }
                >
                  GIFT WITH TRAILFX
                </a>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div className="d-flex align-items-center"data-aos='fade-left'>
            {/* <!-- Icon --> */}
            <a to="/korzinka" className="text-reset me-3" href="#">
              <i style={{width:"20px"}} className="fas fa-shopping-cart"></i>

            </a>
            {/* <!-- Avatar --> */}
            {/* {localStorage.getItem("auth") ? ( */}
              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="http://cdn.onlinewebfonts.com/svg/img_81837.png"
                    className="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a to="/my-profile" className="dropdown-item" href="#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a
                      to="/register"
                      className ="dropdown-item"
                      href="#"
                      // onClick={Logout}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
    </div>
  );
};

export default Navbar;
