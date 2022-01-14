import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.mycounter} />
                <CounterControl label="Increment" clicked={() => this.props.onIncriment()} />
                <CounterControl label="Decrement" clicked={this.props.onDincriment}  />
                <CounterControl label="Add 10" clicked={this.props.onAddition}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubstraction()}  />
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        mycounter: state.counter
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onIncriment:() => dispatch({type:'INCREMENT'}),
        onDincriment:() => dispatch({type:'DINCREMENT'}),
        onSubstraction:() => dispatch({type:'SUBSTRACTION', val:5}),
        onAddition:() => dispatch({type:'ADDITION', val:10})


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);