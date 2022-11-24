import React from 'react'
import "./css/styles.css";
import "./css/styles.assets.css";
import Logo from "./assets/Logo.svg";
import CTA from "./assets/Illustration 1.svg";
import CTA2 from "./assets/Illustration 2.svg";
import user from "./assets/Group 1216.svg";
import loc from "./assets/Group 1215.svg";
import server from "./assets/Group 1217.svg";
import check from "./assets/Group 1120.svg";
import free from "./assets/Free.svg";
import pcheck from "./assets/plan-check.svg";
import global from "./assets/Huge Global.svg";
import netflix from "./assets/Mask Group.svg";
import reddit from "./assets/reddit.svg";
import amazon from "./assets/amzon.svg";
import dischord from "./assets/dischord.svg";
import spotify from "./assets/spotify.svg";
import fb from "./assets/Facebook.svg";
import twitter from "./assets/Twitter.svg";
import insta from "./assets/Instagram.svg";
import right from "./assets/right-arrow.svg";
import left from "./assets/left-arrow.svg";
import bs from "./assets/bars-solid.svg";
import si from "./assets/sign-in.svg";


function Landing() {
  return (
    <div>
    <main>
      <div className="body-overlay"></div>
      <div className="sec sec-1">
        <div className="wrapper">
          <header>
            <button  className="nav-toggler-ctr">
              <img className="nav-toggler" src={bs} />
            </button>
            <div className="logo-ctr">
              <img src={Logo} alt="LaslesVPN" />
            </div>
            <nav>
              <p className="menu-title nav-title">Menu</p>
              <ul className="nav-item-list">
                <li className="nav-item">
                  <a  className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a  className="nav-link">Features</a>
                </li>
                <li className="nav-item">
                  <a  className="nav-link">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Testimonials</a>
                </li>
                <li className="nav-item">
                  <a  className="nav-link">Help</a>
                </li>
              </ul>
            </nav>
            <button id="login-toggler-btn" className="login-toggler-ctr">
              <img className="login-toggler" src={si} />
            </button>
            <div className="header-sign-btns">
              <p className="menu-title login-title">Sign In or Join</p>
              <button className="btn sign-in-btn">Sign In</button>
              <button className="btn btn-light sign-up-btn">Sign Up</button>
            </div>
          </header>
        </div>
      </div>
      <div className="sec sec-2">
        <div className="wrapper">
          <section id="about" class="cta">
            <div className="cta-info">
              <div className="cta-text">
                <h1 className="cta-text-header">
                  Have everything be easy with <span>LaslesVPN.</span>
                </h1>
                <p className="cta-text-desc sub-desc">
                  Provide a network for all your needs with ease and fun using
                  <span>LaslesVPN</span> and discover interesting features from
                  us.
                </p>
              </div>
              <div className="cta-btn-ctr">
                <button className="cta-btn btn-dark">Get Started</button>
              </div>
            </div>
            <div className="cta-img-ctr">
              <img src={CTA} />
            </div>
          </section>
          <section className="stats">
            <div className="stats-item">
              <div className="stats-img-ctr">
                <img src={user} />
              </div>
              <div className="stats-text">
                <p className="text-num">90+</p>
                <p className="text-label">Users</p>
              </div>
            </div>
            <div className="stats-item">
              <div className="stats-img-ctr">
                <img src={loc} />
              </div>
              <div className="stats-text">
                <p className="text-num">30+</p>
                <p className="text-label">Locations</p>
              </div>
            </div>
            <div className="stats-item">
              <div className="stats-img-ctr">
                <img src={server} />
              </div>
              <div className="stats-text">
                <p className="text-num">50+</p>
                <p className="text-label">Servers</p>
              </div>
            </div>
          </section>
          <section id="features" className="features">
            <div className="features-img-ctr">
              <img src={CTA2} />
            </div>
            <div className="features-text">
              <h2 className="feature-header sub-heading">
                We Provide Many Features You Can Use
              </h2>
              <p className="feature-desc sub-desc">
                Have fun exploring the features that we provide and see all the
                functions each feature has.
              </p>
              <ul className="feature-list">
                <li className="feature-list-item">
                  <span><img src={check} /></span>Powerful
                  online protection.
                </li>
                <li className="feature-list-item">
                  <span><img src={check} /></span>Internet
                  without borders.
                </li>
                <li className="feature-list-item">
                  <span><img src={check} /></span>Supercharged
                  VPN
                </li>
                <li className="feature-list-item">
                  <span><img src={check} /></span>No specific
                  time limits.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className="sec sec-3">
        <div className="wrapper">
          <section className="plans">
            <div id="pricing" class="plans-text section-text">
              <h2 className="plans-header sub-heading">Choose Your Plan</h2>
              <p className="plans-desc sub-desc">
                Let's choose the package that is best for you and explore it
                happily and cheerfully.
              </p>
            </div>
            <div className="plans-list">
              <div id="free-plan" className="plan">
                <div className="plan-img-ctr">
                  <img src={free} />
                </div>
                <p className="plan-type">Free Plan</p>
                <ul className="plan-features">
                  <li className="plan-feature-item">
                    <span><img src={pcheck} /></span>Unlimited
                    Bandwith
                  </li>
                  <li className="plan-feature-item">
                    <span><img src={pcheck} /></span>Encrypted
                    Connection
                  </li>
                  <li className="plan-feature-item">
                    <span><img src={pcheck} /></span>No Traffic
                    Logs
                  </li>
                  <li className="plan-feature-item">
                    <span><img src={pcheck} /></span>Works on All
                    Devices
                  </li>
                </ul>
                <div className="plan-select">
                  <p className="plan-price">Free</p>
                  <button className="btn-light plan-select-btn">Select</button>
                </div>
              </div>
              <div id="standard-plan" className="plan">
                <div className="plan-img-ctr">
                  <img src={free} />
                </div>
                <p className="plan-type">Standard Plan</p>
                <ul className="plan-features">
                  <li className="plan-feature-item">
                    <span><img src={pcheck} /></span>Unlimited
                    Bandwith
                  </li>
                  <li className="plan-feature-item">
                    <span><img src={pcheck} /></span>Encrypted
                    Connection
                  </li>
                  <li className="plan-feature-item">
                    <span><img src={pcheck} /></span>Has Traffic
                    Logs
                  </li>
                  <li className="plan-feature-item">
                    <span><img src={pcheck} /></span>Works on All
                    Devices
                  </li>
                  <li className="plan-feature-item">
                    <span><img src={pcheck} /></span>Works
                    Anywhere
                  </li>
                </ul>
                <div className="plan-select">
                  <p className="plan-price">$9<span> / mo</span></p>
                  <button className="btn-light plan-select-btn">Select</button>
                </div>
              </div>
              <div id="premium-plan" class="plan">
                <div className="plan-img-ctr">
                  <img src={free} />
                </div>
                <p className="plan-type">Premium Plan</p>
                <ul className="plan-features">
                  <li className="plan-feature-item">
                    <span><img src={pcheck} /></span>Unlimited
                    Bandwith
                  </li>
                  <li className="plan-feature-item">
                    <span><img src={pcheck} /></span>Encrypted
                    Connection
                  </li>
                  <li className="plan-feature-item">
                    <span><img src={pcheck} /></span>Has Traffic
                    Logs
                  </li>
                  <li className="plan-feature-item">
                    <span><img src={pcheck} /></span>Works on All
                    Devices
                  </li>
                  <li className="plan-feature-item">
                    <span><img src={pcheck} /></span>Works
                    Anywhere
                  </li>
                  <li className="plan-feature-item">
                    <span><img src={pcheck} /></span>Gets New
                    Features
                  </li>
                </ul>
                <div className="plan-select">
                  <p className="plan-price">$12<span> / mo</span></p>
                  <button className="btn-light plan-select-btn">Select</button>
                </div>
              </div>
            </div>
          </section>
          <section className="locations">
            <div className="section-text locations-text">
              <h2 className="locations-header sub-heading">
                Huge Global Network of Fast VPN
              </h2>
              <p className="locations-desc sub-desc">
                You can use <span>LaslesVPN</span> everywhere which makes it easier for you
                when you move locations.
              </p>
            </div>
            <div className="location-points-ctr">
              <img src={global} />
            </div>
          </section>
          <section className="brands">
            <div className="brand-img-ctr">
              <img src={netflix} />
            </div>
            <div className="brand-img-ctr">
              <img src={reddit} />
            </div>
            <div className="brand-img-ctr">
              <img src={amazon} />
            </div>
            <div className="brand-img-ctr">
              <img src={dischord} />
            </div>
            <div className="brand-img-ctr">
              <img src={spotify} />
            </div>
          </section>
          <section id="testimonials" className="testimonials">
            <div className="testimonial-text section-text">
              <h2 className="testimonial-header sub-heading">
                Trusted by Thousands of Happy Customer
              </h2>
              <p className="testimonial-desc sub-desc">
                Hear the stories of our customers who have joined us with
                great pleasure when using these awesome features.
              </p>
            </div>
            <div className="testimonials-slider">
              <div className="testimonial-items"></div>
              <div className="slider-controls">
                <div className="item-links"></div>
                <div className="slider-btns">
                  <button className="slider-btn left">
                    <img src={left} />
                  </button>
                  <button className="slider-btn right">
                    <img src={right} />
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="subscribe">
            <div className="subscribe-content">
              <div className="subscribe-text">
                <h2 className="subscribe-header sub-heading">
                  Subscribe Now To Get These Features!
                </h2>
                <p className="subscribe-desc sub-desc">
                  Subscribe with us and find the fun.
                </p>
              </div>
              <div className="subscribe-btn-ctr">
                <button className="subscribe-btn btn-dark">Subscribe Now</button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="sec sec-4">
        <div className="wrapper">
          <footer>
            <div className="company-info">
              <div className="footer-logo-ctr">
                <img src={Logo} />
              </div>
              <div className="company-desc-text">
                <p className="company-desc sub-desc">
                  <span>LaslesVPN</span> is a private virtual network that has
                  unique features and has high security.
                </p>
              </div>
              <div className="social-media-links">
                <a href="#" className="social-media-icon-ctr">
                  <img
                    className="social-media-icon"
                    src={fb}
                  />
                </a>
                <a href="#" className="social-media-icon-ctr">
                  <img
                    className="social-media-icon"
                    src={twitter}
                  />
                </a>
                <a href="#" className="social-media-icon-ctr">
                  <img
                    className="social-media-icon"
                    src={insta}
                  />
                </a>
              </div>
              <p className="copyright">©2020LaslesVPN</p>
            </div>
            <div id="help" className="footer-links">
              <div className="link-col">
                <p className="link-col-label">Product</p>
                <a className="footer-link" href="#">Download</a>
                <a className="footer-link" href="#">Pricing</a>
                <a className="footer-link" href="#">Locations</a>
                <a className="footer-link" href="#">Server</a>
                <a className="footer-link" href="#">Blog</a>
                <a className="footer-link" href="#">Countries</a>
              </div>
              <div className="link-col">
                <p className="link-col-label">Engage</p>
                <a className="footer-link" href="#">LaslesVPN?</a>
                <a className="footer-link" href="#">FAQ</a>
                <a className="footer-link" href="#">Tutorials</a>
                <a className="footer-link" href="#">About Us</a>
                <a className="footer-link" href="#">Privacy Policy</a>
                <a className="footer-link" href="#">Terms of Services</a>
              </div>
              <div className="link-col">
                <p className="link-col-label">Earn Money</p>
                <a className="footer-link" href="#">Affiliate</a>
                <a className="footer-link" href="#">Become Partner</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    
    </main>


    </div>
  )
}

export default Landing