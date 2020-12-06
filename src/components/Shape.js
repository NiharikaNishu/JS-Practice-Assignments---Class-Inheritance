// declare class

// export class using module.exports
require { Component } from "react";

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

module.exports default Shape;
