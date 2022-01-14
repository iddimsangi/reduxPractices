const initialState = {
    counter:20,
    results:[]
}
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return{
                ...state,
                counter: state.counter + 1
            }
        case 'DINCREMENT':
            return{
                ...state,
                counter: state.counter - 1
            }

        case 'SUBSTRACTION':
            return{
                ...state,
                counter: state.counter - action.val
            }
        case 'ADDITION':
            return{
                ...state,
                counter: state.counter + action.val
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id:new Date(), value:state.counter})
            }
            case 'DELETE_RESULT':
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