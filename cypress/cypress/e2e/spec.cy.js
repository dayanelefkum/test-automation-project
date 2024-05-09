describe('Validar os dados do objeto com ID = 6', () => {
  it('Access JSONPlaceholder and go to /albums/1/photos', () => {
    cy.visit('https://jsonplaceholder.typicode.com/');
    cy.get('nav a').contains('Guide').click();
    cy.get('a[href="/albums/1/photos"]').contains('/albums/1/photos').click();
    cy.url().should('eq', 'https://jsonplaceholder.typicode.com/albums/1/photos');

    const expectedObj = {
      albumId: 1,
      id: 6,
      title: "accusamus ea aliquid et amet sequi nemo",
      url: "https://via.placeholder.com/600/56a8c2",
      thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
    }

    cy.get('body pre').then(pre => {
      const array = JSON.parse(pre.text())

      expect(array).deep.include(expectedObj)
    })
  })
})

describe('Realizar uma requisição do tipo GET', () => {
  it('should request the comments endpoint', () => {
    cy.request('https://jsonplaceholder.typicode.com/comments').then((response) => {
      expect(response.status).to.eq(200)

      const item = response.body.find(item => item.name === "alias odio sit")

      cy.wrap(item).its('email').should('eq', 'Lew@alysha.tv')
    })
  })
})

describe('Realizar uma requisição do tipo POST', () => {
  it('should request the users endpoint using POST', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/users').then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.haveOwnProperty('id')
    })
  })
})

describe('Realizar uma requisição do tipo PUT', () => {
  it('should request the users endpoint using PUT', () => {
    const valuesToChange = {
      id: 5,
      email: 'dayanelefkum@gmail.com',
      lat: '-37.3159',
      lng: '81.1496',
    }

    cy.request('PUT', 'https://jsonplaceholder.typicode.com/users/5', valuesToChange).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.haveOwnProperty('id', valuesToChange.id)
      expect(response.body).to.haveOwnProperty('email', valuesToChange.email)
      expect(response.body).to.haveOwnProperty('lat', valuesToChange.lat)
      expect(response.body).to.haveOwnProperty('lng', valuesToChange.lng)
    })
  })
})
