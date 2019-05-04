import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }]; // spread operator
    case types.UPDATE_COURSE_SUCCESS:
      return state.map(
        course => (course.id === action.course.id ? action.course : course) // map, filer and reduce returns new array, I can also use object assign but that's old now.
      );
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
