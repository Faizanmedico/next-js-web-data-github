import React from 'react'
import Header from '../header/page'

const Sultan = () => {
  return (
    <div>

<>
<Header />
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link
    rel="stylesheet"
    href="https://www.w3schools.com/lib/w3-theme-black.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css"
  />
  {/* Side Navigation */}
  <nav
    className="w3-sidebar w3-bar-block w3-card w3-animate-left w3-center"
    style={{ display: "none" }}
    id="mySidebar"
  >
    <h1 className="w3-xxxlarge w3-text-theme">Side Navigation</h1>
      Close <i className="fa fa-remove" />
    <a href="#" className="w3-bar-item w3-button">
      Link 1
    </a>
    <a href="#" className="w3-bar-item w3-button">
      Link 2
    </a>
    <a href="#" className="w3-bar-item w3-button">
      Link 3
    </a>
    <a href="#" className="w3-bar-item w3-button">
      Link 4
    </a>
  </nav>
  {/* Header */}
  <header className="w3-container w3-theme w3-padding" id="myHeader">
    <i
      className="fa fa-bars w3-xlarge w3-button w3-theme"
    />
    <div className="w3-center">
      <h4>BEAUTIFUL RESPONSIVE WEB SITES</h4>
      <h1 className="w3-xxxlarge w3-animate-bottom">Sultan IT Business Online Global</h1>
      <div className="w3-padding-32">
        <button
          className="w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey"
          style={{ fontWeight: 900 }}
        >
        Onlin Business Store
        </button>
      </div>
    </div>
  </header>
  {/* Modal */}
  <div id="id01" className="w3-modal">
    <div className="w3-modal-content w3-card-4 w3-animate-top">
      <header className="w3-container w3-theme-l1">
        <span
          className="w3-button w3-display-topright"
        >
          ×
        </span>
        <h4>Oh snap! We just showed you a modal..</h4>
        <h5>
          Because we can <i className="fa fa-smile-o" />
        </h5>
      </header>
      <div className="w3-padding">
        <p>Cool huh? Ok, enough teasing around..</p>
        <p>
          Go to our{" "}
          <a className="w3-btn" href="/w3css/default.asp">
            W3.CSS Tutorial
          </a>{" "}
          to learn more!
        </p>
      </div>
      <footer className="w3-container w3-theme-l1">
        <p>Modal footer</p>
      </footer>
    </div>
  </div>
  <div className="w3-row-padding w3-center w3-margin-top">
    <div className="w3-third">
      <div className="w3-card w3-container" style={{ minHeight: 460 }}>
        <h3>Responsive</h3>
        <br />
        <i
          className="fa fa-desktop w3-margin-bottom w3-text-theme"
          style={{ fontSize: 120 }}
        />
        <p>Built-in responsiveness</p>
        <p>Mobile first fluid grid</p>
        <p>Fits any screen sizes</p>
        <p>PC Tablet and Mobile</p>
      </div>
    </div>
    <div className="w3-third">
      <div className="w3-card w3-container" style={{ minHeight: 460 }}>
        <h3>Standard CSS</h3>
        <br />
        <i
          className="fa fa-css3 w3-margin-bottom w3-text-theme"
          style={{ fontSize: 120 }}
        />
        <p>Standard CSS only</p>
        <p>Easy to learn</p>
        <p>No need for jQuery</p>
        <p>No JavaScript library</p>
      </div>
    </div>
    <div className="w3-third">
      <div className="w3-card w3-container" style={{ minHeight: 460 }}>
        <h3>Design</h3>
        <br />
        <i
          className="fa fa-diamond w3-margin-bottom w3-text-theme"
          style={{ fontSize: 120 }}
        />
        <p>Paper like design</p>
        <p>Bold colors and shadows</p>
        <p>Equal across platforms</p>
        <p>Equal across devices</p>
      </div>
    </div>
  </div>
  <div className="w3-container">
    <hr />
    <div className="w3-center">
      <h2>Color Classes</h2>
    </div>
    <div className="w3-row">
      <div className="w3-col w3-container m2 w3-red">
        <p>Red</p>
      </div>
      <div className="w3-col w3-container m2 w3-blue">
        <p>Blue</p>
      </div>
      <div className="w3-col w3-container m2 w3-blue-grey">
        <p>Blue Grey</p>
      </div>
      <div className="w3-col w3-container m2 w3-teal">
        <p>Teal</p>
      </div>
      <div className="w3-col w3-container m2 w3-yellow">
        <p>Yellow</p>
      </div>
      <div className="w3-col w3-container m2 w3-orange">
        <p>Orange</p>
      </div>
    </div>
    <hr />
    <div className="w3-center">
      <h2>Built-In Responsiveness</h2>
      <p className="w3-large">Resize the page to see the effect!</p>
    </div>
    <br />
    <div className="w3-row w3-border">
      <div className="w3-half w3-container w3-blue w3-border">
        <h5>w3-half</h5>
        <p>The w3-half class uses half (50%) of the screen window.</p>
        <p>
          On small screens (max 600 pixels) it automatically resizes to full
          screen width.
        </p>
      </div>
      <div className="w3-half w3-container">
        <h5>w3-half</h5>
      </div>
    </div>
    <br />
    <div className="w3-row w3-border">
      <div className="w3-third w3-container w3-green">
        <h5>w3-third</h5>
        <p>The w3-third class uses one third (33.33%) of the screen widow.</p>
        <p>
          On small screens (max 600 pixels) it automatically resizes to full
          screen width.
        </p>
      </div>
      <div className="w3-third w3-container">
        <h5>w3-third</h5>
      </div>
      <div className="w3-third w3-container">
        <h5>w3-third</h5>
      </div>
    </div>
    <br />
    <div className="w3-row w3-border">
      <div className="w3-quarter w3-container w3-red">
        <h5>w3-quarter</h5>
        <p>The w3-quarter class uses one quarter (25%) of the screen window.</p>
        <p>
          On small screens (max 600 pixels) it automatically resizes to full
          screen width.
        </p>
      </div>
      <div className="w3-quarter w3-container">
        <h5>w3-quarter</h5>
      </div>
      <div className="w3-quarter w3-container">
        <h5>w3-quarter</h5>
      </div>
      <div className="w3-quarter w3-container">
        <h5>w3-quarter</h5>
      </div>
    </div>
    <div className="w3-center">
      <h2>Containers</h2>
      <p>Use containers to create headers, sections and footers.</p>
    </div>
    <header className="w3-container w3-blue-grey">
      <h2>Header</h2>
    </header>
    <div className="w3-padding w3-white w3-display-container">
      <span
        className="w3-button w3-display-topright"
      >
        <i className="fa fa-remove" />
      </span>
      <h2>London</h2>
      <p>
        London is the capital city of England. It is the most populous city in
        the United Kingdom, with a metropolitan area of over 13 million
        inhabitants.
      </p>
      <p>
        Standing on the River Thames, London has been a major settlement for two
        millennia, its history going back to its founding by the Romans, who
        named it Londinium.
      </p>
      <p>
        By the way, you can add a close icon to all containers if you want the
        ability to hide them. Look to your right!
      </p>
    </div>
    <footer className="w3-container w3-blue-grey">
      <h5>Footer</h5>
      <p className="w3-opacity">Footer information goes here</p>
    </footer>
    <hr />
    <div className="w3-center">
      <h2>Color Themes</h2>
      <p>
        The color themes have been designed to work harmoniously with each
        other.
      </p>
    </div>
  </div>
  <div className="w3-row-padding">
    <div className="w3-half">
      <div className="w3-card white">
        <div className="w3-container w3-indigo">
          <h3>Theme Indigo</h3>
        </div>
        <div className="w3-container">
          <h3 className="w3-text-indigo">Movies 2014</h3>
        </div>
        <ul className="w3-ul w3-border-top">
          <li>
            <h3>Frozen</h3>
            <p>The response to the animations was ridiculous</p>
          </li>
          <li>
            <h3>The Fault in Our Stars</h3>
            <p>Touching, gripping and genuinely well made</p>
          </li>
          <li>
            <h3>The Avengers</h3>
            <p>A huge success for Marvel and Disney</p>
          </li>
        </ul>
        <div className="w3-container w3-indigo w3-large">
          <span className="w3-right">Next</span>
        </div>
      </div>
    </div>
    <div className="w3-half">
      <div className="w3-card white">
        <div className="w3-container w3-theme">
          <h3>Theme</h3>
        </div>
        <div className="w3-container">
          <h3 className="w3-text-theme">Movies 2014</h3>
        </div>
        <ul className="w3-ul w3-border-top">
          <li>
            <h3>Frozen</h3>
            <p>The response to the animations was ridiculous</p>
          </li>
          <li>
            <h3>The Fault in Our Stars</h3>
            <p>Touching, gripping and genuinely well made</p>
          </li>
          <li>
            <h3>The Avengers</h3>
            <p>A huge success for Marvel and Disney</p>
          </li>
        </ul>
        <div className="w3-container w3-theme w3-large">
          <span className="w3-right">Next</span>
        </div>
      </div>
    </div>
  </div>
  <div className="w3-container w3-center">
    <hr />
    <h3>Paper-like Cards with Shadows</h3>
  </div>
  <div className="w3-row-padding">
    <div className="w3-third">
      <div className="w3-card">
        <img src="/1.png" alt="Car" style={{ width: "100%" }} />
        <div className="w3-container">
          <p>w3-card</p>
        </div>
      </div>
    </div>
    <div className="w3-third">
      <div className="w3-card-4">
        <img src="/1.png" alt="Car" style={{ width: "100%" }} />
        <div className="w3-container">
          <p>w3-card-4</p>
        </div>
      </div>
    </div>
    <div className="w3-third">
      <div className="w3-card-4">
        <img src="/1.png" alt="Car" style={{ width: "100%" }} />
        <div className="w3-container">
          <p>w3-card-4</p>
        </div>
      </div>
    </div>
  </div>
  <div className="w3-container">
    <hr />
    <div className="w3-center">
      <h2>Tables</h2>
      <p w3-class="w3-large">Don't worry. W3.CSS takes care of your tables.</p>
    </div>
    <div className="w3-responsive w3-card-4">
      <table className="w3-table w3-striped w3-bordered">
        <thead>
          <tr className="w3-theme">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr className="w3-white">
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
          <tr>
            <td>Adam</td>
            <td>Johnson</td>
            <td>67</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    <h2 className="w3-center">Forms and Lists</h2>
  </div>
  <div className="w3-row-padding">
    <div className="w3-half">
      <form className="w3-container w3-card-4">
        <h2>Input Form</h2>
        <div className="w3-section">
          <label>Name</label>
        </div>
        <div className="w3-section">
          <label>Email</label>
        </div>
        <div className="w3-section">
          <label>Subject</label>
        </div>
        <div className="w3-row">
          <div className="w3-half">
            <input
              id="milk"
              className="w3-check"
              type="checkbox"
            />
            <label>Milk</label>
            <br />
            <input id="sugar" className="w3-check" type="checkbox" />
            <label>Sugar</label>
            <br />
            <input
              id="lemon"
              className="w3-check"
              type="checkbox"
            />
            <label>Lemon (Disabled)</label>
            <br />
            <br />
          </div>
          <div className="w3-half">
            <input
              id="male"
              className="w3-radio"
              type="radio"
              name="gender"
              defaultValue="male"
            />
            <label>Male</label>
            <br />
            <input
              id="female"
              className="w3-radio"
              type="radio"
              name="gender"
              defaultValue="female"
            />
            <label>Female</label>
            <br />
            <input
              id="unknown"
              className="w3-radio"
              type="radio"
              name="gender"
              defaultValue=""
            />
            <label> Don't know (Disabled)</label>
          </div>
        </div>
      </form>
    </div>
    <div className="w3-half">
      <div className="w3-card-4 w3-container">
        <h2>Lists</h2>
        <ul className="w3-ul w3-margin-bottom">
          <li>Jill</li>
          <li>Eve</li>
          <li>Adam</li>
        </ul>
        <br />
        <ul className="w3-ul w3-border w3-hoverable">
          <li className="w3-theme">Jill</li>
          <li>Eve</li>
          <li>Adam</li>
          <li>Steve</li>
        </ul>
        <br />
      </div>
    </div>
  </div>
  <hr />
  <h2 className="w3-center">Progress Bars</h2>
  <div className="w3-container">
    <div className="w3-light-gray">
      <div
        id="myBar"
        className="w3-center w3-padding w3-theme"
        style={{ width: "5%" }}
      >
        5%
      </div>
    </div>
    <br />
      Click Me
  </div>
  <hr />
  <h2 className="w3-center">Slideshows</h2>
  <div className="w3-content" style={{ maxWidth: 800, position: "relative" }}>
    <img
      className="mySlides w3-animate-opacity"
      src="/1.png"
      style={{ width: "100%" }}
    />
    <img
      className="mySlides w3-animate-opacity"
      src="/1.png"
      style={{ width: "100%" }}
    />
    <img
      className="mySlides w3-animate-opacity"
      src="/1.png"
      style={{ width: "100%" }}
    />
    <img
      className="mySlides w3-animate-opacity"
      src="/1.png"
      style={{ width: "100%" }}
    />
    <a
      className="w3-button w3-hover-dark-grey"
      style={{ position: "absolute", top: "45%", left: 0 }}
    >
      ❮
    </a>
    <a
      className="w3-button w3-hover-dark-grey"
      style={{ position: "absolute", top: "45%", right: 0 }}
    >
      ❯
    </a>
  </div>
  <div className="w3-container">
    <hr />
    <h2 className="w3-center">Navigation</h2>
    <div className="w3-bar w3-theme">
      <a href="#" className="w3-bar-item w3-button w3-padding-16">
        Home
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding-16">
        Link 1
      </a>
      <div className="w3-dropdown-hover">
        <button className="w3-button w3-padding-16">
          Dropdown <i className="fa fa-caret-down" />
        </button>
        <div className="w3-dropdown-content w3-card-4 w3-bar-block">
          <a href="javascript:void(0)" className="w3-bar-item w3-button">
            Link 1
          </a>
          <a href="javascript:void(0)" className="w3-bar-item w3-button">
            Link 2
          </a>
          <a href="javascript:void(0)" className="w3-bar-item w3-button">
            Link 3
          </a>
        </div>
      </div>
    </div>
    <hr />
    <h2 className="w3-center">Accordions</h2>
    <button
      className="w3-padding-16 w3-theme w3-button w3-block w3-left-align"
    >
      Open Section 1
    </button>
    <div id="Demo1" className="w3-hide">
      <div className="w3-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <button
      className="w3-padding-16 w3-theme w3-button w3-block w3-left-align"
    >
      Open Section 2
    </button>
    <div id="Demo2" className="w3-hide">
      <a href="#" className="w3-button w3-block w3-left-align">
        Link 1
      </a>
      <a href="#" className="w3-button w3-block w3-left-align">
        Link 2
      </a>
      <a href="#" className="w3-button w3-block w3-left-align">
        Link 3
      </a>
    </div>
    <button
      className="w3-padding-16 w3-theme w3-button w3-block w3-left-align"
    >
      Open Section 3
    </button>
    <div id="Demo3" className="w3-hide w3-black">
      <div className="w3-container">
        <p>Accordion with Images:</p>
        <img
          src="/1.png"
          style={{ width: "30%" }}
          className="w3-animate-zoom"
        />
        <p>French Alps</p>
      </div>
    </div>
    <hr />
    <h2 className="w3-center">Tabs</h2>
    <div className="w3-border">
      <div className="w3-bar w3-theme">
        <button
          className="w3-bar-item w3-button testbtn w3-padding-16"
        >
          London
        </button>
        <button
          className="w3-bar-item w3-button testbtn w3-padding-16"
        >
          Paris
        </button>
        <button
          className="w3-bar-item w3-button testbtn w3-padding-16"
        >
          Tokyo
        </button>
      </div>
      <div id="London" className="w3-container city w3-animate-opacity">
        <h2>London</h2>
        <p>London is the capital city of England.</p>
        <p>
          It is the most populous city in the United Kingdom, with a
          metropolitan area of over 13 million inhabitants.
        </p>
      </div>
      <div id="Paris" className="w3-container city w3-animate-opacity">
        <h2>Paris</h2>
        <p>Paris is the capital of France.</p>
        <p>
          The Paris area is one of the largest population centers in Europe,
          with more than 12 million inhabitants.
        </p>
      </div>
      <div id="Tokyo" className="w3-container city w3-animate-opacity">
        <h2>Tokyo</h2>
        <p>Tokyo is the capital of Japan.</p>
        <p>
          It is the center of the Greater Tokyo Area, and the most populous
          metropolitan area in the world.
        </p>
      </div>
    </div>
    <hr />
    <h2 className="w3-center">Buttons</h2>
    <div className="w3-center">
      <br />
      <a className="w3-button w3-theme">Button</a>
      <a className="w3-button w3-theme">Button</a>
      <a className="w3-button w3-theme-d3 w3-disabled">Button</a>
      <br />
      <br />
      <a className="w3-button w3-circle w3-large w3-black">
        <i className="fa fa-plus" />
      </a>
      <a className="w3-button w3-circle w3-large w3-theme">
        <i className="fa fa-plus" />
      </a>
      <a className="w3-button w3-circle w3-large w3-card-4">
        <i className="fa fa-plus" />
      </a>
    </div>
    <br />
    <div className="w3-center">
      <div className="w3-dropdown-hover">
        <button className="w3-button w3-theme">
          Dropdown <i className="fa fa-caret-down" />
        </button>
        <div className="w3-dropdown-content w3-bar-block w3-border">
          <a href="#" className="w3-bar-item w3-button">
            Link 1
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Link 2
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Link 3
          </a>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div className="w3-center">
    <h2>Pagination</h2>
    {/* Pagination */}
    <div className="w3-center w3-padding-32">
      <div className="w3-bar">
        <a href="#" className="w3-bar-item w3-button w3-hover-theme">
          «
        </a>
        <a href="#" className="w3-bar-item w3-button w3-theme w3-hover-theme">
          1
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-theme">
          2
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-theme">
          3
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-theme">
          4
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-theme">
          5
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-theme">
          »
        </a>
      </div>
    </div>
  </div>
  <br />
  {/* Footer */}
  <footer className="w3-container w3-theme-dark w3-padding-16">
    <h3>Footer</h3>
    <p>
      Powered by{" "}
      <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
        w3.css
      </a>
    </p>
    <div
      style={{ position: "relative", bottom: 55 }}
      className="w3-tooltip w3-right"
    >
      <span className="w3-text w3-theme-light w3-padding">Go To Top</span>&nbsp;
      <a className="w3-text-white" href="#myHeader">
        <span className="w3-xlarge">
          <i className="fa fa-chevron-circle-up" />
        </span>
      </a>
    </div>
    <p>
      Remember to check out our&nbsp;&nbsp;
      <a
        href="w3css_references.asp"
        className="w3-btn w3-theme-light"
        target="_blank"
      >
        W3.CSS Reference
      </a>
    </p>
  </footer>
  {/* Script for Sidebar, Tabs, Accordions, Progress bars and slideshows */}
</>


    </div>
  )
}

export default Sultan
