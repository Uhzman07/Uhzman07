// Variables

// Download and Print File option
let downloadMe;
let confirmMe;
let printConfirm;
let printTag;

downloadMe = document.getElementById("download2");
printTag = document.getElementById("printTag");
let printButton = document.createElement("button");
printButton.style.backgroundColor="white";
printButton.style.width="18%";
printButton.style.height="7%";
printButton.innerHTML = "Print Here";
printButton.setAttribute("enabled","true");

downloadMe.addEventListener("click",downloadFile);
function downloadFile(){
    confirmMe = confirm("Do you want to download a copy?");
    if(confirmMe){
        printConfirm = confirm("Will you also like to print a copy?");
        if(printConfirm){
            printTag.appendChild(printButton);
            alert("You are about to download my page");
            
        }
    }
    else{
        downloadMe.removeAttribute("download");
    }

    
}
printButton.addEventListener("mouseover", function(){
    this.style.backgroundColor="green";

} );
printButton.addEventListener("click", function(){
    if(confirm("Confirm To Print?")){
        window.print();
    }
    printTag.removeChild(printButton);
    
});

// Variables 
let a, b, c, d;
let body2;
let area2;
let table1;
let table2;
area2=document.querySelectorAll("#areas");
body2= document.getElementsByClassName("body")[0];
table1 = document.getElementsByTagName("table")[0];
table2 = document.getElementsByTagName("table")[1];

//area2 = document.getElementsByTagName("h2")[0];
a = document.getElementById("theme1");
b = document.getElementById("theme2");
c = document.getElementById("theme3");
d = document.getElementById("theme4");
a.style.backgroundColor = "brown";
b.style.backgroundColor = "green";
c.style.backgroundColor = "purple";
d.style.backgroundColor ="white";
a.addEventListener("click",function(){
    changeTheme("A64B29","A7CFF2")}
);  
b.addEventListener("click",function(){
    changeTheme("6C733D","D8D9C5");
});
c.addEventListener("click",function(){
    changeTheme("220126","0528F2");
});
d.addEventListener("click",function(){
    //background-color: #BF793B;
    changeTheme("3E402D","D8D9C5");
});

function changeTheme(body2Color,area2Color){//
    body2.style.backgroundColor= "#"+body2Color;
    for(let i=0;i<area2.length;i++){
        area2[i].style.backgroundColor="#"+area2Color;
    }
    table1.style.backgroundColor ="#"+area2Color;
    table2.style.backgroundColor ="#"+area2Color;
}

