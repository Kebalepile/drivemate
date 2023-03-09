import {
  CHOOSE_OPTIONS,
  ROAD_RULES,
  ROAD_SURFACE_MARKINGS,
  WARNING_SIGNS,
  HEAVY_VEHICLE_CONTROLS,
  LIGHT_VEHICLE_CONTROLS,
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case CHOOSE_OPTIONS:
      return amendState(state, action);
    case ROAD_RULES:
      return amendState(state, action);
    case ROAD_SURFACE_MARKINGS:
      return amendState(state, action);
    case WARNING_SIGNS:
      return amendState(state, action);
    case HEAVY_VEHICLE_CONTROLS:
      return amendState(state, action);
    case LIGHT_VEHICLE_CONTROLS:
      return amendState(state, action);

    default:
      return state;
  }
};

function amendState(state, { type, payload }) {
  return { ...state, [type]: { ...state[type], ...payload } };
}
