import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServiceClients from "../../components/ServiceClients/ServiceClients";

const AccordionItem = ( { title, content } ) =>
{
  const [ isCurrent, setIsCurrent ] = useState( false );
  const [ isActive, setIsActive ] = useState( false );

  const toggleCurrent = () =>
  {
    setIsCurrent( !isCurrent );
    setIsActive( !isActive );
  };

  return (
    <div
      className={ `acc-item ${ isCurrent ? "current" : "" }` }
      onClick={ toggleCurrent }
    >
      <div className="acc-toggle flex-middle">
        { title }
        <i className="ot-flaticon-arrowsoutline"></i>
      </div>
      <div
        className={ `acc-content ${ isActive ? "active" : "" }` }
        style={ { display: isActive ? "block" : "none" } }
      >
        <p>{ content }</p>
      </div>
    </div>
  );
};

const FAQ = () =>
{
  const accordionData1 = [
    {
      title: "In what areas do you provide management consulting?",
      content:
        "Our associate consultants specialize in a range of business areas. These include strategic planning, issues resolution, culture assessment, board effectiveness, retention strategies.",
    },
    {
      title: "In which countries do you provide consulting services?",
      content:
        "Our associate consultants specialize in a range of business areas. These include strategic planning, issues resolution, culture assessment, board effectiveness, retention strategies.",
    },
    {
      title: "How is a consulting project started and organized? ",
      content:
        "Our associate consultants specialize in a range of business areas. These include strategic planning, issues resolution, culture assessment, board effectiveness, retention strategies.",
    },
    {
      title: "Do you do fixed price or time and materials contracts?",
      content:
        "Our associate consultants specialize in a range of business areas. These     include strategic planning, issues resolution, culture assessment, board effectiveness, retention strategies.",
    },
  ];
  const accordionData2 = [
    {
      title: "Do you offer volume or loyalty discounts?",
      content:
        "In healthy companies, changing directions or launching new projects means combining underlying strengths  and capacities with new energy and    support.",
    },
    {
      title: "What  problems does business consulting typically solve?",
      content:
        "In healthy companies, changing directions or launching new projects  means combining underlying strengths and capacities with new energy and support",
    },
    {
      title: "How is the scope of a consulting project determined?",
      content:
        "In healthy companies, changing  directions or launching new projects  means combining underlying strengths   and capacities with new energy and   support.",
    },
    {
      title: "How long  does a business consulting project last?",
      content:
        "In healthy companies, changing  directions or launching new projects   means combining underlying strengths and capacities with new energy and    support.",
    },
  ];

  // pricing table:
  const PricingTable = ( {
    planName,
    monthlyPrice,
    yearlyPrice,
    isYearly,
    isFeatured,
  } ) =>
  {
    return (
      <div className="col-xl-4 col-md-6 mb-5 mb-md-0">
        <div className={ `ot-pricing-table  ${ isFeatured ? "is-featured" : "" }` }>
          <div className="layer-behind"></div>
          <div className="inner-table">
            <h6 className="title-table">
              <span>{ planName }</span>
            </h6>
            <h2>
              <sup>$</sup> { isYearly ? yearlyPrice : monthlyPrice }
            </h2>
            <p>{ isYearly ? "year" : "month" }</p>
            <div className="short-text">
              Discover the emerging technologies most relevant to your strategy
              by working.
            </div>
            <div className="details ">
              <ul>
                <li className="active">Support Your Business</li>
                <li className="active">Revoke Dokument Access</li>
                <li className="active">Detailed Risk Profiling</li>
                <li className="active">Enter Unlimited Bils</li>
                <li>Bank Transactions</li>
                <li>Financial Strategy</li>
              </ul>
            </div>
            <a href="#" className="octf-btn octf-btn-border">
              Choose Plane
            </a>
          </div>
        </div>
      </div>
    );
  };
  const [ isYearly, setIsYearly ] = useState( false );

  const handleChange = () =>
  {
    setIsYearly( !isYearly );
  };
  return (
    <div>
      <div id="content" className="site-content">
        <div className="page-header flex-middle page-header-team">
          <div className="container">
            <div className="inner flex-middle">
              <h1 className="page-title">FAQs</h1>
              <ul id="breadcrumbs" className="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">FAQs</li>
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
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="ot-heading">
                <span className="is_highlight">faqs</span>
                <h3 className="main-head">Most Popular Questions</h3>
              </div>
              <div className="space-20"></div>
              <p className="px-xl-5">
                We help you see the world differently, discover opportunities
                you may never have imagined and achieve results that bridge what
                is with what can be.
              </p>
              <div className="space-40"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <div className="ot-accordions">
                { accordionData1.map( ( item, index ) => (
                  <AccordionItem
                    key={ index }
                    title={ item.title }
                    content={ item.content }
                  />
                ) ) }
              </div>
            </div>
            <div className="col-md-6">
              <div className="ot-accordions">
                { accordionData2.map( ( item, index ) => (
                  <AccordionItem
                    key={ index }
                    title={ item.title }
                    content={ item.content }
                  />
                ) ) }
              </div>
            </div>
          </div>
          <div className="space-60 d-none d-md-block"></div>
          <div className="space-60"></div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="space-80"></div>
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="mb-0 text-white">
                Looking for a First-Class Finance Firm?
              </h2>
              <div className="space-10"></div>
              <p className="mb-0 text-white">
                We welcome and celebrate different perspectives to help our
                firm, our clients and our people.
              </p>
            </div>
            <div className="col-lg-4 text-lg-right">
              <div className="ot-button">
                <Link to="/contact" className="octf-btn octf-btn-main">
                  get in touch
                </Link>
              </div>
            </div>
          </div>
          <div className="space-80"></div>
        </div>
      </section>

      <section className="pricing-table-section">
        <div className="container">
          <div className="space-90"></div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="ot-heading">
                <span className="is_highlight">flexible pricing plans</span>
                <h3 className="main-head text-white">Choose The Best Plan</h3>
              </div>
              <div className="space-20"></div>
              <div className="space-3"></div>
              <p className="text-white px-xl-5 mx-xl-5">
                In healthy companies, changing directions or launching new
                projects means combining underlying strengths and capacities
                with new.
              </p>
              <div className="space-30"></div>

              <div className="ot-switcher">
                <span className="l-switch active text-white">
                  { isYearly ? "Billed Yearly" : "Billed Monthly" }
                </span>
                <label className="switch">
                  <input type="checkbox" onChange={ handleChange } />
                  <span className="slider round"></span>
                </label>
                <span className="r-switch text-white">
                  { isYearly ? "Billed Monthly" : "Billed Yearly" }
                </span>
              </div>
              <div className="space-60"></div>
            </div>
          </div>
          <div className="row justify-content-center pricing-monthly">
            <PricingTable
              planName="Basic Plan"
              monthlyPrice={ 69 }
              yearlyPrice={ 699 }
              isYearly={ isYearly }
            />
            <PricingTable
              planName="Ultra Plan"
              monthlyPrice={ 79 }
              yearlyPrice={ 799 }
              isYearly={ isYearly }
              isFeatured={ true }
            />
            <PricingTable
              planName="Pro Plan"
              monthlyPrice={ 89 }
              yearlyPrice={ 899 }
              isYearly={ isYearly }
            />
          </div>
        </div>
      </section>
      <div className="space-120"></div>
      <ServiceClients backgroundColor=""></ServiceClients>
      <div className="space-120"></div>
    </div>
  );
};

export default FAQ;
