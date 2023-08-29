var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var phone = document.getElementById("phone")
var message = document.getElementById("message")
var success = document.getElementById("success")


function addData(){
    if(username.value === ""){
        message.style.display = "block";
        setTimeout(() => {
            message.style.display = "none"
        }, 2000);
    }else if(email.value === ""){
        message.style.display = "block";
        setTimeout(() => {
            message.style.display = "none"
        }, 2000);
    }else if(password.value === ""){
        message.style.display = "block";
        setTimeout(() => {
            message.style.display = "none"
        }, 2000);
    }else if(phone.value === ""){
        message.style.display = "block";
        setTimeout(() => {
            message.style.display = "none"
        }, 2000);
    }
}











































// var fullName = document.getElementById("fullName")

// function submitData() {
//     if (fullName.value === "") {
//         message.style.display = "block"
//         setTimeout(() => {
//             message.style.display = "none"
//         }, 1000);
//     } else {
//         success.style.display = "block"
//         setTimeout(() => {
//             success.style.display = "none"

//         }, 1000);
//     }
// }