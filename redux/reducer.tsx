import { AnyAction } from 'redux'

const initialState = {
    todos: ["Hi", "Hello"]
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'PREPEND_TODO':
            return {
                ...state.todos,
                todos: [...state.todos, action.payload]
            }
        default:
            return state
    }
}

export default reducer;