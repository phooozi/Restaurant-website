const addButtons = document.querySelectorAll(".menu-items button");
const orderItems = document.querySelector("#order-items");
const orderTotal = document.querySelector("#order-total");
const cart = new Map();

function renderOrder() {
	orderItems.replaceChildren();

	if (cart.size === 0) {
		const emptyOrderMessage = document.createElement("li");
		emptyOrderMessage.textContent = "Your selected items will appear here.";
		orderItems.append(emptyOrderMessage);
		orderTotal.textContent = "$0.00";
		return;
	}

	let total = 0;

	cart.forEach((item, itemName) => {
		const orderItem = document.createElement("li");
		const itemDetails = document.createElement("span");
		const removeButton = document.createElement("button");
		const itemSubtotal = item.price * item.quantity;

		itemDetails.textContent = `${itemName} x ${item.quantity} - $${itemSubtotal.toFixed(2)}`;
		removeButton.type = "button";
		removeButton.textContent = "Remove";
		removeButton.addEventListener("click", () => {
			cart.delete(itemName);
			renderOrder();
		});

		orderItem.append(itemDetails, removeButton);
		orderItems.append(orderItem);
		total += itemSubtotal;
	});

	orderTotal.textContent = `$${total.toFixed(2)}`;
}

addButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const itemName = button.dataset.item;
		const itemPrice = Number(button.dataset.price);
		const existingItem = cart.get(itemName);

		if (existingItem) {
			existingItem.quantity += 1;
		} else {
			cart.set(itemName, { price: itemPrice, quantity: 1 });
		}

		renderOrder();
	});
});
