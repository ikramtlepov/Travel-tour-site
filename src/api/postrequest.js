import axios from "axios";

export const registration = (url, value, { resetForm }) => {
  return async () => {
    try {
      const res = await axios.post(`${url}/register`, value, {
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(res);
      resetForm();
      toast.success("Registration successful!");
    } catch (err) {
      resetForm();
      console.log(err);
      toast.error("Registration err!");
    }
  };
};

export const logIn = (url, value, { resetForm }) => {
  return async () => {
    try {
      const res = await axios.post(`${url}/login`, value, {
        headers: {
          "Content-type": "application/json",
        },
      });
      resetForm();
      console.log(res.data);
      toast.success("Logged in successfully!");
      localStorage.setItem("travel-token", res.data.token);
    } catch (err) {
      toast.error("Logged in err!");
      resetForm();
      console.log(err);
    }
  };
};
