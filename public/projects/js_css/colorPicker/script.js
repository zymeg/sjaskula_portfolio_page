const picker_div = document.getElementById('picker');
const color_div = document.getElementById('color_div');

const rgb_r = document.getElementById('rgb-r');
const hex_r = document.getElementById('hex-r');
const per_r = document.getElementById('per-r');
const range_r = document.getElementById('range-r');

const rgb_g = document.getElementById('rgb-g');
const hex_g = document.getElementById('hex-g');
const per_g = document.getElementById('per-g');
const range_g = document.getElementById('range-g');

const rgb_b = document.getElementById('rgb-b');
const hex_b = document.getElementById('hex-b');
const per_b = document.getElementById('per-b');
const range_b = document.getElementById('range-b');

function color() {
	if((hex_r.value != undefined && hex_r.value != '0') && hex_r.value.length == 2) var red = hex_r.value;
	else if(hex_r.value.length == 1) var red = '0' + hex_r.value;
	else var red = '00';
	if((hex_g.value != undefined && hex_g.value != '0') && hex_g.value.length == 2) var green = hex_g.value;
	else if(hex_g.value.length == 1) var green = '0' + hex_g.value;
	else var green = '00';
	if((hex_g.value != undefined && hex_b.value != '0') && hex_b.value.length == 2) var blue = hex_b.value;
	else if(hex_b.value.length == 1) var blue = '0' + hex_b.value;
	else var blue = '00';
	
	color_div.style.backgroundColor = '#' + red + green + blue;

}

rgb_r.addEventListener('keyup', () => {
	if(rgb_r.value > 255) rgb_r.value = 255;
	hex_r.value = parseInt(rgb_r.value).toString(16).slice(0, 2);
	per_r.value = parseInt((rgb_r.value * 100) / 255).toString().slice(0, 3);
	range_r.value = per_r.value;
	color();
});

hex_r.addEventListener('keyup', () => {
	rgb_r.value = parseInt(hex_r.value, 16).toString().slice(0, 3);
	per_r.value = parseInt((rgb_r.value * 100) / 255).toString().slice(0, 3);
	range_r.value = per_r.value;
	color();
});

per_r.addEventListener('keyup', () => {
	rgb_r.value = parseInt((per_r.value * 255) / 100).toString().slice(0, 3);
	hex_r.value = parseInt(rgb_r.value).toString(16).slice(0, 2);
	range_r.value = per_r.value;
	color();
});

range_r.addEventListener('mousedown', () => {
	range_r.addEventListener('mousemove', () => {
	rgb_r.value = parseInt((range_r.value * 255) / 100).toString().slice(0, 3);
	hex_r.value = parseInt(rgb_r.value).toString(16).slice(0, 2);
	per_r.value = range_r.value;
	color();
})});

rgb_g.addEventListener('keyup', () => {
	if(rgb_g.value > 255) {rgb_g.value = 255;}
	hex_g.value = parseInt(rgb_g.value).toString(16).slice(0, 2);
	per_g.value = parseInt((rgb_g.value * 100) / 255).toString().slice(0, 3);
	range_g.value = per_g.value;
	color();
});

hex_g.addEventListener('keyup', () => {
	rgb_g.value = parseInt(hex_g.value, 16).toString().slice(0, 3);
	per_g.value = parseInt((rgb_g.value * 100) / 255).toString().slice(0, 3);
	range_g.value = per_g.value;
	color();
});

per_g.addEventListener('keyup', () => {
	rgb_g.value = parseInt((per_g.value * 255) / 100).toString().slice(0, 3);
	hex_g.value = parseInt(rgb_g.value).toString(16).slice(0, 2);
	range_g.value = per_g.value;
	color();
});

range_g.addEventListener('mousedown', () => {
	range_g.addEventListener('mousemove', () => {
	rgb_g.value = parseInt((range_g.value * 255) / 100).toString().slice(0, 3);
	hex_g.value = parseInt(rgb_g.value).toString(16).slice(0, 2);
	per_g.value = range_g.value;
	color();
})});

rgb_b.addEventListener('keyup', () => {
	if(rgb_b.value > 255) {rgb_b.value = 255;}
	hex_b.value = parseInt(rgb_b.value).toString(16).slice(0, 2);
	per_b.value = parseInt((rgb_b.value * 100) / 255).toString().slice(0, 3);
	range_b.value = per_b.value;
	color();
});

hex_b.addEventListener('keyup', () => {
	rgb_b.value = parseInt(hex_b.value, 16).toString().slice(0, 3);
	per_b.value = parseInt((rgb_b.value * 100) / 255).toString().slice(0, 3);
	range_b.value = per_b.value;
	color();
});

per_b.addEventListener('keyup', () => {
	rgb_b.value = parseInt((per_b.value * 255) / 100).toString().slice(0, 3);
	hex_b.value = parseInt(rgb_b.value).toString(16).slice(0, 2);
	range_b.value = per_b.value;
	color();
});

range_b.addEventListener('mousedown', () => {
	range_b.addEventListener('mousemove', () => {
	rgb_b.value = parseInt((range_b.value * 255) / 100).toString().slice(0, 3);
	hex_b.value = parseInt(rgb_b.value).toString(16).slice(0, 2);
	per_b.value = range_b.value;
	color();
})});
