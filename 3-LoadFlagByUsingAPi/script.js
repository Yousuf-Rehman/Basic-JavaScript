'use strict'

document.getElementById('SearchBar').addEventListener("change", onChange);

let URL = country => `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
let upDateDOM_Img = src => document.getElementById("img").src = src

function onChange() {
  upDateDOM_Img('')
  let xhr = new XMLHttpRequest();
  let input_text = document.getElementById('SearchBar').value;

  xhr.onload = function() {
    if(this.status == 200){
      let response = JSON.parse(xhr.responseText)
      try{
        upDateDOM_Img(response['0']['flag'])
      }catch(err) {
        console.error('Could Not parse Data Received')
      }
    }
  }

  xhr.open('GET', URL(input_text), true)
  xhr.send()
}

