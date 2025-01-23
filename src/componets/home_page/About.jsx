import React, { useState } from 'react';
// import './About.css'; // Assuming a CSS file for styling

const About = () => {
    const [activeTab, setActiveTab] = useState("skills"); // Default to "skills"

    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src="img/WhatsApp_img-removebg-preview.png" alt="" className="aboutHero" />
                <div className="showcase-ring">
                    <img src="img/shapes/ring.png" className="ring" alt="" />
                    <img src="img/shapes/circle.png" className="circle" alt="" />
                </div>
            </div>
            <div className="about-content">
                <h2 className="heading">About Me</h2>
                <h3>2 Year's Experience as Front End Developer</h3>
                <p className='text-justify'>I have 2.5 years of experience as a Front-End Developer. My journey began with one year of intensive learning at Tops Technologies, where I honed my foundational skills. Over the past 1.5 years, I've worked professionally, specializing in Vue.js, React.js, and Nuxt.js. I excel at creating responsive and dynamic web applications.
                    In addition to front-end expertise, I have a basic understanding of backend technologies like MongoDB, PHP, MySQL, and FileZilla. I’ve also developed Progressive Web Apps (PWA), blending design and functionality to deliver engaging user experiences.</p>
                <div className="about-btn">
                    <button
                        className={activeTab === "skills" ? "active" : ""}
                        onClick={() => setActiveTab("skills")}
                    >
                        Main Skills
                    </button>
                    <button
                        className={activeTab === "Experience" ? "active" : ""}
                        onClick={() => setActiveTab("Experience")}
                    >
                        Experience
                    </button>
                    <button
                        className={activeTab === "education" ? "active" : ""}
                        onClick={() => setActiveTab("education")}
                    >
                        Education
                    </button>
                </div>
                <div className="content-container">
        {activeTab === "skills" && (
          <div className="content">
            <div className="text-box">
              <p>Programming Languages</p>
              <span>HTML, CSS, Javascript, jQuery</span>
              <span style={{display:"block"}}>Bootstrap, React.js, Vue.js, Nuxt.js</span>
            </div>
          </div>
        )}
        {activeTab === "Experience" && (
          <div className="content">
            <div className="text-box">
              <p>Front-End Developer (Sep 2023 - Present)</p>
              <span>edigillence infosolutions</span>
            </div>
            <div className="text-box">
              <p>Front-End Developer (2022 - Sep 2023)</p>
              <span>Tops Technologies</span>
            </div>
            
          </div>
        )}
        {activeTab === "education" && (
          <div className="content">
            <div className="text-box">
              <p>B.A</p>
              <span>R.R PATEL COLLEGE ANDROKHA</span>
            </div>
            <div className="text-box">
              <p>H.S.C </p>
              <span>SHETH N.L HIGH SCHOOL LAXMIPURA</span>
            </div>
            
          </div>
        )}
      </div>
                {/* <div className="cvContent">
                    <a href="img/resume.pdf" target="_blank" className="btn d-CV">Download CV <i className='bx bx-download'></i></a>
                </div> */}
            </div>
        </section>
    );
};

export default About;
