import React from 'react';

function Home() {
  return ( 
    <section className="section hero" data-section="home">
      <p className="hero__label">Welcome to my universe</p>

      <h2 className="hero__heading">
        I craft digital <br />
        <span className="hero__gradient">experiences</span> that <br />
        inspire.
      </h2>

      <p className="hero__desc">
        A passionate designer and developer specializing in creating immersive digital products with a focus on aesthetics, usability and performance.
      </p>
    </section> 
  );
}

export default Home;