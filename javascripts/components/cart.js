import util from "../helpers/util.js";

const cartToDom = (book) => {
  const domString = `THIS IS THE CART W ${book.name}`;
  util.printToDom('cart-container', domString);
}

export default { cartToDom }
