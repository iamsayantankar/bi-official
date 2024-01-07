import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./TeamCarousel.css";

const TeamCarousel = () =>
{
  return (
    <div
      className="ot-testimonials ot-testimonials-carousel-2 "
      data-loop="true"
      data-auto="true"
      data-time="7000"
      data-dots="true"
    >
      <div className="container-fluid">
        <div className="row title" style={ { marginBottom: "20px" } }></div>
      </div>
      <div className="container-fluid">
        <OwlCarousel
          items={ 5 }
          responsive={ {
            0: {
              items: 1,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 6,
            },
          } }
          className="owl-theme"
          align={ "center" }
          // center={ true }
          // navigation
          // display={ "flex" }
          // align-items={ "center" }
          margin={ 8 }
        >


          <div style={ { "margin": 5 } }>
            <div className="ot-team team-2 circle-social">
              <div className="team-thumb">
                <img src="dibyangan-sarkar.jpg" alt />
              </div>
              <div className="team-info">
                <h6 className="tname">{ "Dibyangan Sarkar" }</h6>
                <span>Co-Founder<br></br>CEO</span>
                <div className="team-social">
                  <a rel="follow" href="https://twitter.com/dibyangansarkar">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512">
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                  </a>
                  <a rel="follow" href="https://www.linkedin.com/in/dibyangan-sarkar-b5675b242">
                    <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                  </a>
                  <a rel="follow" href="https://www.instagram.com/myself_photowala">
                    <i aria-hidden="true" className="fab fa-instagram"></i>
                  </a>


                </div>
              </div>
            </div>
          </div>

          <div style={ { "margin": 5 } }>
            <div className="ot-team team-2 circle-social">
              <div className="team-thumb">
                <img src="sayantan-kar.jpg" alt />
              </div>
              <div className="team-info">
                <h6 className="tname">{ "Sayantan Kar" }</h6>
                <span>MD, CTO</span>
                <div className="team-social">

                  <a rel="follow" href="https://sayantankar.com/">
                    <i className="fa fa-rss" aria-hidden="true"></i>
                  </a>
                  <a rel="follow" href="https://twitter.com/iamsayantankar">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512">
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                  </a>
                  <a rel="follow" href="https://www.linkedin.com/in/iamsayantankar">
                    <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                  </a>
                  <a rel="follow" href="https://github.com/iamsayantankar">
                    <i aria-hidden="true" className="fab fa-github"></i>
                  </a>
                  <a rel="follow" href="https://www.instagram.com/iamsayantankar">
                    <i aria-hidden="true" className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <div className="ot-team team-2 circle-social">
              <div className="team-thumb">
                <img src="images/team2.jpg" alt />
              </div>
              <div className="team-info">
                <h6 className="tname">Peter Perish</h6>
                <span>INTERNATIONAL CONSULTANT</span>
                <div className="team-social">
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-twitter"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-facebook-f"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div>
            <div className="ot-team team-2 circle-social">
              <div className="team-thumb">
                <img src="images/team3.jpg" alt />
              </div>
              <div className="team-info">
                <h6 className="tname">Olivia Woodson</h6>
                <span>INTERNATIONAL CONSULTANT</span>
                <div className="team-social">
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-twitter"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-facebook-f"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div>
            <div className="ot-team team-2 circle-social">
              <div className="team-thumb">
                <img src="images/team4.jpg" alt />
              </div>
              <div className="team-info">
                <h6 className="tname">Peter Adams</h6>
                <span>CO-FOUNDER OF COMPANY</span>
                <div className="team-social">
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-twitter"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-facebook-f"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div>
            <div className="ot-team team-2 circle-social">
              <div className="team-thumb">
                <img src="images/team6.jpg" alt />
              </div>
              <div className="team-info">
                <h6 className="tname">Adam Oswald</h6>
                <span>CHIEF MARKETING OFFICER</span>
                <div className="team-social">
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-twitter"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-facebook-f"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div>
            <div className="ot-team team-2 circle-social">
              <div className="team-thumb">
                <img src="images/team7.jpg" alt />
              </div>
              <div className="team-info">
                <h6 className="tname">Kate Green</h6>
                <span>CHIEF FINANCIAL OFFICER</span>
                <div className="team-social">
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-twitter"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-facebook-f"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div>
            <div className="ot-team team-2 circle-social">
              <div className="team-thumb">
                <img src="images/team8.jpg" alt />
              </div>
              <div className="team-info">
                <h6 className="tname">Harry Septem</h6>
                <span>CO-FOUNDER OF COMPANY</span>
                <div className="team-social">
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-twitter"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-facebook-f"></i>
                  </a>
                  <a rel="nofollow" href="#">
                    <i aria-hidden="true" className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}


        </OwlCarousel>
      </div>
    </div>
  );
};

export default TeamCarousel;
