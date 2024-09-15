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
	const header = document.createElement('h2');
	header.innerHTML = catName;
	document.body.appendChild(header);
}

function listCat(cat) {
	const ul = document.createElement('ul');
	ul.classList.add("tool-list");
	document.body.appendChild(ul);
	
	cat.forEach((tool) => {
		
		let li = document.createElement("li");
        li.innerText = tool.name;
		li.classList.add("tool-item", "hidden");
		
		ul.appendChild(li);
		window.getComputedStyle(li).opacity;
		li.classList.toggle("hidden");
	});
};