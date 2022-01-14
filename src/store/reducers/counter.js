import * as TypeAction from '../../store/actions'
const initialState = {
    counter:20
}
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case TypeAction.INCREMENT:
            return{
                ...state,
                counter: state.counter + 1
            }
        case TypeAction.DINCREMENT:
            return{
                ...state,
                counter: state.counter - 1
            }

        case TypeAction.SUBSTRACTION:
            return{
                ...state,
                counter: state.counter - action.val
            }
        case TypeAction.ADDITION:
            return{
                ...state,
                counter: state.counter + action.val
            }
    }
    return state
}
export default reducer