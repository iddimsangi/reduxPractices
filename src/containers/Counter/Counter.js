import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as TypeAction from '../../store/actions'
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
              <div>
              <button onClick={() => this.props.onStoreResult(this.props.mycounter)} style={{padding:'10px', marginBottom:".5rem", backgroundColor:"orange", cursor:"pointer"}}>store result</button>
                <ul style={{listStyle:"number", width:"20%", margin:"2rem auto"}}>
                    {
                        this.props.myResults.map(res =>{
                            return (      
                                 <li onClick={() => this.props.onDeleteResult(res.id)} style={{border:'1px solid red', cursor:"pointer"}}>{res.value}</li> 
                                  )
                        })
                    }
                       
                </ul>
              </div>
            </div>
        
        );
    }
}
const mapStateToProps = state =>{
    return {
        mycounter: state.ctr.counter,
        myResults: state.reslts.results
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onIncriment:() => dispatch({type:TypeAction.INCREMENT}),
        onDincriment:() => dispatch({type:TypeAction.DINCREMENT}),
        onSubstraction:() => dispatch({type:TypeAction.SUBSTRACTION, val:5}),
        onAddition:() => dispatch({type:TypeAction.ADDITION, val:10}),
        onStoreResult:(result) => dispatch({type:TypeAction.STORE_RESULT, result:result}),
        onDeleteResult:(id) => dispatch({type:TypeAction.DELETE_RESULT, val:id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);