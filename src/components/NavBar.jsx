import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";
import ConnectModal from "./ConnectModal";

const NavBar = () => {
  const [hide, setHide] = useState(false);
  const [openConnectModal, setOpenConnectModal] = useState(false);
  return (
    <nav className="flex w-full justify-between px-6 flex-wrap whitespace-nowrap ">
      <div className="w-[233px] h-[37] pt-4 flex md:inline-block ">
        <img
          src={logo}
          alt="logo"
          className="w-[150px] md:w-[233px] md:h-[37px]"
        />
      </div>
      <button className={`md:hidden `} onClick={() => setHide((prev) => !prev)}>
        <FaBars size={30} />
      </button>
      <div
        className={`bg-slate-100 md:bg-white px-2 md:px-0 flex-col flex  md:flex-row gap-4 md:gap-8 md:justify-center md:items-center w-full md:w-fit mt-6 md:mt-0  pt-4   ${
          hide ? "hidden md:flex" : ""
        }`}
      >
        <Link to="/">Home</Link>
        <Link to="/place-to-stay">Place to stay</Link>
        <Link to="/nfts">NFTs</Link>
        <Link to="/community">Community</Link>
      </div>

      <div
        className={`w-full md:w-fit   mx-auto  pt-4  md:mx-0  flex justify-center bg-slate-100 md:bg-white pb-4 md:pb-0 ${
          hide ? "hidden md:flex" : ""
        }`}
      >
        <button
          className="rounded-[10px] w-[170px] h-[48px] flex justify-center items-center text-base text-white"
          style={{
            background:
              "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
            lineHeight: "20px",
            fontFamily: "'Red Rose', cursive",
          }}
          onClick={() => setOpenConnectModal((prev) => !prev)}
        >
          Connect wallet
        </button>

        {openConnectModal ? (
          <ConnectModal setOpenConnectModal={setOpenConnectModal} />
        ) : null}
      </div>
    </nav>
  );
};

export default NavBar;
