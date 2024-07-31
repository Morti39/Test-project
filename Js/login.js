function LoginMenu() {
	var e = document.getElementById('login')
	if(e.style.display == 'none') {
		e.style.display = "block";
	}
	else {
		e.style.display = "none";
	}
}
function login(el) {
	var username = el.username.value;
	var password =el.password.value;
	if(username == 'morti' && password == '12345'){
		console.log('Победа');
	} 
	else {
		console.log('Ты шиз?');
	}	
	return false;
}