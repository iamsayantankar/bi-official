import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutUsTestimonial from "../../components/AboutUsTestimonial/AboutUsTestimonial";

const TeamSocialSection = () =>
{
  const [ isActive, setIsActive ] = useState( false );

  const toggleActive = () =>
  {
    setIsActive( !isActive );
  };

  return (
    <div className={ `team-social ${ isActive ? "active" : "" }` }>
      <a rel="nofollow" href="#" className="pinterest">
        <i aria-hidden="true" className="fab fa-pinterest-p"></i>
      </a>
      <a rel="nofollow" href="#" className="facebook">
        <i aria-hidden="true" className="fab fa-facebook-f"></i>
      </a>
      <a rel="nofollow" href="#" className="twitter">
        <i aria-hidden="true" className="fab fa-twitter"></i>
      </a>
      <span className="ot-flaticon-signs" onClick={ toggleActive }></span>
    </div>
  );
};

const OurTeam = () =>
{
  return (
    <div>
      <div id="content" className="site-content">
        <div className="page-header flex-middle page-header-team">
          <div className="container">
            <div className="inner flex-middle">
              <h1 className="page-title">Our Team</h1>
              <ul id="breadcrumbs" className="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Our Team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="space-60 d-none d-md-block"></div>
          <div className="space-60"></div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-12 text-center">
              <div className="ot-heading">
                <span className="is_highlight">our team</span>
                <h3 className="main-head">Our Skilled Leaders</h3>
              </div>
              <div className="space-20"></div>
              <p className="px-xl-5">
                We help you see the world differently, discover opportunities
                you may never have imagined and achieve results that bridge what
                is with what can be.
              </p>
              <div className="space-20"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 mb-5 mb-xl-0">
              <div className="ot-team team-1">
                <div className="team-thumb">
                  <img src="images/team1.jpg" alt />
                  <TeamSocialSection />
                </div>
                <div className="team-info">
                  <h6 className="tname">Monica Black</h6>
                  <span>chief communication officer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-5 mb-xl-0">
              <div className="ot-team team-1">
                <div className="team-thumb">
                  <img src="images/team2.jpg" alt />
                  <TeamSocialSection />
                </div>
                <div className="team-info">
                  <h6 className="tname">Peter Perish</h6>
                  <span>chief business project</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-5 mb-md-0">
              <div className="ot-team team-1">
                <div className="team-thumb">
                  <img src="images/team3.jpg" alt />
                  <TeamSocialSection />
                </div>
                <div className="team-info">
                  <h6 className="tname">Olivia Woodson</h6>
                  <span>international consultant</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="ot-team team-1">
                <div className="team-thumb">
                  <img src="images/team4.jpg" alt />
                  <TeamSocialSection />
                </div>
                <div className="team-info">
                  <h6 className="tname">Peter Adams</h6>
                  <span>co-founder of company</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="ot-team team-1">
                <div className="team-thumb">
                  <img src="images/team5.jpg" alt />
                  <TeamSocialSection />
                </div>
                <div className="team-info">
                  <h6 className="tname">Mary Flynn</h6>
                  <span>CHIEF TECHNOLOGY OFFICER</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="ot-team team-1">
                <div className="team-thumb">
                  <img src="images/team6.jpg" alt />
                  <TeamSocialSection />
                </div>
                <div className="team-info">
                  <h6 className="tname">Adam Oswald</h6>
                  <span>CHIEF MARKETING OFFICER</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="ot-team team-1">
                <div className="team-thumb">
                  <img src="images/team7.jpg" alt />
                  <TeamSocialSection />
                </div>
                <div className="team-info">
                  <h6 className="tname">Kate Green</h6>
                  <span>CHIEF FINANCIAL OFFICER</span>{ " " }
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="ot-team team-1">
                <div className="team-thumb">
                  <img src="images/team8.jpg" alt />
                  <TeamSocialSection />
                </div>
                <div className="team-info">
                  <h6 className="tname">Harry Septem</h6>
                  <span>co-founder of company</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-50 d-none d-md-block"></div>
          <div className="space-60"></div>
        </div>
      </section>
      <section className="team-skill">
        <div className="row align-items-center mx-lg-0">
          <div className="col-lg-6 px-lg-0">
            <div className="team-skill-block d-flex justify-content-center justify-content-lg-end">
              <div className="team-skill-content">
                <div className="ot-heading">
                  <span className="is_highlight">our benefits</span>
                  <h3 className="main-head text-white">
                    Entrust Your Project to Our Specialists
                  </h3>
                </div>
                <div className="space-20"></div>
                <div className="space-5"></div>
                <p>
                  In healthy companies, changing directions or launching new
                  projects means combining underlying strengths and capacities
                  with new.
                </p>
                <div className="space-20"></div>
                <div className="line-progress" data-percent="60">
                  <h6>marketing analysis</h6>
                  <div className="iprogress">
                    <div className="progress-bar">
                      <span className="percent"></span>
                    </div>
                  </div>
                </div>
                <div className="space-10"></div>
                <div className="space-7"></div>
                <div className="line-progress" data-percent="80">
                  <h6>finance strategy</h6>
                  <div className="iprogress">
                    <div className="progress-bar">
                      <span className="percent"></span>
                    </div>
                  </div>
                </div>
                <div className="space-10"></div>
                <div className="space-7"></div>
                <div className="line-progress" data-percent="58">
                  <h6>business innovation</h6>
                  <div className="iprogress">
                    <div className="progress-bar">
                      <span className="percent"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg px-lg-0 team-skill-right"></div>
        </div>
      </section>
      <section>
        <AboutUsTestimonial></AboutUsTestimonial>
      </section>
      <section className="service-cta">
        <div className="container">
          <div className="service-icon-cta">
            <div className="row align-items-center">
              <div className="col-text col-xl-4 mb-4 mb-xl-0">
                <h4>Ready to Get Started?</h4>
              </div>
              <div className="col-form col-xl-8">
                <form className="service-cta-form">
                  <div className="team-form flex-middle wpcf7-placeholder-light">
                    <input
                      size="40"
                      className="wpcf7-form-control wpcf7-text"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Your Name *"
                      value="Your Name *"
                      type="text"
                      name="your-name"
                    />
                    <input
                      size="40"
                      className="wpcf7-form-control wpcf7-email wpcf7-text"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Your Email *"
                      value="Your Email *"
                      type="email"
                      name="your-email"
                    />
                    <button type="submit" className="octf-btn">
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
