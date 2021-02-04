export function saveToCart(id, name, amount) {
  const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
  const productFound = currentCart.find((product) => product.id === id);

  if (productFound) {
    const updatedCart = currentCart.map((product) => {
      if (product.id === id) return { ...product, amount: product.amount + amount };
      return product;
    });
    localStorage.cart = JSON.stringify(updatedCart);
  } else {
    currentCart.push({ id, name, amount });
    localStorage.setItem('cart', JSON.stringify(currentCart));
  }
}

export function recoverCart() {
  const currentCart = JSON.parse(localStorage.getItem('cart'));
  return currentCart || [];
}
