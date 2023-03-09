import React, { Fragment } from "react";

export default () => {
  return (
    <Fragment>
      <article id="quiz-info">
        <h1>Welcome to DriveMate</h1>
        <p>
          The ultimate resource for anyone seeking to obtain a drivers or
          leaners license in South Africa. Our user-friendly platform provides
          all informationand tols you need to prepare for your learners license
          test, with practice exams in form of multiple choice quiz for each
          category you are required to know before obtaining a learners licence
          in South Africa.
        </p>
        <p>
          Take advantage of our Comprehensive database of South African :
        </p>
        <ul style={{listStyle:"none"}}>
            <li>Road Rules</li>
            <li>Road Surface Markings</li>
            <li>Warning Signs</li>
            <li>Heavy Vehicle Controls</li>
            <li>Light Vechicle Controls</li>
          </ul>
        <p>
          To help you build the confidence and skills needed to become a safe
          and responsible driver. Whether you're a first-time driver or simply
          looking to upgrade you license, DriveMate has you covered.
        </p>
      </article>
    </Fragment>
  );
};
