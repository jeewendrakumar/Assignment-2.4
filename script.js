/**
 * Created by jeewendrakumar on 5/28/2017.
 */
var time = document.querySelector("#time");
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();

time.innerHTML = `${h}:${m}:${s}`;