function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the product is already in the cart
  let existingProduct = cart.find((p) => p.name === productName);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    // Add the product to the cart with quantity 1
    cart.push({ name: productName, price: price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "Cart.html";
}
