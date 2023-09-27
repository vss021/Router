import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/vss021')
  //  .then(response => response.json())
  //  .then(data => {
  //     setData(data)
  //  })
  // }, [])
  console.log(data);

  return (
    <div className="my-20">
      <div className="text-center xl:m-auto  rounded-xl xl:w-2/3 shadow-xl m-4 bg-gray-600 text-white p-4 text-3xl">

        <h1 className=" font-semibold text-4xl">
          Public Repos : {data.public_repos}
        </h1>
        <div className="flex justify-between gap-3 items-center">
          <img
            className=" rounded-xl bottom-[1px] bg-sky-300 p-[1px]"
            src={data.avatar_url}
            alt="picture"
            width={160}
          />

          <p className=" text-sm md:text-lg text-left ">{data.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/vss021");
  return response.json();
};
