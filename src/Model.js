import React from 'react'
import PropTypes from 'prop-types'

const Model = props => {
    const isOpen =true
    return (
        <div className={`model-overlay ${isOpen? `isModelOpen`: null}`}>
            <div className="model-container">
                <h1>Some Name</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla, nam est culpa reprehenderit repellat!</p>
                <button className="btn btn-primary">
                    close
                </button>
            </div>
        </div>
    )
}

Model.propTypes = {

}

export default Model
