function accounts()
 {
    var x = document.getElementById("list");
    if (x.style.display === "none") { x.style.display = "block"; }
    else { x.style.display = "none"; }
}

function stopAds()
 {
    var x = document.getElementById("ads");
    if (x.style.display === "none") { x.style.display = "block"; }
    else { x.style.display = "none"; }
}

function more()
 {
     var y = document.getElementById("moreContainers");
     y.style.display = "block";
     var x = document.getElementById("buttonMore");
    if (x.style.display === "none") { x.style.display = "block"; }
    else { x.style.display = "none"; }
}

function stopAds2()
 {
    var x = document.getElementById("ads2");
    if (x.style.display === "none") { x.style.display = "block"; }
    else { x.style.display = "none"; }
}
//Anas's Code
/* Login Function */
function CheckIfLoginValid() {
  var valid = true;
  if(document.box.email.value.indexOf("@")==-1||document.box.email.value.indexOf(".")==-1){
    alert("Please Enter a valid email, ex: example@gmail.com");
    document.box.email.focus();
    valid=false; 
  }
return valid;
} 
/* Register Function */
function CheckIfRegisterValid() {
  var valid1 = true;
  if(document.box.username.value==""){
    alert("Username should not Be empty");
    document.box.username.focus();
    valid1=false;
  }
  else if(document.box.username.value.indexOf(" ")!=-1){
    alert("Username should not countain spaces");
    document.box.username.focus();
    valid1=false;
  }
  else if(document.box.email.value.indexOf("@")==-1||document.box.email.value.indexOf(".")==-1){
    alert("Please Enter a valid email, ex: example@gmail.com");
    document.box.email.focus();
    valid1=false; 
  }
  else if(document.box.password.value==""){
    alert("Password should not Be empty");
    document.box.password.focus();
    valid1=false;
  }
  else if(document.box.password.value.length<8 || document.box.password.value.indexOf(" ")!=-1){
    alert("Password should countain more or equal to 8 letter and numbers and it should not have spaces");
    document.box.password.focus();
    valid1=false;
  }
  else{
    valid1=true;
  }
return valid1;
}
/* Admin Validation Function */
function CheckIfAdminValid() {
  document.getElementById("AdminValidation").style.display = "none";
  var valida = false;
  if(document.getElementById("admincode").value=="123456"||document.getElementById("admincode").value=="78910"){
    valida=true; 
    document.getElementById("adminShow").style.display ="block";
  
  }
  else{
    alert("Please Enter a valid Admin Code");
    document.menu.content.body.admincode.focus();
  }
return valida;
}
/* Show and close Admin Menu/ Validation Window*/
function ShowAdminValidation(){
  document.getElementById("AdminValidation").style.display ="block";
}
window.onclick = function(event) {
  if (event.target == document.getElementById("AdminValidation")) {
    document.getElementById("AdminValidation").style.display = "none";
  }
  if (event.target == document.getElementById("AdminMenu")) {
    document.getElementById("AdminMenu").style.display = "none";
  }
}
function ShowAdminMenu(){
  document.getElementById("AdminMenu").style.display ="block";
}

/* Back Ground Color */
document.getElementById("BgColor").addEventListener("change",Apply);
function Apply(){
  var x = document.getElementById("BgColor").value;
  document.body.style.backgroundColor = x;
}


function Theme1(){
  document.body.style.backgroundColor="white";
  document.getElementById("lp").style.backgroundColor="#f1f1f1";
  document.getElementById("banner").style.backgroundImage="url('css/home-banner.jpg')";
  document.body.style.fontFamily="Courier New";
  document.getElementById("nvbar").classList.remove('navpar2');
  document.getElementById("nvbar").classList.remove('navpar3');
}
function Theme2(){
  document.body.style.backgroundColor="#ced4da";
  document.body.style.fontFamily="Serif";
  document.getElementById("lp").style.backgroundColor="#ced4da";
  document.getElementById("banner").style.backgroundImage="url('home-banner2.jpg')";
  document.getElementById("nvbar").classList.remove('navpar3');
  document.getElementById("nvbar").classList.add('navpar2');
}
function Theme3(){
  document.body.style.backgroundColor="#d8d8d8";
  document.body.style.fontFamily="Helvetica";
  document.getElementById("lp").style.backgroundColor="#d8d8d8";
  document.getElementById("banner").style.backgroundImage="url('home-banner3.jpg')";
  document.getElementById("nvbar").classList.remove('navpar2');
  document.getElementById("nvbar").classList.add('navpar3');
}











