'use strict'
let xhr = new XMLHttpRequest();
let IP = '127.0.0.1:5500'
let url = `http://${IP}/images/`
xhr.responseType = 'document';

document.getElementById("button-container").addEventListener("click", () => forCallBack(upDateImgSrc))
let upDateImgSrc = src => document.getElementById("img").src = src;

let forCallBack = (callANotherFunc) => {
  xhr.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
      let arr = [];
      let elements = xhr.response.getElementsByTagName("a");
      for(let e of elements){
        if(e.href.match(/\.(jpe?g|png|gif)$/)){
          arr.push(e.href);
          console.log(e.href)
        }
      }
      if(arr.length > 0){
        let rand = Math.ceil(Math.random()*arr.length - 1);
        callANotherFunc(arr[rand])
        console.log(rand)
      }
      else console.error(`No Image Found`)
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}