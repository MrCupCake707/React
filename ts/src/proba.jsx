const cart = [
  { name: 'Товар 1', price: 100, quantity: 2 },
  { name: 'Товар 2', price: 200, quantity: 1 },
  { name: 'Товар 3', price: 50, quantity: 5 }
];

const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

console.log('Общая сумма:', totalPrice);


let totalPrice = 0;

for (let i = 0; i < cart.length; i++) {
  totalPrice += cart[i].price * cart[i].quantity;
}

console.log('Общая сумма:', totalPrice);