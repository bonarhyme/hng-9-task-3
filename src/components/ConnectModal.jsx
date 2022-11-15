import React from "react";
import wallet from "../images/wallet.svg";
import meta from "../images/meta.svg";

const ConnectModal = ({ setOpenConnectModal }) => {
  return (
    <aside
      className="fixed top-0 right-0 left-0 bottom-0"
      style={{
        zIndex: "999",
      }}
    >
      <div
        className="h-full flex justify-center items-center z-50"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "999",
        }}
      >
        <div
          className="bg-white w-[95%]  max-w-[600px]"
          style={{
            border: "1px solid #CFD8DC",
            borderRadius: "12px",
          }}
        >
          <div className="flex justify-between border-b pb-4">
            <p className="px-6 pt-6">Connect Wallet</p>
            <button
              className="px-6 pt-6"
              onClick={() => setOpenConnectModal(false)}
            >
              X
            </button>
          </div>
          <div className="px-6 pt-6">
            <p>Choose your preferred wallet:</p>
            <div
              className="flex justify-between items-center my-6 bg-[#f8f9fa] p-2"
              style={{
                border: "1px solid #CFD8DC",
                borderRadius: "12px",
              }}
            >
              <div className="flex items-center gap-2">
                <div>
                  <img src={meta} alt="metamask" />
                </div>
                <p>Metamask</p>
              </div>
              <div className="text-xl">{">"}</div>
            </div>
            <div
              className="flex justify-between items-center mb-10 bg-[#f8f9fa] p-2"
              style={{
                border: "1px solid #CFD8DC",
                borderRadius: "12px",
              }}
            >
              <div className="flex items-center gap-2">
                <div>
                  <img src={wallet} alt="connectwallet" />
                </div>
                <p>ConnectWallet</p>
              </div>
              <div className="text-xl">{">"}</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ConnectModal;
