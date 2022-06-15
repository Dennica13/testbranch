import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rand}) => {
    return (
        <div className="jumbotron">
        <h1>{counter}</h1>
        <button 
            onClick={inc}
            className="btn btn-primary">DEC</button>
        <button 
            onClick={dec}
            className="btn btn-primary">INC</button>
        <button 
            onClick={rand}
            className="btn btn-primary">RAND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}



export default connect(mapStateToProps, actions)(Counter);