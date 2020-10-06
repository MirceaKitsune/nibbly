const PARALLAX_POSITION = 0.1;
const PARALLAX_SCALE = 0.01;
const ZOOM_SPEED = 0.05;
const ZOOM_SCALE = 5;
const MOVER_SCALE = 0.01;

// HTML

var canvas = document.createElement("div");
canvas.setAttribute("class", "canvas");
document.body.appendChild(canvas);

var world = document.createElement("div");
world.setAttribute("class", "pet");
world.style["left"] = "0%";
world.style["top"] = "0%";
world.style["width"] = "100%";
world.style["height"] = "100%";
canvas.appendChild(world);

// - Functions

// Get the phase of a timed interval
function get_wave(factor) {
	var date = new Date();
	var seconds = date.getTime() / 1000;
	var sine = (1 + Math.sin(seconds)) / 2;
	return Math.pow(sine, factor);
}

// - Elements

var images = {};
var direction = [0, 0]; // [center_x, center_y]
var zoom = 0;

// Update the parallax direction
function images_update_parallax(e) {
	var center_x = window.innerWidth / 2;
	var center_y = window.innerHeight / 2;
	direction[0] = (e.clientX - center_x) / center_x;
	direction[1] = (e.clientY - center_y) / center_y;
	images_update_all();
}

// Update the zoom level
function images_update_zoom(e) {
	var dir = e.deltaY > 0 ? 1 : -1;
	zoom = Math.max(0, Math.min(1, zoom - (dir * ZOOM_SPEED)));
	images_update_all();

	scale = zoom * ZOOM_SCALE;
	world.style["left"] = (-scale * 100 / 2) + "%";
	world.style["top"] = (-scale * 100 / 2) + "%";
	world.style["width"] = ((1 + scale) * 100) + "%";
	world.style["height"] = ((1 + scale) * 100) + "%";
}

// Update images with timed movement
function images_update_interval() {
	for(i in images) {
		var data = images[i];
		for(x in data.movers) {
			var type = data.movers[x].type;
			var factor = data.movers[x].factor;
			if(type == "interval" && get_wave(factor) > 0) {
				image_update(i);
				break;
			}
		}
	}
}

// Update all images
function images_update_all() {
	for(i in images) {
		image_update(i);
	}
}

// Update an image
function image_update(id) {
	var data = images[id];
	var depth = (data.depth + (1 - zoom * 2)) / 2;
	var parallax_position = depth * 100 * PARALLAX_POSITION;
	var parallax_scale = depth * 100 * PARALLAX_SCALE;

	var left = data.rectangle[0] + (parallax_position * direction[0]) + (parallax_scale / 2);
	var top = data.rectangle[1] + (parallax_position * direction[1]) + (parallax_scale / 2);
	var width = data.rectangle[2] - parallax_scale;
	var height = data.rectangle[3] - parallax_scale;

	// Apply mover offsets
	for(i in data.movers) {
		var type = data.movers[i].type;
		var factor = data.movers[i].factor;
		var rectangle = data.movers[i].rectangle;

		var intensity = [0, 0]; // [offset_x, offset_y]
		switch(type) {
			case "cursor":
				intensity[0] = Math.max(-1, Math.min(1, direction[0] * factor));
				intensity[1] = Math.max(-1, Math.min(1, direction[1] * factor));
				break;
			case "zoom":
				intensity[0] = intensity[1] = Math.pow(zoom, factor);
				break;
			case "interval":
				intensity[0] = intensity[1] = get_wave(factor);
				break;
		}

		left += intensity[0] * rectangle[0] * 100 * MOVER_SCALE;
		top += intensity[1] * rectangle[1] * 100 * MOVER_SCALE;
		width += intensity[0] * rectangle[2] * 100 * MOVER_SCALE;
		height += intensity[1] * rectangle[3] * 100 * MOVER_SCALE;
	}

	var element = document.getElementById(id);
	if(!element) {
		element = document.createElement("img");
		element.setAttribute("id", id);
		element.setAttribute("class", "image");
		world.appendChild(element);
	}

	element.setAttribute("src", data.image);
	element.style["left"] = (left - (width / 2)) + "%";
	element.style["top"] = (top - (height / 2)) + "%";
	element.style["width"] = width + "%";
	element.style["height"] = height + "%";
	element.style["z-index"] = 1000 - Math.floor(depth * 1000);
}

// Set an image
function image_set(id, data) {
	// Update entries from the received object if data already exists, set the received object otherwise
	images[id] = id in images ? Object.assign(images[id], data) : data;
	image_update(id);
}

// Update parallax on mouse cursor movement
document.addEventListener("mousemove", images_update_parallax);

// Update zoom on mouse wheel movement
document.addEventListener("wheel", images_update_zoom);

// Update interval based movers
setInterval(images_update_interval, 0);
