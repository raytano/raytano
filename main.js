/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var objPeople = [
	
	{ // Object @ 1 index
		username: "raytano",
		password: "pirate13"
	},
	{ // Object @ 2 index
		username: "ouems",
		password: "ouems95@"
	},
	{ // Object @ 2 index
		username: "fortune",
		password: "fortune2000"
	}

]
var objPeopl = [
	{ // Object @ 0 index
		username: "lyell",
		password: "lyllou"
	},
]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
            alert("welcome " + username)
			console.log(username + " is logged in!!!")
            window.location.replace("achat/index.html")
			// stop the function if this is found to be true
			return
		}
	}
	for(var i = 0; i < objPeopl.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeopl[i].username && password == objPeopl[i].password) {
            alert("Welcome Lyell, I love you so much (°~~°)")
			console.log(username + " is logged in!!!")
            window.location.replace("lyell.html")
			// stop the function if this is found to be true
			return
		}
	
	}
    alert("Incorrect information")
	console.log("incorrect username or password")
}