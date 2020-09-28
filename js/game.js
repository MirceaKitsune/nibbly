// layer_add(id, rectangle, movetypes, depth, images)
// rectangle: [center_x %, center_y %, scale_x %, scale_y %]
// movetypes: [[type, factor, strength-x, strengty-y]]
// movetypes, type = cursor: Follow mouse cursor
// movetypes, type = zoom: Follow zoom level

var rectangle_body = [50, 50, 50, 50];

var movetype_static = [];
var movetype_eye = [["cursor", 2, 0.5, 0.5]];
var movetype_eyelid = [["zoom", 1, 0, -0.5]];
var movetype_jaw_lower = [["zoom", 2, 0, 3]];
var movetype_jaw_upper = [["zoom", 2, 0, -1]];
var movetype_lighting = [["zoom", 2, 0, -1.5]];

layer_add("throat", rectangle_body, 0.5, movetype_static, ["svg/pet/ring.svg"]);
layer_add("throat", rectangle_body, 0.375, movetype_static, ["svg/pet/ring.svg"]);
layer_add("throat", rectangle_body, 0.25, movetype_static, ["svg/pet/ring.svg"]);
layer_add("throat", rectangle_body, 0.125, movetype_static, ["svg/pet/ring.svg"]);
layer_add("throat", rectangle_body, 0, movetype_static, ["svg/pet/ring.svg"]);
layer_add("throat", rectangle_body, -0.125, movetype_static, ["svg/pet/ring.svg"]);
layer_add("throat", rectangle_body, -0.25, movetype_static, ["svg/pet/ring.svg"]);
layer_add("throat", rectangle_body, -0.375, movetype_static, ["svg/pet/ring.svg"]);

layer_add("eyes", rectangle_body, -0.45, movetype_eye, ["svg/pet/eye_left.svg", "svg/pet/eye_right.svg"]);
layer_add("ears", rectangle_body, -0.4, movetype_static, ["svg/pet/ear_left.svg", "svg/pet/ear_right.svg"]);
layer_add("eyelids", rectangle_body, -0.525, movetype_eyelid, ["svg/pet/eyelid_left.svg", "svg/pet/eyelid_right.svg"]);
layer_add("eyebrows", rectangle_body, -0.55, movetype_eyelid, ["svg/pet/eyebrow_left.svg", "svg/pet/eyebrow_right.svg"]);
layer_add("head", rectangle_body, -0.5, movetype_static, ["svg/pet/head.svg"]);
layer_add("jaw", rectangle_body, -0.525, movetype_jaw_lower, ["svg/pet/jaw_lower.svg"]);
layer_add("jaw", rectangle_body, -0.55, movetype_jaw_upper, ["svg/pet/jaw_upper.svg"]);
layer_add("nose", rectangle_body, -0.6, movetype_jaw_upper, ["svg/pet/nose.svg"]);
layer_add("teeth", rectangle_body, -0.5, movetype_jaw_lower, ["svg/pet/teeth_lower.svg"]);
layer_add("teeth", rectangle_body, -0.525, movetype_jaw_upper, ["svg/pet/teeth_upper.svg"]);
layer_add("uvula", rectangle_body, -0.45, movetype_static, ["svg/pet/uvula.svg"]);
layer_add("tongue", rectangle_body, -0.475, movetype_static, ["svg/pet/tongue.svg"]);
layer_add("throat", rectangle_body, -0.45, movetype_static, ["svg/pet/throat.svg"]);

layer_add("lighting", rectangle_body, -0.475, movetype_lighting, ["svg/pet/lighting.svg"]);
layer_add("eye_glow", rectangle_body, -0.45, movetype_static, ["svg/pet/eye_glow_left.svg", "svg/pet/eye_glow_right.svg"]);
