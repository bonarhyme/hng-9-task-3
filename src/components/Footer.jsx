import React from "react";
import logoFooter from "../images/logo-footer.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1E] py-14 px-4 md:py-[60px] md:px-[100px] text-white">
      <div className="flex flex-wrap flex-row justify-between gap-6">
        <div className="flex flex-col gap-4">
          <div className="mb-6">
            <img src={logoFooter} alt="logo" />
          </div>
          <div className="flex gap-6">
            <a href="https://facebook.com">
              <FaFacebookF color="white" />
            </a>
            <a href="https://instagram.com">
              <FaInstagram color="white" />
            </a>
            <a href="https://twitter.com">
              <FaTwitter color="white" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="mb-4">Community</h2>
          <Link to="/nfts">NFT</Link>
          <Link to="/tokens">Tokens</Link>
          <Link to="/landlords">Landlords</Link>
          <Link to="/discord">Discord</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mb-4">Places</h2>
          <Link to="/castle">Castle</Link>
          <Link to="/farms">Farms</Link>
          <Link to="/beach">Beach</Link>
          <Link to="/learn-more">Learn more</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mb-4">About us</h2>
          <Link to="/road-map">Road map</Link>
          <Link to="/creators">Creators</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact-us">Contact us</Link>
        </div>
      </div>
      <p className="text-[#F7F7F7] font-normal py-10">&copy; 2022 Metabnb</p>
    </footer>
  );
};

export default Footer;
