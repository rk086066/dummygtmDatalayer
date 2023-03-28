let cart = JSON.parse(localStorage.getItem("cart"));
let cartItems = document.getElementById("cart-items");
let cartTotal = document.getElementById("cart-total");
let itemArr = [];
let total = 0;

if (cart) {
  cart.forEach((p, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
          <td>${p.name}</td>
          <td>${p.price}</td>
          <td>${p.quantity}</td>
          <td>${(p.price * p.quantity).toFixed(2)}</td>
          <td><button onclick="removeFromCart(${index})">Remove</button></td>
        `;
    cartItems.appendChild(row);
    total += p.price * p.quantity;

    /* pushing data into Datalayer */
    dataLayer.push({
      event: "addToCart",
      productName: `${p.name}`,
      productPrice: `${p.price}`,
      productQuantity: `${p.quantity}`,
    });

    itemArr.push(p);
  });
}

cartTotal.textContent = total.toFixed(2);

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.reload();
}

// adding data into datalayer

const purchaseBtn = document.getElementById("purchase-btn");

purchaseBtn.addEventListener("click", function () {
  dataLayer.push({
    event: "purchase",
    totalPrice: total,
    totalItems: itemArr,
  });
});
