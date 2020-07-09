'use strict'

document.getElementById('SearchBar').addEventListener("change", onChange);
var stringConstructor = "".constructor;
var arrayConstructor = [].constructor;
var objectConstructor = ({}).constructor;
let SEARCHKEY = 'flag'

let URL = country => `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
let upDateDOM_Img = src => document.getElementById("img").src = src
let FindKeyInJSON = (response, LookUpkey) => {
  console.log(response)
  console.log(typeof response)
  
  if (response === null) 
    return "null";
  
  else if (response === undefined)
    return "undefined";
  
  else if(response.constructor === stringConstructor)
      return "string";

  else if(response.constructor === objectConstructor){
    for(let key in response)
      if(key === SEARCHKEY){
        upDateDOM_Img(response[key]);
        return;
      }
      else
        FindKeyInJSON(response[key], key)
  }
  
  else if(response.constructor === arrayConstructor){
    for(let each in response){
      FindKeyInJSON(response[each], each)
    }
  }
}

function onChange() {
  upDateDOM_Img('')
  let xhr = new XMLHttpRequest();
  let input_text = document.getElementById('SearchBar').value;

  xhr.onload = function() {
    if(this.status == 200)
      FindKeyInJSON(JSON.parse(this.responseText), '');
  }

  xhr.open('GET', URL(input_text), true)
  xhr.send()
}

