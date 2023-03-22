const expect = chai.expect;

describe("coding assignment", () => {
  describe("deckOfCards creates a deck of cards", () => {
    it("#Should create a deck of 52 cards", function () {
      // Arrange  Act  Assert
      const d = new Deck(); // Create a deck object
      console.log(d.deckOfCards);
      expect(d.deckOfCards).to.have.lengthOf(52); // Checks if number of cards is equal to 52
    });
  });
});
