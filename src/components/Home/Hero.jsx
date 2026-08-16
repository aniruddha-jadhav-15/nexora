function Hero() {
  return (
    <section>
      <div className="left-content">
        <span className="hero-label"> TRENDING NOW </span>

        <h1 className="hero-title"> Discover Products You'll Love </h1>

        <p className="hero-description">
          Discover trending products curated for your everyday lifestyle.
        </p>

        <div className="hero-actions">
          <button className="hero-btn-primery">Shop Now</button>
          <button className="hero-btn-secondery">Explore</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="" alt="Featured Nexora products" />
      </div>
    </section>
  );
}

export default Hero;
