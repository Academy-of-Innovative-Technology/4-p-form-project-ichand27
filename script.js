const form = document.getElementById("evaluationForm");

const overlay = document.getElementById("overlay");

let userName = "";

const panelQuestion = document.getElementById("panel-question");
const panelYes = document.getElementById("panel-yes");
const panelNo = document.getElementById("panel-no");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

form.addEventListener("submit", function(event){

event.preventDefault();

userName = document.getElementById("name").value;

overlay.classList.add("active");

});

yesBtn.addEventListener("click", function(){

panelQuestion.style.display = "none";
panelYes.style.display = "block";

setTimeout(function(){
    alert("Thank you " + userName + ", we will get back to you in due time.");
}, 300);

});

noBtn.addEventListener("click", function(){

panelQuestion.style.display = "none";
panelNo.style.display = "block";

setTimeout(function(){
    alert("Thank you " + userName + ", we will get back to you in due time.");
}, 300);

});