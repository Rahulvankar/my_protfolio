import React from 'react';
// import './Services.css';  // Assuming you have a CSS file for styling

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="main-text">
        <h2 className="heading">My Services</h2>
        <span>What I will do for you</span>
      </div>

      <div className="allServices">
        <div className="servicesItem">
          <div className="icon-services">
            <i className='bx bx-layer'></i>
            <span></span>
          </div>
          <h3>App Development</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure inventore ea nemo ab recusandae modi voluptates maxime ipsam eveniet. Facilis.</p>
          <a href="#" className="readMore">Read More</a>
        </div>

        <div className="servicesItem">
          <div className="icon-services">
            <i className='bx bx-code-alt'></i>
            <span></span>
          </div>
          <h3>Web Development</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure inventore ea nemo ab recusandae modi voluptates maxime ipsam eveniet. Facilis.</p>
          <a href="#" className="readMore">Read More</a>
        </div>

        <div className="servicesItem">
          <div className="icon-services">
            <i className='bx bx-desktop'></i>
            <span></span>
          </div>
          <h3>Automations</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure inventore ea nemo ab recusandae modi voluptates maxime ipsam eveniet. Facilis.</p>
          <a href="#" className="readMore">Read More</a>
        </div>

        <div className="servicesItem">
          <div className="icon-services">
            <i className='bx bxs-party'></i>
            <span></span>
          </div>
          <h3>Digital Marketing</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure inventore ea nemo ab recusandae modi voluptates maxime ipsam eveniet. Facilis.</p>
          <a href="#" className="readMore">Read More</a>
        </div>
      </div>

      {/* <div className="proposal">
        <div className="text-box">
          <span>Get In Touch</span>
          <h3>Have a Project On Your Mind</h3>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
        <img src="img/support.png" className="first" alt="Support" />
      </div> */}

      <div className="showcase">
        <img src="img/shapes/ring.png" className="ring" alt="Ring" />
        <img src="img/shapes/circle.png" className="circle" alt="Circle" />
        <img src="img/shapes/circle.png" className="circle2" alt="Circle" />
        <img src="img/shapes/circle.png" className="circle3" alt="Circle" />
        <img src="img/shapes/half-ring.png" className="half-ring" alt="Half-ring" />
      </div>
    </section>
  );
}

export default Services;
