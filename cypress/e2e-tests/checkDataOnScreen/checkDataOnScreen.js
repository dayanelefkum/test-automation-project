// Import Cypress commands and assertions
import {Given,When,Then, And,} from "cypress-cucumber-preprocessor/steps";

  Given('the user go to access the website https://jsonplaceholder.typicode.com/', () => {
    cy.visit('https://jsonplaceholder.typicode.com/');
  });

  And('click into guide', () => {
    cy.get('nav a').contains('Guide').click();
  });

  When('navigate to photos inside albums folder', () => {
    cy.get('a[href="/albums/1/photos"]').contains('/albums/1/photos').click();
    cy.url().should('eq', 'https://jsonplaceholder.typicode.com/albums/1/photos');
  });

  Then('he should be able to see and validate data from object with ID=6', () => {
    const expectedObj = {
      albumId: 1,
      id: 6,
      title: "accusamus ea aliquid et amet sequi nemo",
      url: "https://via.placeholder.com/600/56a8c2",
      thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
    }

    cy.get('body pre').then(pre => {
      const array = JSON.parse(pre.text());
      expect(array).deep.include(expectedObj);
    });
  });