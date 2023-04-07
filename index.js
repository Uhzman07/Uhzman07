// Change Colour of Theme
let a, b, c, d;
let header;
let body1;
let area2;
header=document.getElementsByClassName("navbar")[0];
body1 = document.getElementsByClassName("pageone")[0];


a = document.getElementById("theme1");
b = document.getElementById("theme2");
c = document.getElementById("theme3");
d = document.getElementById("theme4");
a.style.backgroundColor = "brown";
b.style.backgroundColor = "green";
c.style.backgroundColor = "purple";
d.style.backgroundColor="white";
a.addEventListener("click",function(){
    changeTheme("733122","D9B18F")}
);  
b.addEventListener("click",function(){
    changeTheme("3E402D","9CA653");
});
c.addEventListener("click",function(){
    changeTheme("260273","D762D9");
});
d.addEventListener("click",function(){
    changeTheme("D9AB82","BF793B");
});


function changeTheme(headerColour,bodyColor){
    header.style.backgroundColor= "#"+headerColour;
    body1.style.backgroundColor="#"+bodyColor;

}

