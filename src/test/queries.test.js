const connection = require('../database/config/connection');
const { dbBuild } = require('../database/config/build');
const { addUserQuery, checkEmail } = require('../database/queries');

beforeEach(() => dbBuild());
afterAll(() => connection.end());

test(' add user for dataBase users table', () => checkEmail('test@test.com').then((data) => {
  expect(data.rows.length).toBe(0);
}));

test(' add user for dataBase users table', () => addUserQuery('test', 'test@test.com', 'aaAA12').then((data) => {
  expect(data.rows.length).toBe(1);
}));
