import React from "react";
import companyimg from "../../assets/img/companyimg.jpg";
function ContactUs() {
  return (
    <>
      <nav class="navbar bg-dark">
        <div class="container">
          <h1 class="logo lg-heading text-light">WT</h1>
          <ul class="nav-items">
            <li class="nav-item">
              <a href="/">Home</a>
            </li>
            <li class="nav-item">
              <a href="/about">About</a>
            </li>
            <li class="nav-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <section class="contact-form">
        <div class="container">
          <div class="form-wrapper">
            <div class="company-address">
              <div class="address-group">
                <i class="fas fa-map-marker-alt fa-3x text-red"></i>
                <h2 class="text-gray md-heading">Location</h2>
                <p>#2661 Janakpuri Colony, city name, town name</p>
              </div>
              <div class="address-group">
                <i class="far fa-envelope fa-3x text-red"></i>
                <h2 class="text-gray md-heading">Email</h2>
                <p>harshitvashisth@mycompany.com</p>
              </div>
              <div class="address-group">
                <i class=" fas fa-phone-square-alt fa-3x text-red"></i>
                <h2 class="text-gray md-heading">Call</h2>
                <p>+910101010101</p>
              </div>
              <img src={companyimg} alt="Company Image" />
            </div>
            <form action="" class="form">
              <h1 class="lg-heading text-black">Contact Us</h1>
              <p class="text-gray">
                Let us know your questions, suggestions and concerns by filling
                out the contact form below.
              </p>
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" name="" id="username" required />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="" id="email" required />
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" name="" id="phone" required />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea name="" id="message">
                  {" "}
                </textarea>
              </div>
              <button type="submit" class="form-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="social-media-links">
          <i class="fab fa-facebook fa-4x"></i>
          <i class="fab fa-twitter fa-4x"></i>
          <i class="fab fa-instagram fa-4x"></i>
        </div>
        <p>World Travel &copy; 2020, All Rights Reserved</p>
      </footer>
    </>
  );
}

export default ContactUs;
