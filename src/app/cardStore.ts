import { CardSchema } from './CardSchema';

export class CardStore {
    cards: Object = {};
    lastId: number = -1;

    _addCard(card: CardSchema) {
        card.id = String(++this.lastId);
        this.cards[card.id] = card;
        return card.id;
    }

    getCard(cardId: string) {
        return this.cards[cardId];
    }

    newCard(description: string): string {
        const card = new CardSchema();
        card.description = description;
        return (this._addCard(card));
    }
}