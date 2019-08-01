import {
  MAKE_APPOINTMENT,
  MAKE_APPOINTMENT_FAIL,
  GET_APPOINTMENTS,
  DELETE_APPOINTMENT,
  APPOINTMENT_LOADING
} from "../actions/types";

const initialState = {
  isMakeApponited: false,
  appointments: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MAKE_APPOINTMENT:
      return {
        ...state,
        ...action.payload,
        isMakeApponited: true
      };
    case MAKE_APPOINTMENT_FAIL:
      return {
        ...state
      };
    case GET_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload,
        loading: false
      };
    case DELETE_APPOINTMENT:
      return {
        ...state,
        appointments: state.appointments.filter(
          appointments => appointments._id !== action.payload
        )
      };
    case APPOINTMENT_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
