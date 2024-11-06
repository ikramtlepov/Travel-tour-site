import axios from "axios";

export const registration = (url, value, { resetForm }) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${url}/register`, value, {
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(res);
      resetForm();
      console.log(res.data);
    } catch (err) {
      resetForm();
      console.log(err);
    }
  };
};

export const logIn = (url, value, { resetForm }) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${url}/login`, value, {
        headers: {
          "Content-type": "application/json",
        },
      });
      resetForm();
      console.log(res.data);
      localStorage.setItem("travel-token", res.data.token);
    } catch (err) {
      resetForm();
      console.log(err);
    }
  };
};