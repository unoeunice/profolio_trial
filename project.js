const button1=document.getElementById("btn1")

const button2=document.getElementById("btn2")

const legoBaby=document.getElementById("legobaby")

function picOn(){
 
legoBaby.style.display="block"



}

button1.onclick=picOn;

function picClose(){

    legoBaby.style.display=""


}
button2.onclick=picClose;
