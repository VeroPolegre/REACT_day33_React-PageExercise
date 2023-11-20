import React from "react";
import Header from "../Header/Header";
import "./Home.css";
const Home = () => {
  const technologies = [
    "React",
    "NodeJS",
    "Express",
    "MongoDB",
    "MySQL",
    "JavaScript",
    "HTML",
    "CSS",
  ];
  return (
    <div className="Home">
      <Header />
      <div className="home-container">
        <h2 className="home-header">About Me</h2>
        <div className="home-content">
          <p>
            I'm Veronica Polegre, a violinist turned Full Stack web developer.
            Having loved learning new languages—both spoken and musical—for over
            15 years, I have now immersed myself in the exciting world of web
            programming.
          </p>
          <p>
            My passion lies in embracing new challenges, fostering innovation,
            and driving myself towards continuous improvement. My fundamental
            objectives include improving my technical expertise in various
            programming languages, databases, infrastructure, and automation
            tools. I am dedicated to crafting robust and reliable solutions that
            consistently meet the needs of clients and users.
          </p>
          <p>
            Committed to both technical and personal growth, I look forward to
            thriving in creating value for both teams and clients. Let's connect
            and explore how we can work together to achieve our goals!
          </p>
          <p>
            ⭐️ You can check my GitHub{" "}
            <a
              className="home-link"
              href="https://github.com/VeroPolegre"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            , where my personal projects reside.
          </p>
          <ul className="home-list">
            {technologies.map((tech, index) => (
              <li className="home-list-item" key={index}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
