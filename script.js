tools.initialization.then(() => {
	listData();
});

function listData() {
	const cats = tools.getAllCats();
	
	cats.forEach(catName => {
		catHeader(catName);
		listCat(tools.getCat(catName));
	});
};

function catHeader(catName) {
	const header = document.createElement("h1");
	header.innerHTML = catName;
	document.body.appendChild(header);
}

function listCat(cat) {
	const ul = document.createElement("ul");
	ul.classList.add("tool-list");
	document.body.appendChild(ul);
	
	cat.forEach((tool) => {
		
		let li = document.createElement("li");
		li.classList.add("tool-list-item", "hidden");
		
		const name = document.createElement("div");
		name.innerHTML = tool.name;
		name.style.fontWeight = "bold";
		const legend = document.createElement("div");
		legend.innerHTML = tool.legend;
		const url = document.createElement("div");
		const urlLink = document.createElement("a");
		urlLink.text = "site";
		urlLink.href = tool.url;
		url.appendChild(urlLink);
		li.append(name, legend, url);
		
		ul.appendChild(li);
		window.getComputedStyle(li).opacity;
		li.classList.toggle("hidden");
	});
};