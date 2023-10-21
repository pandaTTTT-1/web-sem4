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
 var scripFilm = document.getElementById('script');
 var backgroundStory= document.querySelector('.background-story');
 var backgroundd= document.querySelector('.backgroundd');
 var Story= document.getElementById('Story');
 var StoryBoard= document.getElementById('.Story-board');

 var scripBtn = document.querySelector('.script');
 var scripBtn1 = document.querySelector('.script-1');
 var scripBtn2 = document.querySelector('.script-2');
 
 var StoryBtn= document.querySelector('.Story');
 var StoryBoardBtn= document.querySelector('.Story-board');
 
 StoryBtn.addEventListener('click',function(){
   backgroundStory.innerHTML=' <img class="backgroundd" src="../images/poster phim.jpg" alt="">';
   scripBtn1.style.display='none';
   scripBtn2.style.display='none';
   backgroundStory.style.opacity='1';
 })
 scripBtn.addEventListener('click',function(){
   backgroundStory.innerHTML='<img class="backgound-story" src="../images/untitlhjhffghjked.png" alt="">';
   backgroundStory.style.opacity='1';
 })
 StoryBoardBtn.addEventListener('click',function(){
   backgroundStory.innerHTML='<img class="backgound-story" src="../images/big-map.png" alt="">';
   scripBtn1.style.display='none';
   scripBtn2.style.display='none';
   backgroundStory.style.opacity='1';
 })
 scripBtn.addEventListener('click',function(){
   
   scripBtn1.classList.add('active');
   scripBtn1.style.display='inline-block';
   scripBtn2.style.display='inline-block';
   backgroundStory.style.opacity='1';

 });
 scripBtn1.addEventListener('click',function(){
   scripBtn.classList.add('active');
   backgroundStory.style.opacity='1';
 })
 scripBtn2.addEventListener('click',function(){
   scripBtn.classList.add('active');
   backgroundStory.style.opacity='1';
 })