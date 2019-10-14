import nock from 'nock';
import { GetUserById } from './http';

describe('http nock', () => {
  beforeAll(() => {
    nock.disableNetConnect();
    nock.cleanAll();
  });

  it('getById', async () => {
    // Arrange
    const id = 1;
    const expectedResult = {
      id,
      firstName: 'Bart',
      lastName: 'Simpson',
      birthDate: new Date('2009-01-19T23:00:00.000Z'),
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
