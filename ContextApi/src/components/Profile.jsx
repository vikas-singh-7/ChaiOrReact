import React from "react";
import UserContext from "../UserContext";
import { useContext } from "react";

const Profile = () => {
  const style = {
    height: "500px",
    width: "300px",
    border: "2px solid black",
    padding: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "60vw",
    top: 0,
  };
  const { user } = useContext(UserContext);

  return (
    <div style={style}>
      {!user ? (
        <h3>Please Login</h3>
      ) : (
        <h3>
          {" "}
          hello mr {user.username} {user.lastname}
        </h3>
      )}
    </div>
  );
};

export default Profile;
