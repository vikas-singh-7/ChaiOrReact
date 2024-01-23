import React, { useEffect, useRef, useState } from "react";

const Card = () => {
  const [length, setLength] = useState(8);
  const [Num, setNum] = useState(false);
  const [char, setchar] = useState(false);
  const [input, setinput] = useState("");

  const password = () => {
    let str = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    let pass = "";

    if (Num) str = str + "1234567890";
    if (char) str = str + "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }

    setinput(pass);
  };

  useEffect(() => {
    password();
  }, [char, length, Num]);

  const refpass = useRef();

  const copyPasePassword =() => {
    refpass.current.select();
    window.navigator.clipboard.writeText(input);
  };

  return (
  <>
 

      <div
        style={{
          height: "250px",
          width: "700px",
          border: "2px solid",
          borderRadius: "15px",
          padding: "40px",
          position: "relative",
          top: "25%",
          left: "27%",
          backgroundColor: "#a7adc6",
        }}
      >
        <input
          type="text"
          className="bg-green-300 p-4 "
          value={input}
          onChange={() => { }}
          ref={refpass}
          style={{
            width: "500px",
            borderLeft: "2px solid transparent",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            height: "70px",
          }}
        />
        <button
          style={{
            height: "70px",
            borderLeft: "2px solid transparent",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
          onClick={copyPasePassword}
          className=" bg-yellow-300 w-20 "
        >
          copy
        </button>
        <div className="p-4 m-5 flex gap-3">
          <input
            type="range"
            min={0}
            max={25}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="">Length({length})</label>
          <input
            type="checkbox"
            onChange={() => {
              setNum((prev) => !prev);
            }}
          />
          <label>Numbers</label>
          <input
            type="checkbox"
            onChange={() => {
              setchar((prev) => !prev);
            }}
          />
          <label>characters</label>
        </div>
      </div> </>
      
    
  );
};

export default Card;
