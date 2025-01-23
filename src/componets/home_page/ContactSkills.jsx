import React, { useState, useEffect,useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import './ContactSkills.css'; // Assuming you have a CSS file for styling

const ContactSkills = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [counters, setCounters] = useState({
    python: 0,
    java: 0,
    javascript: 0,
    uiux: 0,
  });

  const skills = [
    { name: 'Python', value: counters.python, max: 89 },
    { name: 'Java', value: counters.java, max: 47 },
    { name: 'JavaScript', value: counters.javascript, max: 56 },
    { name: 'UI/UX Design', value: counters.uiux, max: 19 },
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);


    
    emailjs
      .sendForm(
        'service_i64np91', // Replace with your EmailJS Service ID
        'template_6ozwit8', // Replace with your EmailJS Template ID
        form.current,
        'uyz-pUjvCiCu9KfF_' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          // alert('Message sent successfully!');
          toast.success("Success Notification !", {
            position: "top-right"
          });
        },
        (error) => {
          console.error('Error sending email:', error.text);
          toast.error("Failed to send message.", {
            position: "top-right"
          })        }
      );
    // Handle form submission logic here (e.g., send to a server)
  };

  // Update counters (for skill percentages)
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => {
        let newCounters = { ...prev };
        skills.forEach((skill) => {
          if (newCounters[skill.name.toLowerCase()] < skill.max) {
            newCounters[skill.name.toLowerCase()] += 1;
          }
        });
        return newCounters;
      });
    }, 30);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [skills]);




  return (
    <section className="down-box" id="contact">
      <div className="contactSkills">
        {/* Contact Form */}
        <div className="contact-info">
          <div className="main-text">
            <h2 className="heading">Contact Me</h2>
            <span>Get in touch with me</span>
          </div>
          <form  ref={form} onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              cols="30"
              rows="10"
            />
            <div className="formBtn text-center">
              <button type="submit" className="btn">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Skills Section */}
        {/* <div className="skills">
          <div className="container">
            <div className="skillBox">
              <div className="main-text">
                <h2 className="heading">My Skills</h2>
                <span>Let Me Help You</span>
              </div>
              <div className="skill-wrap">
                {skills.map((skill) => (
                  <div className="skill" key={skill.name}>
                    <div className="outer-circle">
                      <div className="inner-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="180px" height="180px">
                          <defs>
                            <linearGradient id="GradientColor">
                              <stop offset="0%" stopColor="#e91e63" />
                              <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                          </defs>
                          <circle cx="85" cy="85" r="75" strokeLinecap="round" />
                        </svg>
                        <h2 className="counter">
                          <span>{counters[skill.name.toLowerCase()]}</span>%
                        </h2>
                      </div>
                    </div>
                    <div className="sk-title">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <ToastContainer />

    </section>
  );
};

export default ContactSkills;
