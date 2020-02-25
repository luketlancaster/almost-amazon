import util from '../helpers/util.js';
import bookData from '../helpers/data/bookData.js';

const addToCardEvent = () => {
  const book = bookData.getBook();
  console.log(book);
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
