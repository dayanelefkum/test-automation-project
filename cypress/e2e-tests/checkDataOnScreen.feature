Feature: Validate data from https://jsonplaceholder.typicode.com/
    
    In order to be able to see data objet with ID = 6
    As a user
    I need to be able to acess page /albums/1/photos and see a JSON object

Scenario: Validate Object data with ID = 6

Given the user go to access the website https://jsonplaceholder.typicode.com/

And click into guide

When navigate to photos inside albums folder

Then he should be able to see and validate data from object with ID=6