import Card from "./components/Card";
import './App.css'
import { useContext} from "react";
import Layout from "./components/Layout";
import {Context} from './context/Context'

function App() {

  const {state, dispatch} = useContext(Context)
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
  return (
    <>
        <Layout 
          onChange= {handleChange}
          onSubmit= {handleSubmit}
          onClick= {handleAddClick}
          state={state}
        >
        <div className="container text-center mt-5 mb-5">
          <h1>Gallery</h1>
        </div>
        <div className="row">
          {state.pics.map((photo, i) => <Card key={i} url={photo}/>)}
        </div>
        </Layout>
    </>
  );
}

export default App;
