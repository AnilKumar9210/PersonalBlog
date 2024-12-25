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
      <div className="navCards">
        <CardNav link="https://static.wixstatic.com/media/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.jpg/v1/fill/w_393,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.jpg" title="Travel" location="travel"/>
        <CardNav link="https://static.wixstatic.com/media/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.jpg/v1/fill/w_393,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.jpg" title="Eat" location="eat"/>
        <CardNav link="https://static.wixstatic.com/media/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.jpg/v1/fill/w_393,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5bfb6f_9f2519d5fc2d41f990a10dd92eb8658d.jpg" title="Travel" location="travel"/>
      </div>
      
    </div>
  )
}

export default Home
