class Tools {
    static get url() {return "./tools/tools.json"}
	
	constructor() {
		this.data = null;
		this.initialization = this.init();
	}
	
	async init() {
        this.data = await this.getData();
		
		return this.data;
    }
	
	async getData() {
		const response = await fetch(Tools.url);
		if (!response.ok) throw new Error(response.statusText);
    
		return await response.json();
	}
	
	loaded() {
		return this.data != null;
	}
	
	getDesc(tool) {
	    return null
	}
	
	getCat(cat) {
		return this.getAll().filter(tool => tool.cats.includes(cat));
	}
	
	getAllCats() {
		return Array.from(new Set(this.getAll().flatMap(tool => tool.cats)))
	}
	
	getAll() {
	    return this.data.tools;
	}
}

const tools = new Tools();