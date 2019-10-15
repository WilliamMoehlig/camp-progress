import nock from 'nock';
import { GetUserById } from './http';

describe('API tests for users', () => {
  describe('Get user by ID', () => {
    test('it returns the res.data', async () => {
      const resource = {
        // we will test the date later on because this is a special case
        // birthDate: new Date('2009-01-19T23:00:00.000Z'),
        firstName: 'Bart',
        gender: 'M',
        id: 1,
        isFamily: true,
        lastName: 'Simpson',
      };

      nock('http://localhost:3000')
        .get('/users/1')
        .reply(200, resource);

      const result = await GetUserById(1);

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

      const result = await GetUserById(2);

      expect(result).toEqual(resource);
    });
  });
});
