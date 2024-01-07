import React from "react";
import { Link } from "react-router-dom";




const PrivacyPolicy = () =>
{




  return (
    <div>
      <div id="content" className="site-content">
        <div className="page-header flex-middle page-header-blog">
          <div className="container">
            <div className="inner flex-middle">
              <h1 className="page-title">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="entry-content">
        <div className="container">
          <div className="row">
            <div className="content-area ">
              <article className="post-box blog-single blog-post">
                <div className="inner-post">
                  <div className="entry-header">
                    <div className="entry-meta">
                      <span className="posted-on">
                        <a href="#">January 01, 2024</a>
                      </span>
                    </div>
                    <h4 className="entry-title">
                      Privacy Policy
                    </h4>
                  </div>


                </div>
              </article>


              <div className="comment-respond">
                <h3 className="comment-reply-title">Leave a comment</h3>
                <form
                  action="https://thebengalstudio.com/BetazenInfotech/contact.php"
                  method="post"
                  className="comment-form"
                >
                  <p className="comment-notes">
                    <span id="email-notes">
                      Your email address will not be published.
                    </span>
                    Required fields are marked <span className="required">*</span>
                  </p>
                  <div className="row">
                    <p className="comment-form-author col-md-6">
                      <input
                        id="author"
                        name="name"
                        type="text"
                        value
                        size="30"
                        placeholder="Name*"
                        required
                      />
                    </p>
                    <p className="comment-form-email col-md-6">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        value
                        size="30"
                        placeholder="Email*"
                        required
                      />
                    </p>
                  </div>
                  <p className="comment-form-comment">
                    <textarea
                      id="comment"
                      name="message"
                      cols="45"
                      rows="8"
                      placeholder="Comment*"
                      required
                    ></textarea>
                  </p>
                  <p className="form-submit">
                    <input
                      name="submit"
                      type="submit"
                      id="submit"
                      className="octf-btn"
                      value="Post Comment"
                    />
                  </p>
                </form>
              </div>


            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
