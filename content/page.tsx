import React from 'react'
import Header from '../header/page'

const About = () => {
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
    href="https://fonts.googleapis.com/css?family=Raleway"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html: '\nbody,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}\n'
    }}
  />
  {/* Sidebar/menu */}
  <nav
    className="w3-sidebar w3-collapse w3-white w3-animate-left"
    style={{ zIndex: 3, width: 300 }}
    id="mySidebar"
  >
    <br />
    <div className="w3-container">
      <a
        href="#"
        className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
        title="close menu"
      >
        <i className="fa fa-remove" />
      </a>
      <img
        src="/1.png"
        style={{ width: "45%" }}
        className="w3-round"
      />
      <br />
      <br />
      <h4>
        <b>PORTFOLIO</b>
      </h4>
      <p className="w3-text-grey">Template by W3.CSS</p>
    </div>
    <div className="w3-bar-block">
      <a
        href="#portfolio"
        className="w3-bar-item w3-button w3-padding w3-text-teal"
      >
        <i className="fa fa-th-large fa-fw w3-margin-right" />
        PORTFOLIO
      </a>
      <a
        href="#about"
        className="w3-bar-item w3-button w3-padding"
      >
        <i className="fa fa-user fa-fw w3-margin-right" />
        ABOUT
      </a>
      <a
        href="#contact"
        className="w3-bar-item w3-button w3-padding"
      >
        <i className="fa fa-envelope fa-fw w3-margin-right" />
        CONTACT
      </a>
    </div>
    <div className="w3-panel w3-large">
      <i className="fa fa-facebook-official w3-hover-opacity" />
      <i className="fa fa-instagram w3-hover-opacity" />
      <i className="fa fa-snapchat w3-hover-opacity" />
      <i className="fa fa-pinterest-p w3-hover-opacity" />
      <i className="fa fa-twitter w3-hover-opacity" />
      <i className="fa fa-linkedin w3-hover-opacity" />
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
  <div className="w3-main" style={{ marginLeft: 300 }}>
    {/* Header */}
    <header id="portfolio">
      <a href="#">
        <img
          src="/1.png"
          style={{ width: 65 }}
          className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"
        />
      </a>
      <span
        className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
      >
        <i className="fa fa-bars" />
      </span>
      <div className="w3-container">
        <h1>
          <b>My Portfolio</b>
        </h1>
        <div className="w3-section w3-bottombar w3-padding-16">
          <span className="w3-margin-right">Filter:</span>
          <button className="w3-button w3-black">ALL</button>
          <button className="w3-button w3-white">
            <i className="fa fa-diamond w3-margin-right" />
            Design
          </button>
          <button className="w3-button w3-white w3-hide-small">
            <i className="fa fa-photo w3-margin-right" />
            Photos
          </button>
          <button className="w3-button w3-white w3-hide-small">
            <i className="fa fa-map-pin w3-margin-right" />
            Art
          </button>
        </div>
      </div>
    </header>
    {/* First Photo Grid*/}
    <div className="w3-row-padding">
      <div className="w3-third w3-container w3-margin-bottom">
        <img
          src="/1.png"
          alt="Norway"
          style={{ width: "100%" }}
          className="w3-hover-opacity"
        />
        <div className="w3-container w3-white">
          <p>
            <b>Lorem Ipsum</b>
          </p>
          <p>
            Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla.
          </p>
        </div>
      </div>
      <div className="w3-third w3-container w3-margin-bottom">
        <img
          src="/1.png"
          alt="Norway"
          style={{ width: "100%" }}
          className="w3-hover-opacity"
        />
        <div className="w3-container w3-white">
          <p>
            <b>Lorem Ipsum</b>
          </p>
          <p>
            Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla.
          </p>
        </div>
      </div>
      <div className="w3-third w3-container">
        <img
          src="/1.png"
          alt="Norway"
          style={{ width: "100%" }}
          className="w3-hover-opacity"
        />
        <div className="w3-container w3-white">
          <p>
            <b>Lorem Ipsum</b>
          </p>
          <p>
            Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla.
          </p>
        </div>
      </div>
    </div>
    {/* Second Photo Grid*/}
    <div className="w3-row-padding">
      <div className="w3-third w3-container w3-margin-bottom">
        <img
          src="/1.png"
          alt="Norway"
          style={{ width: "100%" }}
          className="w3-hover-opacity"
        />
        <div className="w3-container w3-white">
          <p>
            <b>Lorem Ipsum</b>
          </p>
          <p>
            Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla.
          </p>
        </div>
      </div>
      <div className="w3-third w3-container w3-margin-bottom">
        <img
          src="/1.png"
          alt="Norway"
          style={{ width: "100%" }}
          className="w3-hover-opacity"
        />
        <div className="w3-container w3-white">
          <p>
            <b>Lorem Ipsum</b>
          </p>
          <p>
            Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla.
          </p>
        </div>
      </div>
      <div className="w3-third w3-container">
        <img
          src="/1.png"
          alt="Norway"
          style={{ width: "100%" }}
          className="w3-hover-opacity"
        />
        <div className="w3-container w3-white">
          <p>
            <b>Lorem Ipsum</b>
          </p>
          <p>
            Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla.
          </p>
        </div>
      </div>
    </div>
    {/* Pagination */}
    <div className="w3-center w3-padding-32">
      <div className="w3-bar">
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          «
        </a>
        <a href="#" className="w3-bar-item w3-black w3-button">
          1
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          2
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          3
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          4
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          »
        </a>
      </div>
    </div>
    {/* Images of Me */}
    <div className="w3-row-padding w3-padding-16" id="about">
      <div className="w3-col m6">
        <img src="/1.png" alt="Me" style={{ width: "100%" }} />
      </div>
      <div className="w3-col m6">
        <img src="/1.png" alt="Me" style={{ width: "100%" }} />
      </div>
    </div>
    <div className="w3-container w3-padding-large" style={{ marginBottom: 32 }}>
      <h4>
        <b>About Me</b>
      </h4>
      <p>
        Just me, myself and I, exploring the universe of unknownment. I have a
        heart of love and an interest of lorem ipsum and mauris neque quam blog.
        I want to share my world with you. Praesent tincidunt sed tellus ut
        rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
        congue gravida diam non fringilla. Praesent tincidunt sed tellus ut
        rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
        congue gravida diam non fringilla.
      </p>
      <hr />
      <h4>Technical Skills</h4>
      {/* Progress bars / Skills */}
      <p>Photography</p>
      <div className="w3-grey">
        <div
          className="w3-container w3-dark-grey w3-padding w3-center"
          style={{ width: "95%" }}
        >
          95%
        </div>
      </div>
      <p>Web Design</p>
      <div className="w3-grey">
        <div
          className="w3-container w3-dark-grey w3-padding w3-center"
          style={{ width: "85%" }}
        >
          85%
        </div>
      </div>
      <p>Photoshop</p>
      <div className="w3-grey">
        <div
          className="w3-container w3-dark-grey w3-padding w3-center"
          style={{ width: "80%" }}
        >
          80%
        </div>
      </div>
      <p>
        <button className="w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom">
          <i className="fa fa-download w3-margin-right" />
          Download Resume
        </button>
      </p>
      <hr />
      <h4>How much I charge</h4>
      {/* Pricing Tables */}
      <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
        <div className="w3-third w3-margin-bottom">
          <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
            <li className="w3-black w3-xlarge w3-padding-32">Basic</li>
            <li className="w3-padding-16">Web Design</li>
            <li className="w3-padding-16">Photography</li>
            <li className="w3-padding-16">1GB Storage</li>
            <li className="w3-padding-16">Mail Support</li>
            <li className="w3-padding-16">
              <h2>$ 10</h2>
              <span className="w3-opacity">per month</span>
            </li>
            <li className="w3-light-grey w3-padding-24">
              <button className="w3-button w3-teal w3-padding-large w3-hover-black">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
        <div className="w3-third w3-margin-bottom">
          <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
            <li className="w3-teal w3-xlarge w3-padding-32">Pro</li>
            <li className="w3-padding-16">Web Design</li>
            <li className="w3-padding-16">Photography</li>
            <li className="w3-padding-16">50GB Storage</li>
            <li className="w3-padding-16">Endless Support</li>
            <li className="w3-padding-16">
              <h2>$ 25</h2>
              <span className="w3-opacity">per month</span>
            </li>
            <li className="w3-light-grey w3-padding-24">
              <button className="w3-button w3-teal w3-padding-large w3-hover-black">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
        <div className="w3-third">
          <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
            <li className="w3-black w3-xlarge w3-padding-32">Premium</li>
            <li className="w3-padding-16">Web Design</li>
            <li className="w3-padding-16">Photography</li>
            <li className="w3-padding-16">Unlimited Storage</li>
            <li className="w3-padding-16">Endless Support</li>
            <li className="w3-padding-16">
              <h2>$ 25</h2>
              <span className="w3-opacity">per month</span>
            </li>
            <li className="w3-light-grey w3-padding-24">
              <button className="w3-button w3-teal w3-padding-large w3-hover-black">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Contact Section */}
    <div className="w3-container w3-padding-large w3-grey">
      <h4 id="contact">
        <b>Contact Me</b>
      </h4>
      <div
        className="w3-row-padding w3-center w3-padding-24"
        style={{ margin: "0 -16px" }}
      >
        <div className="w3-third w3-dark-grey">
          <p>
            <i className="fa fa-envelope w3-xxlarge w3-text-light-grey" />
          </p>
          <p>email@email.com</p>
        </div>
        <div className="w3-third w3-teal">
          <p>
            <i className="fa fa-map-marker w3-xxlarge w3-text-light-grey" />
          </p>
          <p>Chicago, US</p>
        </div>
        <div className="w3-third w3-dark-grey">
          <p>
            <i className="fa fa-phone w3-xxlarge w3-text-light-grey" />
          </p>
          <p>03102233292</p>
        </div>
      </div>
      <hr className="w3-opacity" />
      <form action="/action_page.php" target="_blank">
        <div className="w3-section">
          <label>Name</label>
          <input
            className="w3-input w3-border"
            type="text"
            name="Name"
          />
        </div>
        <div className="w3-section">
          <label>Email</label>
          <input
            className="w3-input w3-border"
            type="text"
            name="Email"
          />
        </div>
        <div className="w3-section">
          <label>Message</label>
          <input
            className="w3-input w3-border"
            type="text"
            name="Message"
          />
        </div>
        <button type="submit" className="w3-button w3-black w3-margin-bottom">
          <i className="fa fa-paper-plane w3-margin-right" />
          Send Message
        </button>
      </form>
    </div>
    {/* Footer */}
    <footer className="w3-container w3-padding-32 w3-dark-grey">
      <div className="w3-row-padding">
        <div className="w3-third">
          <h3>FOOTER</h3>
          <p>
            Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://www.w3schools.com/w3css/default.asp"
              target="_blank"
            >
              w3.css
            </a>
          </p>
        </div>
        <div className="w3-third">
          <h3>BLOG POSTS</h3>
          <ul className="w3-ul w3-hoverable">
            <li className="w3-padding-16">
              <img
                src="/1.png"
                className="w3-left w3-margin-right"
                style={{ width: 50 }}
              />
              <span className="w3-large">Lorem</span>
              <br />
              <span>Sed mattis nunc</span>
            </li>
            <li className="w3-padding-16">
              <img
                src="/1.png"
                className="w3-left w3-margin-right"
                style={{ width: 50 }}
              />
              <span className="w3-large">Ipsum</span>
              <br />
              <span>Praes tinci sed</span>
            </li>
          </ul>
        </div>
        <div className="w3-third">
          <h3>POPULAR TAGS</h3>
          <p>
            <span className="w3-tag w3-black w3-margin-bottom">Travel</span>{" "}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              New York
            </span>{" "}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              London
            </span>
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              IKEA
            </span>{" "}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              NORWAY
            </span>{" "}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              DIY
            </span>
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Ideas
            </span>{" "}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Baby
            </span>{" "}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Family
            </span>
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              News
            </span>{" "}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Clothing
            </span>{" "}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Shopping
            </span>
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Sports
            </span>{" "}
            <span className="w3-tag w3-grey w3-small w3-margin-bottom">
              Games
            </span>
          </p>
        </div>
      </div>
    </footer>
    <div className="w3-black w3-center w3-padding-24">
      Powered by{" "}
      <a
        href="https://www.w3schools.com/w3css/default.asp"
        title="W3.CSS"
        target="_blank"
        className="w3-hover-opacity"
      >
        w3.css
      </a>
    </div>
    {/* End page content */}
  </div>
</>


    </div>
  )
}

export default About
