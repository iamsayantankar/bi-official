import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage ()
{
  const error = useRouteError();
  console.error( error );

  return (
    <div id="error-page">
      <div id="page" className="site">
        <section className="error-404">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="error-logo">
                  <div className="the-logo">
                    <Link to="/">
                      <img src="images/logo_color.png" alt />
                    </Link>
                  </div>
                </div>
                <div className="page-content">
                  <h1>404</h1>
                  <h2>Sorry! Page Not Found!</h2>
                  <p>
                    Oops! The page you are looking for does not exist. Please
                    return to the site’s homepage.
                  </p>
                  {/* <form role="search" method="get" className="search-form">
                    <input
                      type="search"
                      className="search-field"
                      placeholder="SEARCH..."
                    />
                    <button type="submit" className="search-submit">
                      <i className="ot-flaticon-search"></i>
                    </button>
                  </form> */}
                  <div className="ot-button">
                    <Link className="octf-btn" to="/">
                      TAKE ME HOME
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
