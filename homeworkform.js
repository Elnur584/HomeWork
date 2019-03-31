"use strict";

function confirm() {
    var myNamevalue = document.newform.nameinput.value;
    var mysurNamevalue = document.newform.surnameinput.value;
    var myemailvalue = document.newform.emailinput.value;
    var mybirthdayvalue = document.newform.birthdayinput.value;
    var myallValue = myNamevalue + mysurNamevalue + myemailvalue + mybirthdayvalue;

    if (myallValue == "") {
        alert("Form Sona Qeder Tamamlanmayib");
        return false;
    }
    // 
    if (myNamevalue == "") {
        alert("Adinizi Qeyd Edin");
        return false;
    }
    if (isNaN(myNamevalue) == false) {
        alert("Reqem Daxil Edile Bilmez !");

    }
    // // Name            
    if (isNaN(mysurNamevalue) == false) {
        alert("Reqem Daxil Edile Bilmez !");

    }
    if (mysurNamevalue == "") {
        alert("Soyadinizi Qeyd Edin");
        return false;
    }
    // Surname           
    if (mybirthdayvalue == "") {
        alert("Dogum Gunu Qeyd Olunmayib");
        return false;
    }
    if (mybirthdayvalue < 0 || mybirthdayvalue > 200) {
        alert("Daxil Etdiyiniz Kod 0-dan kicik Ve 200-den Boyuk Olmamalidir");
        return false;
    }
    // if (mybirthdayvalue == "YYYY-MM-DDTHH:mm:ss.sssZ") {
    //     return true;
    // } else {
    //     alert("Tarix Dogru Formatda Deyil ! ");
    //     return false;
    // }
    // Email  
    if (myemailvalue == "") {
        alert("E'maili Qeyd Edin");
        return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myemailvalue)) {
        return true;
    } else {
        alert("Email Formatiniz Yanlisdir!")
        return false;
    }
}
function Person(name = "", surname = "", email = "", birthday = "") {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.birthday = birthday;
}

function myclickButton() {
    var mynewnamevalue = document.getElementById("nameinputid").value;
    var mynewsurnamevalue = document.getElementById("nameinputid1").value;
    var mynewbirthdayvalue = document.getElementById("nameinputid2").value;
    var mynewemailvalue = document.getElementById("nameinputid3").value;

     var myallinputvalue = mynewnamevalue + mynewsurnamevalue + mynewbirthdayvalue + mynewemailvalue;
   

    

    for(var i=0 ; i<myallinputvalue.length;i++){
        var myallul = document.getElementById("myul");
        

        let myPerson = new Person(myallinputvalue);
        var li = document.createElement("li");
        li.innerText = myPerson.name;
        myallinputvalue[i] = myPerson;
   
  
    }

    myallul.appendChild(li);

}
