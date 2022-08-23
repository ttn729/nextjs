const prependTodo = (todo: String) => {
    return {
        type: 'PREPEND_TODO',
        payload: todo
    }
}

export default prependTodo;