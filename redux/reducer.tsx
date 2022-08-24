import { AnyAction } from 'redux'

const initialState = {
    todos: ["Hi", "Hello", "Bananas", "Doanh", "Trinh"]
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'PREPEND_TODO':
            return {
                ...state.todos,
                todos: [action.payload, ...state.todos]
            }
        default:
            return state
    }
}

export default reducer;