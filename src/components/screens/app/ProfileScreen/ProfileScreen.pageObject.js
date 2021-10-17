export default class ProfileScreen {
  constructor(cy) {
    this.cy = cy;
  }

  openModal() {
    this.cy.get('.postbutton').click();

    return this;
  }

  fillPostForm() {
    this.cy.get('div input[name="url"]').type('https://i.postimg.cc/Y2LYK428/pexels-kelvin-valerio-617278.jpg');
    this.cy.get('[id="arrow"]').click();
    this.cy.get('button').contains('Avançar').click();
    this.cy.get('figure.filter-valencia').click();

    return this;
  }

  submitPostForm() {
    this.cy.get('button').contains('Postar').click();

    return this;
  }
}
