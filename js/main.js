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
