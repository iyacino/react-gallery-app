import Card from "./components/Card";
import NavBar from "./components/NavBar";
import UploadForm from "./components/UploadForm";
import './App.css'
import { useState, useEffect } from "react";

const photos = [
  'https://picsum.photos/id/1001/200/200', 
]

const initialState = {
  pics: [],
  isVisible: false,
  count: null,
  inputs: {
    title: '',
    file: null,
    path: null
  }
}
function App() {
  const [state, dispatch] = useReducer(myReducer, initialState)
  
  const [count, setCount] = useState(null)
  const [inputs, setInput] = useState({
    title: '', 
    file: null,
    path: null
  })
  const [pics, setPics] = useState(photos)
  const [isVisible, setIsVisible] = useState(false)
  

  useEffect(() => {
    setCount(pics.length)
  }, [pics])
  
  const handleAddClick = () =>{
    setIsVisible(!isVisible)
  }
  
  const handleChange = (e) =>{
    if(e.target.name === 'file') {
      setInput({...inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0])})
    }else{
      setInput({...inputs, title: e.target.value})
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setPics([inputs.path, ...pics])
    setInput({
      title: '', 
      file: null,
      path: null})
    setIsVisible(false)
  }

  return (
    <>
      <NavBar/>
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={handleAddClick}>{ isVisible ? 'Close' : 'Add'}</button>
        <UploadForm isVisible={isVisible} handleChange={handleChange} handleSubmit={handleSubmit} inputs={inputs}/>
        <div className="container text-center mt-5 mb-5">
          <h1>Gallery</h1>
          <h5>{`You have ${count} image${count > 0? 's':''}`}</h5>
        </div>
        <div className="row">
          {pics.map((photo, i) => <Card key={i} url={photo}/>)}
        </div>
      </div>
      
    </>
  );
}

export default App;
