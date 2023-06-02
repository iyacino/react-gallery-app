import Card from "./components/Card";
import NavBar from "./components/NavBar";
import UploadForm from "./components/UploadForm";
import './App.css'
import { useEffect, useReducer } from "react";

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
const handleChange = (state, e) =>{
  if(e.target.name === 'file') {
      return {...state.inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0])}
  }else{
      return {...state.inputs, title: e.target.value}
  }
}
const picsReducer = (state, action) =>{
  switch (action.type){
      case'adding-pic': {
          return {
              ...state,
              pics: [state.inputs.path, ...state.pics]
          }
      }
      case'fill-inputs': {
          return {
              ...state,
              inputs: handleChange(state, action.payload.value)
          }
      }
      case'clicking-add': {
          return {
              ...state,
              isVisible: !state.isVisible, 
              inputs: {
                file: null,
                path: null, 
                title: ''
              }
          }
      }
      default: return state
  }
}
function App() {

  const [state, dispatch] = useReducer(picsReducer, initialState) 
  const handleAddClick = () =>{
    dispatch({type: 'clicking-add'})
  }
  const handleChange = (event) =>{
    dispatch({type: 'fill-inputs', payload: {value: event}})
  }
  const handleSubmit = (event) =>{
    event.preventDefault()
    dispatch({type: 'adding-pic'})
    dispatch({type: 'clicking-add'})
    }

  useEffect(() => {
    console.log(state)
  }, [state])
  
  return (
    <>
      <NavBar/>
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={handleAddClick}>{ state.isVisible ? 'Close' : 'Add'}</button>
        <UploadForm isVisible={state.isVisible} handleChange={handleChange} handleSubmit={handleSubmit} inputs={state.inputs}/>
        <div className="container text-center mt-5 mb-5">
          <h1>Gallery</h1>
        </div>
        <div className="row">
          {state.pics.map((photo, i) => <Card key={i} url={photo}/>)}
        </div>
      </div>
      
    </>
  );
}

export default App;
