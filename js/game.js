// element_add(id, rectangle, movetypes, depth, background-image)
// rectangle: [center_x %, center_y %, scale_x %, scale_y %]
// movetypes: [[type, factor, strength-x, strengty-y]]
// movetypes, type = cursor: Follow mouse cursor
// movetypes, type = zoom: Follow zoom level

var movetype_static = [];
var movetype_eye = [["cursor", 2, 0.5, 0.5]];
var movetype_eyelid = [["zoom", 1, 0, -0.5]];
var movetype_jaw_lower = [["zoom", 2, 0, 2.5]];
var movetype_jaw_upper = [["zoom", 2, 0, -0.75]];
var movetype_lighting = [["zoom", 2, 0, -1]];

var rectangle_ear_left = [57.5, 47.5, 30, 30];
var rectangle_ear_right = [42.5, 47.5, 30, 30];
var rectangle_head = [50, 52.5, 30, 30];

element_add("throat", rectangle_head, 0.5, movetype_static, "svg/pet/ring.svg");
element_add("throat", rectangle_head, 0.375, movetype_static, "svg/pet/ring.svg");
element_add("throat", rectangle_head, 0.25, movetype_static, "svg/pet/ring.svg");
element_add("throat", rectangle_head, 0.125, movetype_static, "svg/pet/ring.svg");
element_add("throat", rectangle_head, 0, movetype_static, "svg/pet/ring.svg");
element_add("throat", rectangle_head, -0.125, movetype_static, "svg/pet/ring.svg");
element_add("throat", rectangle_head, -0.25, movetype_static, "svg/pet/ring.svg");
element_add("throat", rectangle_head, -0.375, movetype_static, "svg/pet/ring.svg");

element_add("eye", rectangle_head, -0.45, movetype_eye, "svg/pet/eye_left.svg");
element_add("eye", rectangle_head, -0.45, movetype_eye, "svg/pet/eye_right.svg");

element_add("ear", rectangle_ear_left, -0.4, movetype_static, "svg/pet/ear_left.svg");
element_add("ear", rectangle_ear_right, -0.4, movetype_static, "svg/pet/ear_right.svg");
element_add("eyelid", rectangle_head, -0.525, movetype_eyelid, "svg/pet/eyelid_left.svg");
element_add("eyelid", rectangle_head, -0.525, movetype_eyelid, "svg/pet/eyelid_right.svg");
element_add("eyebrow", rectangle_head, -0.55, movetype_eyelid, "svg/pet/eyebrow_left.svg");
element_add("eyebrow", rectangle_head, -0.55, movetype_eyelid, "svg/pet/eyebrow_right.svg");
element_add("head", rectangle_head, -0.5, movetype_static, "svg/pet/head.svg");
element_add("jaw", rectangle_head, -0.525, movetype_jaw_lower, "svg/pet/jaw_lower.svg");
element_add("jaw", rectangle_head, -0.55, movetype_jaw_upper, "svg/pet/jaw_upper.svg");
element_add("nose", rectangle_head, -0.6, movetype_jaw_upper, "svg/pet/nose.svg");
element_add("teeth", rectangle_head, -0.5, movetype_jaw_lower, "svg/pet/teeth_lower.svg");
element_add("teeth", rectangle_head, -0.525, movetype_jaw_upper, "svg/pet/teeth_upper.svg");
element_add("uvula", rectangle_head, -0.45, movetype_static, "svg/pet/uvula.svg");
element_add("tongue", rectangle_head, -0.475, movetype_static, "svg/pet/tongue.svg");
element_add("throat", rectangle_head, -0.45, movetype_static, "svg/pet/throat.svg");

element_add("lighting", rectangle_head, -0.475, movetype_lighting, "svg/pet/lighting.svg");
element_add("eye_glow", rectangle_head, -0.45, movetype_static, "svg/pet/eye_glow_left.svg");
element_add("eye_glow", rectangle_head, -0.45, movetype_static, "svg/pet/eye_glow_right.svg");
