
let tbcal="";
let input=document.getElementById('input');
let outc=document.getElementById('output');

function calculated(value){
    tbcal +=value;
    input.value=tbcal;
}
function removech(){

    tbcal=tbcal.substring(0,tbcal.length-1);
    input.value=tbcal;
}
function equal(){
    if(tbcal.length==0 || tbcal==""){
        alert("Enter valid number")
        return;
    }
    try{
        ans=eval(tbcal);
        outc.value=ans;
    }
    catch(err){
        alert("An error Occured,Difinetely not by me !")

    }
}
function resetAll(){
    input.value = "";
    outc.value = "";
    tbcal = "";
}