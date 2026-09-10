const addButtons = document.querySelectorAll(".menu-items button");
const orderItems = document.querySelector("#order-items");
const orderTotal = document.querySelector("#order-total");

let total = 0;

addButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const itemName = button.dataset.item;
		const itemPrice = Number(button.dataset.price);
		const orderItem = document.createElement("li");

		orderItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
		orderItems.append(orderItem);
		total += itemPrice;
		orderTotal.textContent = `$${total.toFixed(2)}`;
	});
});
