function validate(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    if(name=='' && email==''){
        window.alert("Please fill all the fields..");
    }
    if(name!='' && email!=''){
        window.alert("Successfully signed up");
    }
}
function check(){
    var mailid = document.getElementById("mailid").value;
    if(mailid==''){
        window.alert("Please enter your mail id...");
    }
    else{
        window.alert("You will get updates on your mentioned mail id");
    }
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("Slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}