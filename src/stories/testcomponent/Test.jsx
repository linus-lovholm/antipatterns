// COLORS
// "yellow"
// #f6f6ff - light grey
// #4a412a - Pantone 448 C (Worst color in the world)
// #4e4326 - Pantone 448 C saturated
// #8000000 - WEbsafe Mar00n
import React from 'react';
import { useState } from 'react';

export default function Test(props) {
	const [style, setStyle] = useState({ height: '100px' });
	let colors = ['yellow', '#4a412a', 'lightyellow', '#40e0d0'];
	let fonts = ['Times New Roman', 'Comic Sans MS', 'Brush Script MT', 'Courier New'];
	let backgrounds = ['#4a412a', 'ff25b4', '#ffffff'];
	let currentColor = 0;
	let currentFont = 0;
	let currentBackground = 0;
	let doc = document.querySelectorAll('h1');

	function changeColor() {
		--currentColor;
		if (currentColor < 0) currentColor = colors.length - 1;
		for (var i = 0; i < doc.length; i++) {
			setStyle({ ...style, color: colors[(currentColor + i) % colors.length] });
		}
	}
	window.setInterval(changeColor, 5000);

	function changeFont() {
		--currentFont;
		if (currentFont < 0) currentFont = fonts.length - 1;
		for (var i = 0; i < doc.length; i++) {
			setStyle({ ...style, fontFamily: fonts[(currentFont + i) % fonts.length] });
		}
	}
	window.setInterval(changeFont, 4200);

	function changeBackground() {
		--currentBackground;
		if (currentBackground < 0) currentBackground = backgrounds.length - 1;
		for (var i = 0; i < doc.length; i++) {
			setStyle({ ...style, backgroundColor: backgrounds[(currentBackground + i) % backgrounds.length] });
		}
	}
	window.setInterval(changeBackground, 4000);

	return <h1 style={style}>Anmälan till ampLiFy!11!!1</h1>;
}
