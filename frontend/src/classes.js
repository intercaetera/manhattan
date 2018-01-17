export class Entity {
	constructor(obj) {
		this.id = obj.id
		this.name = obj.name
		this.type = obj.type
		this.notes = obj.notes
	}
}

export class Lane extends Entity {
	constructor(obj) {
		super(obj)
		this.start = {
			x: obj.start.x,
			y: obj.start.y
		}
		this.end = {
			x: obj.end.x,
			y: obj.end.y
		}
	}
}

export class Solar extends Entity {
	constructor(obj) {
		super(obj)
		this.position = {
			x: obj.position.x,
			y: obj.position.y
		}
		this.infocard = obj.infocard
	}
}

export class Field extends Solar {
	constructor(obj) {
		super(obj)
		this.verticalRadius = obj.verticalRadius
		this.horizontalRadius = obj.horizontalRadius
		this.tilt = obj.tilt
	}
}

export class Planet extends Solar {
	constructor(obj) {
		super(obj)
		this.owner = obj.owner
		this.radius = obj.radius
		this.dockable = obj.dockable
	}
}

export class Station extends Solar {
	constructor(obj) {
		super(obj)
		this.owner = obj.owner
		this.dockable = obj.dockable
	}
}

export class Jump extends Solar {
	constructor(obj) {
		super(obj)
		this.target = obj.target
		this.gate = obj.gate
	}

	// @TODO: Fetch name from target and automatically change it.
	changeType() {
		this.gate = !this.gate
	}
}

export class Star extends Solar {
	constructor(obj) {
		super(obj)
		this.radius = obj.radius
		this.corona = obj.corona
	}
}

export class CustomSolar extends Solar {
	constructor(obj) {
		super(obj)
		this.owner = obj.owner
		this.dockable = obj.dockable
		this.custom = obj.custom
	}
}
