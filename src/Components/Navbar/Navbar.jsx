import React from "react";
import "../Navbar/Navbar.scss";
import img1 from "../Photos/1.jpg";
import img2 from "../Photos/2.jpg";
import img3 from "../Photos/3.jpg";
import img4 from "../Photos/4.jpg";
import img5 from "../Photos/5.jpg";
import img6 from "../Photos/6.jpg";
import img7 from "../Photos/7.jpg";
import video from "../Photos/video.mp4";
import audio from "../Photos/audio.mp3";
import img10 from "../Photos/10.jpg";
import img11 from "../Photos/11.jpg";
import img12 from "../Photos/12.jpg";
import img13 from "../Photos/13.jpg";
import img14 from "../Photos/14.jpg";
import img15 from "../Photos/15.jpg";
import img16 from "../Photos/16.jpg";
import img17 from "../Photos/17.jpg";
import img18 from "../Photos/18.jpg";
import img19 from "../Photos/19.jpg";
import img20 from "../Photos/20.jpg";
import img21 from "../Photos/21.jpg";
import img22 from "../Photos/22.jpg";
import Header from "../Header/Header";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <!-- Container wrapper --> */}
        <div className="container">
          <a href="" className="ffff">
            <img
              data-aos="fade-right"
              className="nav1__left__img1"
              style={{ width: "55px" }}
              src="https://www.maximsmx.com.hk/asset/corporate/img/header/logo.png"
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
            <i style={{ color: "red" }} className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="asdf navbar-nav m-auto mb-2 mb-lg-0"
              data-aos="fade-up"
            >
              <li className=" li_navbar nav-item" data-aos="fade-up">
                <a className="li__a " href="#">
                  MURAT KHANTORAYEV
                </a>
              </li>
              {/* <li className="li__a nav-link active">
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
              </li> */}
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div className="d-flex align-items-center" data-aos="fade-left">
            {/* <!-- Icon --> */}
            <a to="/korzinka" className="text-reset me-3" href="#">
              <i style={{ width: "20px" }} className="fas fa-shopping-cart"></i>
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
                    className="dropdown-item"
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
      <header>
        <div className="container">
          <img
            className="imgs"
            src="https://i.ytimg.com/vi/4Kl4afgdg70/maxresdefault.jpg"
            alt=""
          />
        </div>
      </header>
      <section>
        <div className="container">
          <div className="section">
            <div className="left">
              <h1 className="ddd">Murat Khantorayev</h1>
              <p className="p">
                Murad Khontorayev (July 4, 1987, Tashkent - July 19, 2021,{" "}
                <br />
                Bostonliq district) — athlete from Uzbekistan, MMA light
                heavyweight <br />
                fighter, MMA world champion, Uzbekistan MMA <br />
                vice president of the association. He is a professional <br />
                started his career in 2013. Nicknamed "Asiatic Bear".
              </p>
            </div>
            <div className="right">
              <img
                src="https://olamsport.com/upload/storage/174334_680.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="h111">Personal life</h1>
          <div className="section1">
            <div className="left1">
              <img
                src="https://cdn.beta.qalampir.uz/uploads/ek/f_613DtHI2nsCd9vxHbQh0n8v6DUM8Xr.jpg"
                alt=""
                className="img"
              />
            </div>
            <div className="right1">
              <p className="pp">
                On June 21, 2018, he was arrested for creating a disturbance in{" "}
                <br />
                one of the nightclubs in the Yunusabad district of Tashkent[1].{" "}
                <br />
                Initially, he was expected to be sentenced to 3 years in prison.{" "}
                <br />
                Murad Khontorayev was sentenced to a fine in the Yakkasaray{" "}
                <br />
                district court for criminal cases. He paid a fine of 94 times{" "}
                <br />
                the minimum wage - 16,190,560 soums and was released [2]. On{" "}
                <br />
                November 26, 2018, more than 10 people attacked Hontorayev in{" "}
                <br />
                his office located near the "Tashkent Shopping Center" and{" "}
                <br />
                injured him with a knife around his thigh and chest. Due to his{" "}
                <br />
                injuries, Murad Khontorayev was treated in the hospital. <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="h111">Murad's youth</h1>
          <div className="imges">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="ims"
            />
            <img src={img1} alt="" className="ims" />
            <img
              src="https://olamsport.com/upload/storage/174336_680.jpg"
              alt=""
              className="ims"
            />
          </div>
          <div className="imges">
            <img src={img2} alt="" className="ims" />
            <img src={img3} alt="" className="ims" />
            <img src={img4} alt="" className="ims" />
          </div>
          <div className="imges">
            <img src={img5} alt="" className="ims" />
            <img src={img6} alt="" className="ims" />
            <img src={img7} alt="" className="ims" />
          </div>
          <div className="imges">
            <img
              className="ims"
              src="https://static.sports.uz/uploads/2020/A_E_2020/%D0%BC%D1%83%D1%80%D0%BE%D0%B42_1.jpg?1626770871275"
              alt=""
            />
            <img
              className="ims"
              src="https://i.ytimg.com/vi/GSIisKYCRyo/mqdefault.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="h111">Murad's family </h1>
          <video
            className="vd"
            title="Youtube video"
            src={video}
            controls
          ></video>
        </div>
      </section>
      <Header/>
      <section>
        <div className="container">
          <h1 className="h111">Death of Murad</h1>
          <audio className="audio" src={audio} controls></audio>
          <p className="p3">
            The incident took place in the "BMW X5" car driven by the deceased
            in the Bostanliq district of the Tashkent region. On this day at
            11:30 a.m., as a result of a collision with a "Lacetti" car moving
            in the same direction, the car driven by Hontoraev went off the road
            and the athlete died on the spot. A day later, it was reported that
            Hontoraev's student, MMA fighter Jasur Anarboev, was with him. On
            the day Anarboev was taken to the hospital, he was in a deep "coma"
            state, and later it was reported that he came out of the "coma".
            Various videos and messages about the terrible incident spread on
            social networks. Some people took advantage of this incident to
            spread various rumors, and after a while they even managed to
            apologize saying that everything they said was a lie. Murad
            Khontoraev's student told how the "accident" happened:
          </p>
          <div className="imagess">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="ims"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_QcUz_Mra_-KHMnrbrIOGuMoUsx0J3SBMstFOjJmqjxcsgC863GvrpQHMwc4jZAsudAE&usqp=CAU"
              alt=""
              className="ims"
            />
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="ims"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMSsafyc_mw-WpZwYYQfniazfDCE9_bQ5UJqj--0F3U1iNHWtfP0FYnvTWDM_cbkXADk&usqp=CAU"
              alt=""
              className="ims"
            />
            <img
              src="https://i.ytimg.com/vi/_-FpbnBRaBM/hqdefault.jpg"
              alt=""
              className="ims"
            />
            <img
              src="https://i.ytimg.com/vi/zbvYrTzqjbU/mqdefault.jpg"
              alt=""
              className="ims1"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="imagess">
            <img src={img10} alt="" className="ims" />
            <img src={img11} alt="" className="ims" />
            <img src={img12} alt="" className="ims" />
            <img src={img13} alt="" className="ims" />
            <img src={img14} alt="" className="ims" />
            <img src={img15} alt="" className="ims" />
            <img src={img16} alt="" className="ims" />
            <img src={img17} alt="" className="ims" />
            <img src={img18} alt="" className="ims" />
            <img src={img19} alt="" className="ims" />
            <img src={img20} alt="" className="ims" />
            <img src={img21} alt="" className="ims" />
            <img src={img22} alt="" className="ims" />
            <img src={img1} alt="" className="ims" />
            <img src={img2} alt="" className="ims" />
            <img src={img3} alt="" className="ims" />
            <img src={img4} alt="" className="ims" />
            <img src={img5} alt="" className="ims" />
            <img src={img6} alt="" className="ims" />
            <img src={img7} alt="" className="ims" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
