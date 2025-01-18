import "./portfolio.css";

import IMG1 from "../../assets/weather-app.png";
import IMG2 from "../../assets/moviesflix.png";
import IMG3 from "../../assets/typing.png";
import IMG4 from "../../assets/quiz.png";
import IMG5 from "../../assets/iPod.png";
import IMG6 from "../../assets/Nomzo.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Weather Tracker",
      img: IMG1,
      description:
        "A weather tracker application to check current weather conditions and forecasts for any city around the world.",
      technologies: "Html | CSS | Javascript",
      link: "https://weather-tracker-application.netlify.app/",
      github: "https://github.com/ajit3643/Weather-Tracker-Application",
    },
    {
      id: 2,
      title: "The Moviesflix",
      img: IMG2,
      description:
        "Movie search website supporting 150+ titles, featuring a 2s average query response time throug optimized algorithms",
      technologies: "HTML | CSS | JavaScript",
      link: "https://the-moviesflix.netlify.app/",
      github: "https://github.com/ajit3643/Movieflex",
    },
    {
      id: 3,
      title: "Typing Speed Test",
      img: IMG3,
      description:
        "Typing Speed Test application capable of processing 1,000+ keystrokes per minute with 99.9% accuracy.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://typing-speed-test-rosy.vercel.app/",
      github: "https://github.com/ajit3643/Typing-Speed-Test",
    },
    {
      id: 4,
      title: "Quiz Web Application",
      img: IMG4,
      description:
        "This application is ideal for educational purposes, corporate training, or casual knowledge-sharing.",
      technologies: "Html | CSS | JavaScript",
      link: "https://github.com/ajit3643/Quiz-Application",
      github: "https://github.com/ajit3643/Quiz-Application",
    },
    {
      id: 5,
      title: "iPod Shuffle",
      img: IMG5,
      description:
        "A modern recreation of the classic iPod, featuring interactive menus, a functional music player, and customizable themes and wallpapers.",
      technologies: "React, Class Component",
      link: "https://ipod-shuffle.netlify.app/",
      github: "https://github.com/ajit3643/iPod",
    },
    {
      id: 6,
      title: "Nomzo - An ongoing project",
      img: IMG6,
      description:
        "This app bridges the gap between customers and food providers, ensuring fast, reliable, and delightful dining experiences, whether at home or on the go.",
      technologies: "React | Tailwind CSS",
      link: "https://nomzo.netlify.app/",
      github: "https://github.com/ajit3643/Nomzo",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
