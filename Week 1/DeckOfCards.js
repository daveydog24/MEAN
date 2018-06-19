class DeckOfCards {
    constructor(){
        this.deck = []

    }
    card(){
        let card = "";

        let num = Math.floor(Math.random() * 12); //generates number between 0-12
        let establish_card = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]
        card = establish_card[num];

        num = Math.floor(Math.random() * 4) //generates number between 0-3
        let suit = ["Diamonds","Hearts","Spades","Clubs"]
        card = card + " of " + suit[num];

        return card;
    }
    makeDeck(){
        var size = 52
        for (var cards = 0; cards <= size; cards++){
            let check_card = new DeckOfCards().card()
            let card_inside = true
            for (let index = 0; index <= this.deck.length; index++){
                if (this.deck[index] == check_card) {
                    card_inside = false;
                }
            }
            if (card_inside == true){
                this.deck.push(check_card) //if it doesnt find the card in the deck it inserts it
            }
        }
        // console.log(deck)
        return this.deck
    }
// ill review later but here is the solution below that looks way better than mine haha
    // reset() {
    //     this.deck = [];
    //     const suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
    //     const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    //     for (const suit of suits) {
    //         for (const value of values) {
    //             this.deck.push(`${ value } of ${ suit }`);
    //         }
    //     }
    //     return this;
    // }

    // shuffle() {
    //     let m = this.deck.length, t, i;
    //     while (m) {
    //         i = Math.floor(Math.random() * m--);
    //         t = this.deck[m];
    //         this.deck[m] = this.deck[i];
    //         this.deck[i] = t;
    //     }
    //     return this;
    // }

    deal() {
        return this.deck.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    draw(deck) {
        this.hand.push(deck.deal());
        return this;
    }

    discard() {
        this.hand.pop();
        return this;
    }
}

const deck1 = new DeckOfCards();
console.log(deck1.makeDeck())

const player2 = new Player("Ronnel");
player2.draw(deck1);
console.log(player2);
console.log(deck1);



