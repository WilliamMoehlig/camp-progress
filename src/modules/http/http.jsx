import api from './api';

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
  const result = await api.get(`/users/${id}`);
  return mapPerson(result.data);
}

export async function listPaged(page, limit = 10) {
  const params = {
    _sort: 'lastName,firstName',
    _page: page,
    _limit: limit,
  };

  const result = await api.get(`/users`, { params });

  const persons = result.data.map(r => mapPerson(r));

  return { total: Number(result.headers['X-Total-Count'.toLowerCase()]), data: persons };
}

export async function save(user) {
  let result;
  if (user.id !== undefined) {
    result = await api.put(`/users/${user.id}`, user);
  } else {
    result = await api.post('/users', user);
  }
  return result.data;
}
