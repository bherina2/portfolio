import React from 'react';

function Home() {
  return ( 
    <section className="section hero" data-section="home">
      <p className="hero__label">Welcome to my digital space</p>

      <h2 className="hero__heading">
        I turn ideas into <br />
        <span className="hero__gradient">interactive web</span>   <br />
        experiences.
      </h2>

      <p className="hero__desc">
       A passionate frontend developer focused on crafting high-performance applications with clean UI, intuitive UX, and modern technologies.
      </p>
    </section> 
  );
}

export default Home;