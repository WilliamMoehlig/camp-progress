import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

import { createTodoCreator, completeTodoCreator } from '../../store/todoCreator';
import todo from '../../store/todo';
import '../../styles/todos.scss';

function Todos({ todos, createTodo, completeTodo }) {
  const todoRef = useRef(null);

  const onEnter = e => {
    e.preventDefault();
    createTodo(todo(todos.length + 1, todoRef.current.value, false));
    todoRef.current.value = '';
  };

  const onClick = id => {
    completeTodo(id);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="todos col-4">
          <h1>Todos</h1>
          <form onSubmit={onEnter}>
            <input type="text" aria-label="newTodoName" className="form-control" ref={todoRef} placeholder="Add todo" />
          </form>
          <hr />
          <ul className="list-unstyled todos__list">
            {todos.map(elem => {
              if (elem.completed) {
                return null;
              }
              return (
                <li key={elem.id} className="todos__list-item">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value={elem.completed}
                        onChange={() => onClick(elem.id)}
                      />
                      {elem.name}
                    </label>
                  </div>
                </li>
              );
            })}
          </ul>
          <hr />
          <div className="todos__footer">
            <strong>
              <span>{todos.filter(e => e.completed !== true).length}</span>
            </strong>{' '}
            items remaining
          </div>
        </div>
      </div>
    </div>
  );
}

Todos.propTypes = {
  todos: array,
  createTodo: func.isRequired,
  completeTodo: func.isRequired,
};

Todos.defaultProps = {
  todos: [],
};

const mapDispatchToProps = dispatch => ({
  createTodo: arg => dispatch(createTodoCreator(arg)),
  completeTodo: arg => dispatch(completeTodoCreator(arg)),
});

const mapStateToProps = state => ({ todos: Object.values(state.todos) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
