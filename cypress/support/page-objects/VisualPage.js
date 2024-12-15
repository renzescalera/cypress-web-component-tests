class Visual {
  constructor(cy) {
    this.cy = cy;
  }

  getGif() {
    return this.cy.get("#dynamic-gif img");
  }
}

export default Visual;
