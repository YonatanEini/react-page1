import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import React,{Component} from "react";



function App() {

      return(

        <Grid>

        </Grid>
        
        );

  }


  class Grid extends Component {
    componentDidMount() {
     //$(document).ready(function() {
//$('.search-box').focus();
//});
console.log('hello')
const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");

wrapper.addEventListener("scroll", (e) => {
 e.target.scrollTop > 30
  ? header.classList.add("header-shadow")
  : header.classList.remove("header-shadow");
});

const toggleButton = document.querySelector(".dark-light");

toggleButton.addEventListener("click", () => {
 document.body.classList.toggle("dark-mode");
});

const jobCards = document.querySelectorAll(".job-card");
const logo = document.querySelector(".logo");
const jobLogos = document.querySelector(".job-logos");
const jobDetailTitle = document.querySelector(
 ".job-explain-content .job-card-title"
);
const jobBg = document.querySelector(".job-bg");
const jobDetailOverview = document.querySelector(
  ".overview-text-subheader"
 );

jobCards.forEach((jobCard) => {
 jobCard.addEventListener("click", () => {
  const number = Math.floor(Math.random() * 10);
  const url = `https://unsplash.it/640/425?image=${number}`;
  jobBg.src = url;

  const title = jobCard.querySelector(".job-card-title");
  jobDetailTitle.textContent = title.textContent;

  jobLogos.innerHTML = logo.outerHTML;

  const data = jobCard.querySelector(".job-card-subtitle");
  console.log(data.textContent)
  jobDetailOverview.textContent = data.textContent


  wrapper.classList.add("detail-page");
  wrapper.scrollTop = 0;
  
 });
});

logo.addEventListener("click", () => {
 wrapper.classList.remove("detail-page");
 wrapper.scrollTop = 0;
});

    
    }


    render() {
      return (
        <>
  <meta charSet="UTF-8" />
  <title>Get פטור</title>
  <link rel="stylesheet" href="style.css" />
  <div className="job">
    <div className="header">
      <div className="logo">Get פטור</div>
      <div className="header-menu">
        <a href="#" className="active">
          בחר סוג פטור
        </a>
        <a href="#"> </a>
        <a href="#">צפייה בבקשת פטור</a>
      </div>
      <div className="user-settings">
        <div className="dark-light">
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </div>
        <div className="user-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-square"
          >
            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
          </svg>
        </div>
        <img
          className="user-profile"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
          alt=""
        />
        <div className="user-name">User Name</div>
      </div>
    </div>
    <div className="wrapper">
      <div className="main-container">
        <div className="searched-jobs">
          <div className="searched-bar">
            <div style={{ marginLeft: "40%" }} className="searched-show">
              סוגי פטורים זמינים
            </div>
          </div>
          <div className="job-cards">
            <div className="job-card">
              <div className="job-card-header">
                <svg
                  viewBox="0 -13 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ backgroundColor: "#2e2882" }}
                >
                  <g fill="#feb0a5">
                    <path d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0" />
                    <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0" />
                  </g>
                  <path
                    d="M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0"
                    fill="#feb0a5"
                  />
                </svg>
                <div className="menu-dot" />
              </div>
              <div className="job-card-title">פטור אישי</div>
              <div className="job-card-subtitle">
                פטור זה מוענק לחייל שהזקן או השפם מהווה חלק מדמותו, מהווייתו או
                מזהותו או כי קיימת סיבה חריגה המצדיקה מתן היתר לקבלת הפטור. לחץ
                למטה על מנת להגיש בקשה על רקע לפטור זקן על רקע אישי{" "}
              </div>
              <div className="job-detail-buttons">
                <button className="search-buttons detail-button">זהות</button>
                <button className="search-buttons detail-button">
                  סיבה חריגה
                </button>
              </div>
              <div className="job-card-buttons">
                <button className="search-buttons card-buttons">
                  הגש בקשה
                </button>
              </div>
            </div>
            <div className="job-card">
              <div className="job-card-header">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ backgroundColor: "#ffe80f" }}
                >
                  <path d="M9.5 9.3l-.7 2h1.4z" />
                  <path d="M12 1C5.4 1 0 5.2 0 10.4c0 3.4 2.2 6.3 5.6 8-1.3 4.4-1.3 4.4-1 4.6.2.1.5 0 5.3-3.4l2.1.2c6.6 0 12-4.2 12-9.4S18.6 1 12 1zM6 13c0 .4-.3.7-.6.7s-.7-.3-.7-.7V9H3.6c-.4 0-.7-.4-.7-.7s.3-.7.7-.7H7c.4 0 .7.3.7.7s-.3.6-.7.6h-1zm5.4.7c-.7 0-.6-.6-.9-1.2h-2c-.4.6-.3 1.2-1 1.2s-.8-.4-.6-1.1l1.6-4.3a1 1 0 011-.7c.4 0 .8.3.9.7 1 3.4 2.6 5.4 1 5.4zm4-.1h-2.2c-1.2 0-.5-1.6-.7-5.3 0-.4.3-.7.7-.7s.7.3.7.7v4h1.5c.3 0 .6.3.6.6 0 .4-.3.7-.6.7zm5.4-.5l-.3.4c-1 .7-1.6-1.4-2.6-2.3l-.2.3V13c0 .4-.3.7-.7.7a.7.7 0 01-.7-.7V8.3a.7.7 0 011.4 0v1.5c1.3-1 2-2.7 2.8-2 .8.9-.9 1.6-1.5 2.5 1.6 2.2 1.9 2.3 1.8 2.8z" />
                </svg>
                <div className="menu-dot" />
              </div>
              <div className="job-card-title">פטור דתי</div>
              <div className="job-card-subtitle">
                פטור זקן דתי ניתן למי שמגדל זקן מטעמי דת. אם ברצונך לקבל את
                הפטור הזה עליך להוכיח כי אתה מקיים אורח חיים דתי, שומר את מצוות
                השבת, משתתף קבוע בתפילות, בקיא בברכות השונות ומקיים את כל המצוות{" "}
              </div>
              <div className="job-detail-buttons">
                <button className="search-buttons detail-button">
                  אורח חיים דתי
                </button>
                <button className="search-buttons detail-button">
                  שמירה על מצוות
                </button>
              </div>
              <div className="job-card-buttons">
                <button className="search-buttons card-buttons">
                  הגש בקשה
                </button>
              </div>
            </div>
            <div className="job-card">
              <div className="job-card-header">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ backgroundColor: "#fe5b5f" }}
                >
                  <path
                    d="M12 20.6c-1.4 1.5-3.1 3-5.1 3.3-2 .8-5.9-1.3-5.9-5 0-2.5 3.2-8 6.6-15.1C8.5 1.9 9.4 0 12 0c2.6 0 3.5 1.8 4.6 4C23 17 23 17.7 23 19c0 4.4-5.5 8-11 1.7zm9.5-1.7c0-2-6.4-14.4-6.5-14.5-.9-1.9-1.4-2.9-3-2.9-1.8 0-2.3 1.5-3.2 3.2C2.5 17.2 2.5 18 2.5 19c0 3 3.7 6 8.5.6-2-2.6-3-4.8-3-6.6 0-2.7 2-4.2 4-4.2s4 1.5 4 4.2c0 1.8-1 4-3 6.6 4.6 5.2 8.5 2.5 8.5-.6zM12 10.2c-1.2 0-2.5.9-2.5 2.7 0 1.4.9 3.3 2.5 5.4 1.6-2.1 2.5-4 2.5-5.4 0-1.8-1.3-2.7-2.5-2.7z"
                    fill="#fff"
                  />
                </svg>
                <div className="menu-dot" />
              </div>
              <div className="job-card-title">פטור רפואי</div>
              <div className="job-card-subtitle">
                בקשת פטור מטעמים רפואיים הפטור - חיילים עם מעל 20 פצעים על עור
                הפנים, אסתמה של העור, אקזמה באזור הפנים, אלרגיה חמורה בפנים,
                פסוריאזיס, צלקות או חתכים, שומות ונגעים בפנים
              </div>
              <div className="job-detail-buttons">
                <button className="search-buttons detail-button">
                  בעיה רפואית
                </button>
                <button className="search-buttons detail-button">
                  אלרגיות
                </button>
              </div>
              <div className="job-card-buttons">
                <button className="search-buttons card-buttons">
                  הגש בקשה
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="job-overview">
          <div className="job-overview-cards">
            <div className="job-overview-card">
              <div className="job-card overview-card">
                <div className="overview-wrapper">
                  <div className="overview-detail">
                    <div className="job-card-title">פטור אישי</div>
                    <div className="job-card-subtitle">
                      פטור זה מוענק לחייל שהזקן או השפם מהווה חלק מדמותו,
                      מהווייתו או מזהותו או כי קיימת סיבה חריגה המצדיקה מתן היתר
                      לקבלת הפטור. לחץ למטה על מנת להגיש בקשה על רקע לפטור זקן
                      על רקע אישי
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-overview-card">
              <div className="job-card overview-card">
                <div className="overview-wrapper">
                  <div className="overview-detail">
                    <div className="job-card-title">פטור דתי</div>
                    <div className="job-card-subtitle">
                      פטור זקן דתי ניתן למי שמגדל זקן מטעמי דת. אם ברצונך לקבל
                      את הפטור הזה עליך להוכיח כי אתה מקיים אורח חיים דתי, שומר
                      את מצוות השבת, משתתף קבוע בתפילות, בקיא בברכות השונות
                      ומקיים את כל המצוות
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-overview-card">
              <div className="job-card overview-card">
                <div className="overview-wrapper">
                  <div className="overview-detail">
                    <div className="job-card-title">פטור רפואי</div>
                    <div className="job-card-subtitle">
                      בקשת פטור מטעמים רפואיים הפטור - חיילים עם מעל 20 פצעים על
                      עור הפנים, אסתמה של העור, אקזמה באזור הפנים, אלרגיה חמורה
                      בפנים, פסוריאזיס, צלקות או חתכים, שומות ונגעים בפנים
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="job-explain">
            <img className="job-bg" alt="" />
            <div className="job-logos"></div>
            <div className="job-explain-content">
              <div className="job-title-wrapper">
                <div className="job-card-title" />
                <div className="job-action"></div>
              </div>
              <div className="overview-text">
                <div className="overview-text-header">תיאור הפטור</div>
                <div className="overview-text-subheader">
                  We believe that design (and you) will be critical to the
                  company's success. You will work with our founders and our
                  early customers to help define and build our product
                  functionality, while maintaining the quality bar that
                  customers have come to expect from modern SaaS applications.
                  You have a strong background in product design with a
                  quantitavely anf qualitatively analytical mindset. You will
                  also have the opportunity to craft our overall product and
                  visual identity and should be comfortable to flex into
                  working.
                </div>
              </div>
              <textarea cols={50} rows={7} defaultValue={"\n       "} />
              <div className="overview-text">
                <div className="overview-text-header">Job Description</div>
                <div className="overview-text-item">
                  3+ years working as a product designer.
                </div>
                <div className="overview-text-item">
                  A portfolio that highlights your approach to problem solving,
                  as well as you skills in UI.
                </div>
                <div className="overview-text-item">
                  Experience conducting research and building out smooth flows.
                </div>
                <div className="overview-text-item">
                  Excellent communication skills with a well-defined design
                  process.
                </div>
                <div className="overview-text-item">
                  Familiarity with design tools like Sketch and Figma
                </div>
                <div className="overview-text-item">
                  Up-level our overall design and bring consistency to end-user
                  facing properties
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* partial */}
</>

      );
    }

}




 



export default App;
