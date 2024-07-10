function showOrderForm() {
  const orderFormContainer = document.getElementById("order-form-container");
  orderFormContainer.innerHTML = `
    <form id="order-form">
      <input type="text" name="name" placeholder="Name">
      <input type="email" name="email" placeholder="Email">
      <input type="tel" name="phone" placeholder="Phone">
      <button type="submit">Order</button>
    </form>
  `;
}

function handleOrderFormSubmission() {
  const form = document.getElementById("order-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    // Code to handle the order form submission
  });
}
