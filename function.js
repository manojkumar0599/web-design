function submitaction()
{
var firstname = document.getElementById("fname").value;
var lastname = document.getElementById("lname").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var consultation = document.getElementById("invest").value;
var message = document.getElementById("message").value;

if(firstname == "")
{
alert('Please Enter First Name');
document.getElementById('fname').style.borderColor = "red";
document.getElementById("fname").value="enter name";
}
else if(lastname == ""){
document.getElementById('lname').style.borderColor = "red";
document.getElementById("lname").value="enter lastname";
}
else if(email == "")
{
document.getElementById('email').style.borderColor = "red";
document.getElementById("email").value="enter email";
}
else if(phone == "")
{
document.getElementById('phone').style.borderColor = "red";
document.getElementById("phone").value="enter phone";
}
else if(consultation == "")
{
document.getElementById('invest').style.borderColor = "red";
document.getElementById("invest").value="enter value";
}
else if(message == "")
{
document.getElementById('message').style.borderColor = "red";
document.getElementById("message").value="enter message";
}
else{
alert("submit success "+firstname)
}
	
}
