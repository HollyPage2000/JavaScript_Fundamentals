

class ShoppingBasket {
    constructor() {
        this.candy = [];
    }
    addCandy(candy) {
        this.candy.push(candy);
    }
    getTotalPrice() {
        return this.candy.reduce((total, candy) => total + candy.getPrice(), 0);
    }
}

module.exports = ShoppingBasket;