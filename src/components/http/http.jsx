import axios from 'axios';

function mapPerson(resource) {
  const result = { ...resource };
  if (result.birthDate) result.birthDate = new Date(result.birthDate);
  return result;
}
/**
 * @typedef {Object} StoredUser
 * @property {number} id
 * @property {String} firstName
 * @property {String} lastName
 * @property {Date} [birthDate]
 * @property {'M'|'F'} gender
 * @property {Boolean} isFamily
 */
// eslint-disable-next-line import/prefer-default-export
export async function getUserById(id) {
  const result = await axios.get(`http://localhost:3000/users/${id}`);
  return mapPerson(result.data);
}

export async function listPaged(page, limit = 10) {
  const params = {
    _sort: 'lastName,firstName',
    _page: page,
    _limit: limit,
  };

  const result = await axios.get(`http://localhost:3000/users`, { params });

  const persons = result.data.map(r => mapPerson(r));

  return { total: Number(result.headers['X-Total-Count'.toLowerCase()]), data: persons };
}
