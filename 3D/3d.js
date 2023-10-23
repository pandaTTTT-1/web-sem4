// tabs

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");
   
   btnTarget.classList.add("active");
}
var SnowballBtn = document.querySelector('.Snowball');
var EchoBtn = document.querySelector('.Echo');
var EnviromentBtn = document.querySelector('.Enviroment');

var CharacterBtn = document.querySelector('.Character');

var backgroundd= document.querySelector('.backgroundd');
var Character= document.getElementById('Character');
var Enviroment= document.getElementById('Enviroment');
var Snowball= document.getElementById('Snowball');
var Echo= document.getElementById('Echo');



SnowballBtn.addEventListener('click',function(){
  backgroundd.innerHTML=' <img src="../images/Snowball.jpg" alt="">';
  
})
CharacterBtn.addEventListener('click',function(){
  backgroundd.innerHTML='<img  src="../images/Ảnh slide/IMG_8418.PNG" alt="">';
  
})
EchoBtn.addEventListener('click',function(){
   backgroundd.innerHTML='<img  src="../images/echogb.png" alt="">';
})
EnviromentBtn.addEventListener('click',function(){
   backgroundd.innerHTML='<img  src="..//images/untitlhjhffghjked.png" alt="">';
})