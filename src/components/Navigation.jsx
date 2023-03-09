import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiHomeSmileLine } from "react-icons/ri";
import { MdOutlineQuiz } from "react-icons/md";


export default () => {
  const [toggle, setToggle] = useState({
    banner: true,
    quizPage: true,
    aboutPage: true,
  });
const [deferredPrompt, setPrompt] = useState(null)
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", event => {
      event.preventDefault();
      setPrompt(event);
    })
    if (window.matchMedia("(dsplay-mode: standalone)").matches) {
      setToggle({ ...toggle, banner: false });
    }
  });
  /**
   *
   * @param {object} e
   * @description Button Event handler.
   */
  const BtnClicked = (e) => {
    DynamicNavigation(location.pathname);
  };
  /**
   * @description determines which navigation elements to display
   * based on location.pathname
   */
  const DynamicNavigation = (pathname) => {
    switch (pathname) {
      case "/":
        setToggle({
          banner: true,
          homePage: false,
          quizPage: true,
          aboutPage: true,
        });
        break;
      case "/quiz":
        setToggle({
          banner: false,
          quizPage: false,
          homePage: true,
          aboutPage: true,
        });
        break;
      case "/about":
        setToggle({
          banner: false,
          quizPage: true,
            homePage: true,
          aboutPage: false,
        });
        break;
      default:
        break;
    }
  };
  const handleInstall = (e) => {
if(deferredPrompt){
  deferredPrompt.prompt();
}
    setToggle({ ...toggle, banner: false });
  };
  return (
    <Fragment>
      {
        <nav role="navigation">
          {toggle.banner && (
            <section
              id="install-banner"
              role="banner"
              aria-label="PWA install banner"
              aria-roledescription="A call to action for end-user to intsall the Web App."
            >
              <div id="install-msg">
                Install web app quick and easy Install 👍
              </div>
              <button id="install" name="install" onClick={handleInstall}>
                install
              </button>
            </section>
          )}
          {toggle.homePage && (
            <button onClick={BtnClicked} title="Home" name="home">
              <Link to="/">
                <RiHomeSmileLine className="react-icon" />
              </Link>
            </button>
          )}
          {toggle.quizPage && (
            <button onClick={BtnClicked} title="Quiz" name="quiz">
              <Link to="/quiz">
                <MdOutlineQuiz className="react-icon" />
              </Link>
            </button>
          )}
          {toggle.aboutPage && (
            <button onClick={BtnClicked} title="About" name="about">
              <Link to="/about">About</Link>
            </button>
          )}
        </nav>
      }
    </Fragment>
  );
};
