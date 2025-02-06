import React from 'react'
import Header from '../header/page'

const Store = () => {
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
    href="https://fonts.googleapis.com/css?family=Poppins"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nbody,h1,h2,h3,h4,h5 {font-family: "Poppins", sans-serif}\nbody {font-size:16px;}\n.w3-half img{margin-bottom:-6px;margin-top:16px;opacity:0.8;cursor:pointer}\n.w3-half img:hover{opacity:1}\n'
    }}
  />
  {/* Sidebar/menu */}
  <nav
    className="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding"
    style={{ zIndex: 3, width: 300, fontWeight: "bold" }}
    id="mySidebar"
  >
    <br />
    <a
      href="javascript:void(0)"
      className="w3-button w3-hide-large w3-display-topleft"
      style={{ width: "100%", fontSize: 22 }}
    >
      Close Menu
    </a>
    <div className="w3-container">
      <h3 className="w3-padding-64">
        <b>
          SIBOG
          <br />
          Sultan Ahmed
        </b>
      </h3>
    </div>
    <div className="w3-bar-block">
      <a
        href="#"
        className="w3-bar-item w3-button w3-hover-white"
      >
        Home
      </a>
      <a
        href="#showcase"
        className="w3-bar-item w3-button w3-hover-white"
      >
        Showcase
      </a>
      <a
        href="#services"
        className="w3-bar-item w3-button w3-hover-white"
      >
        Services
      </a>
      <a
        href="#designers"
        className="w3-bar-item w3-button w3-hover-white"
      >
        Designers
      </a>
      <a
        href="#packages"
        className="w3-bar-item w3-button w3-hover-white"
      >
        Packages
      </a>
      <a
        href="#contact"
        className="w3-bar-item w3-button w3-hover-white"
      >
        Contact
      </a>
    </div>
  </nav>
  {/* Top menu on small screens */}
  <header className="w3-container w3-top w3-hide-large w3-red w3-xlarge w3-padding">
    <a
      href="javascript:void(0)"
      className="w3-button w3-red w3-margin-right"
    >
      ☰
    </a>
    <span>SIBOG</span>
  </header>
  {/* Overlay effect when opening sidebar on small screens */}
  <div
    className="w3-overlay w3-hide-large"
    style={{ cursor: "pointer" }}
    title="close side menu"
    id="myOverlay"
  />
  {/* !PAGE CONTENT! */}
  <div className="w3-main" style={{ marginLeft: 340, marginRight: 40 }}>
    {/* Header */}
    <div className="w3-container" style={{ marginTop: 80 }} id="showcase">
      <h1 className="w3-jumbo">
        <b>Sultan IT Business Online Global
        </b>
      </h1>
      <h1 className="w3-xxxlarge w3-text-red">
        <b>Showcase.</b>
      </h1>
      <hr style={{ width: 50, border: "5px solid red" }} className="w3-round" />
    </div>
    {/* Photo grid (modal) */}
    <div className="w3-row-padding">
      <div className="w3-half">
        <img
          src="/1.png"
          style={{ width: "100%" }}
          alt="Concrete meets bricks"
        />
        <img
          src="/1.png"
          style={{ width: "100%" }}
          alt="Light, white and tight scandinavian design"
        />
        <img
          src="/1.png"
          style={{ width: "100%" }}
          alt="White walls with designer chairs"
        />
      </div>
      <div className="w3-half">
        <img
          src="/1.png"
          style={{ width: "100%" }}
          alt="Windows for the atrium"
        />
        <img
          src="/1.png"
          style={{ width: "100%" }}
          alt="Bedroom and office in one space"
        />
        <img
          src="/1.png"
          style={{ width: "100%" }}
          alt="Scandinavian design"
        />
      </div>
    </div>
    {/* Modal for full size images on click*/}
    <div
      id="modal01"
      className="w3-modal w3-black"
      style={{ paddingTop: 0 }}
    >
      <span className="w3-button w3-black w3-xxlarge w3-display-topright">
        ×
      </span>
      <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
        <img id="img01" className="w3-image" />
        <p id="caption" />
      </div>
    </div>
    {/* Services */}
    <div className="w3-container" id="services" style={{ marginTop: 75 }}>
      <h1 className="w3-xxxlarge w3-text-red">
        <b>Services.</b>
      </h1>
      <hr style={{ width: 50, border: "5px solid red" }} className="w3-round" />
      <p>
        We are a interior design service that focus on what's best for your home
        and what's best for you!
      </p>
      <p>
        Some text about our services - what we do and what we offer. We are
        lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
    </div>
    {/* Designers */}
    <div className="w3-container" id="designers" style={{ marginTop: 75 }}>
      <h1 className="w3-xxxlarge w3-text-red">
        <b>Designers.</b>
      </h1>
      <hr style={{ width: 50, border: "5px solid red" }} className="w3-round" />
      <p>The best team in the world.</p>
      <p>
        We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <p>
        <b>Our designers are thoughtfully chosen</b>:
      </p>
    </div>
    {/* The Team */}
    <div className="w3-row-padding w3-grayscale">
      <div className="w3-col m4 w3-margin-bottom">
        <div className="w3-light-grey">
          <img src="/w3images/team2.jpg" alt="John" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>John Doe</h3>
            <p className="w3-opacity">CEO &amp; Founder</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
        </div>
      </div>
      <div className="w3-col m4 w3-margin-bottom">
        <div className="w3-light-grey">
          <img src="/w3images/team1.jpg" alt="Jane" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>Jane Doe</h3>
            <p className="w3-opacity">Designer</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
        </div>
      </div>
      <div className="w3-col m4 w3-margin-bottom">
        <div className="w3-light-grey">
          <img src="/w3images/team3.jpg" alt="Mike" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>Mike Ross</h3>
            <p className="w3-opacity">Architect</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Packages / Pricing Tables */}
    <div className="w3-container" id="packages" style={{ marginTop: 75 }}>
      <h1 className="w3-xxxlarge w3-text-red">
        <b>Packages.</b>
      </h1>
      <hr style={{ width: 50, border: "5px solid red" }} className="w3-round" />
      <p>
        Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure
      </p>
    </div>
    <div className="w3-row-padding">
      <div className="w3-half w3-margin-bottom">
        <ul className="w3-ul w3-light-grey w3-center">
          <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
          <li className="w3-padding-16">Floorplanning</li>
          <li className="w3-padding-16">10 hours support</li>
          <li className="w3-padding-16">Photography</li>
          <li className="w3-padding-16">20% furniture discount</li>
          <li className="w3-padding-16">Good deals</li>
          <li className="w3-padding-16">
            <h2>$ 199</h2>
            <span className="w3-opacity">per room</span>
          </li>
          <li className="w3-light-grey w3-padding-24">
            <button className="w3-button w3-white w3-padding-large w3-hover-black">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
      <div className="w3-half">
        <ul className="w3-ul w3-light-grey w3-center">
          <li className="w3-red w3-xlarge w3-padding-32">Pro</li>
          <li className="w3-padding-16">Floorplanning</li>
          <li className="w3-padding-16">50 hours support</li>
          <li className="w3-padding-16">Photography</li>
          <li className="w3-padding-16">50% furniture discount</li>
          <li className="w3-padding-16">GREAT deals</li>
          <li className="w3-padding-16">
            <h2>$ 249</h2>
            <span className="w3-opacity">per room</span>
          </li>
          <li className="w3-light-grey w3-padding-24">
            <button className="w3-button w3-red w3-padding-large w3-hover-black">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </div>
    {/* Contact */}
    <div className="w3-container" id="contact" style={{ marginTop: 75 }}>
      <h1 className="w3-xxxlarge w3-text-red">
        <b>Contact.</b>
      </h1>
      <hr style={{ width: 50, border: "5px solid red" }} className="w3-round" />
      <p>
        Do you want us to style your home? Fill out the form and fill me in with
        the details :) We love meeting new people!
      </p>
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
        <button
          type="submit"
          className="w3-button w3-block w3-padding-large w3-red w3-margin-bottom"
        >
          Send Message
        </button>
      </form>
    </div>
    {/* End page content */}
  </div>
  {/* W3.CSS Container */}
  <div
    className="w3-light-grey w3-container w3-padding-32"
    style={{ marginTop: 75, paddingRight: 58 }}
  >
    <p className="w3-right">
      Powered by{" "}
      <a
        href="https://www.w3schools.com/w3css/default.asp"
        title="W3.CSS"
        target="_blank"
        className="w3-hover-opacity"
      >
        w3.css
      </a>
    </p>
  </div>
</>


    </div>
  )
}

export default Store