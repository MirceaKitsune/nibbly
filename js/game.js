// layer_add(id, rectangle, movers, depth, images)
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

layer_add("throat", RECTANGLE_BODY, 0.5, MOVER_STATIC, ["svg/pet/ring.svg"]);
layer_add("throat", RECTANGLE_BODY, 0.375, MOVER_STATIC, ["svg/pet/ring.svg"]);
layer_add("throat", RECTANGLE_BODY, 0.25, MOVER_STATIC, ["svg/pet/ring.svg"]);
layer_add("throat", RECTANGLE_BODY, 0.125, MOVER_STATIC, ["svg/pet/ring.svg"]);
layer_add("throat", RECTANGLE_BODY, 0, MOVER_STATIC, ["svg/pet/ring.svg"]);
layer_add("throat", RECTANGLE_BODY, -0.125, MOVER_STATIC, ["svg/pet/ring.svg"]);
layer_add("throat", RECTANGLE_BODY, -0.25, MOVER_STATIC, ["svg/pet/ring.svg"]);
layer_add("throat", RECTANGLE_BODY, -0.375, MOVER_STATIC, ["svg/pet/ring.svg"]);

layer_add("eyes", RECTANGLE_BODY, -0.45, MOVER_EYE, ["svg/pet/eye_left.svg", "svg/pet/eye_right.svg"]);
layer_add("ears", RECTANGLE_BODY, -0.4, MOVER_STATIC, ["svg/pet/ear_left.svg", "svg/pet/ear_right.svg"]);
layer_add("eyelids", RECTANGLE_BODY, -0.525, MOVER_EYELID, ["svg/pet/eyelid_left.svg", "svg/pet/eyelid_right.svg"]);
layer_add("eyebrows", RECTANGLE_BODY, -0.55, MOVER_EYEBROW, ["svg/pet/eyebrow_left.svg", "svg/pet/eyebrow_right.svg"]);
layer_add("head", RECTANGLE_BODY, -0.5, MOVER_STATIC, ["svg/pet/head.svg"]);
layer_add("jaw", RECTANGLE_BODY, -0.525, MOVER_JAW_LOWER, ["svg/pet/jaw_lower.svg"]);
layer_add("jaw", RECTANGLE_BODY, -0.55, MOVER_JAW_UPPER, ["svg/pet/jaw_upper.svg"]);
layer_add("nose", RECTANGLE_BODY, -0.6, MOVER_JAW_UPPER, ["svg/pet/nose.svg"]);
layer_add("teeth", RECTANGLE_BODY, -0.5, MOVER_JAW_LOWER, ["svg/pet/teeth_lower.svg"]);
layer_add("teeth", RECTANGLE_BODY, -0.525, MOVER_JAW_UPPER, ["svg/pet/teeth_upper.svg"]);
layer_add("uvula", RECTANGLE_BODY, -0.45, MOVER_STATIC, ["svg/pet/uvula.svg"]);
layer_add("tongue", RECTANGLE_BODY, -0.475, MOVER_STATIC, ["svg/pet/tongue.svg"]);
layer_add("throat", RECTANGLE_BODY, -0.45, MOVER_STATIC, ["svg/pet/throat.svg"]);

layer_add("tail", RECTANGLE_BODY, 0.125, MOVER_TAIL, ["svg/pet/tail.svg"]);
layer_add("feet", RECTANGLE_BODY, 0, MOVER_STATIC, ["svg/pet/foot_left.svg", "svg/pet/foot_right.svg"]);
layer_add("arms", RECTANGLE_BODY, -0.2, MOVER_STATIC, ["svg/pet/arm_left.svg", "svg/pet/arm_right.svg"]);
layer_add("hands", RECTANGLE_BODY, -0.25, MOVER_STATIC, ["svg/pet/hand_left.svg", "svg/pet/hand_right.svg"]);
layer_add("chest", RECTANGLE_BODY, -0.25, MOVER_STATIC, ["svg/pet/chest.svg"]);

layer_add("shadow", RECTANGLE_BODY, 0, MOVER_LIGHTING, ["svg/pet/shadow.svg"]);
layer_add("lighting", RECTANGLE_BODY, -0.475, MOVER_LIGHTING, ["svg/pet/lighting.svg"]);
layer_add("eye_glow", RECTANGLE_BODY, -0.45, MOVER_STATIC, ["svg/pet/eye_glow_left.svg", "svg/pet/eye_glow_right.svg"]);
