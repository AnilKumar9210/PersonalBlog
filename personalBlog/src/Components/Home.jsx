import React from "react";
import CardNav from "./CardNav";
import "./Home.css";
import Template from "../DataFiles/Template";

const Home = () => {
  const Footer = () => {
    return (
      <footer>
        <div className="about">
          <div className="box">
            <img
              src="https://www.hollywoodreporter.com/wp-content/uploads/2022/02/Daredevil-Charlie-Cox-Marvel-Everett-TCDDARE_EC009-H-2022.jpg?w=1296&h=730&crop=1"
              alt="Error"
            />
            <span className="heading">Anil Kumar</span>
          </div>
          <div className="info">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              natus, dolores facere cum id ea. Eius quibusdam voluptatum
              sapiente ipsa necessitatibus praesentium aliquid provident unde
              doloribus, vel similique odit impedit molestiae facere?
            </p>
            <a to="/profile">Read more</a>
          </div>
        </div>
        <div className="contact">
          <span className="heading">Join my Mailing list</span>
          <label htmlFor="email">Email *</label>
          <input type="email" name="email" />
          <button className="sub">Subscribe</button>
        </div>
      </footer>
    );
  };
  return (
    <div className="home">
      <div className="para">
        <p>
          Traveling is a wonderful way to explore new places, experience diverse
          cultures, and create unforgettable memories.
        </p>
      </div>
      <div className="background">
        <img
          src="https://static.wixstatic.com/media/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.jpg/v1/fill/w_1899,h_594,al_b,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.jpg"
          alt="error"
        />
        <div className="text">
          <span>Travel Blog</span>
          <span>Going Places</span>
          <span>I haven’t been everywhere, but it’s on my list</span>
        </div>
      </div>

      <div className="foreWord">
        <p>
          I love exploring new destinations, savoring diverse cuisines, and
          immersing myself in meaningful work that fuels my passion. For me,
          travel and food are adventures, while work is the journey to growth.
        </p>
      </div>
      <div className="navCards">
        <CardNav
          link="https://static.wixstatic.com/media/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.jpg/v1/fill/w_393,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.jpg"
          title="Travel"
          location="travel"
        />
        <CardNav
          link="https://static.wixstatic.com/media/5bfb6f_ea37f67cad544b348df9f3d0ff40f282.jpg/v1/fill/w_393,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5bfb6f_ea37f67cad544b348df9f3d0ff40f282.jpg"
          title="Eat"
          location="eat"
        />
        <CardNav
          link="https://img.devrant.com/devrant/rant/r_1675995_ZscKE.jpg"
          title="Work"
          location="work"
        />
      </div>
      <Template/>
      <Footer />
    </div>
  );
};

export default Home;
