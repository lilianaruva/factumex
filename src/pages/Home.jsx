import React from "react";
import photo from "../components/callme.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="left">
          <div className="titlePage2">
            <h1>
              <span>Hello everyone!</span>
            </h1>
          </div>
          <p>
            My name is <strong>Liliana Gallegos </strong>and I'm a frontend dev
          </p>
          <a href="mailto:lily.gallegos@hotmail.com?">Contact me ;)</a>
        </div>
        <div className="rigth">
          <img src={photo} />
        </div>
      </div>
      <div className="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#eb2f96"
            fill-opacity=".2"
            d="M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,160C672,181,768,203,864,224C960,245,1056,267,1152,229.3C1248,192,1344,96,1392,48L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>

          <path
            fill="#eb2f96"
            fill-opacity=".5"
            d="M0,64L48,64C96,64,192,64,288,96C384,128,480,192,576,186.7C672,181,768,107,864,80C960,53,1056,75,1152,101.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>

          <path
            fill="#eb2f96"
            fill-opacity=".3"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,149.3C672,160,768,224,864,224C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Home;
