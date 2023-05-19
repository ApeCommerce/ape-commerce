import { after, apiUrl, before } from 'test';

let response: Response;

beforeAll(before);
afterAll(after);

describe('Creating an account', () => {
  test('Succeeds', async () => {
    response = await fetch(`${apiUrl()}/auth/createAccount`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: 'user@example.com',
        password: 'password',
        languageId: 'en',
        countryId: 'US',
      }),
    });
    expect(response.status).toBe(200);
  });
});
