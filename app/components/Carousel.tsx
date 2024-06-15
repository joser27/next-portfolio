import React from "react";

const Carousel = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="./190e_10.jpg" className="w-full rounded-2xl" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="./190e_6.jpg" className="w-full rounded-2xl" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="./190e_11.jpg" className="w-full rounded-2xl" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="./190e_8.jpg" className="w-full rounded-2xl" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};

export default Carousel;
