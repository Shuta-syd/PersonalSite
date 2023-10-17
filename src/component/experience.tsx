export function ExperienceComponent() {
  return (
    <section id="work experience" className="text-left" >
    <h2>Work Experience</h2>
    <div className="timeline">
      <ul>
        <li>
          <span className="mb-2">December 2022 (1month)</span>
          <div className="content">
            <a
            href="https://www.toppan.com/en/"
            target="_blank"
            className="link-offset-2 link-underline link-underline-opacity-0"
            >
              <div className="d-flex align-items-center mb-2 gap_class">
                <img className="icon-img" src="/TOPPAN.svg" width="35"/>
                <h3 className="m-0 p-0">TOPPAN inc.</h3>
              </div>
            </a>
            <span>Frontend Engineer</span>
            <p>
              I was responsible for the front-end development of the service, which calculates CO2 emissions in the supply chain. The technology stack included Typescript, React, Github, Docker and nodejs.
              <br /><br />
              Skills: HTML/CSS, Typescript, Reactjs
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  )
}
