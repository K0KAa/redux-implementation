import React from 'react'
import "./App.css"
import { connect } from 'react-redux'
import { INCREMENT,DECREMENT,RESET } from './action'

const Counter = (props) => {
    const {count,name,increase,decrease,reset} =props
    return (
        <div className="counter">
            <h1>Counter</h1>
            <h2>{count}</h2>
            <div className="button">
                <button type="button" onClick={increase}>Increment</button>
                <button type="button" onClick={reset}>Reset</button>
                <button type="button" onClick={decrease}>Decrement</button>
            </div>
        </div>
    )
}
const mapStateToProps =({countState:{count,name}})=>{
    return {count:count ,name:name}
}

const mapDispatchToProps =(dispatch,ownProps)=>{
    return {
        increase: ()=>dispatch({type:INCREMENT}),
        decrease: ()=>dispatch({type:DECREMENT}),
        reset: ()=>dispatch({type:RESET})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
