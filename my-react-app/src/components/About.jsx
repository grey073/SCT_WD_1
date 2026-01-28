

function About() {
  return (
    <section id="about" className="section">
      <h2>Key Features</h2>

      <div className="cards">
        <div className="card">
          <h3>Track Watchlist</h3>
          <p>
            Log and manage your watched movies easily.
          </p>
        </div>

        <div className="card">
          <h3>Rate the movies</h3>
          <p>
            Provide ratings and reviews for better recommendations.
          </p>
        </div>

        <div className="card">
          <h3>Personalised Recommendations</h3>
          <p>
            Get movie suggestions based on your viewing history and ratings.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
