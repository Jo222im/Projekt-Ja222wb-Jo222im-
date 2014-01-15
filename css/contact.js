
(function() {

	// skapar ett element
	var inputs = document.createElement('input');
	
	// skapar en variabel till contactformuläret
	var supports = {};
	
	supports.autofocus   = 'autofocus' in inputs;
	supports.required    = 'required' in inputs;
	supports.placeholder = 'placeholder' in inputs;

	// om inte användaren skriver i fältet
	if(!supports.autofocus) {
		
	}
	
	// om använderen inte skriver i fältet
	if(!supports.required) {
		
	}

	// om användaren inte skriver i fältet
	if(!supports.placeholder) {
		
	}
	
	// om använderen inte har skrivit något i fältet ombeds han att göra det.
	var send = document.getElementById('contact-submit');
	if(send) {
		send.onclick = function () {
			
			
			
			this.innerHTML = '...Thank you';
			
			console.log('input');

		}
	}

}
)

();