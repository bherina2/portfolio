
import React, { useState } from 'react';

function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Nebula Dashboard",
      category: "web",
      image: "/public/images/p1.jpg",
      type: "Web Design"
    },
    {
      id: 2,
      title: "Pulse Mobile App",
      category: "app",
      image: "/public/images/p2.jpg",
      type: "App Design"
    },
    {
      id: 3,
      title: "Onyx Brand Identity",
      category: "brand",
      image: "/public/images/p3.jpg",
      type: "Branding"
    },
    {
      id: 4,
      title: "Aurora E-Commerce",
      category: "web",
      image: "/public/images/p4.jpg",
      type: "Web Design"
    },
    {
      id: 5,
      title: "Zenith Fitness App",
      category: "app",
      image: "/public/images/p5.jpg",
      type: "App Design"
    },
    {
      id: 6,
      title: "Vertex Rebrand",
      category: "brand",
      image: "/public/images/p6.jpg",
      type: "Branding"
    }
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="section" data-section="portfolio">
      <h2 className="section__heading">
        <span className="section__icon">⊞</span> Portfolio
      </h2>

      {/* Filters */}
      <div className="portfolio-filters">
        <button
          className={`portfolio-filter ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>

        <button
          className={`portfolio-filter ${filter === 'web' ? 'active' : ''}`}
          onClick={() => setFilter('web')}
        >
          Web Design
        </button>

        <button
          className={`portfolio-filter ${filter === 'app' ? 'active' : ''}`}
          onClick={() => setFilter('app')}
        >
          App Design
        </button>

        <button
          className={`portfolio-filter ${filter === 'brand' ? 'active' : ''}`}
          onClick={() => setFilter('brand')}
        >
          Branding
        </button>
      </div>

      {/* Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map((item) => (
          <div key={item.id} className="portfolio-card glass-card">
            <div className="portfolio-card__img-wrap">
              <img
                src={item.image}
                alt={item.title}
                className="portfolio-card__img"
              />
              <div className="portfolio-card__overlay">
                    <span className="portfolio-card__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </span>
                </div>
            </div>

            <div className="portfolio-card__body">
              <p className="portfolio-card__cat">{item.type}</p>
              <div className="portfolio-card__title">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;