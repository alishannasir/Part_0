import "../src/App.css"
import React, {useState} from "react";

function App() {
  const [inputdata, setInputData] = useState(""); 
  const [submit, setSubmit] = useState([]);
  
const HandleChange = (event)=>{
 setInputData(event.target.value)
}
const onSubmitValues =(e)=>{
  e.preventDefault(); 
  if (inputdata.trim()){
    setSubmit([...submit ,inputdata]);
    setInputData("")
  }
  
}
  return (
    <> 
      <form action="" onSubmit={onSubmitValues}>
       <input type="text" placeholder="Type something" value={inputdata} onChange={HandleChange}/>
       <button type="submit"> Submit</button>
       <ul>
      {submit.map((item, index)=>(
        <li key={index}>{item}</li>
      ))}       
       </ul>
      </form>
    </>
  )
}

export default App
