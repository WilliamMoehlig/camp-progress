import nock from 'nock';
import { getUserById, listPaged, save } from './http';

describe('API tests for users', () => {
  describe('Get user by ID', () => {
    test('it returns the res.data', async () => {
      const resource = {
        firstName: 'Bart',
        gender: 'M',
        id: 1,
        isFamily: true,
        lastName: 'Simpson',
      };

      nock('http://localhost:3000')
        .get('/users/1')
        .reply(200, resource);

      const result = await getUserById(1);

      expect(result).toEqual(resource);
    });

    test('it maps birthdate as date', async () => {
      const resource = {
        isFamily: true,
        birthDate: new Date('2011-08-13T22:00:00.000Z'),
        gender: 'F',
        lastName: 'Simpson',
        firstName: 'Lisa',
        id: 2,
      };

      nock('http://localhost:3000')
        .get('/users/2')
        .reply(200, resource);

      const result = await getUserById(2);

      expect(result).toEqual(resource);
    });
  });

  describe('Get users', () => {
    test('sort the data on lastName, firstName', async () => {
      // Arrange
      const resource = [
        {
          firstName: 'Bart',
          gender: 'M',
          id: 1,
          isFamily: true,
          lastName: 'Simpson',
        },
        {
          firstName: 'Edna',
          gender: 'F',
          id: 8,
          isFamily: false,
          lastName: 'Krabappel',
        },
      ];

      nock('http://localhost:3000')
        .get('/users?_sort=lastName,firstName&_page=1&_limit=10')
        .reply(200, resource, { 'X-Total-Count': 3 });
      nock('http://localhost:3000')
        .get('/users?_sort=lastName,firstName&_page=2&_limit=5')
        .reply(200, resource, { 'X-Total-Count': 3 });

      // Act
      const result = await listPaged(2, 5);
      const result2 = await listPaged(1);
      // Assert
      expect(result.data).toStrictEqual(resource);
      expect(result2.data).toStrictEqual(resource);
      expect(result2.total).toBe(3);
      expect(result.total).toBe(3);
    });
  });

  describe('Save user', () => {
    test('it should post a new user', async () => {
      // Arrange
      const newUser = {
        firstName: 'William',
        lastName: 'Post',
        birthDate: '1996-05-07',
        gender: 'M',
        isFamily: false,
      };

      nock('http://localhost:3000')
        .post('/users')
        .reply(200, { ...newUser, id: 9 });
      // Act
      const savedUser = await save(newUser);
      // Assert
      expect(savedUser).toStrictEqual({ ...newUser, id: 9 });
    });

    test('it should put to an existing user', async () => {
      // Arrange
      const newUser = {
        id: 9,
        firstName: 'William',
        lastName: 'Post',
        birthDate: '1996-05-07',
        gender: 'M',
        isFamily: false,
      };

      nock('http://localhost:3000')
        .put(`/users/${newUser.id}`)
        .reply(200, newUser);
      // Act
      const savedUser = await save(newUser);
      // Assert
      expect(savedUser).toStrictEqual(newUser);
    });
  });
});
