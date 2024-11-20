import React from "react";
import Navbar from "./../components/Navbar";
import "./../styles/Home.css";

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />

      {/* Home Section */}
      <section className="home">
        <div className="content-container">
          <div className="welcome-text">
            <h1>Welcome to My Portfolio</h1>
            <p>Hi, I'm Nikitha Mbokotwana, a passionate software developer!</p>
          </div>
          <div className="profile-section">
            <img
              src={require("./../Assets/N2KITHA.jpg")}
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>
        <div className="scroll-indicator" onClick={scrollToAbout}>
          &#x2193; {/* Downward arrow symbol */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I'm Nikitha Mbokotwana, a passionate software developer skilled in full-stack
          development, specializing in modern technologies like React, Node.js, and more.
        </p>
      </section>
    </div>
  );
};

export default Home;
