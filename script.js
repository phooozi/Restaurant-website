const addButtons = document.querySelectorAll(".menu-items button");
const orderItems = document.querySelector("#order-items");
const orderTotal = document.querySelector("#order-total");
const emptyOrderMessage = document.querySelector("#empty-order-message");

let total = 0;

addButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const itemName = button.dataset.item;
		const itemPrice = Number(button.dataset.price);
		const orderItem = document.createElement("li");

		emptyOrderMessage.remove();
		orderItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
		orderItems.append(orderItem);
		total += itemPrice;
		orderTotal.textContent = `$${total.toFixed(2)}`;
	});
});
