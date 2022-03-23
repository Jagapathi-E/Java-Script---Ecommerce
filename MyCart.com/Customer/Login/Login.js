function success() {
    window.confirm (user  + " Do you want to proceed..!");
    event.preventDefault();
    var user = document.getElementById('Username1').value ;
    var password1 = document.getElementById('Password1').value ;

    event.preventDefault();
    
    document.location.href=../Dashboard/Dashboard.html;
}
