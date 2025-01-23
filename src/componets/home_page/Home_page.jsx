import React from 'react';

const Home_page = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="hero-info sm:w-9/12 ">
          <h3>Welcome To my World</h3>
          <h1>Hi I'm Rahul Vankar</h1>

          <div className="text-animate">
            <h2>Front End Developer</h2>
          </div>

          <p className='text-justify'>
          My name is Rahul Vankar, and I have 2 years of experience as a Front-End Developer. I specialize in creating visually appealing and user-friendly websites and applications, leveraging advanced web design skills. I am proficient in React, Vue, and Nuxt frameworks, ensuring high-performance and modern solutions. Additionally, I have basic backend knowledge to support seamless development collaboration          </p>

          <div className="btn-box">
            <a href="https://wa.me/8140588648?text=Hello%20Rahul%2C%20I%20am%20interested%20in%20your%20profile!" target="_blank" rel="noopener noreferrer" className="btn">
              Hire Me Now! <i className="bx bx-right-arrow-alt"></i>
            </a>
            <a href="/resume/my_resume.pdf" download="Rahul_Vankar_Resume.pdf" className="btn d-CV">
              Download CV <i className="bx bx-download"></i>
            </a>
          </div>

          <div className="social-media">
            <div className="bg-icon">
              <a href="https://www.instagram.com/r_p_varma/?igsh=MWNmcmJscnVuYXRhZg%3D%3D#"><i className="bx bxl-instagram"></i></a>
              <span></span>
            </div>

            <div className="bg-icon">
              <a href="https://github.com/Rahulvankar"><i className="bx bxl-github"></i></a>
              <span></span>
            </div>

            <div className="bg-icon">
              <a href="https://x.com/VankarRahu55198?t=ld1_ZUYFaZFJdhpEovIMsA&s=09"><i className="bx bxl-twitter"></i></a>
              <span></span>
            </div>

            <div className="bg-icon">
            <a href="https://www.linkedin.com/in/vankar-rahul-788b20276/"><i className="bx bxl-linkedin"></i></a>
            <span></span>
            </div>
          </div>
        </div>
        <div className="img-hero">
          <img src="img/my_img.jpg" alt="Md Saddam" />
          {/* <div className="rotate-text">
            <div className="text">
              <p>I'm a Youtuber, Software Engineer, and Designer</p>
            </div>
            <span><i></i></span>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Home_page;
