import React from "react";

export default function Button({ swiper }) {
  return (
    <div>
      {" "}
      <button className="text-red-500" onClick={() => swiper.slideNext()}>
        mathai maro bari
      </button>
    </div>
  );
}
