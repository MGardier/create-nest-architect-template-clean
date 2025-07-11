export class ProductOutputDto {

    constructor(id: number, name: string, quantity: number, price: number) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    id:         number;
    name:       string;
    quantity:   number;
    price:      number;
}