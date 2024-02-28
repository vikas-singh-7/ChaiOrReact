import { useState } from "react";
import { useContext } from "react";
import MyContext from "../Context/Context";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Form() {
  const { value, setvalue } = useContext(MyContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log("form submit successfulyy");
      setvalue((prev) => [...prev, { email, password }]);
    } else {
      console.log("please login first");
    }
  };
  return (
    <>
      <form action="" onSubmit={submit}>
        <input
          type="text"
          name=""
          id=""
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id=""
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button type="submit">click me </button>
      </form>
    </>
  );
}
