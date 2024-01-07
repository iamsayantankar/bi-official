import React from "react";
import { Link } from "react-router-dom";
import ServiceCarousel from "../../components/ServiceCarousel/ServiceCarousel";
import ServiceClients from "../../components/ServiceClients/ServiceClients";

const Service = () =>
{
  return (
    <div id="page" className="site">
      <div id="content" className="site-content">
        <div className="page-header flex-middle page-header-service">
          <div className="container">
            <div className="inner flex-middle">
              <h1 className="page-title">Our Services</h1>
              <ul id="breadcrumbs" className="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Our Services</li>
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
            <div className="col-md-12 text-center">
              <div className="ot-heading">
                <span className="is_highlight">Improve Your Business</span>
                <h3 className="main-head">
                  We Offer Great <br /> Number of Finance Services
                </h3>
              </div>
              <div className="space-60"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 mb-5">
              <div className="ot-image-box">
                <Link to="/servicedetail1">
                  <img src="/images/services/service-box1.jpg" alt />
                </Link>
                <div className="content-box">
                  <h5 className="title-box">
                    <Link to="/servicedetail1">Marketing Research</Link>
                  </h5>
                  <p>
                    Analysis of the market as a whole and its particular
                    components (competitors, consumers, product, etc.)
                  </p>
                </div>

                <Link to="/servicedetail1" className="link-box font-second">
                  <span>Explore More</span>
                  <i className="ot-flaticon-trajectory"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-5">
              <div className="ot-image-box">
                <Link to="/servicedetail2">
                  <img src="/images/services/service-box2.jpg" alt />
                </Link>
                <div className="content-box">
                  <h5 className="title-box">
                    <Link to="/servicedetail2">Organizational Audit</Link>
                  </h5>
                  <p>
                    Analysis of internal processes & procedures, staff activity
                    evaluation, evaluation of technologies.
                  </p>
                </div>
                <Link to="/servicedetail2" className="link-box font-second">
                  <span>Explore More</span>
                  <i className="ot-flaticon-trajectory"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-5">
              <div className="ot-image-box">
                <Link to="/servicedetail3">
                  <img src="/images/services/service-box3.jpg" alt />
                </Link>
                <div className="content-box">
                  <h5 className="title-box">
                    <Link to="/servicedetail3">Business Consulting</Link>
                  </h5>
                  <p>
                    Successful experience of experts in structuring investment
                    projects, developing and implementing.
                  </p>
                </div>
                <Link to="/servicedetail3" className="link-box font-second">
                  <span>Explore More</span>
                  <i className="ot-flaticon-trajectory"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-5 mb-xl-0">
              <div className="ot-image-box">
                <Link to="/servicedetail4">
                  <img src="/images/services/service-box4.jpg" alt />
                </Link>
                <div className="content-box">
                  <h5 className="title-box">
                    <Link to="/servicedetail4">Project Management</Link>
                  </h5>
                  <p>
                    We are working in the format of an outsourcing project
                    office. We assume operational coordination.
                  </p>
                </div>
                <Link to="/servicedetail4" className="link-box font-second">
                  <span>Explore More</span>
                  <i className="ot-flaticon-trajectory"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-5 mb-md-0">
              <div className="ot-image-box">
                <Link to="/servicedetail5">
                  <img src="/images/services/service-box5.jpg" alt />
                </Link>
                <div className="content-box">
                  <h5 className="title-box">
                    <Link to="/servicedetail5">Support Functions</Link>
                  </h5>
                  <p>
                    Integrating of innovation and public benefit into your
                    workflows; ensuring strategic and sustainable.
                  </p>
                </div>
                <Link to="/servicedetail5" className="link-box font-second">
                  <span>Explore More</span>
                  <i className="ot-flaticon-trajectory"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="ot-image-box">
                <Link to="/servicedetail6">
                  <img src="/images/services/service-box6.jpg" alt />
                </Link>
                <div className="content-box">
                  <h5 className="title-box">
                    <Link to="/servicedetail6">Finance Planning</Link>
                  </h5>
                  <p>
                    We identify the mission, goals and strategic priorities of a
                    business project or non-profit organization.
                  </p>
                </div>
                <Link to="/servicedetail6" className="link-box font-second">
                  <span>Explore More</span>
                  <i className="ot-flaticon-trajectory"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="space-60 d-none d-md-block"></div>
          <div className="space-60"></div>
        </div>
      </section>
      <section className="service-testi">
        <div className="space-90 d-none d-md-block"></div>
        <div className="space-60"></div>
        <div className="row mx-0">
          <div className="col-xl-6 offset-xl-6 col-lg-8 offset-lg-3 col-md-9 offset-md-2 px-3 px-lg-0">
            <div className="ot-heading">
              <span className="is_highlight">testimonials</span>
              <h3 className="main-head">What People Say About Us</h3>
            </div>
            <div className="space-10"></div>
            <div className="space-8"></div>
            <ServiceCarousel></ServiceCarousel>
          </div>
        </div>
        <div className="space-60 d-none d-md-block"></div>
        <div className="space-60"></div>=
      </section>
      <ServiceClients></ServiceClients>
    </div>
  );
};

export default Service;
