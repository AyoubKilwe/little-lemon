import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-container">
        <div className="about-content">
          <h2 id="about-title" className="about-title">Little Lemon</h2>
          <h3 className="about-subtitle">Chicago</h3>
          <p className="about-text">
            Little Lemon was founded by two Italian brothers, Mario and Adrian, who moved to the
            United States to pursue their shared passion for Mediterranean gastronomy.
          </p>
          <p className="about-text">
            Mario brings time-honored recipes passed down through generations in southern Italy,
            while Adrian crafts innovative culinary techniques to introduce contemporary flavor
            profiles. Together, they have created a warm, community-centered culinary oasis right
            in the heart of Chicago.
          </p>
        </div>
        <div className="about-images">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
            alt="Little Lemon chefs Mario and Adrian preparing Mediterranean dishes in the kitchen"
            className="about-image image-top"
          />
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80"
            alt="Little Lemon chefs presenting a gourmet dish"
            className="about-image image-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
