import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

const ARCHIVE_SHORTCUT_KEY_CODE = 65; // 'a'

const onArchiveShortcutPress = (handler, event) => {
  if(event.keyCode === ARCHIVE_SHORTCUT_KEY_CODE) handler(event);
};

const Todo = ({text, completed, onClick, onDeleteClick}) => (
  <li
    className={completed ? 'TodoList_Item-completed' : 'TodoList_Item'}
    onClick={onClick}
    onKeyDown={onArchiveShortcutPress.bind(null, onClick)}
    role="button"
    tabIndex="0">
    <span>{text}</span>
    <button onClick={onDeleteClick} style={{color: 'red'}}>X</button>
  </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default Todo;
