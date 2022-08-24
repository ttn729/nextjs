import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';


const selectTodos = (state: {todos: any}) => state.todos;

export default function TodoList() {
    const TodoListItems = useSelector(selectTodos);

    const onClickDelete: () => void = () => {
        console.log();
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {TodoListItems.map((value : any) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItem
                        key={value}
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments" onClick= {() => onClickDelete()}>
                                <DeleteIcon />
                            </IconButton>
                        }
                        disablePadding
                    >
                        <ListItemButton role={undefined} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`${value}`} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}
