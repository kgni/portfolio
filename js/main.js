document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		});
	});
});

const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

postcss([autoprefixer])
	.process(css)
	.then((result) => {
		result.warnings().forEach((warn) => {
			console.warn(warn.toString());
		});
		console.log(result.css);
	});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
