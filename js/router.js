window.addEventListener('load', function(e) {
	console.log("Window Loaded");
	sortHash(location.hash, 'load');
})
window.addEventListener('hashchange', function(e) {
	console.log("Hash Changed")
	sortHash(location.hash, 'change');
})


function sortHash(hash, reqType) {
	if (!hash) {
		hash = "index";
	}else{
		hash = hash.split('#')[1];
	}

	if (hash === "index") {
		console.log("Render Index")
		$('.app').load("./templates/index.html");
	}else if (hash === "signin") {
		console.log("Render Signin")
		$('.app').load("./templates/signin.html");
	}else if (hash === "signup") {
		console.log("Render Sign up")
		$('.app').load("./templates/signup.html");
	}
}

