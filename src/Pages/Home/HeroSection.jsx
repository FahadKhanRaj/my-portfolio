export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">My Portfolio</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Fahad Khan Raj</span>{" "}
            <br />
            {/* Student, MERN Stack Developer. */}
          </h1>
          <p className="hero--section-description">
          <h4>Student Tutor (ST) of BRAC University, 
            <br /> MERN Stack Developer.
          </h4>
            {/* Currently an Undergraduate student. */}
            {/* <br /> Dolorum, quas. Amet soluta assumenda cum? */}
          </p>
        </div>
        {/* <button className="btn btn-primary"></button> */}
      </div>
      <div className="hero--section--img">
  <img src="./img/profile-pic (4).png" alt="Hero Section" style={{ width: "50%", height: "50%" }} />
</div>
    </section>
  );
}
