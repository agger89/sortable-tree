describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
})

describe('My First Test', function() {
  it('Gets, types and asserts', function() {
    // eslint-disable-next-line no-undef
    cy.visit('https://example.cypress.io')

    // eslint-disable-next-line no-undef
    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    // eslint-disable-next-line no-undef
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
