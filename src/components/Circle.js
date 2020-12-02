// import using require

// declare class

// export class using module.exports
import React from "react";
import Shape from "./Shape.js";

class Circle extends Shape {
  calculateArea() {
    console.log("NewArea");
    return null;
  }

  render() {
    return <div>HERE</div>;
  }
}

export default Circle;
