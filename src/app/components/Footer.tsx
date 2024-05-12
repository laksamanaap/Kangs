import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container mt-5 mb-5">
          <div>
            <div className="row footer__content-wrap mt-3">
              <div className="col-md-12 col-lg-5 mb-4">
                <div className="footer__content-left-wrap">
                  <img src="assets/icons/footer__logo.svg" />
                  <div className="footer__description paragraph-normal-regular">
                    We are creative people who provide the best way to you who want to have a new comfortable and suitable place to live
                  </div>
                  <div className="footer__socials">
                    <div className="footer__socials-item" >
                      <a href="#"><img src="assets/icons/call.svg" /></a>
                    </div>
                    <div className="footer__socials-item" >
                      <a href="#"><img src="assets/icons/instagram.svg" /></a>
                    </div>
                    <div className="footer__socials-item" >
                      <a href="#"><img src="assets/icons/facebook.svg" /></a>
                    </div>
                    <div className="footer__socials-item" >
                      <a href="#"><img src="assets/icons/twitter.svg" /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-auto col-lg-4 mb-4">
                <div className="footer__menu-group">
                  <div className="footer__menu">
                    <div className="paragraph-normal-regular mb-4">
                      Pages
                    </div>
                    <div className="footer__links">
                      <a href="#!" className="paragraph-normal-medium">Home V1</a>
                      <a href="#!" className="paragraph-normal-medium">Home V2</a>
                      <a href="#!" className="paragraph-normal-medium">Search Properties V1</a>
                      <a href="#!" className="paragraph-normal-medium">Search Properties V2</a>
                      <a href="#!" className="paragraph-normal-medium">Property Details V1</a>
                      <a href="#!" className="paragraph-normal-medium">Property Details V2</a>
                      <a href="#!" className="paragraph-normal-medium">Agent List V1</a>
                      <a href="#!" className="paragraph-normal-medium">Agent List V2</a>
                      <a href="#!" className="paragraph-normal-medium">Agent Details V1</a>
                      <a href="#!" className="paragraph-normal-medium">Agent Details V2</a>
                      <a href="#!" className="paragraph-normal-medium">About Us V1</a>
                      <a href="#!" className="paragraph-normal-medium">About Us V2</a>
                      <a href="#!" className="paragraph-normal-medium">Contact Us V1</a>
                      <a href="#!" className="paragraph-normal-medium">Contact Us V2</a>
                      <a href="#!" className="paragraph-normal-medium">FAQ</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-auto col-lg-2 mb-md-0 mb-4">
                <div className="footer__menu">
                  <div className="paragraph-normal-regular mb-4">
                    Utility Pages
                  </div>
                  <div className="footer__links">
                    <a href="#!" className="paragraph-normal-medium">Sign In</a>
                    <a href="#!" className="paragraph-normal-medium">Sign Up</a>
                    <a href="#!" className="paragraph-normal-medium">Forgot Password</a>
                    <a href="#!" className="paragraph-normal-medium">Reset Password</a>
                    <a href="#!" className="paragraph-normal-medium">404 Error Page</a>
                    <a href="#!" className="paragraph-normal-medium">Style Guide</a>
                    <a href="#!" className="paragraph-normal-medium">Licences</a>
                    <a href="#!" className="paragraph-normal-medium">Change Log</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <div className="footer__copyright-text">
              ©2023 Kangs Tour. All rights reserved
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer