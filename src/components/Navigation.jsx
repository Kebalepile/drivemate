import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiHomeSmileLine } from "react-icons/ri";
import { MdOutlineQuiz } from "react-icons/md";

function installBanner() {
  const key = "installBanner";
  if (window.matchMedia("(display-mode: standalone)").matches) {
    localStorage.setItem(key, JSON.stringify(false));
  } else {
    localStorage.setItem(key, JSON.stringify(true));
  }
  let bannerState = JSON.parse(localStorage.getItem(key));
  return {
    currentState() {
      return bannerState;
    },
    changeState() {
      localStorage.setItem(key, JSON.stringify(!bannerState));
      bannerState = JSON.parse(localStorage.getItem(key));
    },
  };
}

const bannerInfo = installBanner();

export default () => {
  const [toggle, setToggle] = useState({
    banner: bannerInfo.currentState(),
    quizPage: true,
    aboutPage: true,
  });
  const [deferredPrompt, setPrompt] = useState(null);
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setPrompt(event);
    });
    window.addEventListener("appinstalled", (event) => {
      setToggle({ ...toggle, banner: false });
    });
  }, [toggle]);
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
          ...toggle,
          homePage: false,
          quizPage: true,
          aboutPage: true,
        });
        break;
      case "/quiz":
        setToggle({
          ...toggle,
          quizPage: false,
          homePage: true,
          aboutPage: true,
        });
        break;
      case "/about":
        setToggle({
          ...toggle,
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
    if (deferredPrompt) {
      deferredPrompt.prompt();
    }
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
