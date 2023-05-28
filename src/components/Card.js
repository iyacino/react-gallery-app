import React from 'react'

function Card( { url } ) {
  return (
        <div className="col mb-5">
            <div className="card" style={{ width: "20rem" }}>
                <img src={url} className="card-img-top" alt="pic-alt-text"/>
            </div>
        </div>
  )
}

export default Card