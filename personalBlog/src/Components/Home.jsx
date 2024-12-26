import React from 'react'
import CardNav from './CardNav'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="para">
        <p>
          Traveling is a wonderful way to explore new places, experience diverse
          cultures, and create unforgettable memories.
        </p>
      </div>
      <div className="background">
        <img src="https://static.wixstatic.com/media/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.jpg/v1/fill/w_1899,h_594,al_b,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.jpg" alt="error" />
        <div className="text">
            <span>Travel Blog</span>
            <span>Going Places</span>
            <span>I haven’t been everywhere, but it’s on my list</span>
        </div>
      </div>

      <div className="foreWord">
      <p>I love exploring new destinations, savoring diverse cuisines, and immersing myself in meaningful work that fuels my passion. For me, travel and food are adventures, while work is the journey to growth.</p>
      </div>
      <div className="navCards">
        <CardNav link="https://static.wixstatic.com/media/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.jpg/v1/fill/w_393,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.jpg" title="Travel" location="travel"/>
        <CardNav link="https://static.wixstatic.com/media/5bfb6f_ea37f67cad544b348df9f3d0ff40f282.jpg/v1/fill/w_393,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5bfb6f_ea37f67cad544b348df9f3d0ff40f282.jpg" title="Eat" location="eat"/>
        <CardNav link="https://img.devrant.com/devrant/rant/r_1675995_ZscKE.jpg" title="Work" location="work"/>
      </div>

      
      
    </div>
  )
}

export default Home
