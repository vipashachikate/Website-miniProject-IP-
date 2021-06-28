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