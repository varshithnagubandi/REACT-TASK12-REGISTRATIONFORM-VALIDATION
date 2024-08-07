import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const inputHandle = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    if (data.username.length <= 5) {
      alert("USERNAME MUST GREATER THAN 5 CHARACTERS");
      console.log("USERNAME MUST GREATER THAN 5 CHARACTERS");
    } else if (data.password !== data.confirmpassword) {
      alert("PASSWORD AND CONFIRM-PASSWORD NOT MATCHING");
      console.log("PASSWORD AND CONFIRM-PASSWORD NOT MATCHING");
    } else {
      alert("THANK YOU FOR REGISTRATION");
      console.log(data);
    }
  };
  return (
    <div className="mainbox">
      <center>
        <h1 className="mainheading">REGISTRATION FORM</h1>
        <form onSubmit={submitHandle}>
          <label>USERNAME :</label>
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={inputHandle}
          />
          <br />
          <label>E-MAIL :</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={inputHandle}
          />
          <br />
          <label>PASSWORD :</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={inputHandle}
          />
          <br />
          <label>CONFIRM PASSWORD :</label>
          <input
            type="password"
            name="confirmpassword"
            value={data.confirmpassword}
            onChange={inputHandle}
          />
          <br />
          <button type="submit">SUBMIT</button>
        </form>
        <h6 className="subheading">INSPECT TO SEE SUBMITTED DATA</h6>
      </center>
    </div>
  );
}

export default App;
