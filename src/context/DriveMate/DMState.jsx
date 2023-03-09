import React, {  useReducer } from "react";
import DMContext from "./DMContext";
import DMReducer from "./DMReducer";
import {
  CHOOSE_OPTIONS,
  ROAD_RULES,
  ROAD_SURFACE_MARKINGS,
  WARNING_SIGNS,
  HEAVY_VEHICLE_CONTROLS,
  LIGHT_VEHICLE_CONTROLS,
} from "../Types";
import {
  initDatabase,
  getCategory,
  totalQuestions,
} from "../../database/indexedDB";

function DMProvider({ children }) {
  const initialState = CategoryTypes().reduce((acc, cur) => {
    acc[cur] = null;
    return acc;
  }, {});

  const [state, dispatch] = useReducer(DMReducer, initialState);
  (() => {
    initDatabase();
    const [key, ...types] = CategoryTypes();
    localStorage.setItem(key, JSON.stringify({}));
    types.forEach((type) => {
      Category(type);
      /**
       * @description  line 34 to 34, Is initiating localStorage to be later used as "contiue from state"
       */
      let value = JSON.parse(localStorage.getItem(key));
      localStorage.setItem(key, JSON.stringify({ ...value, [type]: null }));
    });
  })();
  /**
   * @description
   * sets up each Category with it's respective data retrived from indexedDB.
   */

  async function CategoryQuestion(type, question_id) {
    try {
      const result = await getCategory(type, question_id);

      return { ...result, count: state[type].count };
    } catch (error) {
      console.error(error);
    }
  }

  /**
   *
   * @param {string} type
   * @description
   * retrives count of quiz questions of selected Category from state.
   * @returns Category quiz data Object || error message.
   */
  async function Category(type) {
    try {
      if (state[type] == null) {
        let count = await totalQuestions(type);
        dispatch({ type, payload: { leftAt: 1, count } });
      }
    } catch (error) {
      console.error(error);
    }
  }
  function CategoryTypes() {
    return [
      CHOOSE_OPTIONS,
      ROAD_RULES,
      ROAD_SURFACE_MARKINGS,
      WARNING_SIGNS,
      HEAVY_VEHICLE_CONTROLS,
      LIGHT_VEHICLE_CONTROLS,
    ];
  }

  return (
    <DMContext.Provider
      value={{
        Category,
        CategoryQuestion,
        CategoryTypes,
      }}
    >
      {children}
    </DMContext.Provider>
  );
}

export default DMProvider;
