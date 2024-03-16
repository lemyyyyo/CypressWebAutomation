import token from "../../fixtures/auth-token.json";

describe('Simple Books API Tests', () => {
  it('should get API status', () => {
    cy.request('GET', 'https://simple-books-api.glitch.me/status')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('status', 'OK');
      });
  });

  it('should list books', () => {
    cy.request('GET', 'https://simple-books-api.glitch.me/books')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
  });

  it('should get a single book', () => {
    cy.request('GET', 'https://simple-books-api.glitch.me/books/1')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
      });
  });

  it('should submit an order', () => {
    cy.request({
      method: 'POST',
      url: 'https://simple-books-api.glitch.me/orders',
      headers: {
        Authorization: `Bearer ${token.authToken}`,
      },
      body: {
        bookId: 1,
        customerName: 'John',
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('orderId');
    });
  });

  it('should get all orders', () => {
    cy.request({
      method: 'GET',
      url: 'https://simple-books-api.glitch.me/orders',
      headers: {
        Authorization: `Bearer ${token.authToken}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

});
