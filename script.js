/** Callback function for sign in **/

function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	$(".g-signin2").css("display", "none");
	$(".data").css("display", "block");

	/** loading user data **/
	$("#user-name").html(`Hello ${profile.getName()}`);
	$("#pic").attr("src", profile.getImageUrl());
	$("#user-email").text(profile.getEmail());
}


/*** callback function for sign out ***/
function signOut() {

	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function() {

		$(".g-signin2").css("display", "block");
		$(".data").css("display", "none");
		alert("Hope to see you again.");
	})

}
