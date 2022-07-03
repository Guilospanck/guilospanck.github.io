/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

export const SUBJECT_TITLE_TEST = 'teste'
export const SUBJECT_TITLE_TEST_2 = 'teste2'

// !!! Change when uploading it to production !!!
export const LOCALHOST = 'http://localhost:3000/'

// development
// export const LOCALHOST = 'https://localhost:3000/'

describe('test', () => {

  it('should go to / path and check if "hello 1" string is present', () => {
    test()
  })

})

export const test = () => {  
  cy.visit(`${LOCALHOST}`)

  cy.findByTitle(/photo\-container/i).should('exist')
  cy.findByTitle(/title\-name\-container/i).should('exist')
  cy.findByTitle(/email\-container/i).should('exist')

  const NUMBER_OF_LINKS = 5
  cy.findAllByRole('link').then($links => {
    expect($links.length).to.be.eq(NUMBER_OF_LINKS)
  })
}