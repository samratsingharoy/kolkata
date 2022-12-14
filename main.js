function validationuser(){
    var name = document.getElementById("name").value;
    var email_address = document.getElementById("email_address").value;
    var message = document.getElementById("message").value;
    if (name!='') {
        if (email_address!='') {
            if (message!='') {
                
            } else {
                alert('Please Enter A Valid Message')
            }
        } else {
            alert('Please Enter Your Email Address')
        }
    } else {
        alert('Enter Your Name')
    }

}