import axios from "axios";
import {
  MAKE_APPOINTMENT,
  MAKE_APPOINTMENT_FAIL,
  GET_APPOINTMENTS,
  DELETE_APPOINTMENT,
  APPOINTMENT_LOADING
} from "./types";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "./authActions";

//Make Appointment

export const makeAppoint = ({
  email,
  location,
  address,
  city,
  city_state,
  zip,
  dataAndTime_OP01,
  dataAndTime_OP02,
  dataAndTime_OP03,
  constraints,
  work
}) => (dispatch, getState) => {
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  //Request Body
  const body = JSON.stringify({
    email,
    location,
    address,
    city,
    city_state,
    zip,
    dataAndTime_OP01,
    dataAndTime_OP02,
    dataAndTime_OP03,
    constraints,
    work
  });

  axios
    .post("/api/makeAppoint", body, config, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: MAKE_APPOINTMENT,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          "MAKE_APPOINTMENT_FAIL"
        )
      );
      dispatch({
        type: MAKE_APPOINTMENT_FAIL
      });
    });
};
// Get Appointments
export const getAppointments = () => (dispatch, getState) => {
  dispatch(setAppointmentLoading());
  axios
    .get("/api/makeAppoint/getAppointments", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_APPOINTMENTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const deleteAppointment = id => (dispatch, getState) => {
  axios
    .delete(`/api/makeAppoint/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_APPOINTMENT,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const setAppointmentLoading = () => {
  return {
    type: APPOINTMENT_LOADING
  };
};
