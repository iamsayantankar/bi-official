import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./TopSlider.css";


const TopSlider = () =>
// export default () =>
{
  const [ currentSlide, setCurrentSlide ] = useState( 0 );
  const [ loaded, setLoaded ] = useState( false );
  const [ sliderRef, instanceRef ] = useKeenSlider( {
    initial: 0,
    slideChanged ( slider )
    {
      setCurrentSlide( slider.track.details.rel );
    },
    created ()
    {
      setLoaded( true );
    },
  } );


  function Arrow ( props )
  {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={ props.onClick }
        className={ `arrow ${ props.left ? "arrow--left" : "arrow--right"
          } ${ disabeld }` }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        { props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        ) }
        { !props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        ) }
      </svg>
    );
  }

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={ sliderRef } className="keen-slider">


          <div className="keen-slider__slide">
            <img src="/images/slider/background_image_01.jpg" alt="BetaZen InfoTech Poster" />

            {/* <div className="container text-overlay">
              <div>
                <p className="d-none d-sm-block mt-5 text-top ">
                  DIVERSITY & INCLUSION
                </p>
              </div>
              <div>
                <h2>
                  Global Presence is <br /> Key to Clients' <br /> Success Ideas
                </h2>
              </div>
              <div className="ot-video-button flex-middle">
                <button className="octf-btn octf-btn-primary btn-slider btn-large">
                  EXPLORE MORE
                </button>
                <a
                  // target="_blank"
                  className="btn-play ml-3"
                  href="https://vimeo.com/87959439"
                >
                  <i className="ot-flaticon-play"></i>
                </a>
                <span className="font-second">watch video</span>
              </div>
            </div> */}


          </div>



          {/* <div className="keen-slider__slide">
            <img src="/images/slider/slider1-home2.jpg" alt="" />
            <div className="container text-overlay">
              <div>
                <p className="d-none d-sm-block mt-5 text-top ">
                  DIVERSITY & INCLUSION
                </p>
              </div>
              <div>
                <h2>
                  Global Presence is <br /> Key to Clients' <br /> Success Ideas
                </h2>
              </div>
              <div className="ot-video-button flex-middle">
                <button className="octf-btn octf-btn-primary btn-slider btn-large">
                  EXPLORE MORE
                </button>
                <a
                  // target="_blank"
                  className="btn-play ml-3"
                  href="https://vimeo.com/87959439"
                >
                  <i className="ot-flaticon-play"></i>
                </a>
                <span className="font-second">watch video</span>
              </div>
            </div>
          </div> */}

          {/* <div className="keen-slider__slide">
            <img src="/images/slider/slider2-home2.jpg" alt="" />
            <div className="container text-overlay">
              <div>
                <p className="d-none d-sm-block mt-5 text-top ">
                  BEST FINANCIAL ADVICE
                </p>
              </div>
              <div>
                <h2>
                  We were Born in <br /> NY and Active All <br /> Over the World
                </h2>
              </div>
              <div className="ot-video-button flex-middle">
                <button className="octf-btn octf-btn-primary btn-slider btn-large">
                  EXPLORE MORE
                </button>
                <a
                  target="_blank"
                  className="btn-play ml-3"
                  href="https://vimeo.com/87959439"
                >
                  <i className="ot-flaticon-play"></i>
                </a>
                <span className="font-second">watch video</span>
              </div>
            </div>
          </div> */}


          {/* <div className="keen-slider__slide">
            <img src="/images/slider/slider3-home2.jpg" alt="" />
            <div className="container text-overlay">
              <div>
                <p className="d-none d-sm-block mt-5 text-top ">
                  Best Financial Advice
                </p>
              </div>
              <div>
                <h2>
                  We Help Move All <br /> Your Business <br /> Forward
                </h2>
              </div>
              <div className="ot-video-button flex-middle">
                <button className="octf-btn octf-btn-primary btn-slider btn-large">
                  EXPLORE MORE
                </button>
                <a
                  target="_blank"
                  className="btn-play ml-3"
                  href="https://vimeo.com/87959439"
                >
                  <i className="ot-flaticon-play"></i>
                </a>
                <span className="font-second">watch video</span>
              </div>
            </div>
          </div> */}


        </div>
        { loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={ ( e ) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={ currentSlide === 0 }
            />

            <Arrow
              onClick={ ( e ) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        ) }
      </div>
      { loaded && instanceRef.current && (
        <div className="dots">
          { [
            ...Array( instanceRef.current.track.details.slides.length ).keys(),
          ].map( ( idx ) =>
          {
            return (
              <button
                key={ idx }
                onClick={ () =>
                {
                  instanceRef.current?.moveToIdx( idx );
                } }
                className={ "dot" + ( currentSlide === idx ? " active" : "" ) }
              ></button>
            );
          } ) }
        </div>
      ) }
    </>
  );
};

export default TopSlider;


