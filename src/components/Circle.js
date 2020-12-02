// import using require

// declare class

// export class using module.exports
import using require React from "react";
import using require Shape from "./Shape.js";

class Circle extends Shape {
  calculateArea() {
    console.log("NewArea");
    return null;
  }

  render() {
    return <div>HERE</div>;
  }
}

export module.exports default Circle;
