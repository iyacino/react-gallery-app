import React, { useContext } from 'react'
import NavBar from './NavBar'
import UploadForm from './UploadForm'
import { Context } from '../context/Context'

function Layout({children}) {
    const {state, dispatch} = useContext(Context)
    const handleAddClick = () =>{
        dispatch({type: 'clicking-add'})
      }
  return (
    <>
        <NavBar />
        <div className="container text-center mt-5">
            <button className="btn btn-success float-end" onClick={handleAddClick}>{ state.isVisible ? 'Close' : 'Add'}</button>
            <UploadForm />
            {children}
        </div>
        
    </>
  )
}

export default Layout