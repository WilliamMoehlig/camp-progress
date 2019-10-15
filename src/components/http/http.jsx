import axios from 'axios';

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
  const uri = `http://localhost:3000/users/${id}`;
  const result = await axios.get(uri);
  const person = {
    id: result.data.id,
    firstName: result.data.firstName,
    lastName: result.data.lastName,
    gender: result.data.gender,
    isFamily: result.data.isFamily,
  };

  if (result.data.birthDate !== null && result.data.birthDate !== undefined) {
    person.birthDate = new Date(result.data.birthDate);
  }

  return person;
}
