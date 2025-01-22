import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className='About-Section'>
      <h1>About Me</h1>
      <div className="about-desc">
      <div className='AboutMe'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequatur harum soluta quod incidunt facere et nobis fugit ratione ut rem error quo optio corporis iste sapiente magnam, minima distinctio tempora veritatis excepturi, odit molestias impedit quam. Dolores, dicta provident. Soluta necessitatibus nostrum enim.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laboriosam labore laborum praesentium maiores atque expedita aut deserunt veniam aspernatur possimus, dolorem at quaerat asperiores aperiam itaque cupiditate sunt quibusdam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea repellat culpa ut quas id numquam dolores aperiam praesentium molestiae ratione recusandae dolore, similique eum, ad deleniti amet tempore soluta dignissimos corrupti placeat vitae? Quae officiis incidunt corporis consequuntur at, nam consequatur tempore doloribus illum!</p>
      </div>
      <div className='photo'>
        <img src="https://images.thedirect.com/media/photos/cox-da.jpg" alt="" />
      </div>
      </div>
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
    </section>
  )
}

export default About
