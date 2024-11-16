import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import { Slide } from "@mui/material";
// import backgroundImage from "../../assets/image/Rectangle1.png";
import Slide1 from "../../assets/image/slide1.jpg";
export default function Header() {
  const [bgImg, setBgImg] = useState([Slide1, 1]);

  console.log(bgImg);

  return (
    <>
      <img
        key={bgImg[1]}
        className="w-full h-screen absolute z-0 animate-zoom"
        src={bgImg[0]}
        alt=""
      />

      {/* <div
        style={{
          // backgroundImage: `url(${bgImg})`,
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
        className="w-full h-screen absolute z-0 animate-zoom"
      ></div> */}
      <header
        // style={{
        //   // backgroundImage: `url(${bgImg})`,
        //   backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%), url(${bgImg})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        //   height: "100vh",
        //   width: "100%",
        // }}
        className="relative z-20"
      >
        <Nav />
        <Hero bgImg={bgImg} setBgImg={setBgImg} />
      </header>
    </>
  );
}
