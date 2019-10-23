import notificationCreator from '../../notification/notificationCreator';
import notification from '../../notification/notification';
import notificationReducer from './notificationReducer';

describe('test notificationReducer', () => {
  describe('add notification', () => {
    const noteJordyToWilliam = notification('jordy', 'william', 'tyre', '2019-10-23');

    test('it should return an empty object', () => {
      const notifications = notificationReducer(undefined, {});

      expect(notifications).toStrictEqual({});
    });

    test('addNotification is reduced to a keyed array', () => {
      const initialState = {};

      const notifications = notificationReducer(initialState, notificationCreator(noteJordyToWilliam));

      expect(notifications).toContainKey('william');
    });

    test('notification for a user is pushed to array of his notifications', () => {
      const to = 'william';
      const note = notification('tom', to, 'tyre shop', '2019-10-23');
      const noteJos = notification('william', 'jos', 'tyre sweat', '2019-10-23');

      const initialState = {
        [to]: [note],
        [noteJos.to]: [noteJos],
      };

      const notifications = notificationReducer(initialState, notificationCreator(noteJordyToWilliam));

      expect(notifications).toHaveProperty(to, [note, noteJordyToWilliam]);
      expect(initialState).toHaveProperty(to, [note]);
      expect(initialState).toHaveProperty(noteJos.to, [noteJos]);
    });
  });
});
