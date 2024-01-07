// import React from "react";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";



const Contact = () =>
{
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Software companies in Kolkata - BetaZen InfoTech - Contact</title>
        <link rel="canonical" href="http://betazeninfotech.com/contact" />

        <meta name="description" content=" Are you searching for a software development company in Kolkata?  Contact with us, one among the reputable software companies in Kolkata, to drive growth. " />

        <meta name="keywords" content=" software companies in Kolkata, software development company in Kolkata, contact" />

      </Helmet>


      <div id="content" className="site-content">
        <div className="page-header flex-middle page-header-contact">
          <div className="container">
            <div className="inner flex-middle">
              <h1 className="page-title">Contacts</h1>
              {/* <ul id="breadcrumbs" className="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Contacts</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      <section className="contact-page">
        <div className="container">
          <div className="space-110"></div>
          <div className="row">
            <div className="col-xl-5 col-lg-6 mb-5 mb-xl-0">
              <div className="ot-heading">
                <span className="is_highlight">contact details</span>
                <h3 className="main-head">Our Contacts</h3>
              </div>
              <div className="space-20"></div>
              <div className="space-2"></div>
              <p>
                Give us a call or drop by anytime, we endeavour to answer all
                enquiries within 24 hours on business days. We will be happy to
                answer your questions.
              </p>
              <div className="space-10"></div>
              <div className="box-s1 icon-left">
                <div className="icon-box icon-box-2 contact-iconb">
                  <div className="icon-main">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256,0C150.125,0,64,86.135,64,192c0,141.646,177.146,310,184.688,317.104C250.75,511.031,253.375,512,256,512    s5.25-0.969,7.313-2.896C270.854,502,448,333.646,448,192C448,86.135,361.875,0,256,0z M256,298.667    c-58.813,0-106.667-47.854-106.667-106.667S197.188,85.333,256,85.333S362.667,133.188,362.667,192S314.813,298.667,256,298.667z"></path>
                    </svg>
                  </div>
                  <div className="content-box">
                    <h6 className="title-box">Visit Us Daily</h6>
                    <p>New Town, Kolkata - 721101, West Bengal, India</p>
                  </div>
                </div>
                <div className="space-30"></div>
                <div className="icon-box icon-box-2 contact-iconb">
                  <div className="icon-main contact-icon-phone">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 384 384"
                    >
                      <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594    c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448    c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813    C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"></path>
                    </svg>
                  </div>
                  <div className="content-box">
                    <a href="tel:+918597406694">
                      <h6 className="title-box">
                        Call Us 24/7
                      </h6>
                      <p>+91-8597-406-694</p>
                    </a>
                  </div>
                </div>
                <div className="space-30"></div>
                <div className="icon-box icon-box-2 contact-iconb">
                  <div className="icon-main contact-icon-mail">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"></path>
                      <path d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"></path>
                    </svg>
                  </div>
                  <div className="content-box">
                    <a href="mailto:betazeninfotech@gmail.com">
                      <h6 className="title-box">
                        Mail Us
                      </h6>
                      <p>betazeninfotech@gmail.com</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="contact-img">
                <img src="images/image-contacts.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form
                action="https://thebengalstudio.com/BetazenInfotech/contact.php"
                method="post"
                className="wpcf7-form main-contact-form"
              >
                <div className="main-form">
                  <h4>Ready to Get Started?</h4>
                  <div className="row">
                    <p className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        size="40"
                        aria-required="true"
                        placeholder="Your Name *"
                      />
                    </p>
                    <p className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        size="40"
                        aria-required="true"
                        placeholder="Your Email *"
                      />
                    </p>
                  </div>
                  <p>
                    <input
                      type="number"
                      name="phone"
                      aria-required="true"
                      placeholder="Phone Number*"
                    />
                  </p>
                  <p>
                    <input
                      type="url"
                      name="url"
                      aria-required="true"
                      placeholder="Website*"
                    />
                  </p>
                  <p>
                    <textarea
                      name="message"
                      cols="40"
                      rows="10"
                      placeholder="Message..."
                    ></textarea>
                  </p>
                  <p>
                    <button type="submit" className="octf-btn">
                      Send Message
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="contact-map">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86077.66255184308!2d-122.40402224079803!3d47.60810999586645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab3f905c4b1%3A0x96bf575ff75ab1aa!2s411%20University%20St%2C%20Seattle%2C%20WA%2098101%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1584084043716!5m2!1svi!2s"
            height="522"
            style={ { border: 0 } }
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
