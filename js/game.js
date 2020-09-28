// layer_add(id, rectangle, movers, depth, images)
// rectangle: [center_x %, center_y %, scale_x %, scale_y %]
// movers: [[type, factor, offset-rectangle]]
// movers, type = cursor: Follow mouse cursor
// movers, type = zoom: Follow zoom level
// movers, type = interval: Move at an established interval

var rectangle_body = [50, 50, 50, 50];

var mover_static = [];
var mover_eye = [["cursor", 2, [0.5, 0.5, 0, 0]]];
var mover_eyelid = [["zoom", 1, [0, -0.5, 0, 0]], ["interval", 50, [0, 4, 0, 4]]];
var mover_eyebrow = [["zoom", 1, [0, -1, 0, 0]], ["interval", 50, [0, 0, 0, 8]]];
var mover_jaw_lower = [["zoom", 2, [0, 3, 0, 0]]];
var mover_jaw_upper = [["zoom", 2, [0, -1, 0, 0]]];
var mover_lighting = [["zoom", 2, [0, -1.5, 0, 0]]];

layer_add("throat", rectangle_body, 0.5, mover_static, ["svg/pet/ring.svg"]);
layer_add("throat", rectangle_body, 0.375, mover_static, ["svg/pet/ring.svg"]);
layer_add("throat", rectangle_body, 0.25, mover_static, ["svg/pet/ring.svg"]);
layer_add("throat", rectangle_body, 0.125, mover_static, ["svg/pet/ring.svg"]);
layer_add("throat", rectangle_body, 0, mover_static, ["svg/pet/ring.svg"]);
layer_add("throat", rectangle_body, -0.125, mover_static, ["svg/pet/ring.svg"]);
layer_add("throat", rectangle_body, -0.25, mover_static, ["svg/pet/ring.svg"]);
layer_add("throat", rectangle_body, -0.375, mover_static, ["svg/pet/ring.svg"]);

layer_add("eyes", rectangle_body, -0.45, mover_eye, ["svg/pet/eye_left.svg", "svg/pet/eye_right.svg"]);
layer_add("ears", rectangle_body, -0.4, mover_static, ["svg/pet/ear_left.svg", "svg/pet/ear_right.svg"]);
layer_add("eyelids", rectangle_body, -0.525, mover_eyelid, ["svg/pet/eyelid_left.svg", "svg/pet/eyelid_right.svg"]);
layer_add("eyebrows", rectangle_body, -0.55, mover_eyebrow, ["svg/pet/eyebrow_left.svg", "svg/pet/eyebrow_right.svg"]);
layer_add("head", rectangle_body, -0.5, mover_static, ["svg/pet/head.svg"]);
layer_add("jaw", rectangle_body, -0.525, mover_jaw_lower, ["svg/pet/jaw_lower.svg"]);
layer_add("jaw", rectangle_body, -0.55, mover_jaw_upper, ["svg/pet/jaw_upper.svg"]);
layer_add("nose", rectangle_body, -0.6, mover_jaw_upper, ["svg/pet/nose.svg"]);
layer_add("teeth", rectangle_body, -0.5, mover_jaw_lower, ["svg/pet/teeth_lower.svg"]);
layer_add("teeth", rectangle_body, -0.525, mover_jaw_upper, ["svg/pet/teeth_upper.svg"]);
layer_add("uvula", rectangle_body, -0.45, mover_static, ["svg/pet/uvula.svg"]);
layer_add("tongue", rectangle_body, -0.475, mover_static, ["svg/pet/tongue.svg"]);
layer_add("throat", rectangle_body, -0.45, mover_static, ["svg/pet/throat.svg"]);

layer_add("lighting", rectangle_body, -0.475, mover_lighting, ["svg/pet/lighting.svg"]);
layer_add("eye_glow", rectangle_body, -0.45, mover_static, ["svg/pet/eye_glow_left.svg", "svg/pet/eye_glow_right.svg"]);
