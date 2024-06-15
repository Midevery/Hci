function validateDate(){
    const username= document.getElementById("username").value;
    const email = document.getElementById("email").value
    const password= document.getElementById("password").value
    const conf= document.getElementById("confpassword").value
    const age=document.getElementById("age")
    const male= document.getElementById("male")
    const female= document.getElementById("female")
    const country = document.getElementById("country").value

    if(username.length<5 || username.length>10){
        alert("Username must be between 5-10 char")
    }else if(!email.endsWith("@binus.ac.id")){
        alert("Must end with @binus.ac.id")
    }else if(!checkalphanumeric(password)){
        alert("password must be alphanumeric")
    }else if(password!=conf){
        alert("Password is different")
    }else if(!male.checked || !female.checked){
        alert("gender must be selected")
    }
    
}

function checkalphanumeric(password){
    var isAlpha= false
    var isNum= false
    for(let i=0;i<password.length;i++){
        if(isNaN(password[i])){
            isAlpha=true;
        }else{
            isNum=true;
        }
        if(isAlpha && isNum){
            return true
        }
    }
    return false
}