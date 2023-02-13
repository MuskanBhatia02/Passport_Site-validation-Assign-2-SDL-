//for validating first and last names

function val1(){
    fname=document.getElementById("firstName").value;
    var letters = /^[A-Za-z]+$/;

    lname=document.getElementById("lastName").value;




    if(fname==""){
        alert("First Name can't be empty");
        return false;
    }
    else if(!fname.match(letters) ){
        alert('Name must have alphabet characters only');
        registration.firstName.value = "";
        registration.firstName.focus();
        return false;
    }
    else if( !lname.match(letters) ){
        alert('Last Name/ Surname must have alphabet characters only');
        registration.lastName.value = "";
        registration.lastName.focus();
        return false;
    }
    else {
        return true;
    }
}


//for validating login ID

function val2(){
    login=document.registration.login.value;
    login_len=login.length;

    if(login=="")
    {
        alert("Login ID can't be empty");
        registration.login.value = "";
        registration.login.focus();
    }
    
    // if(login_len<5 || user_len>12 ){
    //     alert("Username must have 5 to 12 character !!");
    //     return false;
    // }
    else{
        return true;
    }
}


//for validating password

function val3(){
    pass_word=document.registration.password.value;
    // conf_password=document.registration.con_password.value;
    // console.log(pass_word)
    // console.log(conf_password)
    // pass_len=password.length;

    pass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(!pass_word.match(pass)){
        alert("Must contain at least one number, one uppercase, lowercase letter, length must be between 6-15");
        return false;
    }

    // else if(pass_word!==conf_password)
    // {
    //     return false;
    // }
    else{
        return true;
    }
}



function val4(){
    email = document.registration.email.value;
    if(email == ""){
        alert("Email can't be empty");
        return false;
    }
    else{
        return true;
    }
}


