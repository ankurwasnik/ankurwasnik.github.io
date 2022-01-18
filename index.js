/*
var btn_hireme = document.getElementById('btn-hire');
btn_hireme.onclick = function(){
     alert("You can email me at ankurwasnik358@gmail.com");
}
*/

var element = document.getElementById('currentYear') ;
var currentYear = new Date().getFullYear();
var string = "Copyright Ankur Wasnik ";
string = string.concat(currentYear);
element.innerHTML = string ;