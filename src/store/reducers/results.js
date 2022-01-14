import * as TypeAction from '../../store/actions'
const initialState = {
    results:[]
}
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case TypeAction.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id:new Date(), value:action.result})
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

}
export default reducer