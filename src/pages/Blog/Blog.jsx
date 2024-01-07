import React from "react";
import { Link } from "react-router-dom";
import BlogCarousel from "../../components/BlogCarousel/BlogCarousel";

const Blog = () =>
{
  return (
    <div>
      <div id="content" className="site-content">
        <div className="page-header flex-middle page-header-blog">
          <div className="container">
            <div className="inner flex-middle">
              <h1 className="page-title">Blog</h1>
              <ul id="breadcrumbs" className="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="entry-content">
        <div className="container">
          <div className="row">
            <div className="content-area col-lg-9 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0">
              <article className="post-box">
                <div className="post-inner">
                  <div className="entry-media">
                    <div className="post-cat">
                      <span className="posted-in">
                        <a href="#">business</a>
                      </span>
                    </div>
                    <Link to="/post">
                      <img src="images/blog/blog-1.jpg" alt />
                    </Link>
                  </div>
                  <div className="inner-post">
                    <div className="entry-header">
                      <h4 className="entry-title">
                        <Link to="/post">
                          Contactless Payments’ Time Has Come
                        </Link>
                      </h4>
                    </div>
                    <div className="entry-summary the-excerpt">
                      <p>
                        Most firms have set up a war room to triage their
                        immediate response to the crisis. But the lack of
                        visibility around future demand complicates efforts to
                        restart stalled portfolio companies…
                      </p>
                    </div>
                  </div>
                  <div className="entry-meta">
                    <span className="posted-on">
                      <a href="#">November 21, 2023</a>
                    </span>
                    <span className="byline">
                      /{ " " }
                      <a className="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span className="comment-num">
                      / <a href="#">3 Comments</a>
                    </span>
                    <Link to="/post" className="btn-details">
                      <i className="ot-flaticon-trajectory"></i>
                    </Link>
                  </div>
                </div>
              </article>
              <article className="post-box">
                <div className="post-inner">
                  <div className="entry-media">
                    <div className="post-cat">
                      <span className="posted-in">
                        <a href="#">Design</a>
                        <a href="#">Development</a>
                      </span>
                    </div>
                    <a className="btn-play" href="https://vimeo.com/87959439">
                      <i className="ot-flaticon-play"></i>
                    </a>
                    <img src="images/blog/bg-video.jpg" alt />
                  </div>
                  <div className="inner-post">
                    <div className="entry-header">
                      <h4 className="entry-title">
                        <Link to="/post">
                          The Future of Retail: Asia’s Ecosystems
                        </Link>
                      </h4>
                    </div>
                    <div className="entry-summary the-excerpt">
                      <p>
                        Most firms have set up a war room to triage their
                        immediate response to the crisis. But the lack of
                        visibility around future demand complicates efforts to
                        restart stalled portfolio companies…
                      </p>
                    </div>
                  </div>
                  <div className="entry-meta">
                    <span className="posted-on">
                      <a href="#">November 21, 2019</a>
                    </span>
                    <span className="byline">
                      /{ " " }
                      <a className="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span className="comment-num">
                      / <a href="#">3 Comments</a>
                    </span>
                    <Link to="/post" className="btn-details">
                      <i className="ot-flaticon-trajectory"></i>
                    </Link>
                  </div>
                </div>
              </article>
              <article className="post-box">
                <div className="post-inner">
                  <div className="quote-box padding-box font-second">
                    <i className="ot-flaticon-left-quote"></i>
                    <div className="quote-text">
                      I cannot give you the formula for success, but I can give
                      you the formula for failure. It is: Try to please
                      everybody.
                      <span>DAVID OSWALD</span>
                    </div>
                  </div>
                  <div className="inner-post">
                    <div className="entry-header">
                      <h4 className="entry-title">
                        <Link to="/post">
                          Digital Transformation Roadmap: Enablers
                        </Link>
                      </h4>
                    </div>
                    <div className="entry-summary the-excerpt">
                      <p>
                        The basic premise of search engine reputation management
                        is to use the following three strategies to accomplish
                        the goal of creating a completely positive first page of
                        search engine results for a specific term…
                      </p>
                    </div>
                  </div>
                  <div className="entry-meta">
                    <span className="posted-on">
                      <a href="#">November 21, 2019</a>
                    </span>
                    <span className="byline">
                      /{ " " }
                      <a className="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span className="comment-num">
                      / <a href="#">3 Comments</a>
                    </span>
                    <Link to="/post" className="btn-details">
                      <i className="ot-flaticon-trajectory"></i>
                    </Link>
                  </div>
                </div>
              </article>
              <article className="post-box">
                <div className="post-inner">
                  <BlogCarousel></BlogCarousel>
                  <div className="inner-post">
                    <div className="entry-header">
                      <h4 className="entry-title">
                        <Link to="/post">
                          How to Write a Successful Grant Application
                        </Link>
                      </h4>
                    </div>
                    <div className="entry-summary the-excerpt">
                      <p>
                        Most firms have set up a war room to triage their
                        immediate response to the crisis. But the lack of
                        visibility around future demand complicates efforts to
                        restart stalled portfolio companies…
                      </p>
                    </div>
                  </div>
                  <div className="entry-meta">
                    <span className="posted-on">
                      <a href="#">November 21, 2019</a>
                    </span>
                    <span className="byline">
                      /{ " " }
                      <a className="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span className="comment-num">
                      / <a href="#">3 Comments</a>
                    </span>
                    <Link to="/post" className="btn-details">
                      <i className="ot-flaticon-trajectory"></i>
                    </Link>
                  </div>
                </div>
              </article>
              <article className="post-box">
                <div className="post-inner">
                  <div className="inner-post">
                    <div className="post-cat">
                      <span className="posted-in">
                        <a href="#">Business</a>
                        <a href="#">Consulting</a>
                      </span>
                    </div>
                    <div className="entry-header">
                      <h4 className="entry-title">
                        <Link to="/post">
                          Crowdfunding. How to Get Funding Online?
                        </Link>
                      </h4>
                    </div>
                    <div className="entry-summary the-excerpt">
                      <p>
                        Most firms have set up a war room to triage their
                        immediate response to the crisis. But the lack of
                        visibility around future demand complicates efforts to
                        restart stalled portfolio companies…
                      </p>
                    </div>
                  </div>
                  <div className="entry-meta">
                    <span className="posted-on">
                      <a href="#">November 21, 2019</a>
                    </span>
                    <span className="byline">
                      /{ " " }
                      <a className="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span className="comment-num">
                      / <a href="#">3 Comments</a>
                    </span>
                    <Link to="/post" className="btn-details">
                      <i className="ot-flaticon-trajectory"></i>
                    </Link>
                  </div>
                </div>
              </article>
              <article className="post-box">
                <div className="post-inner">
                  <div className="link-box padding-box">
                    <i className="ot-flaticon-multimedia"></i>
                    <a href="#">The Future of Marketing in Consumer Products</a>
                  </div>
                  <div className="inner-post">
                    <div className="post-cat">
                      <span className="posted-in">
                        <a href="#">Consulting</a>
                        <a href="#">Finance</a>
                      </span>
                    </div>
                    <div className="entry-header">
                      <h4 className="entry-title">
                        <Link to="/post">
                          In Media, Trimming Costs Boosts Value Transform
                        </Link>
                      </h4>
                    </div>
                    <div className="entry-summary the-excerpt">
                      <p>
                        Most firms have set up a war room to triage their
                        immediate response to the crisis. But the lack of
                        visibility around future demand complicates efforts to
                        restart stalled portfolio companies…
                      </p>
                    </div>
                  </div>
                  <div className="entry-meta">
                    <span className="posted-on">
                      <a href="#">November 21, 2019</a>
                    </span>
                    <span className="byline">
                      /{ " " }
                      <a className="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span className="comment-num">
                      / <a href="#">3 Comments</a>
                    </span>
                    <Link to="/post" className="btn-details">
                      <i className="ot-flaticon-trajectory"></i>
                    </Link>
                  </div>
                </div>
              </article>
              <article className="post-box">
                <div className="post-inner">
                  <div className="audio-box padding-box">
                    <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/139083759"></iframe>
                  </div>
                  <div className="inner-post">
                    <div className="post-cat">
                      <span className="posted-in">
                        <a href="#">Business</a>
                      </span>
                    </div>
                    <div className="entry-header">
                      <h4 className="entry-title">
                        <Link to="/post">
                          Entering the Next Phase of Digital Transformation
                        </Link>
                      </h4>
                    </div>
                    <div className="entry-summary the-excerpt">
                      <p>
                        Most firms have set up a war room to triage their
                        immediate response to the crisis. But the lack of
                        visibility around future demand complicates efforts to
                        restart stalled portfolio companies…
                      </p>
                    </div>
                  </div>
                  <div className="entry-meta">
                    <span className="posted-on">
                      <a href="#">November 21, 2019</a>
                    </span>
                    <span className="byline">
                      /{ " " }
                      <a className="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span className="comment-num">
                      / <a href="#">3 Comments</a>
                    </span>
                    <Link to="/post" className="btn-details">
                      <i className="ot-flaticon-trajectory"></i>
                    </Link>
                  </div>
                </div>
              </article>
              <ul className="page-pagination none-style">
                <li>
                  <a className="prev page-numbers" href="#">
                    <i className="ot-flaticon-arrow-pointing-to-left"></i>
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    1
                  </a>
                </li>
                <li>
                  <span aria-current="page" className="page-numbers current">
                    2
                  </span>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    3
                  </a>
                </li>
                <li>
                  <a className="next page-numbers" href="#">
                    <i className="ot-flaticon-trajectory"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="widget-area primary-sidebar col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <aside
                id="author_widget-1"
                className="widget Betazen Infotech_author-widget"
              >
                <div className="author-widget_wrapper text-center">
                  <div className="author-widget_image-wrapper">
                    <img
                      className="author-widget_image"
                      src="images/author-widget.png"
                      alt="Jina Peterson"
                    />
                  </div>
                  <div className="author-widget_info">
                    <h5 className="author-widget_title">Jina Peterson</h5>
                    <p className="author-widget_text">
                      She is the CEO. She's a big fan her cat Tux, &amp; dinner
                      parties.
                    </p>
                    <div className="author-widget_social">
                      <a className="social-twitter" href="twitter.html">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="social-facebook" href="facebook.html">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="social-linkedin" href="linkedin.html">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a className="social-instagram" href="instagram.html">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
              <aside id="search-2" className="widget widget_search">
                <form
                  role="search"
                  method="get"
                  id="search-form"
                  className="search-form"
                >
                  <input
                    type="search"
                    className="search-field"
                    placeholder="Search…"
                    value
                    name="s"
                  />
                  <button type="submit" className="search-submit">
                    <i className="ot-flaticon-search-1"></i>
                  </button>
                </form>
              </aside>
              <aside className="widget widget_categories">
                <h6 className="widget-title">Categories</h6>
                <ul>
                  <li>
                    <a href="#">Design</a> <span className="posts-count">(3)</span>
                  </li>
                  <li>
                    <a href="#">Development</a>{ " " }
                    <span className="posts-count">(5)</span>
                  </li>
                  <li>
                    <a href="#">Startup</a> <span className="posts-count">(1)</span>
                  </li>
                  <li>
                    <a href="#">Technology</a>{ " " }
                    <span className="posts-count">(3)</span>
                  </li>
                </ul>
              </aside>
              <aside className="widget widget_recent_news">
                <h6 className="widget-title">Recent Posts</h6>
                <ul className="recent-news clearfix">
                  <li className="clearfix">
                    <div className="thumb">
                      <Link to="/post">
                        <img src="images/blog/recent-post-1.jpg" alt />
                      </Link>
                    </div>
                    <div className="entry-header">
                      <h6>
                        <Link to="/post">
                          Contactless Payments’ Time Has Come
                        </Link>
                      </h6>
                      <span className="post-on">
                        <span className="entry-date">SEPTEMBER 4, 2023</span>
                      </span>
                    </div>
                  </li>

                  <li className="clearfix">
                    <div className="thumb">
                      <Link to="/post">
                        <img src="images/blog/recent-post-2.jpg" alt />
                      </Link>
                    </div>
                    <div className="entry-header">
                      <h6>
                        <Link to="/post">
                          The Future of Retail: Asia’s Ecosystems
                        </Link>
                      </h6>
                      <span className="post-on">
                        <span className="entry-date">FEBRUARY 24, 2023</span>
                      </span>
                    </div>
                  </li>

                  <li className="clearfix">
                    <div className="thumb">
                      <Link to="/post">
                        <img src="images/blog/recent-post-3.jpg" alt />
                      </Link>
                    </div>
                    <div className="entry-header">
                      <h6>
                        <Link to="/post">
                          Digital Transformation Roadmap: Enablers
                        </Link>
                      </h6>
                      <span className="post-on">
                        <span className="entry-date">AUGUST 14, 2019</span>
                      </span>
                    </div>
                  </li>
                </ul>
              </aside>
              <aside className="widget widget_tag_cloud">
                <h6 className="widget-title">Tags</h6>
                <div className="tagcloud">
                  <a href="#">analysis</a>
                  <a href="#">business</a>
                  <a href="#">consulting</a>
                  <a href="#">finance</a>
                  <a href="#">marketing</a>
                  <a href="#">strategy</a>
                  <a href="#">tips</a>
                  <a href="#">trading</a>
                </div>
              </aside>
              <aside className="widget widget_media_image">
                <Link to="/contact">
                  <img src="images/promo-img.jpg" alt />
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
