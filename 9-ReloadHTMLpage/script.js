'use strict'
const MINUTES = 10; //10 Minutes

const SECONDS = MINUTES * 60 * 1000;
window.setInterval(() => location.reload(), SECONDS) //for current page