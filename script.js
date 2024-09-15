tools.initialization.then((tools) => {
	listData(tools);
});


function listData(tools) {
	const ul = document.createElement('ul');
	
	tools.forEach((tool) => {
		let li = document.createElement("li");
        li.innerText = tool.name;
		
		ul.appendChild(li);
        document.body.appendChild(ul);
	});
};