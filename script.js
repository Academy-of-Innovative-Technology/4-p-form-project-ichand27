const form = document.getElementById("evaluationForm");

const overlay = document.getElementById("overlay");

const panelQuestion = document.getElementById("panel-question");
const panelYes = document.getElementById("panel-yes");
const panelNo = document.getElementById("panel-no");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

form.addEventListener("submit", function(event){

event.preventDefault();

alert("Are you sure you want to submit this evaluation?");

overlay.classList.add("active");

});

yesBtn.addEventListener("click", function(){

panelQuestion.style.display = "none";
panelYes.style.display = "block";

});

noBtn.addEventListener("click", function(){

panelQuestion.style.display = "none";
panelNo.style.display = "block";

});