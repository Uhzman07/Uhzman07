// Change Colour of Theme
// Variable
let a, b, c, d;
let header;
let body3;
let area3;

body3 = document.getElementsByClassName("lastpage")[0];
area3 = document.getElementsByTagName("form")[0];
a = document.getElementById("theme1");
b = document.getElementById("theme2");
c = document.getElementById("theme3");
d = document.getElementById("theme4");
a.style.backgroundColor = "brown";
b.style.backgroundColor = "green";
c.style.backgroundColor = "purple";
d.style.backgroundColor="white";

a.addEventListener("click",function(){
    changeTheme("D95829","A7CFF2")}
);  
b.addEventListener("click",function(){
    changeTheme("B9BF8E","D8D9C5");
});
c.addEventListener("click",function(){
    changeTheme("4F0259","D8D9C5");
});
d.addEventListener("click",function(){
    //background-color: #BF793B;
    changeTheme("cb782f","aliceblue");
});
function changeTheme(body3Colour,area3Color){//
    body3.style.backgroundColor= "#"+body3Colour;
    area3.style.backgroundColor="#"+area3Color;
    //area2.style.backgroundColor="#"+area2color;

}
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let text1;
let text2;
let email;
let password;
let textarea;
let form;
let selection;
let submit1;
let submit2;
let T1,T2,T3,T4,T5;
let formMessage;
let range;
let stars;
let value1;
text1 = document.getElementById("text1");
text2 = document.getElementById("text2");
email = document.getElementById("emailtext");
password = document.getElementById("password");
form = document.getElementById("form");
selection = document.getElementById("select");
submit1=document.getElementById("submit1");
submit2 = document.getElementById("textareaSubmit");
formMessage = document.createElement("p");
textarea= document.getElementById("textarea");
range = document.getElementById("ranger");
stars = document.getElementsByClassName("star");



text1.addEventListener("input", checkText1);
text1.addEventListener("input",revert1);
text2.addEventListener("input", checkText2);
text2.addEventListener("input",revert2);
//form.addEventListener("mouseout",backToNormal);
email.addEventListener("input",checkMail);
email.addEventListener("input",revertMail);
password.addEventListener("input",checkPassword);
password.addEventListener("input",revertPassword);
selection.addEventListener("input",checkSelection);
submit1.addEventListener("click",submitForm);
submit2.addEventListener("click",submitText);
textarea.addEventListener("input",feedback);
range.addEventListener("input",starRating);
range.addEventListener("mouseout", backToNormal);

function checkText1(){
    if(text1.value.length>=2 && !/\d/.test(text1.value)){
        text1.style.backgroundColor="lightgreen";
        T1 = true;
    }
}
function revert1(){
    if(text1.value.length<2 || /\d/.test(text2.value)){
        text1.style.backgroundColor ="#ff726f";
        text1.setAttribute("placeholder","You need a valid first name");
        T1 = false;
    }
}
function checkText2(){
    if(text2.value.length>=2 && !/\d/.test(text2.value)){
        text2.style.backgroundColor="lightgreen";
        T2 = true;
    }
}
function revert2(){
    if(text2.value.length<2 || /\d/.test(text2.value)){
        text2.style.backgroundColor ="#ff726f";
        text2.setAttribute("placeholder","You need a valid last name");
        T2 = false;
    }
}
function checkMail(){
    if(email.value.length>=6 && email.value.match(validRegex)){
        email.style.backgroundColor="lightgreen";
        T3 = true;
    }
}
function revertMail(){
    if(email.value.length<6 || !email.value.match(validRegex)){
        email.style.backgroundColor="#ff726f";
        email.setAttribute("placeholder","Example: abc@gmail.com");
        T3 = false;
    }
}
function checkPassword(){
    if(password.value.length>=8 && /\d/.test(password.value)){
        password.style.backgroundColor = "lightgreen";
        T4 = true;
    }

}
function revertPassword(){
    if(password.value.length<8 ||  !/\d/.test(password.value)){
        password.style.backgroundColor = "#ff726f";
        password.setAttribute("placeholder","Strong valid password only");
        T4=false;
    }

}
function checkSelection(){
    if(selection.value!=0){
        selection.style.backgroundColor ="lightgreen";
        T5 = true;

    }
    else{
        selection.style.backgroundColor="plum";
        T5= false;
    }
}
function submitForm(event){
    if(T1==true && T2==true && T3==true && T4==true && T5==true){
        confirm("Criteria met! Confirm Submission");
        form.style.backgroundColor="lightgreen";
        form.removeChild(formMessage);
    }
    else{
        event.preventDefault();
        alert("Fill the form appropriately");
        form.appendChild(formMessage);
        formMessage.innerHTML="Try checking the password or the email :)";
    }
    
}
function feedback(){
    textarea.style.backgroundColor="lightgreen"
}
function submitText(){
    if(textarea.value!=""){
      alert("Thank you for the reply I will get back to you as soon as possible");
    }
}
function starRating(){
    value1 = range.value;
    for(let i=0; i<value1; i++){
        stars[i].style.color ="white"; 
    }

    

}
function backToNormal(){
    value1 = range.value;
    if(value1>=1){
        alert("Thanks for rating me " + value1 + " star(s)");
    }
    for(let i= 0; i<6; i++){
        stars[i].style.color="black";
    }

}
    


