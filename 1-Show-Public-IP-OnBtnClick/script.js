'use strict'
let xhr = new XMLHttpRequest();
let Public_IP = 0
let url = 'https://ipinfo.io/ip'

let upDateIP = (val) => document.getElementById("IP_Show").innerHTML = val;

let forCallBack = (callANotherFunc) => {
  xhr.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       Public_IP = xhr.responseText;
       callANotherFunc(Public_IP)
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function EventListener(){
    document.getElementById("Show_Btn").addEventListener("click", () => forCallBack(upDateIP))
    document.getElementById("Clear_Btn").addEventListener("click", () => upDateIP(""))
}

EventListener();