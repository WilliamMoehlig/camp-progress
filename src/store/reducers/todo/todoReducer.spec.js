import { createTodoCreator, completeTodoCreator } from '../../todo/todoCreator';
import todoReducer from './todoReducer';
import { getTodos } from '../../actionTypes';
import createToDo from '../../todo/todo';

describe('test todoReducer', () => {
  describe('add item', () => {
    const initialState = {};

    test('it should add a new item to the list', () => {
      const firstToDo = createToDo(1, 'first', false);
      const secondToDo = createToDo(2, 'second', true);

      const reduce = todoReducer(initialState, createTodoCreator(firstToDo));
      const reduce2 = todoReducer(reduce, createTodoCreator(secondToDo));

      expect(reduce2).toStrictEqual({ 1: firstToDo, 2: secondToDo });
    });

    test('state should not be muted', () => {
      const firstToDo = createToDo(1, 'first', false);

      todoReducer(initialState, createTodoCreator(firstToDo));

      expect(initialState).toStrictEqual({});
    });
  });

  describe('complete item', () => {
    const firstToDo = createToDo(1, 'first', false);
    const secondToDo = createToDo(2, 'second', false);

    const initialState = {
      1: firstToDo,
      2: secondToDo,
    };

    test('it should complete an existing item by id', () => {
      const reduce = todoReducer(initialState, completeTodoCreator(1));

      expect(reduce).toStrictEqual({ 1: { ...firstToDo, completed: true }, 2: secondToDo });
    });

    test('state should not be mutated', () => {
      todoReducer(initialState, completeTodoCreator(1));

      expect(initialState).not.toHaveProperty('completed', true);
    });
  });

  describe('handle multiple todos', () => {
    test('map todos array to object', async () => {
      const todo1 = {
        id: 1,
        name: 'Wash dishes',
      };

      const todo2 = {
        id: 2,
        name: 'Take out the trash',
      };

      const todo3 = {
        id: 3,
        name: 'Walk the dog',
        completed: true,
      };

      const todos = [todo1, todo2, todo3];
      const mappedTodos = { [todo1.id]: todo1, [todo2.id]: todo2, [todo3.id]: todo3, called: true };

      const result = todoReducer({}, { type: getTodos, payload: todos });

      expect(result).toStrictEqual(mappedTodos);
    });
  });
});
