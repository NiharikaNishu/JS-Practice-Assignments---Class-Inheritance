// import using require

// declare class

// export class using module.exports
require React from "react";
require Shape from "./Shape.js";

class Circle extends Shape {
  calculateArea() {
    console.log("NewArea");
    return null;
  }

  render() {
    return <div>HERE</div>;
  }
}

module.exports default Circle;
