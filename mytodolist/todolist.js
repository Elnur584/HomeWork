"use strict";
function labelsOver(x){
    x.style.textDecoration = "line-through";
}
function labelsoverBefore(x){
    x.style.textDecoration = "none";
}
function removeIcon(){
    document.getElementById("labelone").style.display="none";
}
function removeIconone(){
    document.getElementById("labeltwo").style.display="none";
}
function removeIcontwo(){
    document.getElementById("labelthree").style.display="none";   
}
function removeIconthree(){
    document.getElementById("labelfour").style.display="none";
}
// 
function myButton(){
    var mybottomInput = document.getElementsByClassName("myInput").value;
    var mylabels = document.querySelectorAll(".alllabels").innerHTML;
    mybottomInput.push(mylabels);
    
}



var myicons = document.querySelectorAll(".biniconsclass").innerHTML;