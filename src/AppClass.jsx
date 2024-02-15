import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  render(){
    const output = this.imageData()
    return <div>
      <h1 className="heading">Kalvium gallary</h1>
      <div className="container">
      {
        output.map(function(element,index,output){
          return <div key={element.id}>
            <img src={element.img} />
            </div>
        })
      }
       </div>
    </div>
  }
}
