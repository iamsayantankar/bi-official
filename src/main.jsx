import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurTeam from "./pages/OurTeam/OurTeam";
import SingleTeam from "./pages/SingleTeam/SingleTeam";
import FAQ from "./pages/FAQ/FAQ";
import ServiceDetail1 from "./pages/ServiceDetail1/ServiceDetail1";
import ServiceDetail2 from "./pages/ServiceDetail2/ServiceDetail2";
import ServiceDetail3 from "./pages/ServiceDetail3/ServiceDetail3";
import ServiceDetail4 from "./pages/ServiceDetail4/ServiceDetail4";
import ServiceDetail5 from "./pages/ServiceDetail5/ServiceDetail5";
import ServiceDetail6 from "./pages/ServiceDetail6/ServiceDetail6";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Post from "./pages/Post/Post";
import PortfolioDetails from "./pages/PortfolioDetails/PortfolioDetails";
import WebsiteDevelopment from "./pages/Service/SoftwareServiceDevelopment/Website/Website";
import SoftwareDevelopment from "./pages/Service/SoftwareServiceDevelopment/Software/Software";
import SEODevelopment from "./pages/Service/SoftwareServiceDevelopment/SEO/SEO";
import ApplicationDevelopment from "./pages/Service/SoftwareServiceDevelopment/Application/Application";
// import WebsiteDevelopment from "./pages/Service/SoftwareServiceDevelopment/";
// import WebsiteDevelopment from "./pages/Service/SoftwareServiceDevelopment/";
// import WebsiteDevelopment from "./pages/Service/SoftwareServiceDevelopment/";
// import WebsiteDevelopment from "./pages/Service/SoftwareServiceDevelopment/";
// import WebsiteDevelopment from "./pages/Service/SoftwareServiceDevelopment/";
// import WebsiteDevelopment from "./pages/Service/SoftwareServiceDevelopment/";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./pages/Legal/TermsConditions/TermsConditions";


const router = createBrowserRouter( [
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/Website-Development",
        element: <WebsiteDevelopment></WebsiteDevelopment>,
      },
      {
        path: "/Software-Development",
        element: <SoftwareDevelopment></SoftwareDevelopment>,
      },
      {
        path: "/Application-Development",
        element: <ApplicationDevelopment></ApplicationDevelopment>,
      },
      {
        path: "/SEO",
        element: <SEODevelopment></SEODevelopment>,
      },



      {
        path: "/service",
        element: <Home></Home>,
      },
      {
        path: "/CRM-System",
        element: <Home></Home>,
      },
      {
        path: "/ASO",
        element: <Home></Home>,
      },
      {
        path: "/SMO",
        element: <Home></Home>,
      },
      {
        path: "/CRO",
        element: <Home></Home>,
      },
      {
        path: "/Content-Creation",
        element: <Home></Home>,
      },
      {
        path: "/Lead-Generation",
        element: <Home></Home>,
      },
      {
        path: "/Paid-Promotions",
        element: <Home></Home>,
      },
      {
        path: "/Paid-Advertising",
        element: <Home></Home>,
      },
      {
        path: "/Logo-Design",
        element: <Home></Home>,
      },
      {
        path: "/Graphic-Design",
        element: <Home></Home>,
      },
      {
        path: "/Brochure-Design",
        element: <Home></Home>,
      },
      {
        path: "/Packaging-Design",
        element: <Home></Home>,
      },
      {
        path: "/Business-card-Design",
        element: <Home></Home>,
      },

      {
        path: "/servicedetail1",
        element: <ServiceDetail1></ServiceDetail1>,
      },
      {
        path: "/servicedetail2",
        element: <ServiceDetail2></ServiceDetail2>,
      },
      {
        path: "/servicedetail3",
        element: <ServiceDetail3></ServiceDetail3>,
      },
      {
        path: "/servicedetail4",
        element: <ServiceDetail4></ServiceDetail4>,
      },
      {
        path: "/servicedetail5",
        element: <ServiceDetail5></ServiceDetail5>,
      },
      {
        path: "/servicedetail6",
        element: <ServiceDetail6></ServiceDetail6>,
      },
      // {
      //   path: "/aboutus",
      //   element: <AboutUs></AboutUs>,
      // },
      {
        path: "/ourteam",
        element: <OurTeam></OurTeam>,
      },
      {
        path: "/singleteam",
        element: <SingleTeam></SingleTeam>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/post",
        element: <Post></Post>,
      },
      {
        path: "/portfoliodetails",
        element: <PortfolioDetails></PortfolioDetails>,
      },

      // {
      //   path: "/Terms&Conditions",
      //   element: <TermsConditions></TermsConditions>,
      // },
      // {
      //   path: "/PrivacyPolicy",
      //   element: <PrivacyPolicy></PrivacyPolicy>,
      // },
    ],
  },
] );

ReactDOM.createRoot( document.getElementById( "root" ) ).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);
