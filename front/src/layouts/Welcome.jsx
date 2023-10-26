import React from "react";
import useUser from "../hooks/user";

const Welcome = () => {
  const [user] = useUser();
  console.log(user);
  return (
    <div className="flex h-[50rem]  flex-col items-center justify-center">
      <div className="flex">
        <h1 className="text-center font-semibold text-[3rem] text-[#0280CA]">
          Almacenes Cubamodela
        </h1>
      </div>
      <div className="flex">
        <h3>Bienvenido: {user.email}</h3>
      </div>
    </div>
  );
};

export default Welcome;
