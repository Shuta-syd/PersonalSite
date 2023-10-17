import Link from "next/link";

export function EducationComponent() {
  return (
    <section id="education" className="text-left">
      <h2>Education</h2>
      <div className="timeline">
        <ul>
          <li>
            <span className="mb-2">July 2023 - Current </span>
            <div className="content">
              <Link
              href="https://seame.space/"
              target="_blank"
              className="link-offset-2 link-underline link-underline-opacity-0 no-underline"
              >
                <div className="d-flex align-items-center mb-2 gap_class">
                  <img className="icon-img" src="/SEAME.svg" width="35"/>
                  <h3 className="m-0 p-0">SEA:ME / 42Wolfsburg</h3>
                </div>
              </Link>
              <p>
                SEA:ME is a cutting-edge advanced study program.It trains specialists in Code-driven Mobility, Autonomous Mobility, and the future Mobility Ecosystems. With expert-led content and practical guidance.
                <br /><br />
                Skills:
                C++, Qt, Python, AI/ML
              </p>
            </div>
          </li>
          <li>
            <span className="mb-2">April 2022 - June 2023 </span>
            <div className="content">
              <Link
              href="https://www.42network.org/campuses/42-tokyo/"
              className="link-offset-2 link-underline link-underline-opacity-0 no-underline"
              >
                <div className="d-flex align-items-center mb-2 gap_class">
                  <img className="icon-img" src="/42Tokyo.svg" width="35"/>
                  <h3 className="m-0 p-0">42Tokyo</h3>
                </div>
              </Link>
              <p>
                42 is a future-proof computer science training to educate the next generation of software engineers.
                I learned C, C++, Typescript, python, and Go. Projects include bash reimplementation, Internet Relay Chat Server, Chat Pong game app, libc reimplementation, 3D ray tracing.
                <br /><br />
                Skills:
                C, C++, Docker, Typescript, Reactjs, Nestjs
              </p>
            </div>
          </li>
          <li>
            <span className="mb-2">April 2020 - Current </span>
            <div className="content">
              <Link
              href="https://english.rikkyo.ac.jp/"
              target="_blank"
              className="link-offset-2 link-underline link-underline-opacity-0 no-underline"
              >
                <div className="d-flex align-items-center mb-2 gap_class">
                  <img className="icon-img" src="/Rikkyo.svg" width="35"/>
                  <h3 className="m-0 p-0">Rikkyo University</h3>
                </div>
              </Link>
              <p>
                I am majoring in economics with minors in agricultural economics and data science. I learned Keynesian economics, Marxian economics, public economics, and micro economics.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
