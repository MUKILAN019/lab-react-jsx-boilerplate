import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
  const output = imageData()
  return <div>
    <h1 className='heading'>Kalvium gallary</h1>
    <div className='container'>
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

export default App;
