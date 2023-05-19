import { after, apiUrl, before } from 'test';

let response: Response;

beforeAll(before);
afterAll(after);

describe('Getting the doc', () => {
  test('Succeeds', async () => {
    response = await fetch(`${apiUrl()}/doc`);
    expect(response.status).toBe(200);
  });
});
