// Deck of Cards

function buildDeck() {
    this.card = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suit = ['Clubs', 'Spades', 'Diamonds', 'Hearts']
    const cards = [];

    for (let index = 0; index < this.suit.length; index++) {
        for (let num = 0; num < this.card.length; num++) {
            cards.push(`${ this.card[num] } ${ this.suit[index] }`);
        }
    }
    return cards;
}

class Deck {
    constructor() {
        this.deck = buildDeck();
        this.card = '';
        this.hand = [];
    }

    shuffle() {
        let m = this.deck.length, t, i;
        // while there are things to shuffle
        while (m) {
            // pick a random remaining element
            i = Math.floor(Math.random() * m--);
            // swap it with the current element
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this;
    }

    deal() {
        return this.deck.pop();
    }

    reset() {
        this.deck = buildDeck();
    }

}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    takeCard(deck) {
        this.hand.push(deck.deal());
        return this;
    }

    discard() {
        this.hand.pop()
        return this;
    }

}

const myDeck = new Deck();
const myPlayer = new Player("Jim");

myDeck.shuffle().deal();
// console.log(myDeck.deck);

myPlayer.takeCard(myDeck).takeCard(myDeck);
console.log(myPlayer.name, myPlayer.hand);

// myDeck.reset();
// console.log(myDeck.deck);