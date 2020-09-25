const PARALLAX_POSITION = 0.1;
const PARALLAX_SCALE = 0.01;
const ZOOM_SPEED = 0.05;
const ZOOM_SCALE = 5;
const TRACKING_SCALE = 0.01;

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

// Elements

var elements = []; // {element, [center_x %, center_y %, scale_x %, scale_y %], depth}
var direction = [0, 0]; // [center_x, center_y]
var zoom = 0;

function elements_update_parallax(e) {
	var center_x = window.innerWidth / 2;
	var center_y = window.innerHeight / 2;
	direction[0] = (e.clientX - center_x) / center_x;
	direction[1] = (e.clientY - center_y) / center_y;
	elements_position();
}

function elements_update_zoom(e) {
	var dir = e.deltaY > 0 ? 1 : -1;
	zoom = Math.max(0, Math.min(1, zoom - (dir * ZOOM_SPEED)));
	elements_position();

	scale = zoom * ZOOM_SCALE;
	world.style["left"] = (-scale * 100 / 2) + "%";
	world.style["top"] = (-scale * 100 / 2) + "%";
	world.style["width"] = ((1 + scale) * 100) + "%";
	world.style["height"] = ((1 + scale) * 100) + "%";
}

function elements_position() {
	for(i in elements) {
		var item = elements[i];
		var depth = (item.depth + (1 - zoom * 2)) / 2;
		var parallax_position = depth * 100 * PARALLAX_POSITION;
		var parallax_scale = depth * 100 * PARALLAX_SCALE;

		var left = item.rectangle[0] - (item.rectangle[2] / 2) + (parallax_position * direction[0]) + (parallax_scale / 2);
		var top = item.rectangle[1] - (item.rectangle[3] / 2) + (parallax_position * direction[1]) + (parallax_scale / 2);
		var width = item.rectangle[2] - parallax_scale;
		var height = item.rectangle[3] - parallax_scale;

		for(i in item.movetypes) {
			var type = item.movetypes[i][0];
			var factor = item.movetypes[i][1];
			var strength_x = item.movetypes[i][2];
			var strength_y = item.movetypes[i][3];
			switch(type) {
				case "cursor":
					var scale_x = Math.max(-1, Math.min(1, direction[0] * factor));
					var scale_y = Math.max(-1, Math.min(1, direction[1] * factor));
					left += scale_x * strength_x * 100 * TRACKING_SCALE;
					top += scale_y * strength_y * 100 * TRACKING_SCALE;
					break;
				case "zoom":
					var scale = Math.max(0, Math.min(1, zoom * factor));
					left += scale * strength_x * 100 * TRACKING_SCALE;
					top += scale * strength_y * 100 * TRACKING_SCALE;
					break;
				default:
					break;
			}
		}

		item.element.style["left"] = left + "%";
		item.element.style["top"] = top + "%";
		item.element.style["width"] = width + "%";
		item.element.style["height"] = height + "%";
		item.element.style["z-index"] = 1000 - Math.floor(depth * 1000);
	}
}

function element_add(id, rectangle, depth, movetypes, image) {
	var element = document.createElement("img");
	element.setAttribute("id", id);
	element.setAttribute("class", "element");
	element.setAttribute("style", "");
	element.setAttribute("src", image);
	world.appendChild(element);

	elements.push({
		element: element,
		rectangle: rectangle,
		depth: depth,
		movetypes: movetypes
	});
	elements_position();
}

// Update parallax on mouse cursor movement
document.addEventListener("mousemove", elements_update_parallax);

// Update zoom on mouse wheel movement
document.addEventListener("wheel", elements_update_zoom);
