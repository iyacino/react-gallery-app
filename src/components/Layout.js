import React from 'react'
import NavBar from './NavBar'
import UploadForm from './UploadForm'

function Layout({onChange, onSubmit, onClick, state, children}) {
  return (
    <>
        <NavBar />
        <div className="container text-center mt-5">
            <button className="btn btn-success float-end" onClick={onClick}>{ state.isVisible ? 'Close' : 'Add'}</button>
            <UploadForm isVisible={state.isVisible} handleChange={onChange} handleSubmit={onSubmit} inputs={state.inputs}/>
            {children}
        </div>
        
    </>
  )
}

export default Layout