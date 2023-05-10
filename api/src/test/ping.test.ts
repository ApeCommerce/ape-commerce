import { after, apiUrl, before } from 'test';

let response: Response;

beforeAll(before);
afterAll(after);

describe('Pinging the API', () => {
  test('Succeeds', async () => {
    response = await fetch(apiUrl());
    expect(response.status).toBe(200);
  });
});
