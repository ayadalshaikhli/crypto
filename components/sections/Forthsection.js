import React from "react";

export default function Forthsection() {
  return (
    <div
      className=" overflow-hidden font-black"
      style={{
        position: "relative",
        height: "70vh",
        width: "100%",
        overflow: "hidden",
        color: "#3F3C65",
      }}
    >
      <img style={{
          height: "100vh",
          width: "100%",
        }} className="w-full" src="/forthbg.png" alt="" />
      <div className="grid md:flex md:flex-row absolute top-2 md:top-24 md:ml-60 items-center md:gap-48 p-10">
        <div className="work">
          <h1 className="text-3xl md:text-5xl mb-5">
            What's the deadline for <br /> achieving your goal?
          </h1>
          <p className=" leading-7 text-xl  md:leading-10  md:text-3xl text-left font-normal w-full ">
            During the Accountability Smark Contract creation process,
            <br /> you will provide use with the email address of a trusted
            <br />
            friend or neutral third party who will receive a special pass-
            <br />
            word that can be used to release the Ethereum from the <br />
            Accountability Smart Contract.
          </p>
        </div>
        <div>
          <img className="mt-5 w-24 md:w-full" src="/forthicon.png" alt="" />
        </div>
      </div>
    </div>
  );
}
