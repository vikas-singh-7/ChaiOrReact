import React from "react";

const InnerSecond = ({innersecondcount ,setCount}) => {
  const style = {
    height: "200px",
    width: "100px",
    border: "2px solid black",
    padding: "5px",
    backgroundColor: "cyan",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  };
  return (
    <div style={style}>
      <h3
      onClick={()=>{
        setCount(innersecondcount+1);
      }}
        style={{
          height: "30px",
          width: "60px",
          border: "2px solid black",
          textAlign: "center",
        }}
      >{innersecondcount }</h3>
    </div>
  );
};

export default InnerSecond;
