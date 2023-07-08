// Author: Noor Zena
// Id: 60105071

function validateForm(){
	let name = validateField('name');
	let text = validateField('textmassage');
	let contact = validateField('contactInfoInput');

	let validForm = false;
	if (name && text && contact) {
		validForm = true;
	}else{
		validForm = false;
	}
	return validForm;
}


function validateField(fieldID){
	let name = document.getElementById(fieldID);
	let validName;
	if (name.value == "") {
		name.style.border = "1px solid red";
		name.placeholder = "Enter a Value here";
		validName = false;
	}else {
		name.style.border = " 1px solid black";
		name.placeholder = "";
		validName = true;
	}
	return validName;
	}


	function changeContactInfoType() {
		const contactMethodSelect = document.getElementById('contactMethodSelect');
		const contactInfoInput = document.getElementById('contactInfoInput');
		const selectedOption = contactMethodSelect.options[contactMethodSelect.selectedIndex].value;
	  
		if (selectedOption === 'Phone Call') {
		  contactInfoInput.type = 'tel';
		} else {
		  contactInfoInput.type = 'email';
		}
	  }
	  
	  const contactMethodSelect = document.getElementById('contactMethodSelect');
	  contactMethodSelect.addEventListener('change', changeContactInfoType);


// if email was chosen: 

// function validateEmail(){
//	let email = document.getElementById('Email');
//	let emailError = document.getElementById('EmailError');

//	if(email.value == ''){
//		email.placeholder = "Enter a Value here";
//		email.style.border = "1px solid red";
//		return false;

//	}else if(!email.value.includes('@') || !email.value.includes('.com')){
//		emailError.innerHTML = 'include @ symbol and .com at the end';
//		email.style.border = "1px solid red";
//		emailError.style.color = "red";
//		return false;

//	}else if(email.value.slice(-5,-4) == '@'){
//		emailError.innerHTML = 'Enter a valid email';
//		email.style.border = "1px solid red";
//		emailError.style.color = "red";
//		return false;

//	}else{
//		emailError.innerHTML = '';
//		email.style.border = "none";
//		return true
// 	}
	
// }

