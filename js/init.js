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

// Functions

// Get the phase of a timed interval
function get_wave(factor) {
	var date = new Date();
	var seconds = date.getTime() / 1000;
	var sine = (1 + Math.sin(seconds)) / 2;
	return Math.pow(sine, factor);
}

// Layers

var images = []; // {element, [center_x %, center_y %, scale_x %, scale_y %], depth}
var direction = [0, 0]; // [center_x, center_y]
var zoom = 0;

// Update the parallax direction
function images_update_parallax(e) {
	var center_x = window.innerWidth / 2;
	var center_y = window.innerHeight / 2;
	direction[0] = (e.clientX - center_x) / center_x;
	direction[1] = (e.clientY - center_y) / center_y;
	images_position_all();
}

// Update the zoom level
function images_update_zoom(e) {
	var dir = e.deltaY > 0 ? 1 : -1;
	zoom = Math.max(0, Math.min(1, zoom - (dir * ZOOM_SPEED)));
	images_position_all();

	scale = zoom * ZOOM_SCALE;
	world.style["left"] = (-scale * 100 / 2) + "%";
	world.style["top"] = (-scale * 100 / 2) + "%";
	world.style["width"] = ((1 + scale) * 100) + "%";
	world.style["height"] = ((1 + scale) * 100) + "%";
}

// Update the positions of images with active timed movement
function images_position_interval() {
	for(i in images) {
		var image = images[i];
		for(i in image.movers) {
			var type = image.movers[i][0];
			var factor = image.movers[i][1];
			if(type == "interval" && get_wave(factor) > 0) {
				image_position(image);
				break;
			}
		}
	}
}

// Update the positions of all images
function images_position_all() {
	for(i in images) {
		var image = images[i];
		image_position(image);
	}
}

// Update the position of the given image
function image_position(image) {
	var depth = (image.depth + (1 - zoom * 2)) / 2;
	var parallax_position = depth * 100 * PARALLAX_POSITION;
	var parallax_scale = depth * 100 * PARALLAX_SCALE;

	var left = image.rectangle[0] - (image.rectangle[2] / 2) + (parallax_position * direction[0]) + (parallax_scale / 2);
	var top = image.rectangle[1] - (image.rectangle[3] / 2) + (parallax_position * direction[1]) + (parallax_scale / 2);
	var width = image.rectangle[2] - parallax_scale;
	var height = image.rectangle[3] - parallax_scale;

	// Apply mover offsets
	for(i in image.movers) {
		var type = image.movers[i][0];
		var factor = image.movers[i][1];
		var rectangle = image.movers[i][2];

		var intensity_x = 0;
		var intensity_y = 0;
		switch(type) {
			case "cursor":
				intensity_x = Math.max(-1, Math.min(1, direction[0] * factor));
				intensity_y = Math.max(-1, Math.min(1, direction[1] * factor));
				break;
			case "zoom":
				intensity_x = intensity_y = Math.pow(zoom, factor);
				break;
			case "interval":
				intensity_x = intensity_y = get_wave(factor);
				break;
			default:
				break;
		}

		left += intensity_x * rectangle[0] * 100 * MOVER_SCALE;
		top += intensity_y * rectangle[1] * 100 * MOVER_SCALE;
		width += intensity_x * rectangle[2] * 100 * MOVER_SCALE;
		height += intensity_y * rectangle[3] * 100 * MOVER_SCALE;
	}

	image.element.style["left"] = left + "%";
	image.element.style["top"] = top + "%";
	image.element.style["width"] = width + "%";
	image.element.style["height"] = height + "%";
	image.element.style["z-index"] = 1000 - Math.floor(depth * 1000);
}

// Add a new image
function image_add(id, rectangle, depth, movers, image) {
	var element = document.createElement("img");
	element.setAttribute("id", id);
	element.setAttribute("class", "image");
	element.setAttribute("src", image);
	world.appendChild(element);

	images.push({
		element: element,
		rectangle: rectangle,
		depth: depth,
		movers: movers
	});
	images_position_all();
}

// Update parallax on mouse cursor movement
document.addEventListener("mousemove", images_update_parallax);

// Update zoom on mouse wheel movement
document.addEventListener("wheel", images_update_zoom);

// Update interval based movers
setInterval(images_position_interval, 0);
