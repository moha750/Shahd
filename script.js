var
  words = ['✨أهلاً أهلاً بـ نائبة أدِيب',
  '❤️إن شاء الله تكوني بخير',
  '!🌚بقولك سر بس لا أحد يدري',
  '👨🏽‍💻بس قبلها كيف وانا مهكر كيبوردك',
  'المهم، تعرفي هالتاريخ🤔؟',
  '2003/8/15',
  '📱اييوه يوم ميلاد الي تطالع الشاشة',
  '🌻كُل عام وأنتي دائمًا مُتوردة',
  'تتوقعي خلصت على كذا😏؟',
  '!😎لا طبعًا مُفاجئاتي ما تخلص، وهاذي البدايه بس',
  '🎁انزلي تحت وأستمتعي بباقي المُفاجئات'],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 10,
  speed = 150;

var wordflick = function(){
  setInterval(function(){
      if (forwards) {
        if(offset >= words[i].length){
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
         if(offset == 0){
            forwards = true;
            i++;
            offset = 0;
            if(i >= len){
              i=0;
            } 
         }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
    	$('.word').text(part);
  },speed);
};

$(document).ready(function(){
  wordflick();
});

//جزء

window.open = function() {};
window.print = function() {};
// Support hover state for mobile.
if (false) {
    window.ontouchstart = function() {};
}

window.onload = function() {
  var context = new AudioContext();
}


function start () {
  // (PART A) GET SPLASH SCREEN 
  let splash = document.getElementById("splash");

  // (PART B) PLAY BGM & REMOVE SPLASH SCREEN AFTER FADE IN
  splash.addEventListener("transitionend", () => {
    document.getElementById("bgm").play();
    splash.remove();
  });

  // (PART C) GO!
  splash.classList.add("hide");
}