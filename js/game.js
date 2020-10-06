/*
image_set(id, data)
	id: Unique ID the element is identified by
	data: {rectangle, movers, depth, image}
		rectangle: [center_x, center_y, scale_x, scale_y] (in %)
		movers: [{type, factor, offset-rectangle}]
			type: What drives the movement, can be one of the following:
				cursor = Follow the mouse cursor
				zoom = Follow the zoom level
				interval = Move at an interval
			factor: Scale the driving variable by this amount, 0.5 = twice earlier, 2 = twice later
			offset-rectangle: The offset applied to the rectangle, follows the same structure
		depth: Virtual 3D position, -1 = closest, 0 = center, 1 = furthest
		image: URL of the image file
*/

const RECTANGLE_BODY = [50, 50, 50, 50];

const MOVERS_STATIC = [];
const MOVERS_EYES = [
	{type: "cursor", factor: 2, rectangle: [0.5, 0.5, 0, 0]}
];
const MOVERS_EYELIDS = [
	{type: "zoom", factor: 1, rectangle: [0, -0.5, 0, 0]},
	{type: "interval", factor: 1000, rectangle: [0, 6, 0, 4]}
];
const MOVERS_EYEBROWS = [
	{type: "zoom", factor: 1, rectangle: [0, -1, 0, 0]},
	{type: "interval", factor: 1000, rectangle: [0, 4, 0, 8]}
];
const MOVERS_JAW_LOWER = [
	{type: "zoom", factor: 1.5, rectangle: [0, 3, 0, 0]}
];
const MOVERS_JAW_UPPER = [
	{type: "zoom", factor: 1.5, rectangle: [0, -1, 0, 0]}
];
const MOVERS_TAIL = [
	{type: "interval", factor: 1, rectangle: [0, 1, 0, 0]}
];
const MOVERS_LIGHTING = [
	{type: "zoom", factor: 1.5, rectangle: [0, -1.5, 0, 0]}
];

image_set("throat_1", {rectangle: RECTANGLE_BODY, depth: 0.5, movers: MOVERS_STATIC, image: "svg/pet/ring.svg"});
image_set("throat_2", {rectangle: RECTANGLE_BODY, depth: 0.375, movers: MOVERS_STATIC, image: "svg/pet/ring.svg"});
image_set("throat_3", {rectangle: RECTANGLE_BODY, depth: 0.25, movers: MOVERS_STATIC, image: "svg/pet/ring.svg"});
image_set("throat_4", {rectangle: RECTANGLE_BODY, depth: 0.125, movers: MOVERS_STATIC, image: "svg/pet/ring.svg"});
image_set("throat_5", {rectangle: RECTANGLE_BODY, depth: 0, movers: MOVERS_STATIC, image: "svg/pet/ring.svg"});
image_set("throat_6", {rectangle: RECTANGLE_BODY, depth: -0.125, movers: MOVERS_STATIC, image: "svg/pet/ring.svg"});
image_set("throat_7", {rectangle: RECTANGLE_BODY, depth: -0.25, movers: MOVERS_STATIC, image: "svg/pet/ring.svg"});
image_set("throat_8", {rectangle: RECTANGLE_BODY, depth: -0.375, movers: MOVERS_STATIC, image: "svg/pet/ring.svg"});

image_set("eyes", {rectangle: RECTANGLE_BODY, depth: -0.45, movers: MOVERS_EYES, image: "svg/pet/eyes.svg"});
image_set("ears", {rectangle: RECTANGLE_BODY, depth: -0.4, movers: MOVERS_STATIC, image: "svg/pet/ears.svg"});
image_set("eyelids", {rectangle: RECTANGLE_BODY, depth: -0.525, movers: MOVERS_EYELIDS, image: "svg/pet/eyelids.svg"});
image_set("eyebrows", {rectangle: RECTANGLE_BODY, depth: -0.55, movers: MOVERS_EYEBROWS, image: "svg/pet/eyebrows.svg"});
image_set("head", {rectangle: RECTANGLE_BODY, depth: -0.5, movers: MOVERS_STATIC, image: "svg/pet/head.svg"});
image_set("jaw_lower", {rectangle: RECTANGLE_BODY, depth: -0.525, movers: MOVERS_JAW_LOWER, image: "svg/pet/jaw_lower.svg"});
image_set("jaw_upper", {rectangle: RECTANGLE_BODY, depth: -0.55, movers: MOVERS_JAW_UPPER, image: "svg/pet/jaw_upper.svg"});
image_set("nose", {rectangle: RECTANGLE_BODY, depth: -0.6, movers: MOVERS_JAW_UPPER, image: "svg/pet/nose.svg"});
image_set("teeth_lower", {rectangle: RECTANGLE_BODY, depth: -0.5, movers: MOVERS_JAW_LOWER, image: "svg/pet/teeth_lower.svg"});
image_set("teeth_upper", {rectangle: RECTANGLE_BODY, depth: -0.525, movers: MOVERS_JAW_UPPER, image: "svg/pet/teeth_upper.svg"});
image_set("tongue", {rectangle: RECTANGLE_BODY, depth: -0.475, movers: MOVERS_STATIC, image: "svg/pet/tongue.svg"});
image_set("throat", {rectangle: RECTANGLE_BODY, depth: -0.45, movers: MOVERS_STATIC, image: "svg/pet/throat.svg"});

image_set("tail", {rectangle: RECTANGLE_BODY, depth: 0.125, movers: MOVERS_TAIL, image: "svg/pet/tail.svg"});
image_set("feet", {rectangle: RECTANGLE_BODY, depth: 0, movers: MOVERS_STATIC, image: "svg/pet/feet.svg"});
image_set("arms", {rectangle: RECTANGLE_BODY, depth: -0.2, movers: MOVERS_STATIC, image: "svg/pet/arms.svg"});
image_set("hands", {rectangle: RECTANGLE_BODY, depth: -0.25, movers: MOVERS_STATIC, image: "svg/pet/hands.svg"});
image_set("chest", {rectangle: RECTANGLE_BODY, depth: -0.25, movers: MOVERS_STATIC, image: "svg/pet/chest.svg"});

image_set("shadow", {rectangle: RECTANGLE_BODY, depth: 0, movers: MOVERS_LIGHTING, image: "svg/pet/shadow.svg"});
image_set("lighting", {rectangle: RECTANGLE_BODY, depth: -0.475, movers: MOVERS_LIGHTING, image: "svg/pet/lighting.svg"});
image_set("eye_glow", {rectangle: RECTANGLE_BODY, depth: -0.45, movers: MOVERS_STATIC, image: "svg/pet/eyes_glow.svg"});
