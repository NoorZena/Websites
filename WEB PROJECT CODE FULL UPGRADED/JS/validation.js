// Author: Noor Zena
// Id: 60105071

function validateForm(){
	let Fname = validateField('FN');
	let username = validateField('username');
	let pass = validatePassword();
	let passCon = passwordConfirm();
	let dob = validateDOB();
	let age = validateAge();
	let phone = validatePhone();
	let valide = validateEmail();
	let emailCon = emailConfirm();
	let vbuild = buildNum();
	let streetname = validateField('streetname');

	let validForm = false;

	if (Fname && username && pass && passCon && dob 
		&& age && phone && valide && emailCon 
		&& vbuild && streetname) {
		return true;
	}else{
		return validForm;
	}
	
}





function validateField(fieldID){
	let name = document.getElementById(fieldID);
	//let validName;
	if (name.value == "") {
		name.style.border = "1px solid red";
		name.placeholder = "Enter a Value here";
		return false;
	}
	//if(!name.matches("[a-zA-Z]+")){
		//nw. 
	//}
	else {
		name.style.border = " 1px solid black";
		name.placeholder = "";
		return true;
	}
}


function validatePassword(){
	let pass = document.getElementById('pass');
	let passError = document.getElementById('passError');
	if (pass.value == ''){
		pass.style.border = "1px solid red";
		pass.placeholder = "Enter a Value here";
		return false;

	}else if (pass.value.length < 8){
		passError.innerHTML = 'Password must be 8 characters long';
		pass.style.border = "1px solid red";
		passError.style.color = "red";
		return false;

	}
	else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(pass.value)) {
		passError.innerHTML = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
		pass.style.border = "1px solid red";
		passError.style.color = "red";
		return false;
	}
	else{
		passError.innerHTML = '';
		pass.style.border = "none";
		return true;

	}
}
//special ch above nw ((?=.*[@#$%^&+=!])(?=.*[^\s]).{8,}$/)

function passwordConfirm(){
	let pass = document.getElementById('pass');
	let passCon = document.getElementById('passCon');
	let passError2 = document.getElementById('passError2');

	if (passCon.value == ''){
		passCon.style.border = "1px solid red";
		passCon.placeholder = "Enter a Value here";
		return false;
	}else if (passCon.value != pass.value){
		passError2.innerHTML = 'the password must match the original password';
		passCon.style.border = "1px solid red";
		passError2.style.color = "red";
		return false;
	}else{
		passError2.innerHTML = '';
		passCon.style.border = "none";
		return true;

	}
}

function showPass(){
	let pass = document.getElementById("pass");
	var checkBox = document.getElementById('showPass');
	//console.log(checkBox);

  	if (checkBox.checked) {
    	pass.type = "text";
    	//console.log(pass);
  	} else {
   		pass.type = "password";
   		//console.log(pass);
  		}
}
//nw ^

function validateEmail(){
	let email = document.getElementById('email');
	let emailError = document.getElementById('emailError');

	if(email.value == ''){
		email.placeholder = "Enter a Value here";
		email.style.border = "1px solid red";
		return false;

	}else if(!email.value.includes('@') || !email.value.includes('.edu.qa')){
		emailError.innerHTML = 'include @ symbol and .edu.qa at the end';
		email.style.border = "1px solid red";
		emailError.style.color = "red";
		return false;

	}else if(email.value.slice(-8,-7) == '@'){
		emailError.innerHTML = 'Enter a valid email';
		email.style.border = "1px solid red";
		emailError.style.color = "red";
		return false;

	}else{
		emailError.innerHTML = '';
		email.style.border = "none";
		return true
	}
	
}
function emailConfirm(){
	let email = document.getElementById('email');
	let emailCon = document.getElementById('emailCon');
	let emailError2 = document.getElementById('emailError2');
	if (emailCon.value == ''){
		emailCon.style.border = "1px solid red";
		emailCon.placeholder = "Enter a Value here";
		return false;
	}else if (!(email.value == emailCon.value)){
		emailError2.innerHTML = 'the email must match the original email';
		emailCon.style.border = "1px solid red";
		emailError2.style.color = "red";
		return false;
	}else{
		emailError2.innerHTML = '';
		emailCon.style.border = "none";
		return true;

	}
}


function validatePhone(){
	let phone = document.getElementById('Phone');
	let numError = document.getElementById('numError');
	if (phone.value == ''){
		phone.placeholder = 'Enter a Value here';
		phone.style.border = "1px solid red";
		return false;

	}else if (!(/^[0-9]+$/.test(phone.value))){
		numError.innerHTML = 'enter only digits';
		phone.style.border = "1px solid red";
		numError.style.color = 'red';
		return false;

	}else if(phone.value.length < 12 || phone.value.length > 12){
		numError.innerHTML = 'enter 12 digits only';
		phone.style.border = "1px solid red";
		numError.style.color = 'red';
		return false;

	}else{
		numError.innerHTML = '';
		phone.style.border = "none";
		return true
	}
}


function validateDOB(){
	let dob = document.getElementById('dob');
	if (dob.value == ''){
		dob.style.border = "1px solid red";
		return false;

	}else{
		dob.style.border = "none";
		return true
	}
}


function validateAge(){
	let dob = document.getElementById('dob').value;
	let age = document.getElementById('age');
	let ageError = document.getElementById('ageError');
	let birthDate = new Date(dob);
	let birthYear = birthDate.getFullYear();
	let today = new Date();
	let currYear = today.getFullYear()
	let calcAge = currYear - birthYear

	if (age.value == ''){
		age.placeholder = 'Enter a Value here';
		age.style.border = "1px solid red";
		return false;

	}else if(!(calcAge == age.value)){
		ageError.innerHTML = 'enter your correct age';
		age.style.border = "1px solid red";
		ageError.style.color = 'red';
		return false;

	}else if(age.value > 100 || age.value < 18){
		ageError.innerHTML = 'your age must be more than 18 and less than 100';
		age.style.border = "1px solid red";
		ageError.style.color = 'red';
		return false;

	}else{
		ageError.innerHTML = '';
		age.style.border = "none";``
		return true;
	}

}

/* second form validation*/

function buildNum(){
	let buildNum = document.getElementById('bldng');
	let bError = document.getElementById('bError');
	if(buildNum.value == ''){
		buildNum.placeholder = 'Enter a Value here';
		buildNum.style.border = "1px solid red";
		return false;

	}else if(buildNum.value > 9999 || buildNum.value < 1){
		bError.innerHTML = 'building # must be between 1 & 9999';
		buildNum.style.border = "1px solid red";
		bError.style.color = 'red';
		return false;

	}else{
		bError.innerHTML = '';
		buildNum.style.border = "none";``
		return true;
	}
}

