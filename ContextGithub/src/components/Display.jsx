import React, { useContext } from "react";
import GithubContext from "../context/Githubcontext";

const Display = () => {
  const { profiledata } = useContext(GithubContext);

  return (
    <div>
      <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src={profiledata.avatar_url}
          alt="vikas"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">
            {profiledata.name}
          </h1>
          <p className="mt-2 text-sm text-gray-300">{profiledata.bio}</p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {profiledata.login}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Display;
