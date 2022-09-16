/**************************** 
       CHANGE LANGUAGE
****************************/

const maxImg = document.querySelector(".right-panel img");
const select = document.querySelector("select");
const allLang = ["en", "ru", "ua"];

document
  .querySelectorAll(".left-panel img")
  .forEach(
    (item) => (item.onmouseenter = (event) => (maxImg.src = event.target.src))
  );

select.addEventListener("change", changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#ua";
    location.reload();
  }
  select.value = hash;
  // document.querySelector(".lng-tour").innerHTML = langArr["tour"][hash];
  for (let key in langArr) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage();

/**************************** 
          AUDIOPLAYER
****************************/

function _(id) {
  return document.getElementById(id);
}
function audioApp() {
  var audio = new Audio();
  var audio_folder = "audio/";
  var audio_ext = ".mp3";
  var audio_index = 1;
  var is_playing = false;
  var playingtrack;
  var trackbox = _("trackbox");

  for (var track in tracks) {
    var tb = document.createElement("div");
    var tc = document.createElement("div");
    var pb = document.createElement("button");
    var tn = document.createElement("div");
    var tt = document.createElement("div");
    tb.className = "trackbar";
    tc.className = "trackcontainer";
    pb.className = "playbutton";
    tn.className = "trackname";
    tt.className = "tracktime";
    tn.innerHTML = audio_index + ". " + tracks[track][0];
    tt.innerHTML = tracks[track][1];
    pb.id = tracks[track][2];
    pb.addEventListener("click", switchTrack);
    tb.appendChild(tc);
    tc.appendChild(pb);
    tc.appendChild(tn);
    tb.appendChild(tt);
    trackbox.appendChild(tb);
    audio_index++;
  }
  audio.addEventListener("ended", function () {
    _(playingtrack).style.background = "url(images/ak_playbtn.png)";
    playingtrack = "";
    is_playing = false;
  });
  function switchTrack(event) {
    if (is_playing) {
      if (playingtrack != event.target.id) {
        is_playing = true;
        _(playingtrack).style.background = "url(images/ak_playbtn.png)";
        event.target.style.background = "url(images/ak_pausebtn.png)";
        audio.src = audio_folder + event.target.id + audio_ext;
        audio.play();
      } else {
        audio.pause();
        is_playing = false;
        event.target.style.background = "url(images/ak_playbtn.png)";
      }
    } else {
      is_playing = true;
      event.target.style.background = "url(images/ak_pausebtn.png)";
      if (playingtrack != event.target.id) {
        audio.src = audio_folder + event.target.id + audio_ext;
      }
      audio.play();
    }
    playingtrack = event.target.id;
  }
}
window.addEventListener("load", audioApp);

/**************************** 
    ANIMATION MENU BURGER
****************************/

const iconMenu = document.querySelector(".header_burger");
const menuBody = document.querySelector(".header_menu");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });

  document.body.querySelectorAll(".menu_link").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("_lock");
      iconMenu.classList.remove("_active");
      menuBody.classList.remove("_active");
    });
  });
}

/**************************** 
          SMOOTH SCROLL
****************************/

$(function () {
  $("a[href*=#]:not([href=#])").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          500
        );
        return false;
      }
    }
  });
});

/**************************** 
         ANIMATIONS
****************************/

const anim_1 = document.querySelector("#merch-price");
anim_1.style.setProperty("--animate-duration", "2s");

const anim_2 = document.querySelector("#big-logo");
anim_2.style.setProperty("--animate-duration", "8s");
