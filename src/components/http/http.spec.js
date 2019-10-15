import nock from 'nock';
import { GetUserById } from './http';

describe('http nock', () => {
  beforeEach(() => {
    nock.cleanAll();
  });

  it('getById with date', async () => {
    // Arrange
    const id = 1;
    const expectedResult = {
      id,
      firstName: 'Bart',
      lastName: 'Simpson',
      birthDate: '2009-01-19T23:00:00.000Z',
      gender: 'M',
      isFamily: true,
    };
    nock('http://localhost:3000')
      .get(`/users/${id}`)
      .reply(200, expectedResult);

    // Act
    const userResult = await GetUserById(id);
    // Assert
    expect(userResult).toStrictEqual({ expectedResult, birthDate: new Date(expectedResult.birthDate) });
  });

  it('getById without date', async () => {
    // Arrange
    const id = 2;
    const expectedResult = {
      id,
      firstName: 'Bart',
      lastName: 'Simpson',
      gender: 'M',
      isFamily: true,
    };
    nock('http://localhost:3000')
      .get(`/users/${id}`)
      .reply(200, expectedResult);

    // Act
    const userResult = await GetUserById(id);
    // Assert
    expect(userResult).toStrictEqual(expectedResult);
  });
});
