import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between items-center px-2 py-1">
      <div className="flex text-sm ">
        <p>Copyright © 2023 Gestión Empresarial</p>
      </div>
      <div className="flex gap-2 items-center">
        <img src="/CBM_1.png" alt="hello" className=" h-[20px]" />
      </div>
    </div>
  );
};

export default Footer;
