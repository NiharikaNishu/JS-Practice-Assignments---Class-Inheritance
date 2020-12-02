// declare class

// export class using module.exports
import { Component } from "react";

class Shape extends Component {
  constructor(colorName) {
    super();
    this.color = colorName;
  }
  drawShape() {
    console.log("this is drawShape");
    return null;
  }
  calculateArea() {
    console.log("this is calculateArea");
    return null;
  }
}

export default Shape;
