$(document).ready(function() {
	$('a.login-window').unbind('click').bind('click', function() {
		
		// Add the popup to body when there is no existing popup yet
		if($('body').find('#myH-login').length == 0){
			var markup = "<div id='myH-login' style='display:none;'>" 
					+		"<div class='myH-login-header'>Login</div>"
					+		"<div class='myH-login-content'>"
					+			"<div class='myH-user-login'>Email</div>"
					+			"<input type='text' class='myH-user-text myH-input-login' size='35'></input>"
					+			"<div class='myH-pass-login'>Password</div>"
					+			"<input type='password' class='myH-pass-text myH-input-login' size='35'></input>"
					+		"</div>"
					+		"<div class='myH-login-footer'>"
					+			"<div class='myH-close-btn myH-login-buttons'>Close</div>"
					+			"<div class='myH-login-btn myH-login-buttons'>Login</div>"
					+ 		"</div>"
					+	"</div>";
			$('body').append(markup);
			bindButtons();
		}
		$('#myH-overlay-login').removeClass('myH-hidden');
		$('#myH-login').fadeIn(1000);
		return false;
	});
	
	function bindButtons(){
		$('.myH-close-btn').unbind('click').bind('click', function(){
			$('#myH-overlay-login').addClass('myH-hidden');
			$('#myH-login').fadeOut(1000);
		});
	}
	// When clicking on the button close
	
});