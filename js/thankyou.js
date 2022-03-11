// Using ES6 feature.
let redirect_Page = () => {
	let tID = setTimeout(function () {
		window.location.href = 'https://mdiadk.netlify.app/';
		window.clearTimeout(tID); // clear time out.
	}, 5000);
};

redirect_Page();

// Using regular methods.
/* function redirect_Page () {
      var tID = setTimeout(function () {
          window.location.href = "https://www.encodedna.com/javascript/operators/default.htm";
          window.clearTimeout(tID);		// clear time out.
      }, 5000);
  } */
