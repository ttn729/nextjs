import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import {prependTodo} from '../../redux/actions'
import {useSelector, useDispatch} from 'react-redux'


const selectTodos = (state: {todos: any}) => state.todos;

export default function TodoAddBar() {
    const TodoListItems = useSelector(selectTodos);

    const dispatch = useDispatch();

    const [todo, setTodo] = React.useState("");
    
    const onInput = (event: any) => {   
        setTodo(event.target.value)
        console.log(todo)
    };

    const onKeyPress = (event: any) => {
      if (event.keyCode == 13) {
          event.preventDefault();
          onClickCheck();
      }
  }

    const onClickClear: () => void = () => {
        setTodo("");
    }

    const onClickCheck: () => void = () => {
      // Check if todo is already in list, duplicates not allowed 
      if (TodoListItems.indexOf(todo) != -1) {
        alert(todo + " already in list.")
      }
      else if (todo != "") { // Does not add an empty todo
        dispatch(prependTodo(todo));
        onClickClear();
      }
    }

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add a new To-do"
        value={todo}
        onChange={onInput}
        onKeyDown={onKeyPress}
        inputProps={{ 'aria-label': 'new todo' }}
      />
     <IconButton color="primary" sx={{ p: '10px' }} aria-label="cancel" onClick={onClickClear}>

        <CancelIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="check" onClick={onClickCheck}>
        <CheckIcon />
      </IconButton>
    </Paper>
  );
}
