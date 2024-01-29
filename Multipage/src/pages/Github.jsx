import React, { useEffect, useState } from "react";

const Github = () => {
  const [Data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/vikas-singh-7")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        console.log(Data);
      });
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40%",
          width: "80vw",
          marginLeft: "10em",
        }}
      >
        <div
          class="flex max-w-100vh items-center rounded-md border md:flex-row p-10"
          style={{ height: "60vh", width: "80vw" }}
        >
          <div class="h-full w-full md:h-[200px] md:w-[300px]">
            <img
              src={Data.avatar_url}
              alt=""
              class="h-full w-full rounded-md object-contain"
            />
          </div>
          <div>
            <div class="p-4">
              <h1 class="inline-flex items-center text-lg font-semibold">
                {Data.name}
              </h1>
              <p class="mt-3 text-sm text-gray-600">{Data.bio}</p>
              <div class="mt-4">
                <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Learn
                </span>
                <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Work
                </span>
                <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Enjoy
                </span>
              </div>
              <div class="mt-3 flex items-center space-x-2">
                <img
                  class="inline-block h-8 w-8 rounded-full"
                  src={Data.avatar_url}
                  alt="Vikas"
                />

                <p>
                  Hey! i am looking for an entry level position as a frontend
                  developer,where i can use my skills and make them even more
                  sharp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Github;
