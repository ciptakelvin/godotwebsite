
const grid = document.getElementById("products");
creations.sort(() => Math.random() - 0.5);
for (const creation of creations) {
	grid.innerHTML += creation.toString();
}
