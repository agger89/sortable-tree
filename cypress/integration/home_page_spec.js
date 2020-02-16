
describe('The Home Page', function() {

  function findItemandDrag(index){
    cy.get('.ReactVirtualized__Grid__innerScrollContainer > div')
    .find('.rst__moveHandle')
    .eq(index)
    .trigger('dragstart')
  }

  it('successfully loads', function() {
    cy.visit('/') // change URL to match your dev URL
  })

  it('delete and add a item', function() {
    cy.get('.rst__node:first')
      .contains('삭제')
      .click()

    cy.contains('추가').click()
  })

  it('enters text in the input and add a item', function() {
    cy.get('.rst__node:last input')
      .type('테스트테스트테스트')
      .should('have.value', '테스트테스트테스트')

    cy.get('.rst__node:last')
      .contains('추가')
      .click()

    cy.get('.rst__node:last input')
      .type('테스트테스트테스트')
      .should('have.value', '테스트테스트테스트')
      
    cy.get('.rst__node:last')
      .contains('추가')
      .click()

    cy.get('.rst__node:last input')
      .type('테스트테스트테스트')
      .should('have.value', '테스트테스트테스트')
  })

  it('remove a each item', function() {
    cy.get('.rst__node:last')
      .contains('삭제')
      .click()

    cy.get('.rst__node:last')
      .contains('삭제')
      .click()

    cy.get('.rst__node:last')
      .contains('삭제')
      .click()
  })

  it('add items', function() {
    cy.contains('추가').click()
    cy.contains('추가').click()
    cy.contains('추가').click()
  })

  it('drag and drop items', function() {
    findItemandDrag(1)

    cy.get('.ReactVirtualized__Grid__innerScrollContainer > div').eq(1)
      .trigger('drop')

    findItemandDrag(2)

    cy.get('.rst__node:last')
      .trigger('drop')

    findItemandDrag(2)

    cy.get('.rst__node:last')
      .trigger('drop')
  })

})
