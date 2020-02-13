describe('The Home Page', function() {
  it('successfully loads', function() {
    // eslint-disable-next-line no-undef
    cy.visit('/') // change URL to match your dev URL
    // eslint-disable-next-line no-undef
    cy.contains('추가').click()
    // eslint-disable-next-line no-undef
    cy.get('.ReactVirtualized__Grid__innerScrollContainer > .rst__node:last input')
      .type('테스트테스트테스트')
      .should('have.value', '테스트테스트테스트')
    // eslint-disable-next-line no-undef
  })
})
