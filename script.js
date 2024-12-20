var lowerCaseLetters = /[a-z]/;
var upperCaseLetters = /[A-Z]/;
var numbers = /[0-9]/;
function con() {
    user()
    passwords()
}
function user() {
    var username = document.getElementById('use')
    var c_user = document.getElementById('use').value
    var w_user = document.getElementById('useError')
    if (c_user == "") {
        w_user.innerHTML = "Please Enter The User Name"
        username.style.borderColor = 'red'
    } else {
        w_user.innerHTML = ""
        username.style.borderColor = '#acacac'
    }
}
function passwords() {
    var passwords = document.getElementById('pass')
    var passwrd = document.getElementById('pass').value   
    let passError = document.getElementById('pass-error')
    if (passwrd == "") {
        passError.innerHTML = "Please Enter The Passsword"
        passwords.style.borderColor = 'red'
    } else {
        passError.innerHTML = ""
        passwords.style.borderColor = '#acacac'
        passconl();
    }
}
function passconl() {
    var passwrd = document.getElementById('pass')
    let passError = document.getElementById('pass-error')
    if (passwrd.value.match(lowerCaseLetters)) {
        passError.innerHTML = ""
        passconA();
    } else {
        passError.innerHTML = "Use Atleast One Lower Case"
    }
}
function passconA() {
    var passwrd = document.getElementById('pass')
    let passError = document.getElementById('pass-error')
    if (passwrd.value.match(upperCaseLetters)) {
        passError.innerHTML =""
        passconN();
    } else {
        passError.innerHTML = "Use Atleast One Upper Case"
    }
}
function passconN() {
    var passwrd = document.getElementById('pass')
    let passError = document.getElementById('pass-error')
    if (passwrd.value.match(numbers)) {
        passError.innerHTML =""
        passconLEN();
    } else {
        passError.innerHTML = "Use Atleast One Number"
    }
}
function passconLEN() {
    var passwrd = document.getElementById('pass')
    let passError = document.getElementById('pass-error')
    if (passwrd.value.length >= 6) {
        passError.innerHTML = ""
    } else {
        passError.innerHTML = "Minimum length is 6"
    }
}
function rest(){
    var username = document.getElementById('use')
    var passwords = document.getElementById('pass')
    document.getElementById('useError').innerHTML=""
    document.getElementById('pass-error').innerHTML=""
     username.style.borderColor = '#acacac'
     passwords.style.borderColor = '#acacac'
}


