import Link from "next/link";

export function ContactComponent() {
  return (
    <>
      <div className="col-md-5">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center mb-3">
            <img src="/profile.jpg" className="rounded-circle mb-3" width="140" alt="profile image"/>
            <h2 className="p-0 m-0">Shuta Ogura</h2>
            <p className="p-0 m-0">Software Engineer</p>
          </div>
          <div className="d-flex justify-content-center">
            <ul className="m-0 p-0 d-flex flex-column align-items-left">
              <li className="contact-list">
                <div className="d-flex align-items-center justify-content-start">
                  <img className="me-2" src="/email.svg" width="25" height="25" alt="email icon"/>
                  <p className="contact-font m-0 p-0">shogura@student.42wolfsburg.de</p>
                </div>
              </li>
              <li className="contact-list">
                <Link href="https://www.linkedin.com/in/shuta-ogura-4b1650261"
                  className="contact-link link-offset-2 link-underline link-underline-opacity-0 no-underline"
                  target="_blank"
                >
                <div className="d-flex align-items-center justify-content-start">
                    <img className="me-2" src="/linkedin.svg" width="25" height="25" alt="linkedin icon"/>
                    <p className="contact-font p-0 m-0">Linkedin</p>
                  </div>
                </Link>
              </li>
              <li className="contact-list">
                <Link
                  href="https://github.com/Shuta-syd"
                  target="_blank"
                  className="contact-link link-offset-2 link-underline link-underline-opacity-0 no-underline"
                >
                  <div className="d-flex align-items-center justify-content-start">
                    <img className="me-2" src="/github.svg" width="25" height="25" alt="github icon"/>
                    <p className="contact-font p-0 m-0">Github</p>
                  </div>
                </Link>
              </li>
              <li className="contact-list">
                <Link
                  href="https://twitter.com/shogura_jp"
                  target="_blank"
                  className="contact-link link-offset-2 link-underline link-underline-opacity-0 no-underline"
                >
                  <div className="d-flex align-items-center justify-content-start">
                    <img className="me-2" src="/twitter.svg" width="25" height="25" alt="github icon"/>
                    <p className="contact-font p-0 m-0">Twitter</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
