/* eslint-disable cypress/require-data-selectors */
describe('Logging in - Basic auth', () => {
  afterEach(() => {
    cy.clearLocalStorage()
  })

  const username = 'gordun2012'
  const password = '123456'
  const confirmPassword = '123456'
  it('visits the app root url', () => {
    cy.visit('/')
    cy.get('.btn-blue').should('contain', 'Log in').click()
    cy.get(':nth-child(1) > input').type(username)
    cy.get(':nth-child(2) > input').type(password)
    cy.get(':nth-child(3) > input').type(confirmPassword)
    cy.get('form > button').click()
    cy.get('.logout-button').should('contain', 'Logout').click()
  })
  it('authorized users can go admin page', () => {
    cy.visit('/')
    cy.get('.btn-blue').should('contain', 'Log in').click()
    cy.get(':nth-child(1) > input').type(username)
    cy.get(':nth-child(2) > input').type(password)
    cy.get(':nth-child(3)>input').type(confirmPassword)
    cy.get('form > button').click()
    cy.get('.logout-button').should('contain', 'Logout')
    cy.visit('/admin')
    cy.get('.btn-blue').should('contain', 'profile page').click()

    cy.get('.logout-button').should('contain', 'Logout')
    cy.get('h1').should('contain', 'welcome')
    cy.get('.btn-logo').should('contain', 'Blogs')
  })
})
