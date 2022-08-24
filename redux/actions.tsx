export const prependTodo = (todo: String) => {
    return {
        type: 'PREPEND_TODO',
        payload: todo
    }
}

export const removeTodo = (todo: String) => {
    return {
        type: 'REMOVE_TODO',
        payload: todo
    }
}

