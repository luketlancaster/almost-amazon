import util from '../helpers/util.js';
import cartData from '../helpers/data/cartData.js';

const cartToDom = () => {
  const myCart = cartData.getCart();
  let domString = '';
  myCart.forEach(book => {
    domString += `<h2>${book.name}</h2>`
  })
  util.printToDom('cart-container', domString);
}

const addToCart = (newBook) => {
  cartData.setCart(newBook);
  cartToDom();
}

export default { addToCart }
