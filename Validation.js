let namenode=document.getElementById("fname");
let errornode1=document.getElementById("error1");

let agenode=document.getElementById("age");
let errornode2=document.getElementById("error2");

let emailnode=document.getElementById("mailid");
let errornode3=document.getElementById("error3");

let passnode=document.getElementById("pass1");
let errornode4=document.getElementById("error4");

let confirpassnode=document.getElementById("c_pass");
let errornode5=document.getElementById("error5");

let checknode=document.getElementById("check");

function validate1(){
    errornode1.innerHTML="";
    let firstname=namenode.value;
    if(firstname=="")
    {
        errornode1.innerHTML="This field is required";
        namenode.style.border="2px solid red";
        return false;
    }
    else if(firstname.length<2)
    {
        errornode1.innerHTML="First name should contain atleast 2 character";
        namenode.style.border="2px solid red";
        return false;
    }
    else{
        namenode.style.border="2px solid green";
        return true;
    }
}

function validate2(){
    errornode2.innerHTML="";
    let age=agenode.value;
    if(age=="")
    {
        errornode2.innerHTML="This field is required";
        agenode.style.border="2px solid red";
        return false;
    }
    else if(isNaN(age))
    {
        errornode2.innerHTML="Age should be Digit";
        agenode.style.border="2px solid red";
        return false;
    }
    else if(age<0){
        errornode2.innerHTML="Put valid age";
        agenode.style.border="2px solid red";
        return false;
    }
    else{
        agenode.style.border="2px solid green";
        return true;
    }
}

function validate3()
{
    errornode3.innerHTML="";
    let email=emailnode.value;
    let ss=email.substring(email.indexOf("@")+1);
    if(email=="")
    {
        errornode3.innerHTML="This field is required";
        emailnode.style.border="2px solid red";
        return false;
    } 
    else if(!email.includes("@")||ss==""){
        errornode3.innerHTML="Please put valid email id";
        emailnode.style.border="2px solid red";
        return false;
    } 
    else{
        emailnode.style.border="2px solid green";
        return true;
    }
}

function validate4(){
    errornode4.innerHTML="";
    let password=passnode.value;
    let regexp=new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])");
    console.log(password);
    if(password==""){
        errornode4.innerHTML="This field is required";
        passnode.style.border="2px solid red";
        return false;
    }
    else if(regexp.test(password)==false){
        errornode4.innerHTML="password should be alphanumeric";
        passnode.style.border="2px solid red";  
        return false;
    }
    else{
        passnode.style.border="2px solid green";
        return true;
    }
}

function validate5(){
    errornode5.innerHTML="";
    let password=passnode.value;
    let c_password=confirpassnode.value;
    if(c_password==""){
        errornode5.innerHTML="This field is required";
        confirpassnode.style.border="2px solid red";
        return false;
    }
    else if(c_password!=password){
        errornode5.innerHTML="password should match";
        confirpassnode.style.border="2px solid red"; 
        return false; 
    }
    else{
        confirpassnode.style.border="2px solid green";
        return true;
    }
}
function showpass(){
    if(checknode.checked){
        passnode.type="text";
        confirpassnode.type="text";
    }
    else{
        passnode.type="password";
        confirpassnode.type="password";
    }
}

function validateForm(){
    let state1=validate1();
    let state2=validate2();
    let state3=validate3();
    let state4=validate4();
    let state5=validate5();

    return(state1 && state2 && state3 && state4 && state5);

}

