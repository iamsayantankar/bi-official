import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const AboutUsTestimonial = () =>
{
  const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 7000,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <section className="about-testi">
      <div className="container">
        <div className="space-60 d-none d-md-block"></div>
        <div className="space-60"></div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-12 text-center">
            <div className="ot-heading">
              <span className="is_highlight">testimonials</span>
              <h3 className="main-head">What People Say About Us</h3>
            </div>
            <div className="space-20"></div>
            <p className="px-xl-5">
              We help you see the world differently, discover opportunities you
              may never have imagined and achieve results that bridge what is
              with what can be.
            </p>
            <div className="space-20"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <OwlCarousel
              className="ot-testimonials ot-testimonials-carousel owl-theme"
              { ...options }
              margin={ 30 }
            >
              <div className="testi-item">
                <div className="ttext">
                  “We know a diverse workforce and an inclusive culture matters
                  to our clients. Through philanthropy and employee
                  volunteerism, we support the diverse communities where our
                  employees live.”
                </div>
                <div className="t-head flex-middle">
                  <div className="tphoto">
                    <img src="images/avatar-1.png" alt="Oliver Simson" />
                  </div>
                  <div className="tinfo">
                    <h6>Oliver Simson</h6>
                    <span>client of company</span>
                  </div>
                </div>
              </div>
              <div className="testi-item">
                <div className="ttext">
                  “We know a diverse workforce and an inclusive culture matters
                  to our clients. Through philanthropy and employee
                  volunteerism, we support the diverse communities where our
                  employees live.”
                </div>
                <div className="t-head flex-middle">
                  <div className="tphoto">
                    <img src="images/testi2.png" alt="Mary Grey" />
                  </div>
                  <div className="tinfo">
                    <h6>Mary Grey</h6>
                    <span>client of company</span>
                  </div>
                </div>
              </div>
              <div className="testi-item">
                <div className="ttext">
                  “We know a diverse workforce and an inclusive culture matters
                  to our clients. Through philanthropy and employee
                  volunteerism, we support the diverse communities where our
                  employees live.”
                </div>
                <div className="t-head flex-middle">
                  <div className="tphoto">
                    <img src="images/testi3.png" alt="Oliver Simson" />
                  </div>
                  <div className="tinfo">
                    <h6>Samanta Fox</h6>
                    <span>client of company</span>
                  </div>
                </div>
              </div>
              <div className="testi-item">
                <div className="ttext">
                  “We know a diverse workforce and an inclusive culture matters
                  to our clients. Through philanthropy and employee
                  volunteerism, we support the diverse communities where our
                  employees live.”
                </div>
                <div className="t-head flex-middle">
                  <div className="tphoto">
                    <img src="images/avatar-1.png" alt="Oliver Simson" />
                  </div>
                  <div className="tinfo">
                    <h6>Oliver Simson</h6>
                    <span>client of company</span>
                  </div>
                </div>
              </div>
              <div className="testi-item">
                <div className="ttext">
                  “We know a diverse workforce and an inclusive culture matters
                  to our clients. Through philanthropy and employee
                  volunteerism, we support the diverse communities where our
                  employees live.”
                </div>
                <div className="t-head flex-middle">
                  <div className="tphoto">
                    <img src="images/testi2.png" alt="Oliver Simson" />
                  </div>
                  <div className="tinfo">
                    <h6>Mary Grey</h6>
                    <span>client of company</span>
                  </div>
                </div>
              </div>
              <div className="testi-item">
                <div className="ttext">
                  “We know a diverse workforce and an inclusive culture matters
                  to our clients. Through philanthropy and employee
                  volunteerism, we support the diverse communities where our
                  employees live.”
                </div>
                <div className="t-head flex-middle">
                  <div className="tphoto">
                    <img src="images/testi3.png" alt="Oliver Simson" />
                  </div>
                  <div className="tinfo">
                    <h6>Samanta Fox</h6>
                    <span>client of company</span>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="space-60 d-none d-md-block"></div>
        <div className="space-120"></div>
        <div className="space-5"></div>
      </div>
    </section>
  );
};

export default AboutUsTestimonial;
