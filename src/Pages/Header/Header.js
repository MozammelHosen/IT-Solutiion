import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-purple-600">
      <div className="flex justify-center items-center ml-5">
          <img className="w-8 mr-2" src="https://i.ibb.co/Sycrjfj/phone.webp" alt="Phone" />
        <span className="text-white">01799347085</span>
      </div>
      <div className="flex justify-center items-center mr-5">
          <img className="w-8 mr-2" src="https://i.ibb.co/VwW4CSN/1646635-removebg-preview.png" alt="Email" />
        <span className="text-white">mdmozammelhosen15701@gmail.com</span>
      </div>
    </div>
  );
};

export default Header;
