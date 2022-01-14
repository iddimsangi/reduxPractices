const initialState = {
    counter:20
}
const reducer = (state = initialState, action) =>{
if(action.type === 'INCREMENT'){
    return{
        counter: state.counter + 1
    }
}
if(action.type === 'DINCREMENT'){
    return{
        counter: state.counter - 1
    }
}
if(action.type === 'SUBSTRACTION'){
    return{
        counter: state.counter - action.val
    }
}
if(action.type === 'ADDITION'){
    return{
        counter: state.counter + action.val
    }
}
    return state
}
export default reducer