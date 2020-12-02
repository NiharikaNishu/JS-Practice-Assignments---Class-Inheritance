// import using require

// declare class

// export class using module.exports
import React from "react";
import ReactDom from "react-dom";
import Shape from "./Shape.js";

class Circle extends Shape {
  calculateArea() {
    console.log("NewArea");
    return null;
  }
}

export default Circle;
