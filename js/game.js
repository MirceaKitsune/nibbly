// image_add(id, rectangle, movers, depth, images)
// rectangle: [center_x %, center_y %, scale_x %, scale_y %]
// movers: [[type, factor, offset-rectangle]]
// movers, type = cursor: Follow mouse cursor
// movers, type = zoom: Follow zoom level
// movers, type = interval: Move at an established interval

const RECTANGLE_BODY = [50, 50, 50, 50];

const MOVER_STATIC = [];
const MOVER_EYE = [["cursor", 2, [0.5, 0.5, 0, 0]]];
const MOVER_EYELID = [["zoom", 1, [0, -0.5, 0, 0]], ["interval", 1000, [0, 4, 0, 4]]];
const MOVER_EYEBROW = [["zoom", 1, [0, -1, 0, 0]], ["interval", 1000, [0, 0, 0, 8]]];
const MOVER_JAW_LOWER = [["zoom", 1.5, [0, 3, 0, 0]]];
const MOVER_JAW_UPPER = [["zoom", 1.5, [0, -1, 0, 0]]];
const MOVER_TAIL = [["interval", 1, [0, 1, 0, 0]]];
const MOVER_LIGHTING = [["zoom", 1.5, [0, -1.5, 0, 0]]];

image_add("throat", RECTANGLE_BODY, 0.5, MOVER_STATIC, "svg/pet/ring.svg");
image_add("throat", RECTANGLE_BODY, 0.375, MOVER_STATIC, "svg/pet/ring.svg");
image_add("throat", RECTANGLE_BODY, 0.25, MOVER_STATIC, "svg/pet/ring.svg");
image_add("throat", RECTANGLE_BODY, 0.125, MOVER_STATIC, "svg/pet/ring.svg");
image_add("throat", RECTANGLE_BODY, 0, MOVER_STATIC, "svg/pet/ring.svg");
image_add("throat", RECTANGLE_BODY, -0.125, MOVER_STATIC, "svg/pet/ring.svg");
image_add("throat", RECTANGLE_BODY, -0.25, MOVER_STATIC, "svg/pet/ring.svg");
image_add("throat", RECTANGLE_BODY, -0.375, MOVER_STATIC, "svg/pet/ring.svg");

image_add("eyes", RECTANGLE_BODY, -0.45, MOVER_EYE, "svg/pet/eyes.svg");
image_add("ears", RECTANGLE_BODY, -0.4, MOVER_STATIC, "svg/pet/ears.svg");
image_add("eyelids", RECTANGLE_BODY, -0.525, MOVER_EYELID, "svg/pet/eyelids.svg");
image_add("eyebrows", RECTANGLE_BODY, -0.55, MOVER_EYEBROW, "svg/pet/eyebrows.svg");
image_add("head", RECTANGLE_BODY, -0.5, MOVER_STATIC, "svg/pet/head.svg");
image_add("jaw", RECTANGLE_BODY, -0.525, MOVER_JAW_LOWER, "svg/pet/jaw_lower.svg");
image_add("jaw", RECTANGLE_BODY, -0.55, MOVER_JAW_UPPER, "svg/pet/jaw_upper.svg");
image_add("nose", RECTANGLE_BODY, -0.6, MOVER_JAW_UPPER, "svg/pet/nose.svg");
image_add("teeth", RECTANGLE_BODY, -0.5, MOVER_JAW_LOWER, "svg/pet/teeth_lower.svg");
image_add("teeth", RECTANGLE_BODY, -0.525, MOVER_JAW_UPPER, "svg/pet/teeth_upper.svg");
image_add("tongue", RECTANGLE_BODY, -0.475, MOVER_STATIC, "svg/pet/tongue.svg");
image_add("throat", RECTANGLE_BODY, -0.45, MOVER_STATIC, "svg/pet/throat.svg");

image_add("tail", RECTANGLE_BODY, 0.125, MOVER_TAIL, "svg/pet/tail.svg");
image_add("feet", RECTANGLE_BODY, 0, MOVER_STATIC, "svg/pet/feet.svg");
image_add("arms", RECTANGLE_BODY, -0.2, MOVER_STATIC, "svg/pet/arms.svg");
image_add("hands", RECTANGLE_BODY, -0.25, MOVER_STATIC, "svg/pet/hands.svg");
image_add("chest", RECTANGLE_BODY, -0.25, MOVER_STATIC, "svg/pet/chest.svg");

image_add("shadow", RECTANGLE_BODY, 0, MOVER_LIGHTING, "svg/pet/shadow.svg");
image_add("lighting", RECTANGLE_BODY, -0.475, MOVER_LIGHTING, "svg/pet/lighting.svg");
image_add("eye_glow", RECTANGLE_BODY, -0.45, MOVER_STATIC, "svg/pet/eyes_glow.svg");
