// declare class

// export class using module.exports
import "React ,{Component}" from React;
import "react-dom" from ReactDOM;

class Shape extends Component {
   color ;
   constructor(colorName){
      this.color = colorName;
   }
    drawShape(){
      console.log("this is drawShape");
      return null;
   }
    calculateArea(){
      console.log("this is calculateArea");
     return null;
   }
   
}

export default Shape;