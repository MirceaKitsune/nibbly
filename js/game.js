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

var rectangle_throat = [50, 50, 15, 10];
var rectangle_ear_left = [57.5, 47.5, 30, 30];
var rectangle_ear_right = [42.5, 47.5, 30, 30];
var rectangle_head = [50, 52.5, 30, 30];
var rectangle_lighting = [50, 49, 7.5, 2.5];

var gradient_throat = "#1f07002f 25%, #ffbfbfff 27.5%,#ffbfbfff 47.5%, #00000000 50%";
var gradient_eye = "#000000ff 25%, #0fbfffff 27.5%, #0fbfffff 45%, #ffffffff 50%, #ffffffff 70%, #ffffff00 75%";
var gradient_eye_glow = "#ffffff3f 47.5%, #ffffff00 50%";
var gradient_lighting = "#1f0b00bf 0%, #00000000 100%";

element_add("throat", rectangle_throat, 0.5, movetype_static, "radial-gradient(" + gradient_throat + ")");
element_add("throat", rectangle_throat, 0.375, movetype_static, "radial-gradient(" + gradient_throat + ")");
element_add("throat", rectangle_throat, 0.25, movetype_static, "radial-gradient(" + gradient_throat + ")");
element_add("throat", rectangle_throat, 0.125, movetype_static, "radial-gradient(" + gradient_throat + ")");
element_add("throat", rectangle_throat, 0, movetype_static, "radial-gradient(" + gradient_throat + ")");
element_add("throat", rectangle_throat, -0.125, movetype_static, "radial-gradient(" + gradient_throat + ")");
element_add("throat", rectangle_throat, -0.25, movetype_static, "radial-gradient(" + gradient_throat + ")");

element_add("eye", [46.5, 44, 6.25, 6.25], -0.45, movetype_eye, "radial-gradient(" + gradient_eye + ")");
element_add("eye", [53.5, 44, 6.25, 6.25], -0.45, movetype_eye, "radial-gradient(" + gradient_eye + ")");

element_add("ear", rectangle_ear_left, -0.4, movetype_static, "url(svg/ear_left.svg)");
element_add("ear", rectangle_ear_right, -0.4, movetype_static, "url(svg/ear_right.svg)");
element_add("eyelid", rectangle_head, -0.525, movetype_eyelid, "url(svg/eyelid_left.svg)");
element_add("eyelid", rectangle_head, -0.525, movetype_eyelid, "url(svg/eyelid_right.svg)");
element_add("eyebrow", rectangle_head, -0.55, movetype_eyelid, "url(svg/eyebrow_left.svg)");
element_add("eyebrow", rectangle_head, -0.55, movetype_eyelid, "url(svg/eyebrow_right.svg)");
element_add("head", rectangle_head, -0.5, movetype_static, "url(svg/head.svg)");
element_add("jaw", rectangle_head, -0.525, movetype_jaw_lower, "url(svg/jaw_lower.svg)");
element_add("jaw", rectangle_head, -0.55, movetype_jaw_upper, "url(svg/jaw_upper.svg)");
element_add("nose", rectangle_head, -0.6, movetype_jaw_upper, "url(svg/nose.svg)");
element_add("teeth", rectangle_head, -0.5, movetype_jaw_lower, "url(svg/teeth_lower.svg)");
element_add("teeth", rectangle_head, -0.525, movetype_jaw_upper, "url(svg/teeth_upper.svg)");
element_add("uvula", rectangle_head, -0.45, movetype_static, "url(svg/uvula.svg)");
element_add("tongue", rectangle_head, -0.475, movetype_static, "url(svg/tongue.svg)");
element_add("throat", rectangle_head, -0.45, movetype_static, "url(svg/throat.svg)");

element_add("lighting", rectangle_lighting, -0.475, movetype_lighting, "linear-gradient(" + gradient_lighting + ")");
element_add("eye_glow", [45, 42.5, 3.75, 5], -0.45, movetype_static, "radial-gradient(" + gradient_eye_glow + ")");
element_add("eye_glow", [52.5, 42.5, 3.75, 5], -0.45, movetype_static, "radial-gradient(" + gradient_eye_glow + ")");
