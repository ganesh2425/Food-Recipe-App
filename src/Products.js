/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function Products({data}) {
  return (
    <>
    <div className='row'>
        {data.map(data =>
        <div className='col-md-4'>
            <div className='card' style={{"width":"18rem"}}>
                <img className='card-img-top' src={data.recipe.image} alt="Card image cap"/>
                <div className='card-body'>
                    <center>
                        <h5 className='card-title'>{data.recipe.label}</h5>
                        <p className='card-text'>Total Amount of Calories: {Math.round(data.recipe.calories)}</p>
                        <a href="#" className="btn btn-success">Buy</a>
                    </center>
                </div>
            </div>
        </div>    
        )}
    </div>
    </>
  )
}

export default Products