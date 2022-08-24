import { AnyAction } from 'redux'

const initialState = {
    todos: ["Hi", "Hello", "Bananas", "Doanh", "Trinh"]
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'PREPEND_TODO':
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        case 'REMOVE_TODO': // FIXME
            return {
            ...state,
            todos: state.todos.filter(item => item != action.payload)
            }
        default:
            return state
        
    }
}

export default reducer;