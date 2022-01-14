import * as TypeAction from '../store/actions'
const initialState = {
    counter:20,
    results:[]
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
        case TypeAction.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id:new Date(), value:state.counter})
            }
            case TypeAction.DELETE_RESULT:
                return {
                    ...state,
                    results: state.results.filter(res => {
                        return res.id !== action.val
                    })
                }
    }
    return state
// if(action.type === 'INCREMENT'){
//     return{
//         counter: state.counter + 1
//     }
// }
// if(action.type === 'DINCREMENT'){
//     return{
//         counter: state.counter - 1
//     }
// }
// if(action.type === 'SUBSTRACTION'){
//     return{
//         counter: state.counter - action.val
//     }
// }
// if(action.type === 'ADDITION'){
//     return{
//         counter: state.counter + action.val
//     }
// }
//     return state
}
export default reducer