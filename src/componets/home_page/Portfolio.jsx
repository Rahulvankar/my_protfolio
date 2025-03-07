import React, { useState, useRef } from "react";
// import './Portfolio.css'; // Uncomment if you have a CSS file

const PortfolioItem = ({ item }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Optional: Reset video to start
    }
  };

  return (
    <div
      className={`portfolio-box mix ${item.category} bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105`}
    >
      <h3 className="text-center text-xl font-semibold p-4">{item.title}</h3>
      <div className="flex flex-col items-center">
        {item.videoSrc ? (
          <div className="portfolio-video w-full h-[200px]">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <video
                ref={videoRef}
                src={item.videoSrc}
                muted
                loop
                className="w-full h-full object-cover rounded-lg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onError={(e) => {
                  console.log(`Video load error: ${e.target.src}`);
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              >
                Your browser does not support the video tag.
              </video>
              <img
                src="/img/fallback-image.jpg" // Provide a fallback image path
                alt="Fallback"
                className="w-full h-full object-cover rounded-lg hidden"
                style={{ display: "none" }}
              />
            </a>
          </div>
        ) : (
          <div className="portfolio-img w-full h-[200px]">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 10,
      category: "reactjs",
      title: "Pokemon project",
      description:
        "A demo project showcasing a video portfolio item that plays on hover.",
      videoSrc: "/vidio/pokemon_vidio.webm", // Path relative to public folder
      link: "https://github.com/Rahulvankar/pokemon_project",
    },
    {
      id: 1,
      category: "webdising",
      title: "HappyMart - Online Shop",
      description:
        "Explore a diverse selection of products at HappyMart. Enjoy free shipping, exclusive promotions, and 24/7 customer support",
      imgSrc: "img/Screenshot_2.png",
      link: "https://rahulvankar.github.io/HappyMart/",
    },
    {
      id: 2,
      category: "javascript",
      title: "Add To Card",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, soluta.",
      imgSrc: "img/Screenshot_4.png",
      link: "https://addtocard.vercel.app/",
    },
    {
      id: 3,
      category: "webdising",
      title: "BrunchFood: Delicious Recipes for Every Meal",
      description:
        "Discover mouthwatering brunch recipes with easy-to-follow instructions, perfect for any time of the day",
      imgSrc: "img/BrunchFood.png",
      link: "https://rahulvankar.github.io/BrunchFood/",
    },
    {
      id: 4,
      category: "javascript",
      title: "Age Calculator",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, soluta.",
      imgSrc: "img/Screenshot_6.png",
      link: "https://age-calculater-kappa.vercel.app/",
    },
    {
      id: 5,
      category: "javascript",
      title: "Bubble Game",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, soluta.",
      imgSrc: "img/Screenshot_1.png",
      link: "https://bubble-game-wzc9.vercel.app/",
    },
    {
      id: 6,
      category: "javascript",
      title: "Quiz App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, soluta.",
      imgSrc: "img/Screenshot_3.png",
      link: "https://quiz-app-eight-omega-51.vercel.app/",
    },
    {
      id: 7,
      category: "reactjs",
      title: "EMS Project",
      description:
        "Create dynamic React apps with responsive designs that adapt across devices using modern front-end technologies",
      imgSrc: "img/Screenshot_5.png",
      link: "https://ems-project-pi.vercel.app/",
    },
    {
      id: 8,
      category: "reactjs",
      title: "React Web Page",
      description:
        "Create dynamic React apps with responsive designs that adapt across devices using modern front-end technologies",
      imgSrc: "img/react_html.png",
      link: "https://rahul-gpt-3.netlify.app/",
    },
    {
      id: 9,
      category: "vue_js",
      title: "Search Project",
      description:
        "Create dynamic React apps with responsive designs that adapt across devices using modern front-end technologies",
      imgSrc: "img/vuejs_project.png",
      link: "https://search-product-application.vercel.app",
    },
    
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text text-center">
        <h2 className="heading text-3xl font-bold mb-2">My Projects</h2>
        <span className="text-gray-600">What I will do for you</span>
      </div>

      <div className="filter-buttons text-center my-6">
        <button
          className={`text-lg px-4 py-2 border border-gray-500 rounded-md m-2 transition-colors duration-300 ${
            activeFilter === "all" ? "bg-active text-white" : "bg-white hover:bg-gray-100"
          }`}
          onClick={() => handleFilterClick("all")}
        >
          ALL WORK
        </button>
        <button
          className={`text-lg px-4 py-2 border border-gray-500 rounded-md m-2 transition-colors duration-300 ${
            activeFilter === "reactjs" ? "bg-active text-white" : "bg-white hover:bg-gray-100"
          }`}
          onClick={() => handleFilterClick("reactjs")}
        >
          React js Projects
        </button>
        <button
          className={`text-lg px-4 py-2 border border-gray-500 rounded-md m-2 transition-colors duration-300 ${
            activeFilter === "vue_js" ? "bg-active text-white" : "bg-white hover:bg-gray-100"
          }`}
          onClick={() => handleFilterClick("vue_js")}
        >
          Vue js Projects
        </button>
        <button
          className={`text-lg px-4 py-2 border border-gray-500 rounded-md m-2 transition-colors duration-300 ${
            activeFilter === "javascript" ? "bg-active text-white" : "bg-white hover:bg-gray-100"
          }`}
          onClick={() => handleFilterClick("javascript")}
        >
          Javascript Projects
        </button>
        <button
          className={`text-lg px-4 py-2 border border-gray-500 rounded-md m-2 transition-colors duration-300 ${
            activeFilter === "webdising" ? "bg-active text-white" : "bg-white hover:bg-gray-100"
          }`}
          onClick={() => handleFilterClick("webdising")}
        >
          Web Design Projects
        </button>
      </div>

      <div className="portfolio-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {portfolioItems
          .filter((item) => activeFilter === "all" || item.category === activeFilter)
          .map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
      </div>
    </section>
  );
};

export default Portfolio;