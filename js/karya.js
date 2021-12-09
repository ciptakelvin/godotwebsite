class Creation {
	constructor(title, description, author, link, image) {
		this.title = title;
		this.description = description;
		this.author = author;
		this.link = link;
		this.image = image;
	}
	toString() {
		return `
			<product onclick="location.href='${this.link}'">
				<thumb style="background-image: url(${this.image})"></thumb>
				<b>${this.title}</b>
				<small>${this.description}</small>
				<small style="margin-top: auto">By ${this.author}</small>
			</product>
			`;
	}
}
const grid = document.getElementById("products");
const creations = [
	new Creation("BugBot", "Initiate war between two different allying enemy teams by applying commands to your robot.", "MFauzan26", "https://mfproject.itch.io/bugbot", "https://user-images.githubusercontent.com/39972629/145327974-396c8ad8-cb37-4e16-84d7-829c917b8576.png"),
	new Creation("GetOut of the Dungeon", "You are trapped in a dungeon and you have the power to control mob's minds. try to solve puzzles by entering mob's minds to get out of the dungeon.", "MFauzan26", "https://mfproject.itch.io/getout", "https://user-images.githubusercontent.com/39972629/145328186-86fb538b-c66a-4b6e-9e03-2d49d4205bff.png"),
	new Creation("Dragon Arena", "Welcome to Dragon Arena! You will fight many enemies here without limit.", "MFauzan26", "https://mfproject.itch.io/dragon-arena", "https://user-images.githubusercontent.com/39972629/145328645-cd7eb453-f6e4-49eb-bcec-d601bf28b852.png"),
	new Creation("The Dark Side of The Moon", "Help 2 bunnies on different sides to get carrots", "MFauzan26", "https://mfproject.itch.io/tdsotm", "https://user-images.githubusercontent.com/39972629/145328905-75fad83e-8a3d-42a2-ada5-1427dba13c4b.png"),
	new Creation("MEGABEAST", "in a fantasy world... there are 3 magic crystals that have great powers, but one day the three crystals are taken by greedy creatures to create chaos in the world and create many evil creatures called MEGABEAST.", "MFauzan26", "https://mfproject.itch.io/megabeast", "https://user-images.githubusercontent.com/39972629/145329105-a15b70b0-c3e5-49e0-bd83-66c018468210.png"),
	new Creation("PING 99", "PING 99 is a game where you have to get as many scores as possible by playing 3 games, sounds fun doesn't it? but is it fun if your internet is unstable?", "MFauzan26", "https://mfproject.itch.io/ld49", "https://user-images.githubusercontent.com/39972629/145329488-b61740ea-f08e-413b-9113-50ca84270594.png")
];
for (const creation of creations) {
	grid.innerHTML += creation.toString();
}
