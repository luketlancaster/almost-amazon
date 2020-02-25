import util from '../helpers/util.js';
import bookData from '../helpers/data/bookData.js';
import cart from './cart.js';

const addToCardEvent = () => {
  cart.addToCart(bookData.getBook());
}

const makeStore = () => {
  const book = bookData.getBook();
  const domString = `
    <h2>${book.name}</h2>
    <button id='add-to-cart-button' class='btn btn-info'>Add To Cart</button>
  `;

  util.printToDom('store-container', domString);
  document.querySelector('#add-to-cart-button').addEventListener('click', addToCardEvent);
}

export default { makeStore }
