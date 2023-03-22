console.log("Card Game Of War!");
class Card {
  constructor(suit, face, value) {
    this.suit = suit;
    this.face = face;
    this.value = value;
  }
}
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let suits = ["Club", "Heart", "Spade", "Diamond"];
function makeDeck() {
  return suits.flatMap((suit) => {
    return values.map((value, rank) => {
      return new Card(suit, value, rank + 2);
    });
  });
}
// function makeDeck() {
//     for (let s = 0; s < suits.length; s++) {
//       console.log("suit:", suits[s]);
//       for (let x = 0; x < values.length; x++) {
//         let card = new Card(suits[s], values[x], x + 2)
//         console.log(card);
//         this.deckOfCards.push(card); //pushes an instance to the deckOfCards array
//       }
//       console.log(this.deckOfCards.length);
//     }
//   }
class Deck {
  constructor(deckOfCards = makeDeck()) {
    this.deckOfCards = deckOfCards;
    // this.entireDeck = this.makeDeck();
  }
  //make deck function -  begin
  //   makeDeck() {
  //     let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  //     let suits = ["Club", "Heart", "Spade", "Diamond"];
  //     for (let s = 0; s < suits.length; s++) {
  //       console.log("suit:", suits[s]);
  //       for (let x = 0; x < values.length; x++) {
  //         let card = new Card(suits[s], values[x], x + 2);
  //         this.deckOfCards.push(card); //pushes an instance to the deckOfCards array
  //       }
  //       console.log(this.deckOfCards.length);
  //     }
  //   }
  // function-ended
  shuffleDeck() {
    for (let i = this.deckOfCards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tempIndex = this.deckOfCards[i];
      this.deckOfCards[i] = this.deckOfCards[j];
      this.deckOfCards[j] = tempIndex;
    }
    // return shuffleDeck;
  }
}
class Player {
  constructor(name) {
    this.name = name;
    this.points = 0;
    this.playerHand = [];
  }
}
let player1 = new Player("Ciera");
let player2 = new Player("Molly");
// console.log(player1.playerCards[0])
class Game {
  shuffleDeal() {
    // this.players.push(new Player("Ciera"));
    // this.players.push(new Player("Molly"));
    // console.log("War", this.players);
    let myDeck = new Deck();
    // myDeck.shuffleDeck();
    // this.playGame();
    // this.endGame();
    myDeck.shuffleDeck();
    player1.playerHand.push(...myDeck.deckOfCards.slice(0, 26));
    player2.playerHand.push(
      ...myDeck.deckOfCards.slice(26, myDeck.deckOfCards.length)
    );
    //   //     console.log("deal");
    //   //     let card = this.deckOfCards();
    //   //     console.log(card + " has been drawn from the deck.")
    //   //     }
  }
  playGame() {
    console.log("War");
    // let player1 = this.players[0];
    // let player2 = this.players[1];
    console.log("player 1:" + player1.name + " player2: " + player2.name);
    let roundWinner = "";
    //   let turn = 0;
    for (let i = 0; i < 26; i++) {
      console.log("Ciera", player1.playerHand[i]);
      console.log("Molly", player2.playerHand[i]);
      if (player1.playerHand[i].value > player2.playerHand[i].value) {
        console.log(`${player1.name} wins`);
        player1.points++;
      } else if (player1.playerHand[i].value < player2.playerHand[i].value) {
        console.log(`${player2.name} wins`);
        player2.points++;
      } else {
        console.log("Players Tie");
      }
      console.log(`Score: ${player1.name}:  ${player1.points}
       ${player2.name}: ${player2.points}
        `);
    }
  }
  endGame() {
    let gameWinner = "";
    console.log(player1);
    // player1 = this.players[0];
    // let player2 = this.players[1];
    let winnerPoints = 0;
    if (player1.points > player2.points) {
      gameWinner = player1.name;
      winnerPoints = player1.points;
      console.log("player 1 wins");
    } else if (player2.points > player1.points) {
      gameWinner = player2.name;
      winnerPoints = player2.points;
      console.log("player 2 wins");
    } else {
      alert("Tie");
    }
  }
}
let newGame = new Game();
newGame.shuffleDeal();
newGame.playGame();
newGame.endGame();
console.log(player1.playerHand);
console.log(player2.playerHand);
console.log(player1.points);
let testDeck = new Deck();
console.log(testDeck);
// console.log(player1.playerHand[0].face + ' of ' + player1.playerHand[0].suit)
