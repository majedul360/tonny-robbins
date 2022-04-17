import "./TonysBio.css";

const Tonysbio = () => {
  return (
    <div className="bio">
      <h2 className="section-title" style={{ marginBottom: 0 }}>
        ON A MISSION TO CHANGE LIVES
      </h2>
      <p className="experience-text">
        TONY ROBBINS HAS SPENT OVER 40 YEARS CREATING BREAKTHROUGHS AND
        TRANSFORMING LIVES
      </p>
      <div className="bio-container">
        <iframe
          src="https://www.youtube.com/embed/hfNOXhDpXOk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="content">
          <h3>FIND THE EVENT THAT’S RIGHT FOR YOU</h3>
          <p className="description">
            Know you want MORE in life, but don’t know where to start? Call us
            at (858) 290-4113 or click the button to schedule a call with one of
            Tony’s Personal Results Specialists who can guide you to YOUR ideal
            Tony Robbins event.
          </p>
          <span className="btn">see tony's full bio</span>
        </div>
      </div>
    </div>
  );
};

export default Tonysbio;
