import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';

import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      <div className="graphs-section">
        <div className="grant-rates-by-office-graph-container">
          <img
            src="data:image/png;base64,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"
            alt="Grant Rates By Office Graph"
            className="gr-office-img"
          />
          <p>Search Grant Rates By Office</p>
        </div>

        <div className="grant-rates-by-nationality-container">
          <img
            src="https://asylum-rg-fe.vercel.app/static/media/pie-chart-no-text.ade08c34.png"
            alt="Grant Grant Rates By Nationality"
            className="gr-nationality-img"
          />
          <p>Search Grant Rates By Office</p>
        </div>

        <div className="grant-rates-over-time-container">
          <img
            src="data:image/png;base64,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"
            alt="Grant Rates Over Time"
            className="gr-overtime-img"
          />
          <p>Search Grant Rates Over Time</p>
        </div>
      </div>

      <div className="view-more-data-btn-container">
        <button type="button" className="view-button">
          View the Data
        </button>

        <button type="button" className="download-button">
          Download the Data
        </button>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>

      <div>
        <div className="bottom-section">
          <h1>Systemic Disparity Insights</h1>
          <div className="data-container">
            <div className="first-data-point-container">
              <h2>36%</h2>
              <h3>
                By the end of the Trump administration, the average asylum
                office grant rate had fallen 36 percent from an average of 44
                percent in fiscal year 2016 to 28 percent in fiscal year 2020.
              </h3>
            </div>

            <div className="second-data-point-container">
              <h2>5%</h2>
              <h3>
                The New York asylum office grant rate dropped to 5 percent in
                fiscal year 2020.
              </h3>
            </div>

            <div className="third-data-point-container">
              <h2>6x Lower</h2>
              <h3>
                Between fiscal year 2017 and 2020, the New York asylum office's
                average grant rate was six times lower than the San Francisco
                asylum office.
              </h3>
            </div>
          </div>
        </div>

        <div className="read-more-btn-container">
          <button className="read-more-button">Read More</button>
        </div>

        <div className="back-to-top-container">
          <p onClick={() => scrollToTop()} className="back-to-top">
            Back To Top ^
          </p>
        </div>
      </div>
    </div>
  );
}
export default RenderLandingPage;
