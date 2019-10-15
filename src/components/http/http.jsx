import axios from 'axios';

function map(resource) {
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
export async function GetUserById(id) {
  const result = await axios.get(`http://localhost:3000/users/${id}`);
  return map(result.data);
}
