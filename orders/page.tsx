import React from 'react'
import Header from '../header/page'

const Orders = () => {
  return (
    <div>

<>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Raleway"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nhtml,body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}\n'
    }}
  />
  {/* Top container */}
  <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: 4 }}>
    <button
      className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
    >
      <i className="fa fa-bars" /> &nbsp;Menu
    </button>
    <span className="w3-bar-item w3-right">Logo</span>
  </div>
  {/* Sidebar/menu */}
  <nav
    className="w3-sidebar w3-collapse w3-white w3-animate-left"
    style={{ zIndex: 3, width: 300 }}
    id="mySidebar"
  >
    <br />
    <div className="w3-container w3-row">
      <div className="w3-col s4">
        <img
          src="/1.png"
          className="w3-circle w3-margin-right"
          style={{ width: 46 }}
        />
      </div>
      <Header />

      <div className="w3-col s8 w3-bar">
        <span>
          Welcome, <strong>Mike</strong>
        </span>
        <br />
        <a href="#" className="w3-bar-item w3-button">
          <i className="fa fa-envelope" />
        </a>
        <a href="#" className="w3-bar-item w3-button">
          <i className="fa fa-user" />
        </a>
        <a href="#" className="w3-bar-item w3-button">
          <i className="fa fa-cog" />
        </a>
      </div>
    </div>
    <hr />
    <div className="w3-container">
      <h5>Dashboard</h5>
    </div>
    <div className="w3-bar-block">
      <a
        href="#"
        className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
        title="close menu"
      >
        <i className="fa fa-remove fa-fw" />
        &nbsp; Close Menu
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding w3-blue">
        <i className="fa fa-users fa-fw" />
        &nbsp; Overview
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-eye fa-fw" />
        &nbsp; Views
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-users fa-fw" />
        &nbsp; Traffic
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-bullseye fa-fw" />
        &nbsp; Geo
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-diamond fa-fw" />
        &nbsp; Orders
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-bell fa-fw" />
        &nbsp; News
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-bank fa-fw" />
        &nbsp; General
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-history fa-fw" />
        &nbsp; History
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-cog fa-fw" />
        &nbsp; Settings
      </a>
      <br />
      <br />
    </div>
  </nav>
  {/* Overlay effect when opening sidebar on small screens */}
  <div
    className="w3-overlay w3-hide-large w3-animate-opacity"
    style={{ cursor: "pointer" }}
    title="close side menu"
    id="myOverlay"
  />
  {/* !PAGE CONTENT! */}
  <div className="w3-main" style={{ marginLeft: 300, marginTop: 43 }}>
    {/* Header */}
    <header className="w3-container" style={{ paddingTop: 22 }}>
      <h5>
        <b>
          <i className="fa fa-dashboard" /> My Dashboard
        </b>
      </h5>
    </header>
    <div className="w3-row-padding w3-margin-bottom">
      <div className="w3-quarter">
        <div className="w3-container w3-red w3-padding-16">
          <div className="w3-left">
            <i className="fa fa-comment w3-xxxlarge" />
          </div>
          <div className="w3-right">
            <h3>52</h3>
          </div>
          <div className="w3-clear" />
          <h4>Messages</h4>
        </div>
      </div>
      <div className="w3-quarter">
        <div className="w3-container w3-blue w3-padding-16">
          <div className="w3-left">
            <i className="fa fa-eye w3-xxxlarge" />
          </div>
          <div className="w3-right">
            <h3>99</h3>
          </div>
          <div className="w3-clear" />
          <h4>Views</h4>
        </div>
      </div>
      <div className="w3-quarter">
        <div className="w3-container w3-teal w3-padding-16">
          <div className="w3-left">
            <i className="fa fa-share-alt w3-xxxlarge" />
          </div>
          <div className="w3-right">
            <h3>23</h3>
          </div>
          <div className="w3-clear" />
          <h4>Shares</h4>
        </div>
      </div>
      <div className="w3-quarter">
        <div className="w3-container w3-orange w3-text-white w3-padding-16">
          <div className="w3-left">
            <i className="fa fa-users w3-xxxlarge" />
          </div>
          <div className="w3-right">
            <h3>50</h3>
          </div>
          <div className="w3-clear" />
          <h4>Users</h4>
        </div>
      </div>
    </div>
    <div className="w3-panel">
      <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
        <div className="w3-third">
          <h5>Regions</h5>
          <img
            src="/1.png"
            style={{ width: "100%" }}
            alt="Google Regional Map"
          />
        </div>
        <div className="w3-twothird">
          <h5>Feeds</h5>
          <table className="w3-table w3-striped w3-white">
            <tbody>
              <tr>
                <td>
                  <i className="fa fa-user w3-text-blue w3-large" />
                </td>
                <td>New record, over 90 views.</td>
                <td>
                  <i>10 mins</i>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-bell w3-text-red w3-large" />
                </td>
                <td>Database error.</td>
                <td>
                  <i>15 mins</i>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-users w3-text-yellow w3-large" />
                </td>
                <td>New record, over 40 users.</td>
                <td>
                  <i>17 mins</i>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-comment w3-text-red w3-large" />
                </td>
                <td>New comments.</td>
                <td>
                  <i>25 mins</i>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-bookmark w3-text-blue w3-large" />
                </td>
                <td>Check transactions.</td>
                <td>
                  <i>28 mins</i>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-laptop w3-text-red w3-large" />
                </td>
                <td>CPU overload.</td>
                <td>
                  <i>35 mins</i>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-share-alt w3-text-green w3-large" />
                </td>
                <td>New shares.</td>
                <td>
                  <i>39 mins</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <hr />
    <div className="w3-container">
      <h5>General Stats</h5>
      <p>New Visitors</p>
      <div className="w3-grey">
        <div
          className="w3-container w3-center w3-padding w3-green"
          style={{ width: "25%" }}
        >
          +25%
        </div>
      </div>
      <p>New Users</p>
      <div className="w3-grey">
        <div
          className="w3-container w3-center w3-padding w3-orange"
          style={{ width: "50%" }}
        >
          50%
        </div>
      </div>
      <p>Bounce Rate</p>
      <div className="w3-grey">
        <div
          className="w3-container w3-center w3-padding w3-red"
          style={{ width: "75%" }}
        >
          75%
        </div>
      </div>
    </div>
    <hr />
    <div className="w3-container">
      <h5>Countries</h5>
      <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
        <tbody>
          <tr>
            <td>United States</td>
            <td>65%</td>
          </tr>
          <tr>
            <td>UK</td>
            <td>15.7%</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>5.6%</td>
          </tr>
          <tr>
            <td>Spain</td>
            <td>2.1%</td>
          </tr>
          <tr>
            <td>India</td>
            <td>1.9%</td>
          </tr>
          <tr>
            <td>France</td>
            <td>1.5%</td>
          </tr>
        </tbody>
      </table>
      <br />
      <button className="w3-button w3-dark-grey">
        More Countries &nbsp;
        <i className="fa fa-arrow-right" />
      </button>
    </div>
    <hr />
    <div className="w3-container">
      <h5>Recent Users</h5>
      <ul className="w3-ul w3-card-4 w3-white">
        <li className="w3-padding-16">
          <img
            src="/1.png"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: 35 }}
          />
          <span className="w3-xlarge">Mike</span>
          <br />
        </li>
        <li className="w3-padding-16">
          <img
            src="/1.png"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: 35 }}
          />
          <span className="w3-xlarge">Jill</span>
          <br />
        </li>
        <li className="w3-padding-16">
          <img
            src="/1.png"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: 35 }}
          />
          <span className="w3-xlarge">Jane</span>
          <br />
        </li>
      </ul>
    </div>
    <hr />
    <div className="w3-container">
      <h5>Recent Comments</h5>
      <div className="w3-row">
        <div className="w3-col m2 text-center">
          <img
            className="w3-circle"
            src="/1.png"
            style={{ width: 96, height: 96 }}
          />
        </div>
        <div className="w3-col m10 w3-container">
          <h4>
            John{" "}
            <span className="w3-opacity w3-medium">Sep 29, 2014, 9:12 PM</span>
          </h4>
          <p>
            Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <br />
        </div>
      </div>
      <div className="w3-row">
        <div className="w3-col m2 text-center">
          <img
            className="w3-circle"
            src="/1.png"
            style={{ width: 96, height: 96 }}
          />
        </div>
        <div className="w3-col m10 w3-container">
          <h4>
            Bo{" "}
            <span className="w3-opacity w3-medium">Sep 28, 2014, 10:15 PM</span>
          </h4>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <br />
        </div>
      </div>
    </div>
    <br />
    <div className="w3-container w3-dark-grey w3-padding-32">
      <div className="w3-row">
        <div className="w3-container w3-third">
          <h5 className="w3-bottombar w3-border-green">Demographic</h5>
          <p>Language</p>
          <p>Country</p>
          <p>City</p>
        </div>
        <div className="w3-container w3-third">
          <h5 className="w3-bottombar w3-border-red">System</h5>
          <p>Browser</p>
          <p>OS</p>
          <p>More</p>
        </div>
        <div className="w3-container w3-third">
          <h5 className="w3-bottombar w3-border-orange">Target</h5>
          <p>Users</p>
          <p>Active</p>
          <p>Geo</p>
          <p>Interests</p>
        </div>
      </div>
    </div>
    {/* Footer */}
    <footer className="w3-container w3-padding-16 w3-dark-grey">
      <h4>FOOTER</h4>
      <p>
        Powered by{"Sultan Ahmed"}
        <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
        
        </a>
      </p>
    </footer>
    {/* End page content */}
  </div>
</>

        
    </div>
  )
}

export default Orders
