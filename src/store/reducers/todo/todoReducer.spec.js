import { createTodoCreator, completeTodoCreator } from '../../todo/todoCreator';
import todoReducer from './todoReducer';
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
});
