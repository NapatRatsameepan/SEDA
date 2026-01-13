import React from 'react'
import data from '../data/posts.json'
import '../styles/Hero.css'

import Calendar from '../assets/Calendar.svg'
import View from '../assets/view.svg'

function Hero() {
  const heroPost = data.find(post => post.isHero);

  return (
    <section className="hero-section">
      <div className="hero-post">
        <img src={heroPost.image} alt={heroPost.title} className="hero-image" />

        <div className="hero-content">
          <h4 className="hero-title">
            {heroPost.title}
          </h4>
          <div className="hero-meta">
            <div className="hero-item">
              <img src={Calendar} alt="Calendar" />
              <span>{heroPost.date}</span>
            </div>
            <div className="hero-item">
              <img src={View} alt="View" />
              <span>{heroPost.view}</span>
              <span>Views</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;