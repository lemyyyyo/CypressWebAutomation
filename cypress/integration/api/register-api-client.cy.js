import testData from "../../fixtures/test-data.json";

describe('Simple Books API Tests', () => {
  let authToken;

  it('registers api client', () => {
    cy.request({
      method: 'POST',
      url: testData.apibaseurl + 'api-clients/',
      body: {
        clientName: 'Tech Exam 01',
        clientEmail: 'menorcalimuel02@gmail.com',
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      authToken = response.body.accessToken;
    });
  });

  it('check the obtained authentication token', () => {
    expect(authToken).to.exist;
  });
});
