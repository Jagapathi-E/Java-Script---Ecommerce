function userData (){
    event.preventDefault();
    var user = document.getElementById('Username').value
    var contact = document.getElementById('Contact').value
    var emailId = document.getElementById('emailId').value
    var password = document.getElementById('password').value

    var users = {
        name : user,
        phone: contact,
        mail: emailId,
        security:password
    }
    if
       (localStorage.getItem('user') == null);
    console.log(users);
    localStorage.setItem('user', JSON.stringify(users));
    console.log(users);
    var users=JSON.parse(localStorage.getItem("users"));
    console.log(user)
    }