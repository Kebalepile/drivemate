import React, { useContext, useEffect, useState } from "react";
import DMContext from "../context/DriveMate/DMContext";
import ErrorAlert from "../utils/ErrorAlert";
import GoodAlert from "../utils/GoodAlert";
export default () => {
  const dataNotAvailable = "...Loading data",
    { CategoryTypes, Category, CategoryQuestion } = useContext(DMContext),
    [Quiz, setQuiz] = useState(null),
    [selectedCheckbox, setSelectedCheckBox] = useState(null),
    [wrongAnswer, setWrongAnswer] = useState(false),
    [quizDone, setQuizDone] = useState(false);
  useEffect(() => {
    if (!Quiz) {
      const [key, type] = CategoryTypes();
      const quizContinue = JSON.parse(localStorage.getItem(key));
      if (quizContinue[type] !== null) {
        const { category, question_id } = quizContinue[type];
        Category(category);
        nextQuestion(category, question_id);
      } else {
        Category(type);
        nextQuestion(type);
      }
    }
  }, [Quiz]);

  const OptGroup = (optionTypes) => {
    const options = optionTypes.map((type, index) => {
      return (
        <option key={index} value={type}>
          {type.replace(/_/g, " ")}
        </option>
      );
    });

    return options;
  };
  const nextQuestion = (type, question_id = 1) => {
    CategoryQuestion(type, question_id)
      .then((result) => {
        setQuiz(result);

        let [key] = CategoryTypes(),
          value = JSON.parse(localStorage.getItem(key));
        localStorage.setItem(
          key,
          JSON.stringify({
            ...value,
            [result.category]: { category: result.category, question_id },
          })
        );
      })
      .catch((error) => console.error(error));
  };
  const handleChange = (e) => {
    Category(e.target.value);
    let [key] = CategoryTypes(),
      quizContinue = JSON.parse(localStorage.getItem(key));
    if (quizContinue[e.target.value] !== null) {
      const { category, question_id } = quizContinue[e.target.value];

      nextQuestion(category, question_id);
    } else {
      nextQuestion(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCheckbox) {
      evaluateChoice(selectedCheckbox);
      setSelectedCheckBox(null);
    }
  };
  const handleCheckBoxChange = (e) => {
    setSelectedCheckBox(e.target.value);
  };
  const evaluateChoice = (answer) => {
    if (Quiz.correct.trim().toLowerCase() === answer.trim().toLowerCase()) {
      if (Quiz.id + 1 <= Quiz.count) {
        nextQuestion(Quiz.category, Quiz.id + 1);
      } else {
        setQuizDone(!quizDone);
      }
    } else {
      setWrongAnswer(true);
    }
  };

  const loadMultipleChoice = (choices) => {
    return choices.map((choice, index) => {
      return (
        <label htmlFor={index} key={index}>
          <input
            type="checkbox"
            name="answer"
            id={index}
            value={choice}
            checked={selectedCheckbox == choice}
            onChange={handleCheckBoxChange}
          />
          {choice}
        </label>
      );
    });
  };
  const loadImage = (url) => {
   
    /**
     * use: window.location.origin + url
     * instead of "./src" + url
     * in production code.
     */
    if (url == "not available") {
      return;
    } else if (Array.isArray(url)) {
      return url.map((url, id) => {
        return (
          <section className="image" key={id}>
            <img src={"./src" + url} alt="Quiz test image" />
          </section>
        );
      });
    } else {
      return (
        <section className="image">
          <img src={"./src" + url} alt="Quiz test image" />
        </section>
      );
    }
  };
  const errorAlertOnClick = (e) => {
    setWrongAnswer(!wrongAnswer);
  };
  const goodAlertOnClick = (e) => {
    setQuizDone(!quizDone);
  };
  return (
    <article className="component">
      {quizDone && (
        <GoodAlert
          message={"🎉 Congratulation You've Finished 🎉"}
          handleClick={goodAlertOnClick}
        />
      )}
      {wrongAnswer && (
        <ErrorAlert
          message={"Incorrect Answer !"}
          handleClick={errorAlertOnClick}
        />
      )}
      <select
        onChange={handleChange}
        id="category-options"
        role="Category selector"
        description="Provides End-User with a range of quiz categoires to select from for the test"
      >
        <optgroup>
          {OptGroup(
            (() => {
              const [, ...optionTypes] = CategoryTypes();
              return optionTypes;
            })()
          )}
        </optgroup>
      </select>

      <form id="quiz-question" onSubmit={handleSubmit}>
        <h3 className="question">{Quiz?.question || dataNotAvailable}</h3>
        <h4>Select Correct Answer below :</h4>

        {loadImage(Quiz?.imgSrc)}

        <section id="choices">
          {loadMultipleChoice(Quiz?.answers || [dataNotAvailable])}
        </section>
        <button type="submit" id="submit-form">
          Submit
        </button>
      </form>

      <div id="count">
        <span>
          {Quiz?.id || dataNotAvailable} of {Quiz?.count || dataNotAvailable}
        </span>
      </div>
    </article>
  );
};
