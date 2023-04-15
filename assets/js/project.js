(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

if ($("main").hasClass("top")) {
  var swiper_chara = new Swiper(".chara-main", {
    effect: 'fade',
    speed: 1000,
    fadeEffect: {
      crossFade: true
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  swiper_chara.on('slideChange', function () {
    var num = swiper_chara.activeIndex;
    console.log(num);
    change_thumb(num);
    change_bg(num);
  });
  $('.chara-list__item').on('click', function () {
    var target_id = $(this).data('id');
    swiper_chara.slideTo(target_id);
  });
  $(".chara-card__item").on("click", function (e) {
    e.preventDefault();
    var target_id = $(this).data('id');
    var target_chara = $(this).parents('.chara-main__id').data('chara');
    $("#".concat(target_chara, " .chara-card__item")).removeClass("js-show");

    if (target_id == 1) {
      $("#".concat(target_chara, " .chara-main__card--item")).addClass("js-anim");
      setTimeout(function () {
        $("#".concat(target_chara, " .chara-main__card--item")).removeClass("js-anim");
      }, 450);
      $("#".concat(target_chara, " .chara-main__card--item:nth-child(1)")).removeClass("js-move");
      $("#".concat(target_chara, " .chara-main__card--item:nth-child(1)")).addClass("js-show");
      $("#".concat(target_chara, " .chara-main__card--item:nth-child(2)")).removeClass("js-show");
    } else {
      $("#".concat(target_chara, " .chara-main__card--item")).addClass("js-anim");
      setTimeout(function () {
        $("#".concat(target_chara, " .chara-main__card--item")).removeClass("js-anim");
      }, 450);
      $("#".concat(target_chara, " .chara-main__card--item:nth-child(1)")).addClass("js-move");
      $("#".concat(target_chara, " .chara-main__card--item:nth-child(1)")).removeClass("js-show");
      $("#".concat(target_chara, " .chara-main__card--item:nth-child(2)")).addClass("js-show");
    }

    $(this).addClass("js-show");
  });

  var change_thumb = function change_thumb(target_id) {
    $(".chara-list__item").removeClass("js-current");
    $(".chara-list__item").each(function (index, element) {
      // element == this
      var current_id = $(this).data('id');

      if (current_id == target_id) {
        $(this).addClass('js-current');
      }
    });
  };

  var change_bg = function change_bg(target_id) {
    $(".chara-bg__item").removeClass("js-current");
    $(".chara-bg__item").each(function (index, element) {
      // element == this
      var current_id = $(this).data('id');

      if (current_id == target_id) {
        $(this).addClass('js-current');
      }
    });
  };
}

},{}],2:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var start_time;
var end_time;
var time_sec;
var result = [0, 0];
var final_result;
var time;
var timer;
var count_interval;
var count_num;
var current_num;
var lank;
var fast_bloom;
var lang = $(".game").data("lang");
var lank_time = ["230", "260", "290", "320", "360", "410", "5000"];
var lank_name = {
  "en": ["THE BLACK SWORDSMAN", "BEATER", "COMMANDER", "ASSAULT TEAM", "EXPERT PLAYER", "BEGINNER", "GOBLIN"],
  "es": ["EL ESPADACHÍN NEGRO", "BEATER", "LÍDER", "GRUPO DE <br>ESTRATEGIA", "JUGADOR AVANZADO", "PRINCIPIANTE", "DUENDE "],
  "fr": ["L’ÉPÉISTE NOIR", "BEATER", "CHEF", "ÉQUIPE D'ASSAUT", "JOUEUR DE HAUT NIVEAU ", "DÉBUTANT", "GOBELIN "],
  "de": ["DER SCHWARZE SCHWERTKÄMPFER", "BEATER", "KOMMANDANT", "CLEARER", "EXPERTE", "ANFÄNGER", "KOBOLD "]
};

if (DEVICE.isSp) {
  var window_height = $(window).innerHeight();
  $(".game__main").height(window_height);
}

$(window).on("load", function () {
  $("#start_btn").addClass("js-show");
});

var change_section = function change_section(start, end) {
  $("#".concat(start)).hide();
  $("#".concat(end)).show();
};

var change_finish = function change_finish() {
  $("#enemy_2").hide();

  if (Math.min.apply(Math, _toConsumableArray(result)) < 100) {
    $("#error").show();
  } else {
    $("#finish").show();
  }
};

var attack_enemy = function attack_enemy(num) {
  var random = Math.floor(Math.random() * 2000) + 1000;
  time = 0;
  fast_bloom = true;
  $("#main").on("click", function () {
    if (fast_bloom) {
      fast_bloom = false;
      change_section("frame", "fast");
      setTimeout(function () {
        change_section("fast", "count");
        count(current_num);
      }, 3000);
    }
  });
  setTimeout(function () {
    if (fast_bloom) {
      fast_bloom = false;
      change_section("frame", "enemy_".concat(num));
      start_time = new Date().getTime();
      timer = setInterval(function () {
        time++;

        if (time == 500) {
          clearInterval(timer);
          result[num - 1] = 5001;

          if (Math.min.apply(Math, _toConsumableArray(result)) >= 5000) {
            change_section("enemy_".concat(num), "error");
          } else if (num == 1) {
            change_section("enemy_1", "count");
            count(2);
          } else {
            change_finish();
          }
        }
      }, 10);
    }
  }, random);
};

var count = function count() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  console.log(num);
  $("#count_num").text("3");
  count_num = 3;
  count_interval = setInterval(function () {
    count_num--;
    $("#count_num").text("".concat(count_num));

    if (count_num == 0) {
      clearInterval(count_interval);
      change_section("count", "frame");

      if (num > 0) {
        attack_enemy(num);
      }
    }
  }, 1000);
};

$("#retry,#error_btn").on("click", function () {
  $("#error").hide();
  $("#finish").hide();
  change_section("result", "main");
  change_section("error", "start");
});
$("#start_btn").on("click", function () {
  result = [1, 1];
  change_section("result", "main");
  $(".game-result__list--item").removeClass("js-current");
  $(".game-result__star--item .on").removeClass("js-on");
  $(".game-result__list--head").html("????");
  change_section("start", "count");
  count(1);
  current_num = 1;
});
$("#enemy_1").on("click", function () {
  clearInterval(timer);
  end_time = new Date().getTime();
  result[0] = end_time - start_time;
  change_section("enemy_1", "count");
  count(2);
  current_num = 2;
});
$("#enemy_2").on("click", function () {
  clearInterval(timer);
  end_time = new Date().getTime();
  result[1] = end_time - start_time;
  change_finish();
});
$("#finish_btn").on("click", function () {
  change_section("main", "result");
  final_result = Math.min.apply(Math, _toConsumableArray(result)); // ランク判定

  for (var i = 0; i < lank_time.length; i++) {
    var element = lank_time[i];

    if (final_result <= element) {
      lank = i;
      break;
    }
  } // 書き換え


  $("#score_num").html(final_result);
  $("#lank_name").html(lank_name[lang][lank]);
  $("#chara_img").attr("src", "../../../assets/img/speed/play/result_".concat(lank + 1, ".png"));
  var share_name = lank_name[lang][lank];
  share_name = share_name.replace("<br>", "");
  var share_text = {
    "en": "http://twitter.com/share?url=https://vs.sao-game.jp/en/kirito-challenge/result/".concat(lank + 1, "/&text=Obtained%20the%20title%20\"").concat(share_name, "\"%0AScore:").concat(final_result, "ms%0A&hashtags=SAOVS_KiritoChallenge"),
    "es": "http://twitter.com/share?url=https://vs.sao-game.jp/es/kirito-challenge/result/".concat(lank + 1, "/&text=T\xEDtulo%20obtenido:%20%7B").concat(share_name, "%7D%0AVelocidad:%20").concat(final_result, "ms%0A&hashtags=SAOVS_KiritoChallenge"),
    "de": "http://twitter.com/share?url=https://vs.sao-game.jp/de/kirito-challenge/result/".concat(lank + 1, "/&text=Titel%20\u201E").concat(share_name, "\u201C%20erhalten.%0APunkte:%20").concat(final_result, "ms%0A&hashtags=SAOVS_KiritoChallenge"),
    "fr": "http://twitter.com/share?url=https://vs.sao-game.jp/fr/kirito-challenge/result/".concat(lank + 1, "/&text=Obtention%20du%20titre%20suivant%20:%20%C2%AB").concat(share_name, "%C2%BB%0AScore:%20").concat(final_result, "ms%0A&hashtags=SAOVS_KiritoChallenge")
  };
  $("#share").attr("href", share_text[lang]); // リスト表示

  for (var _i = 6; _i >= 0; _i--) {
    $(".game-result__list--item:nth-child(".concat(_i + 1, ") .game-result__list--head")).html(lank_name[lang][_i]);

    if (_i == lank) {
      $(".game-result__list--item:nth-child(".concat(_i + 1, ")")).addClass("js-current");
      break;
    }
  }

  for (var _i2 = 6; _i2 >= 0; _i2--) {
    $(".game-result__star--item:nth-child(".concat(7 - _i2, ") .on")).addClass("js-on");

    if (lank == _i2) {
      break;
    }
  }
});

function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

},{}],3:[function(require,module,exports){
"use strict";

if (DEVICE.isPc) {
  var move_speed = 2;
} else {
  var move_speed = 3;
}

particlesJS("particles", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: move_speed,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
particlesJS("particles_2", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: move_speed,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

},{}],4:[function(require,module,exports){
"use strict";

var height = window.innerHeight;
var ticker_height = $(".mv-ticker").height();
$(".header").height(innerHeight);
document.documentElement.style.setProperty("--vh", height + "px");
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var innerHeight = window.innerHeight;
  $(".header").height(innerHeight);
}); // header

$(".header-btn,.header-nav__link").on("click", function (e) {
  e.preventDefault();
  $(".header").toggleClass("js-open");
});
$(".pre-language__btn,.speed-language__btn").on("click", function (e) {
  e.preventDefault();
  $(".pre-language").toggleClass("js-open");
  $(".speed-language").toggleClass("js-open");
});
$(".header-language__btn").on("click", function (e) {
  e.preventDefault();
  $(".header-language__list").toggleClass("js-open");
});

},{}],5:[function(require,module,exports){
"use strict";

// modal
$(".mv-ticker__btn").on("click", function (e) {
  e.preventDefault();
  $(".modal").addClass("js-show");
  $(".modal-news").addClass("js-show");
});
$(document).on("click", ".image-trigger", function (e) {
  e.preventDefault();
  $(".modal").addClass("js-show");
  $(".modal-image").addClass("js-show");
  var imageUrl = $(this).attr("src");
  $("#image").attr("src", imageUrl);
});


$(".modal-close,.modal-bg").on("click", function (e) {
  e.preventDefault();
  $(".modal").removeClass("js-show");
  $(".modal-item").removeClass("js-show");
  $("#yt").attr("src", "");
}); // $(".cbt-about__apology").on("click", function (e) {
//   e.preventDefault();
//   $(".modal").addClass("js-show");
//   $(".modal-date").addClass("js-show");
// });

$(".cbt-about__textLink").on("click", function (e) {
  e.preventDefault();
  $(".modal").addClass("js-show");
  $(".modal-info").addClass("js-show");
});

},{}],6:[function(require,module,exports){
"use strict";

// swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  loopedSlides: 10,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

},{}],7:[function(require,module,exports){
"use strict";

if ($("main").hasClass("top")) {
  if (DEVICE.isPc) {
    var move_speed = 6;
  } else {
    var move_speed = 3;
  }

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: move_speed,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
}

},{}],8:[function(require,module,exports){
"use strict";

if ($("main").hasClass("top")) {
  // 省電力
  var isLowPowerMode = false;
  var detectVideo = document.getElementById("detect-video"); //detectVideo の再生エラーを検出する

  var video_promise = detectVideo.play();
  video_promise["catch"](function (error) {
    isLowPowerMode = true;
    $("#video").addClass("js-off");
  });
}

},{}],9:[function(require,module,exports){
"use strict";

if ($("main").hasClass("pre")) {
  // スクロールフェードイン
  $(window).on("load", function () {
    $(".js-load").each(function () {
      $(this).addClass("js-show");
    });
  });
  $(window).on("scroll", function () {
    var wHeight = $(window).height();
    var scrollAmount = $(window).scrollTop();
    $(".js-scroll").each(function () {
      var targetPosition = $(this).offset().top;

      if (scrollAmount > targetPosition - wHeight + 200) {
        $(this).addClass("js-show");
      }
    });
  });
}

},{}],10:[function(require,module,exports){
"use strict";

var header = require("./header");

var modal = require("./modal");

var movie = require("./movie");

var power = require("./power");

var ticker = require("./ticker");

var top = require("./top");

var particle = require("./particle");

var time = require("./time");

var pre = require("./pre");

var chara = require("./chara");

var report = require("./report");

var sup = require("./sup");

var special = require("./special");

if ($("html").hasClass("speed")) {
  var main = require("./game/main");

  var _particle = require("./game/particle");
} // スムーススクロール
// #で始まるリンクをクリックした場合


$('a[href^="#"].smooth').click(function () {
  // スクロールの速度
  var speed = 400; // スクロールタイプ

  var type = "swing"; // href属性の取得

  var href = $(this).attr("href"); // 移動先の取得（hrefが#indexならトップ$(html)に、）

  var target = $(href == "#index" ? "html" : href); // 移動先のポジション取得

  var position = target.offset().top; // animateでスムーススクロール

  $("body,html").animate({
    scrollTop: position
  }, speed, type);
  return false;
});

},{"./chara":1,"./game/main":2,"./game/particle":3,"./header":4,"./modal":5,"./movie":6,"./particle":7,"./power":8,"./pre":9,"./report":11,"./special":12,"./sup":13,"./ticker":14,"./time":15,"./top":16}],11:[function(require,module,exports){
"use strict";

var root;
var scripts = document.getElementsByTagName("script");
var i = scripts.length;

while (i--) {
  var match = scripts[i].src.match(/(^|.*\/)project\.js$/);

  if (match) {
    root = match[1];
    break;
  }
}

root = root.replace("js/", "");
var graph_1 = bodymovin.loadAnimation({
  container: document.getElementById('graph_1'),
  renderer: 'svg',
  // 描画形式
  loop: false,
  // trueにしたらループ。1回再生の場合はfalse
  autoplay: false,
  // 自動再生
  path: "".concat(root, "/data/lottie/data_01.json") // jsonのパスを指定

});
var graph_2 = bodymovin.loadAnimation({
  container: document.getElementById('graph_2'),
  renderer: 'svg',
  // 描画形式
  loop: false,
  // trueにしたらループ。1回再生の場合はfalse
  autoplay: false,
  // 自動再生
  path: "".concat(root, "/data/lottie/data_02.json") // jsonのパスを指定

});
var lottie_list = [graph_1, graph_2]; // スクロールフェードイン

$(window).on("scroll", function () {
  var wHeight = $(window).height();
  var scrollAmount = $(window).scrollTop();
  $(".js-lottie").each(function () {
    var targetPosition = $(this).offset().top;

    if (scrollAmount > targetPosition - wHeight) {
      var target_num = $(this).data("num");
      lottie_list[target_num].setSpeed(1.5);
      lottie_list[target_num].play();
    }
  });
});
$('.report-btn__link').click(function () {
  var speed = 500;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "html" : href);
  var position = target.offset().top - 50;
  $("html, body").animate({
    scrollTop: position
  }, speed, "swing");
  return false;
});
$(".report-content").each(function (index, element) {
  var target_height = $(this).children(".report-content__head").height();
  console.log(target_height);

  if (DEVICE.isPc) {
    var common_height = 50;
  } else {
    var common_height = 30;
  }

  $(this).css("margin-top", target_height / 2 + common_height + "px");
});

},{}],12:[function(require,module,exports){
"use strict";

var slideChangePermit = false;

if (!$("html").hasClass("kr") && !$("html").hasClass("tw") && $("html").hasClass("top")) {
  var thumb = new Swiper(".special-thumb__box", {
    loop: true,
    loopedSlides: 3,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    controller: {
      control: swiper
    }
  });
  var swiper = new Swiper(".special-swiper", {
    effect: 'fade',
    // autoplay: true,
    loop: true,
    loopedSlides: 3,
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    thumbs: {
      swiper: thumb
    }
  });
  swiper.on('touchEnd', function () {
    slideChangePermit = true;
  });
  swiper.on('slideChange', function () {
    var current = swiper.activeIndex;
    thumb.slideTo(current, 300, true);
  });
  thumb.on('slideChange', function () {
    var current = thumb.activeIndex;
    swiper.slideTo(current, 300, true);
  });
}

},{}],13:[function(require,module,exports){
"use strict";

$("#checkbox").on('click', function () {
  if ($("#checkbox").prop("checked")) {
    $(".sup__btn--link").removeClass("js-off");
  } else {
    $(".sup__btn--link").addClass("js-off");
  }
});

},{}],14:[function(require,module,exports){
"use strict";

var total_width = 0;

var ajax_make_item = function ajax_make_item() {
  $.ajax({
    type: "GET",
    url: "../assets/data/news.json",
    dataType: "json"
  }).then(function (json) {
    var LANGUAGE = $("main").data("lang");
    make_ticker(LANGUAGE, json);
    make_news(LANGUAGE, json);
    $(".mv-ticker__list--item").each(function (index, element) {
      // element == this
      var target_width = $(this).width();
      total_width += target_width;
    });

    if (DEVICE.isPc) {
      var speed = 100;
    } else {
      var speed = 50;
    }

    var slider = gsap.to(".mv-ticker__list--move", {
      duration: 1 * (total_width / speed),
      x: -total_width,
      ease: Linear.easeNone,
      repeat: -1
    });
  }, function () {});
};

var make_ticker = function make_ticker(lang, json) {
  json = json[lang];

  for (var i = 0; i < json.length; i++) {
    var element = json[i];

    if (element.link) {
      var text = "<a href=\"".concat(element.link, "\" target=\"_blank\" rel=\"noopener noreferrer\">").concat(element.text, "</a>");
    } else {
      var text = "".concat(element.text);
    }

    var ticker_item = " <li class=\"mv-ticker__list--item\">\n    <p class=\"mv-ticker__list--date\">".concat(element.date, "</p>\n    <p class=\"mv-ticker__list--text\">").concat(text, "</p>\n    </li>");
    $("#ticker").append(ticker_item);
  }

  if (json.length <= 4) {
    for (var _i = 0; _i < json.length; _i++) {
      var _element = json[_i];

      if (_element.link) {
        var text = "<a href=\"".concat(_element.link, "\" target=\"_blank\" rel=\"noopener noreferrer\">").concat(_element.text, "</a>");
      } else {
        var text = "".concat(_element.text);
      }

      var ticker_item = " <li class=\"mv-ticker__list--item\">\n      <p class=\"mv-ticker__list--date\">".concat(_element.date, "</p>\n      <p class=\"mv-ticker__list--text\">").concat(text, "</p>\n      </li>");
      $("#ticker").append(ticker_item);
    }
  }
};

var make_news = function make_news(lang, json) {
  json = json[lang];

  for (var i = 0; i < json.length; i++) {
    var element = json[i];

    if (element.link) {
      var text = "<a href=\"".concat(element.link, "\" target=\"_blank\" rel=\"noopener noreferrer\">").concat(element.text, "</a>");
    } else {
      var text = "".concat(element.text);
    }

    var news_item = "<li class=\"modal-news__list--item\">\n    <p class=\"modal-news__list--date\">".concat(element.date, "</p>\n    <p class=\"modal-news__list--text\">").concat(text, "</p>\n  </li>");
    $("#news").append(news_item);
  }
};

if ($("main").hasClass("top")) {
  ajax_make_item();
}

},{}],15:[function(require,module,exports){
"use strict";

if ($("main").hasClass("top")) {
  var dow = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var today = new Date();
  console.log(today.getFullYear() + "/" + today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getDay());
  var now_month = ("0" + (today.getMonth() + 1)).slice(-2);
  var now_date = ("0" + today.getDate()).slice(-2);
  var now_dow = dow[today.getDay()];
  var now_time = "".concat(now_month, ".").concat(now_date, "<span>").concat(now_dow, "</span>");
  $(".header-date").html(now_time);
}

},{}],16:[function(require,module,exports){
"use strict";

if ($("main").hasClass("top")) {
  $(window).on("load", function () {
    $(".js-load").each(function () {
      $(this).addClass("js-show");
    });
  });
  $(".world-catch span").each(function (index, element) {
    // element == this
    var text_box = this;
    var text = text_box.textContent;
    text_box.innerHTML = null;
    text.split("").forEach(function (c) {
      text_box.innerHTML += "<span>" + c + "</span>";
    });
  }); // スクロールフェードイン

  $(window).on("scroll", function () {
    var wHeight = $(window).height();
    var scrollAmount = $(window).scrollTop();
    $(".js-scroll").each(function () {
      var targetPosition = $(this).offset().top;

      if (scrollAmount > targetPosition - wHeight + 200) {
        $(this).addClass("js-show");
      }
    });
  });
}

},{}]},{},[10])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY2hhcmEuanMiLCJzcmMvanMvZ2FtZS9tYWluLmpzIiwic3JjL2pzL2dhbWUvcGFydGljbGUuanMiLCJzcmMvanMvaGVhZGVyLmpzIiwic3JjL2pzL21vZGFsLmpzIiwic3JjL2pzL21vdmllLmpzIiwic3JjL2pzL3BhcnRpY2xlLmpzIiwic3JjL2pzL3Bvd2VyLmpzIiwic3JjL2pzL3ByZS5qcyIsInNyYy9qcy9wcm9qZWN0LmpzIiwic3JjL2pzL3JlcG9ydC5qcyIsInNyYy9qcy9zcGVjaWFsLmpzIiwic3JjL2pzL3N1cC5qcyIsInNyYy9qcy90aWNrZXIuanMiLCJzcmMvanMvdGltZS5qcyIsInNyYy9qcy90b3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLFFBQVYsQ0FBbUIsS0FBbkIsQ0FBSixFQUErQjtFQUM3QixJQUFNLFlBQVksR0FBRyxJQUFJLE1BQUosQ0FBVyxhQUFYLEVBQTBCO0lBQzdDLE1BQU0sRUFBRSxNQURxQztJQUU3QyxLQUFLLEVBQUUsSUFGc0M7SUFHN0MsVUFBVSxFQUFFO01BQ1YsU0FBUyxFQUFFO0lBREQsQ0FIaUM7SUFNN0M7SUFDQSxVQUFVLEVBQUU7TUFDVixNQUFNLEVBQUUscUJBREU7TUFFVixNQUFNLEVBQUU7SUFGRTtFQVBpQyxDQUExQixDQUFyQjtFQVlBLFlBQVksQ0FBQyxFQUFiLENBQWdCLGFBQWhCLEVBQStCLFlBQVk7SUFDekMsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLFdBQXZCO0lBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxHQUFaO0lBQ0EsWUFBWSxDQUFDLEdBQUQsQ0FBWjtJQUNBLFNBQVMsQ0FBQyxHQUFELENBQVQ7RUFDRCxDQUxEO0VBT0EsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUIsRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUMs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QSxJQUFJLFFBQVEsR0FBRyxJQUFmO0lBQ0EsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLFdBQXBCO0lBQ0EsUUFBUSxDQUFDLFNBQVQsR0FBcUIsSUFBckI7SUFFQSxJQUFJLENBQUMsS0FBTCxDQUFXLEVBQVgsRUFBZSxPQUFmLENBQXVCLFVBQVUsQ0FBVixFQUFhO01BQ2xDLFFBQVEsQ0FBQyxTQUFULElBQXNCLFdBQVcsQ0FBWCxHQUFlLFNBQXJDO0lBQ0QsQ0FGRDtFQUdELENBVEQsRUFONkIsQ0FpQjdCOztFQUNBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxFQUFWLENBQWEsUUFBYixFQUF1QixZQUFZO0lBQ2pDLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxNQUFWLEVBQWhCO0lBQ0EsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLFNBQVYsRUFBckI7SUFDQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLElBQWhCLENBQXFCLFlBQVk7TUFDL0IsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLE1BQVIsR0FBaUIsR0FBeEM7O01BQ0EsSUFBSSxZQUFZLEdBQUcsY0FBYyxHQUFHLE9BQWpCLEdBQTJCLEdBQTlDLEVBQW1EO1FBQ2pELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxRQUFSLENBQWlCLFNBQWpCO01BQ0Q7SUFDRixDQUxEO0VBTUQsQ0FURDtBQVVEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaWYgKCQoXCJtYWluXCIpLmhhc0NsYXNzKFwidG9wXCIpKSB7XG4gIGNvbnN0IHN3aXBlcl9jaGFyYSA9IG5ldyBTd2lwZXIoXCIuY2hhcmEtbWFpblwiLCB7XG4gICAgZWZmZWN0OiAnZmFkZScsXG4gICAgc3BlZWQ6IDEwMDAsXG4gICAgZmFkZUVmZmVjdDoge1xuICAgICAgY3Jvc3NGYWRlOiB0cnVlXG4gICAgfSxcbiAgICAvLyDjg4rjg5Pjg5zjgr/jg7PjgYzlv4XopoHjgarjgonov73liqBcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIlxuICAgIH1cbiAgfSk7XG4gIHN3aXBlcl9jaGFyYS5vbignc2xpZGVDaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG51bSA9IHN3aXBlcl9jaGFyYS5hY3RpdmVJbmRleDtcbiAgICBjb25zb2xlLmxvZyhudW0pO1xuICAgIGNoYW5nZV90aHVtYihudW0pO1xuICAgIGNoYW5nZV9iZyhudW0pO1xuICB9KTtcblxuICAkKCcuY2hhcmEtbGlzdF9faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGFyZ2V0X2lkID0gJCh0aGlzKS5kYXRhKCdpZCcpXG4gICAgc3dpcGVyX2NoYXJhLnNsaWRlVG8odGFyZ2V0X2lkKTtcbiAgfSlcblxuICAkKFwiLmNoYXJhLWNhcmRfX2l0ZW1cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXRfaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XG4gICAgY29uc3QgdGFyZ2V0X2NoYXJhID0gJCh0aGlzKS5wYXJlbnRzKCcuY2hhcmEtbWFpbl9faWQnKS5kYXRhKCdjaGFyYScpO1xuICAgICQoYCMke3RhcmdldF9jaGFyYX0gLmNoYXJhLWNhcmRfX2l0ZW1gKS5yZW1vdmVDbGFzcyhcImpzLXNob3dcIik7XG4gICAgaWYgKHRhcmdldF9pZCA9PSAxKSB7XG4gICAgICAkKGAjJHt0YXJnZXRfY2hhcmF9IC5jaGFyYS1tYWluX19jYXJkLS1pdGVtYCkuYWRkQ2xhc3MoXCJqcy1hbmltXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICQoYCMke3RhcmdldF9jaGFyYX0gLmNoYXJhLW1haW5fX2NhcmQtLWl0ZW1gKS5yZW1vdmVDbGFzcyhcImpzLWFuaW1cIik7XG4gICAgICB9LCA0NTApO1xuICAgICAgJChgIyR7dGFyZ2V0X2NoYXJhfSAuY2hhcmEtbWFpbl9fY2FyZC0taXRlbTpudGgtY2hpbGQoMSlgKS5yZW1vdmVDbGFzcyhcImpzLW1vdmVcIik7XG4gICAgICAkKGAjJHt0YXJnZXRfY2hhcmF9IC5jaGFyYS1tYWluX19jYXJkLS1pdGVtOm50aC1jaGlsZCgxKWApLmFkZENsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICQoYCMke3RhcmdldF9jaGFyYX0gLmNoYXJhLW1haW5fX2NhcmQtLWl0ZW06bnRoLWNoaWxkKDIpYCkucmVtb3ZlQ2xhc3MoXCJqcy1zaG93XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGAjJHt0YXJnZXRfY2hhcmF9IC5jaGFyYS1tYWluX19jYXJkLS1pdGVtYCkuYWRkQ2xhc3MoXCJqcy1hbmltXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICQoYCMke3RhcmdldF9jaGFyYX0gLmNoYXJhLW1haW5fX2NhcmQtLWl0ZW1gKS5yZW1vdmVDbGFzcyhcImpzLWFuaW1cIik7XG4gICAgICB9LCA0NTApO1xuICAgICAgJChgIyR7dGFyZ2V0X2NoYXJhfSAuY2hhcmEtbWFpbl9fY2FyZC0taXRlbTpudGgtY2hpbGQoMSlgKS5hZGRDbGFzcyhcImpzLW1vdmVcIik7XG4gICAgICAkKGAjJHt0YXJnZXRfY2hhcmF9IC5jaGFyYS1tYWluX19jYXJkLS1pdGVtOm50aC1jaGlsZCgxKWApLnJlbW92ZUNsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgICQoYCMke3RhcmdldF9jaGFyYX0gLmNoYXJhLW1haW5fX2NhcmQtLWl0ZW06bnRoLWNoaWxkKDIpYCkuYWRkQ2xhc3MoXCJqcy1zaG93XCIpO1xuICAgIH1cbiAgICAkKHRoaXMpLmFkZENsYXNzKFwianMtc2hvd1wiKTtcbiAgfSk7XG5cbiAgY29uc3QgY2hhbmdlX3RodW1iID0gKHRhcmdldF9pZCkgPT4ge1xuICAgICQoXCIuY2hhcmEtbGlzdF9faXRlbVwiKS5yZW1vdmVDbGFzcyhcImpzLWN1cnJlbnRcIilcbiAgICAkKFwiLmNoYXJhLWxpc3RfX2l0ZW1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgIC8vIGVsZW1lbnQgPT0gdGhpc1xuICAgICAgdmFyIGN1cnJlbnRfaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XG4gICAgICBpZiAoY3VycmVudF9pZCA9PSB0YXJnZXRfaWQpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnanMtY3VycmVudCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IGNoYW5nZV9iZyA9ICh0YXJnZXRfaWQpID0+IHtcbiAgICAkKFwiLmNoYXJhLWJnX19pdGVtXCIpLnJlbW92ZUNsYXNzKFwianMtY3VycmVudFwiKVxuICAgICQoXCIuY2hhcmEtYmdfX2l0ZW1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgIC8vIGVsZW1lbnQgPT0gdGhpc1xuICAgICAgdmFyIGN1cnJlbnRfaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XG4gICAgICBpZiAoY3VycmVudF9pZCA9PSB0YXJnZXRfaWQpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnanMtY3VycmVudCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59IiwibGV0IHN0YXJ0X3RpbWU7XG5sZXQgZW5kX3RpbWU7XG5sZXQgdGltZV9zZWM7XG5sZXQgcmVzdWx0ID0gWzAsIDBdO1xubGV0IGZpbmFsX3Jlc3VsdDtcbmxldCB0aW1lO1xubGV0IHRpbWVyO1xubGV0IGNvdW50X2ludGVydmFsO1xubGV0IGNvdW50X251bTtcbmxldCBjdXJyZW50X251bTtcbmxldCBsYW5rO1xubGV0IGZhc3RfYmxvb207XG5jb25zdCBsYW5nID0gJChcIi5nYW1lXCIpLmRhdGEoXCJsYW5nXCIpXG5jb25zdCBsYW5rX3RpbWUgPSBbXG4gIFwiMjMwXCIsXG4gIFwiMjYwXCIsXG4gIFwiMjkwXCIsXG4gIFwiMzIwXCIsXG4gIFwiMzYwXCIsXG4gIFwiNDEwXCIsXG4gIFwiNTAwMFwiXG5dXG5jb25zdCBsYW5rX25hbWUgPSB7XG4gIFwiZW5cIjogW1xuICAgIFwiVEhFIEJMQUNLIFNXT1JEU01BTlwiLFxuICAgIFwiQkVBVEVSXCIsXG4gICAgXCJDT01NQU5ERVJcIixcbiAgICBcIkFTU0FVTFQgVEVBTVwiLFxuICAgIFwiRVhQRVJUIFBMQVlFUlwiLFxuICAgIFwiQkVHSU5ORVJcIixcbiAgICBcIkdPQkxJTlwiXG4gIF0sXG4gIFwiZXNcIjogW1xuICAgIFwiRUwgRVNQQURBQ0jDjU4gTkVHUk9cIixcbiAgICBcIkJFQVRFUlwiLFxuICAgIFwiTMONREVSXCIsXG4gICAgXCJHUlVQTyBERSA8YnI+RVNUUkFURUdJQVwiLFxuICAgIFwiSlVHQURPUiBBVkFOWkFET1wiLFxuICAgIFwiUFJJTkNJUElBTlRFXCIsXG4gICAgXCJEVUVOREUgXCIsXG4gIF0sXG4gIFwiZnJcIjogW1xuICAgIFwiTOKAmcOJUMOJSVNURSBOT0lSXCIsXG4gICAgXCJCRUFURVJcIixcbiAgICBcIkNIRUZcIixcbiAgICBcIsOJUVVJUEUgRCdBU1NBVVRcIixcbiAgICBcIkpPVUVVUiBERSBIQVVUIE5JVkVBVSBcIixcbiAgICBcIkTDiUJVVEFOVFwiLFxuICAgIFwiR09CRUxJTiBcIixcbiAgXSxcbiAgXCJkZVwiOiBbXG4gICAgXCJERVIgU0NIV0FSWkUgU0NIV0VSVEvDhE1QRkVSXCIsXG4gICAgXCJCRUFURVJcIixcbiAgICBcIktPTU1BTkRBTlRcIixcbiAgICBcIkNMRUFSRVJcIixcbiAgICBcIkVYUEVSVEVcIixcbiAgICBcIkFORsOETkdFUlwiLFxuICAgIFwiS09CT0xEIFwiLFxuICBdXG59XG5cbi8vIOODoeOCpOODs+OBrumrmOOBleWItuW+oVxuaWYgKERFVklDRS5pc1NwKSB7XG4gIGNvbnN0IHdpbmRvd19oZWlnaHQgPSAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKTtcbiAgJChcIi5nYW1lX19tYWluXCIpLmhlaWdodCh3aW5kb3dfaGVpZ2h0KTtcbn1cblxuJCh3aW5kb3cpLm9uKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICQoXCIjc3RhcnRfYnRuXCIpLmFkZENsYXNzKFwianMtc2hvd1wiKTtcbn0pO1xuXG5jb25zdCBjaGFuZ2Vfc2VjdGlvbiA9IChzdGFydCwgZW5kKSA9PiB7XG4gICQoYCMke3N0YXJ0fWApLmhpZGUoKTtcbiAgJChgIyR7ZW5kfWApLnNob3coKTtcbn1cblxuY29uc3QgY2hhbmdlX2ZpbmlzaCA9ICgpID0+IHtcbiAgJChgI2VuZW15XzJgKS5oaWRlKCk7XG4gIGlmIChNYXRoLm1pbiguLi5yZXN1bHQpIDwgMTAwKSB7XG4gICAgJChgI2Vycm9yYCkuc2hvdygpO1xuICB9IGVsc2Uge1xuICAgICQoYCNmaW5pc2hgKS5zaG93KCk7XG4gIH1cbn1cblxuY29uc3QgYXR0YWNrX2VuZW15ID0gKG51bSkgPT4ge1xuICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMDAwKSArIDEwMDA7XG4gIHRpbWUgPSAwO1xuICBmYXN0X2Jsb29tID0gdHJ1ZVxuICAkKFwiI21haW5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGZhc3RfYmxvb20pIHtcbiAgICAgIGZhc3RfYmxvb20gPSBmYWxzZTtcbiAgICAgIGNoYW5nZV9zZWN0aW9uKGBmcmFtZWAsIFwiZmFzdFwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjaGFuZ2Vfc2VjdGlvbihgZmFzdGAsIFwiY291bnRcIik7XG4gICAgICAgIGNvdW50KGN1cnJlbnRfbnVtKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH1cbiAgfSk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChmYXN0X2Jsb29tKSB7XG4gICAgICBmYXN0X2Jsb29tID0gZmFsc2U7XG4gICAgICBjaGFuZ2Vfc2VjdGlvbihgZnJhbWVgLCBgZW5lbXlfJHtudW19YClcbiAgICAgIHN0YXJ0X3RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aW1lKys7XG4gICAgICAgIGlmICh0aW1lID09IDUwMCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgIHJlc3VsdFtudW0gLSAxXSA9IDUwMDE7XG4gICAgICAgICAgaWYgKE1hdGgubWluKC4uLnJlc3VsdCkgPj0gNTAwMCkge1xuICAgICAgICAgICAgY2hhbmdlX3NlY3Rpb24oYGVuZW15XyR7bnVtfWAsIGBlcnJvcmApXG4gICAgICAgICAgfSBlbHNlIGlmIChudW0gPT0gMSkge1xuICAgICAgICAgICAgY2hhbmdlX3NlY3Rpb24oXCJlbmVteV8xXCIsIFwiY291bnRcIik7XG4gICAgICAgICAgICBjb3VudCgyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhbmdlX2ZpbmlzaCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfSwgcmFuZG9tKTtcbn1cblxuY29uc3QgY291bnQgPSAobnVtID0gMCkgPT4ge1xuICBjb25zb2xlLmxvZyhudW0pO1xuICAkKGAjY291bnRfbnVtYCkudGV4dChcIjNcIilcbiAgY291bnRfbnVtID0gMztcbiAgY291bnRfaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY291bnRfbnVtLS07XG4gICAgJChgI2NvdW50X251bWApLnRleHQoYCR7Y291bnRfbnVtfWApXG4gICAgaWYgKGNvdW50X251bSA9PSAwKSB7XG4gICAgICBjbGVhckludGVydmFsKGNvdW50X2ludGVydmFsKTtcbiAgICAgIGNoYW5nZV9zZWN0aW9uKFwiY291bnRcIiwgXCJmcmFtZVwiKTtcbiAgICAgIGlmIChudW0gPiAwKSB7XG4gICAgICAgIGF0dGFja19lbmVteShudW0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwgMTAwMCk7XG59XG5cbiQoXCIjcmV0cnksI2Vycm9yX2J0blwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgJChgI2Vycm9yYCkuaGlkZSgpXG4gICQoYCNmaW5pc2hgKS5oaWRlKClcbiAgY2hhbmdlX3NlY3Rpb24oXCJyZXN1bHRcIiwgXCJtYWluXCIpO1xuICBjaGFuZ2Vfc2VjdGlvbihcImVycm9yXCIsIFwic3RhcnRcIik7XG59KVxuJChcIiNzdGFydF9idG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlc3VsdCA9IFsxLCAxXTtcbiAgY2hhbmdlX3NlY3Rpb24oXCJyZXN1bHRcIiwgXCJtYWluXCIpO1xuICAkKGAuZ2FtZS1yZXN1bHRfX2xpc3QtLWl0ZW1gKS5yZW1vdmVDbGFzcyhcImpzLWN1cnJlbnRcIik7XG4gICQoYC5nYW1lLXJlc3VsdF9fc3Rhci0taXRlbSAub25gKS5yZW1vdmVDbGFzcyhcImpzLW9uXCIpO1xuICAkKGAuZ2FtZS1yZXN1bHRfX2xpc3QtLWhlYWRgKS5odG1sKFwiPz8/P1wiKTtcbiAgY2hhbmdlX3NlY3Rpb24oXCJzdGFydFwiLCBcImNvdW50XCIpO1xuICBjb3VudCgxKTtcbiAgY3VycmVudF9udW0gPSAxO1xufSk7XG4kKFwiI2VuZW15XzFcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICBlbmRfdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICByZXN1bHRbMF0gPSBlbmRfdGltZSAtIHN0YXJ0X3RpbWU7XG4gIGNoYW5nZV9zZWN0aW9uKFwiZW5lbXlfMVwiLCBcImNvdW50XCIpO1xuICBjb3VudCgyKTtcbiAgY3VycmVudF9udW0gPSAyO1xufSk7XG4kKFwiI2VuZW15XzJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICBlbmRfdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICByZXN1bHRbMV0gPSBlbmRfdGltZSAtIHN0YXJ0X3RpbWU7XG4gIGNoYW5nZV9maW5pc2goKTtcbn0pO1xuJChcIiNmaW5pc2hfYnRuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBjaGFuZ2Vfc2VjdGlvbihcIm1haW5cIiwgXCJyZXN1bHRcIik7XG4gIGZpbmFsX3Jlc3VsdCA9IE1hdGgubWluKC4uLnJlc3VsdCk7XG4gIC8vIOODqeODs+OCr+WIpOWumlxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxhbmtfdGltZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBsYW5rX3RpbWVbaV07XG4gICAgaWYgKGZpbmFsX3Jlc3VsdCA8PSBlbGVtZW50KSB7XG4gICAgICBsYW5rID0gaVxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8vIOabuOOBjeaPm+OBiFxuICAkKGAjc2NvcmVfbnVtYCkuaHRtbChmaW5hbF9yZXN1bHQpO1xuICAkKGAjbGFua19uYW1lYCkuaHRtbChsYW5rX25hbWVbbGFuZ11bbGFua10pO1xuICAkKGAjY2hhcmFfaW1nYCkuYXR0cihcInNyY1wiLCBgLi4vLi4vLi4vYXNzZXRzL2ltZy9zcGVlZC9wbGF5L3Jlc3VsdF8ke2xhbmsrMX0ucG5nYCk7XG4gIHZhciBzaGFyZV9uYW1lID0gbGFua19uYW1lW2xhbmddW2xhbmtdO1xuICBzaGFyZV9uYW1lID0gc2hhcmVfbmFtZS5yZXBsYWNlKFwiPGJyPlwiLCBcIlwiKVxuICBjb25zdCBzaGFyZV90ZXh0ID0ge1xuICAgIFwiZW5cIjogYGh0dHA6Ly90d2l0dGVyLmNvbS9zaGFyZT91cmw9aHR0cHM6Ly92cy5zYW8tZ2FtZS5qcC9lbi9raXJpdG8tY2hhbGxlbmdlL3Jlc3VsdC8ke2xhbmsrMX0vJnRleHQ9T2J0YWluZWQlMjB0aGUlMjB0aXRsZSUyMFwiJHtzaGFyZV9uYW1lfVwiJTBBU2NvcmU6JHtmaW5hbF9yZXN1bHR9bXMlMEEmaGFzaHRhZ3M9U0FPVlNfS2lyaXRvQ2hhbGxlbmdlYCxcbiAgICBcImVzXCI6IGBodHRwOi8vdHdpdHRlci5jb20vc2hhcmU/dXJsPWh0dHBzOi8vdnMuc2FvLWdhbWUuanAvZXMva2lyaXRvLWNoYWxsZW5nZS9yZXN1bHQvJHtsYW5rKzF9LyZ0ZXh0PVTDrXR1bG8lMjBvYnRlbmlkbzolMjAlN0Ike3NoYXJlX25hbWV9JTdEJTBBVmVsb2NpZGFkOiUyMCR7ZmluYWxfcmVzdWx0fW1zJTBBJmhhc2h0YWdzPVNBT1ZTX0tpcml0b0NoYWxsZW5nZWAsXG4gICAgXCJkZVwiOiBgaHR0cDovL3R3aXR0ZXIuY29tL3NoYXJlP3VybD1odHRwczovL3ZzLnNhby1nYW1lLmpwL2RlL2tpcml0by1jaGFsbGVuZ2UvcmVzdWx0LyR7bGFuaysxfS8mdGV4dD1UaXRlbCUyMOKAniR7c2hhcmVfbmFtZX3igJwlMjBlcmhhbHRlbi4lMEFQdW5rdGU6JTIwJHtmaW5hbF9yZXN1bHR9bXMlMEEmaGFzaHRhZ3M9U0FPVlNfS2lyaXRvQ2hhbGxlbmdlYCxcbiAgICBcImZyXCI6IGBodHRwOi8vdHdpdHRlci5jb20vc2hhcmU/dXJsPWh0dHBzOi8vdnMuc2FvLWdhbWUuanAvZnIva2lyaXRvLWNoYWxsZW5nZS9yZXN1bHQvJHtsYW5rKzF9LyZ0ZXh0PU9idGVudGlvbiUyMGR1JTIwdGl0cmUlMjBzdWl2YW50JTIwOiUyMCVDMiVBQiR7c2hhcmVfbmFtZX0lQzIlQkIlMEFTY29yZTolMjAke2ZpbmFsX3Jlc3VsdH1tcyUwQSZoYXNodGFncz1TQU9WU19LaXJpdG9DaGFsbGVuZ2VgLFxuICB9XG4gICQoYCNzaGFyZWApLmF0dHIoXCJocmVmXCIsIHNoYXJlX3RleHRbbGFuZ10pO1xuICAvLyDjg6rjgrnjg4jooajnpLpcbiAgZm9yIChsZXQgaSA9IDY7IGkgPj0gMDsgaS0tKSB7XG4gICAgJChgLmdhbWUtcmVzdWx0X19saXN0LS1pdGVtOm50aC1jaGlsZCgke2krMX0pIC5nYW1lLXJlc3VsdF9fbGlzdC0taGVhZGApLmh0bWwobGFua19uYW1lW2xhbmddW2ldKTtcbiAgICBpZiAoaSA9PSBsYW5rKSB7XG4gICAgICAkKGAuZ2FtZS1yZXN1bHRfX2xpc3QtLWl0ZW06bnRoLWNoaWxkKCR7aSsxfSlgKS5hZGRDbGFzcyhcImpzLWN1cnJlbnRcIik7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gNjsgaSA+PSAwOyBpLS0pIHtcbiAgICAkKGAuZ2FtZS1yZXN1bHRfX3N0YXItLWl0ZW06bnRoLWNoaWxkKCR7Ny1pfSkgLm9uYCkuYWRkQ2xhc3MoXCJqcy1vblwiKTtcbiAgICBpZiAobGFuayA9PSBpKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGdldFBhcmFtKG5hbWUsIHVybCkge1xuICBpZiAoIXVybCkgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csIFwiXFxcXCQmXCIpO1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXG4gICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcbiAgaWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbDtcbiAgaWYgKCFyZXN1bHRzWzJdKSByZXR1cm4gJyc7XG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKTtcbn0iLCJpZiAoREVWSUNFLmlzUGMpIHtcbiAgdmFyIG1vdmVfc3BlZWQgPSAyO1xufSBlbHNlIHtcbiAgdmFyIG1vdmVfc3BlZWQgPSAzO1xufVxucGFydGljbGVzSlMoXCJwYXJ0aWNsZXNcIiwge1xuICBwYXJ0aWNsZXM6IHtcbiAgICBudW1iZXI6IHtcbiAgICAgIHZhbHVlOiA4MCxcbiAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB2YWx1ZTogXCIjZmZmZmZmXCJcbiAgICB9LFxuICAgIHNoYXBlOiB7XG4gICAgICB0eXBlOiBcImNpcmNsZVwiLFxuICAgICAgc3Ryb2tlOiB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCJcbiAgICAgIH0sXG4gICAgICBwb2x5Z29uOiB7XG4gICAgICAgIG5iX3NpZGVzOiA1XG4gICAgICB9LFxuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgc3JjOiBcImltZy9naXRodWIuc3ZnXCIsXG4gICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgIGhlaWdodDogMTAwXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3BhY2l0eToge1xuICAgICAgdmFsdWU6IDAuNSxcbiAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICBhbmltOiB7XG4gICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgIHNwZWVkOiAxLFxuICAgICAgICBvcGFjaXR5X21pbjogMC4xLFxuICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgfSxcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiAzLFxuICAgICAgcmFuZG9tOiB0cnVlLFxuICAgICAgYW5pbToge1xuICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICBzcGVlZDogNDAsXG4gICAgICAgIHNpemVfbWluOiAwLjEsXG4gICAgICAgIHN5bmM6IGZhbHNlXG4gICAgICB9LFxuICAgIH0sXG4gICAgbGluZV9saW5rZWQ6IHtcblxuICAgICAgZGlzdGFuY2U6IDE1MCxcbiAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgIG9wYWNpdHk6IDAuNCxcbiAgICAgIHdpZHRoOiAxLFxuICAgIH0sXG4gICAgbW92ZToge1xuICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgc3BlZWQ6IG1vdmVfc3BlZWQsXG4gICAgICBkaXJlY3Rpb246IFwibm9uZVwiLFxuICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbiAgICAgIG91dF9tb2RlOiBcIm91dFwiLFxuICAgICAgYm91bmNlOiBmYWxzZSxcbiAgICAgIGF0dHJhY3Q6IHtcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgcm90YXRlWDogNjAwLFxuICAgICAgICByb3RhdGVZOiAxMjAwXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGludGVyYWN0aXZpdHk6IHtcbiAgICBkZXRlY3Rfb246IFwiY2FudmFzXCIsXG4gICAgZXZlbnRzOiB7XG4gICAgICBvbmhvdmVyOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgbW9kZTogXCJyZXB1bHNlXCJcbiAgICAgIH0sXG4gICAgICBvbmNsaWNrOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgbW9kZTogXCJwdXNoXCJcbiAgICAgIH0sXG4gICAgICByZXNpemU6IHRydWUsXG4gICAgfSxcbiAgICBtb2Rlczoge1xuICAgICAgZ3JhYjoge1xuICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJ1YmJsZToge1xuICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICBzaXplOiA0MCxcbiAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgIG9wYWNpdHk6IDgsXG4gICAgICAgIHNwZWVkOiAzXG4gICAgICB9LFxuICAgICAgcmVwdWxzZToge1xuICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICBkdXJhdGlvbjogMC40XG4gICAgICB9LFxuICAgICAgcHVzaDoge1xuICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcbiAgICAgIH0sXG4gICAgICByZW1vdmU6IHtcbiAgICAgICAgcGFydGljbGVzX25iOiAyXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHJldGluYV9kZXRlY3Q6IHRydWUsXG59KTtcbnBhcnRpY2xlc0pTKFwicGFydGljbGVzXzJcIiwge1xuICBwYXJ0aWNsZXM6IHtcbiAgICBudW1iZXI6IHtcbiAgICAgIHZhbHVlOiA4MCxcbiAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB2YWx1ZTogXCIjZmZmZmZmXCJcbiAgICB9LFxuICAgIHNoYXBlOiB7XG4gICAgICB0eXBlOiBcImNpcmNsZVwiLFxuICAgICAgc3Ryb2tlOiB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCJcbiAgICAgIH0sXG4gICAgICBwb2x5Z29uOiB7XG4gICAgICAgIG5iX3NpZGVzOiA1XG4gICAgICB9LFxuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgc3JjOiBcImltZy9naXRodWIuc3ZnXCIsXG4gICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgIGhlaWdodDogMTAwXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3BhY2l0eToge1xuICAgICAgdmFsdWU6IDAuNSxcbiAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICBhbmltOiB7XG4gICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgIHNwZWVkOiAxLFxuICAgICAgICBvcGFjaXR5X21pbjogMC4xLFxuICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgfSxcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiAzLFxuICAgICAgcmFuZG9tOiB0cnVlLFxuICAgICAgYW5pbToge1xuICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICBzcGVlZDogNDAsXG4gICAgICAgIHNpemVfbWluOiAwLjEsXG4gICAgICAgIHN5bmM6IGZhbHNlXG4gICAgICB9LFxuICAgIH0sXG4gICAgbGluZV9saW5rZWQ6IHtcblxuICAgICAgZGlzdGFuY2U6IDE1MCxcbiAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgIG9wYWNpdHk6IDAuNCxcbiAgICAgIHdpZHRoOiAxLFxuICAgIH0sXG4gICAgbW92ZToge1xuICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgc3BlZWQ6IG1vdmVfc3BlZWQsXG4gICAgICBkaXJlY3Rpb246IFwibm9uZVwiLFxuICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbiAgICAgIG91dF9tb2RlOiBcIm91dFwiLFxuICAgICAgYm91bmNlOiBmYWxzZSxcbiAgICAgIGF0dHJhY3Q6IHtcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgcm90YXRlWDogNjAwLFxuICAgICAgICByb3RhdGVZOiAxMjAwXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGludGVyYWN0aXZpdHk6IHtcbiAgICBkZXRlY3Rfb246IFwiY2FudmFzXCIsXG4gICAgZXZlbnRzOiB7XG4gICAgICBvbmhvdmVyOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgbW9kZTogXCJyZXB1bHNlXCJcbiAgICAgIH0sXG4gICAgICBvbmNsaWNrOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgbW9kZTogXCJwdXNoXCJcbiAgICAgIH0sXG4gICAgICByZXNpemU6IHRydWUsXG4gICAgfSxcbiAgICBtb2Rlczoge1xuICAgICAgZ3JhYjoge1xuICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJ1YmJsZToge1xuICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICBzaXplOiA0MCxcbiAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgIG9wYWNpdHk6IDgsXG4gICAgICAgIHNwZWVkOiAzXG4gICAgICB9LFxuICAgICAgcmVwdWxzZToge1xuICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICBkdXJhdGlvbjogMC40XG4gICAgICB9LFxuICAgICAgcHVzaDoge1xuICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcbiAgICAgIH0sXG4gICAgICByZW1vdmU6IHtcbiAgICAgICAgcGFydGljbGVzX25iOiAyXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHJldGluYV9kZXRlY3Q6IHRydWUsXG59KTsiLCJ2YXIgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xudmFyIHRpY2tlcl9oZWlnaHQgPSAkKFwiLm12LXRpY2tlclwiKS5oZWlnaHQoKTtcbiQoXCIuaGVhZGVyXCIpLmhlaWdodChpbm5lckhlaWdodCk7XG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXZoXCIsIGhlaWdodCArIFwicHhcIik7XG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgdmFyIGlubmVySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAkKFwiLmhlYWRlclwiKS5oZWlnaHQoaW5uZXJIZWlnaHQpO1xufSk7XG5cbi8vIGhlYWRlclxuJChcIi5oZWFkZXItYnRuLC5oZWFkZXItbmF2X19saW5rXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAkKFwiLmhlYWRlclwiKS50b2dnbGVDbGFzcyhcImpzLW9wZW5cIik7XG59KTtcbiQoXCIucHJlLWxhbmd1YWdlX19idG4sLnNwZWVkLWxhbmd1YWdlX19idG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQoXCIucHJlLWxhbmd1YWdlXCIpLnRvZ2dsZUNsYXNzKFwianMtb3BlblwiKTtcbiAgJChcIi5zcGVlZC1sYW5ndWFnZVwiKS50b2dnbGVDbGFzcyhcImpzLW9wZW5cIik7XG59KTtcbiQoXCIuaGVhZGVyLWxhbmd1YWdlX19idG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQoXCIuaGVhZGVyLWxhbmd1YWdlX19saXN0XCIpLnRvZ2dsZUNsYXNzKFwianMtb3BlblwiKTtcbn0pOyIsIi8vIG1vZGFsXG4kKFwiLm12LXRpY2tlcl9fYnRuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAkKFwiLm1vZGFsXCIpLmFkZENsYXNzKFwianMtc2hvd1wiKTtcbiAgJChcIi5tb2RhbC1uZXdzXCIpLmFkZENsYXNzKFwianMtc2hvd1wiKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLm1vdmllLWxpc3RfX2xpbmssIC5jaGFyYS1tYWluX19tb3ZpZSwuY2hhcmEtbWFpbl9fY2FyZC0taXRlbVwiLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQoXCIubW9kYWxcIikuYWRkQ2xhc3MoXCJqcy1zaG93XCIpO1xuICAkKFwiLm1vZGFsLXl0XCIpLmFkZENsYXNzKFwianMtc2hvd1wiKTtcbiAgdmFyIHVybCA9ICQodGhpcykuZGF0YShcInVybFwiKTtcbiAgJChcIiN5dFwiKS5hdHRyKFwic3JjXCIsIGBodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC8ke3VybH1gKTtcbn0pO1xuXG4kKFwiLm1vZGFsLWNsb3NlLC5tb2RhbC1iZ1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJChcIi5tb2RhbFwiKS5yZW1vdmVDbGFzcyhcImpzLXNob3dcIik7XG4gICQoXCIubW9kYWwtaXRlbVwiKS5yZW1vdmVDbGFzcyhcImpzLXNob3dcIik7XG4gICQoXCIjeXRcIikuYXR0cihcInNyY1wiLCBcIlwiKTtcbn0pO1xuXG4vLyAkKFwiLmNidC1hYm91dF9fYXBvbG9neVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgJChcIi5tb2RhbFwiKS5hZGRDbGFzcyhcImpzLXNob3dcIik7XG4vLyAgICQoXCIubW9kYWwtZGF0ZVwiKS5hZGRDbGFzcyhcImpzLXNob3dcIik7XG4vLyB9KTtcbiQoXCIuY2J0LWFib3V0X190ZXh0TGlua1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJChcIi5tb2RhbFwiKS5hZGRDbGFzcyhcImpzLXNob3dcIik7XG4gICQoXCIubW9kYWwtaW5mb1wiKS5hZGRDbGFzcyhcImpzLXNob3dcIik7XG59KTsiLCIvLyBzd2lwZXJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyXCIsIHtcbiAgZWZmZWN0OiBcImNvdmVyZmxvd1wiLFxuICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gIGxvb3A6IHRydWUsXG4gIGxvb3BlZFNsaWRlczogMTAsXG4gIGNvdmVyZmxvd0VmZmVjdDoge1xuICAgIHJvdGF0ZTogNTAsXG4gICAgc3RyZXRjaDogMCxcbiAgICBkZXB0aDogMTAwLFxuICAgIG1vZGlmaWVyOiAxLFxuICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcbiAgfSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbn0pOyIsImlmICgkKFwibWFpblwiKS5oYXNDbGFzcyhcInRvcFwiKSkge1xuICBpZiAoREVWSUNFLmlzUGMpIHtcbiAgICB2YXIgbW92ZV9zcGVlZCA9IDY7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vdmVfc3BlZWQgPSAzO1xuICB9XG4gIHBhcnRpY2xlc0pTKFwicGFydGljbGVzLWpzXCIsIHtcbiAgICBwYXJ0aWNsZXM6IHtcbiAgICAgIG51bWJlcjoge1xuICAgICAgICB2YWx1ZTogODAsXG4gICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWVfYXJlYTogODAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb2xvcjoge1xuICAgICAgICB2YWx1ZTogXCIjZmZmZmZmXCJcbiAgICAgIH0sXG4gICAgICBzaGFwZToge1xuICAgICAgICB0eXBlOiBcImNpcmNsZVwiLFxuICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCJcbiAgICAgICAgfSxcbiAgICAgICAgcG9seWdvbjoge1xuICAgICAgICAgIG5iX3NpZGVzOiA1XG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgc3JjOiBcImltZy9naXRodWIuc3ZnXCIsXG4gICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IDEwMFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgdmFsdWU6IDAuNSxcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgICAgYW5pbToge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3BlZWQ6IDEsXG4gICAgICAgICAgb3BhY2l0eV9taW46IDAuMSxcbiAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgIHJhbmRvbTogdHJ1ZSxcbiAgICAgICAgYW5pbToge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3BlZWQ6IDQwLFxuICAgICAgICAgIHNpemVfbWluOiAwLjEsXG4gICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBsaW5lX2xpbmtlZDoge1xuXG4gICAgICAgIGRpc3RhbmNlOiAxNTAsXG4gICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgb3BhY2l0eTogMC40LFxuICAgICAgICB3aWR0aDogMSxcbiAgICAgIH0sXG4gICAgICBtb3ZlOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IG1vdmVfc3BlZWQsXG4gICAgICAgIGRpcmVjdGlvbjogXCJub25lXCIsXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbiAgICAgICAgb3V0X21vZGU6IFwib3V0XCIsXG4gICAgICAgIGJvdW5jZTogZmFsc2UsXG4gICAgICAgIGF0dHJhY3Q6IHtcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgIHJvdGF0ZVg6IDYwMCxcbiAgICAgICAgICByb3RhdGVZOiAxMjAwXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgaW50ZXJhY3Rpdml0eToge1xuICAgICAgZGV0ZWN0X29uOiBcImNhbnZhc1wiLFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIG9uaG92ZXI6IHtcbiAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgbW9kZTogXCJyZXB1bHNlXCJcbiAgICAgICAgfSxcbiAgICAgICAgb25jbGljazoge1xuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICBtb2RlOiBcInB1c2hcIlxuICAgICAgICB9LFxuICAgICAgICByZXNpemU6IHRydWUsXG4gICAgICB9LFxuICAgICAgbW9kZXM6IHtcbiAgICAgICAgZ3JhYjoge1xuICAgICAgICAgIGRpc3RhbmNlOiA0MDAsXG4gICAgICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJ1YmJsZToge1xuICAgICAgICAgIGRpc3RhbmNlOiA0MDAsXG4gICAgICAgICAgc2l6ZTogNDAsXG4gICAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgICAgb3BhY2l0eTogOCxcbiAgICAgICAgICBzcGVlZDogM1xuICAgICAgICB9LFxuICAgICAgICByZXB1bHNlOiB7XG4gICAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgICBkdXJhdGlvbjogMC40XG4gICAgICAgIH0sXG4gICAgICAgIHB1c2g6IHtcbiAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiB7XG4gICAgICAgICAgcGFydGljbGVzX25iOiAyXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmV0aW5hX2RldGVjdDogdHJ1ZSxcbiAgfSk7XG59IiwiaWYgKCQoXCJtYWluXCIpLmhhc0NsYXNzKFwidG9wXCIpKSB7XG4gIC8vIOecgembu+WKm1xuICB2YXIgaXNMb3dQb3dlck1vZGUgPSBmYWxzZTtcbiAgdmFyIGRldGVjdFZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRlY3QtdmlkZW9cIik7XG4gIC8vZGV0ZWN0VmlkZW8g44Gu5YaN55Sf44Ko44Op44O844KS5qSc5Ye644GZ44KLXG4gIHZhciB2aWRlb19wcm9taXNlID0gZGV0ZWN0VmlkZW8ucGxheSgpO1xuXG4gIHZpZGVvX3Byb21pc2UuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgaXNMb3dQb3dlck1vZGUgPSB0cnVlO1xuICAgICQoXCIjdmlkZW9cIikuYWRkQ2xhc3MoXCJqcy1vZmZcIik7XG4gIH0pO1xufVxuIiwiaWYgKCQoXCJtYWluXCIpLmhhc0NsYXNzKFwicHJlXCIpKSB7XG4gIC8vIOOCueOCr+ODreODvOODq+ODleOCp+ODvOODieOCpOODs1xuICAkKHdpbmRvdykub24oXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLmpzLWxvYWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwianMtc2hvd1wiKTtcbiAgICB9KTtcbiAgfSk7XG4gICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICBjb25zdCBzY3JvbGxBbW91bnQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgJChcIi5qcy1zY3JvbGxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgaWYgKHNjcm9sbEFtb3VudCA+IHRhcmdldFBvc2l0aW9uIC0gd0hlaWdodCArIDIwMCkge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCJjb25zdCBoZWFkZXIgPSByZXF1aXJlKFwiLi9oZWFkZXJcIik7XG5jb25zdCBtb2RhbCA9IHJlcXVpcmUoXCIuL21vZGFsXCIpO1xuY29uc3QgbW92aWUgPSByZXF1aXJlKFwiLi9tb3ZpZVwiKTtcbmNvbnN0IHBvd2VyID0gcmVxdWlyZShcIi4vcG93ZXJcIik7XG5jb25zdCB0aWNrZXIgPSByZXF1aXJlKFwiLi90aWNrZXJcIik7XG5jb25zdCB0b3AgPSByZXF1aXJlKFwiLi90b3BcIik7XG5jb25zdCBwYXJ0aWNsZSA9IHJlcXVpcmUoXCIuL3BhcnRpY2xlXCIpO1xuY29uc3QgdGltZSA9IHJlcXVpcmUoXCIuL3RpbWVcIik7XG5jb25zdCBwcmUgPSByZXF1aXJlKFwiLi9wcmVcIik7XG5jb25zdCBjaGFyYSA9IHJlcXVpcmUoXCIuL2NoYXJhXCIpO1xuY29uc3QgcmVwb3J0ID0gcmVxdWlyZShcIi4vcmVwb3J0XCIpO1xuY29uc3Qgc3VwID0gcmVxdWlyZShcIi4vc3VwXCIpO1xuY29uc3Qgc3BlY2lhbCA9IHJlcXVpcmUoXCIuL3NwZWNpYWxcIik7XG5pZiAoJChcImh0bWxcIikuaGFzQ2xhc3MoXCJzcGVlZFwiKSkge1xuICBjb25zdCBtYWluID0gcmVxdWlyZShcIi4vZ2FtZS9tYWluXCIpO1xuICBjb25zdCBwYXJ0aWNsZSA9IHJlcXVpcmUoXCIuL2dhbWUvcGFydGljbGVcIik7XG59XG4vLyDjgrnjg6Djg7zjgrnjgrnjgq/jg63jg7zjg6tcbi8vICPjgaflp4vjgb7jgovjg6rjg7Pjgq/jgpLjgq/jg6rjg4Pjgq/jgZfjgZ/loLTlkIhcbiQoJ2FbaHJlZl49XCIjXCJdLnNtb290aCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgLy8g44K544Kv44Ot44O844Or44Gu6YCf5bqmXG4gIGxldCBzcGVlZCA9IDQwMDtcbiAgLy8g44K544Kv44Ot44O844Or44K/44Kk44OXXG4gIGxldCB0eXBlID0gXCJzd2luZ1wiO1xuICAvLyBocmVm5bGe5oCn44Gu5Y+W5b6XXG4gIGxldCBocmVmID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcbiAgLy8g56e75YuV5YWI44Gu5Y+W5b6X77yIaHJlZuOBjCNpbmRleOOBquOCieODiOODg+ODlyQoaHRtbCnjgavjgIHvvIlcbiAgbGV0IHRhcmdldCA9ICQoaHJlZiA9PSBcIiNpbmRleFwiID8gXCJodG1sXCIgOiBocmVmKTtcbiAgLy8g56e75YuV5YWI44Gu44Od44K444K344On44Oz5Y+W5b6XXG4gIGxldCBwb3NpdGlvbiA9IHRhcmdldC5vZmZzZXQoKS50b3A7XG4gIC8vIGFuaW1hdGXjgafjgrnjg6Djg7zjgrnjgrnjgq/jg63jg7zjg6tcbiAgJChcImJvZHksaHRtbFwiKS5hbmltYXRlKHtcbiAgICBzY3JvbGxUb3A6IHBvc2l0aW9uXG4gIH0sIHNwZWVkLCB0eXBlKTtcbiAgcmV0dXJuIGZhbHNlO1xufSk7IiwidmFyIHJvb3Q7XG52YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xudmFyIGkgPSBzY3JpcHRzLmxlbmd0aDtcbndoaWxlIChpLS0pIHtcbiAgdmFyIG1hdGNoID0gc2NyaXB0c1tpXS5zcmMubWF0Y2goLyhefC4qXFwvKXByb2plY3RcXC5qcyQvKTtcbiAgaWYgKG1hdGNoKSB7XG4gICAgcm9vdCA9IG1hdGNoWzFdO1xuICAgIGJyZWFrO1xuICB9XG59XG5yb290ID0gcm9vdC5yZXBsYWNlKFwianMvXCIsIFwiXCIpO1xuXG52YXIgZ3JhcGhfMSA9IGJvZHltb3Zpbi5sb2FkQW5pbWF0aW9uKHtcbiAgY29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JhcGhfMScpLFxuICByZW5kZXJlcjogJ3N2ZycsIC8vIOaPj+eUu+W9ouW8j1xuICBsb29wOiBmYWxzZSwgLy8gdHJ1ZeOBq+OBl+OBn+OCieODq+ODvOODl+OAgjHlm57lho3nlJ/jga7loLTlkIjjga9mYWxzZVxuICBhdXRvcGxheTogZmFsc2UsIC8vIOiHquWLleWGjeeUn1xuICBwYXRoOiBgJHtyb290fS9kYXRhL2xvdHRpZS9kYXRhXzAxLmpzb25gLCAvLyBqc29u44Gu44OR44K544KS5oyH5a6aXG5cbn0pO1xudmFyIGdyYXBoXzIgPSBib2R5bW92aW4ubG9hZEFuaW1hdGlvbih7XG4gIGNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyYXBoXzInKSxcbiAgcmVuZGVyZXI6ICdzdmcnLCAvLyDmj4/nlLvlvaLlvI9cbiAgbG9vcDogZmFsc2UsIC8vIHRydWXjgavjgZfjgZ/jgonjg6vjg7zjg5fjgIIx5Zue5YaN55Sf44Gu5aC05ZCI44GvZmFsc2VcbiAgYXV0b3BsYXk6IGZhbHNlLCAvLyDoh6rli5Xlho3nlJ9cbiAgcGF0aDogYCR7cm9vdH0vZGF0YS9sb3R0aWUvZGF0YV8wMi5qc29uYCwgLy8ganNvbuOBruODkeOCueOCkuaMh+WumlxufSk7XG5cbnZhciBsb3R0aWVfbGlzdCA9IFtcbiAgZ3JhcGhfMSwgZ3JhcGhfMlxuXTtcblxuLy8g44K544Kv44Ot44O844Or44OV44Kn44O844OJ44Kk44OzXG4kKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCB3SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICBjb25zdCBzY3JvbGxBbW91bnQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICQoXCIuanMtbG90dGllXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG4gICAgaWYgKHNjcm9sbEFtb3VudCA+IHRhcmdldFBvc2l0aW9uIC0gd0hlaWdodCkge1xuICAgICAgdmFyIHRhcmdldF9udW0gPSAkKHRoaXMpLmRhdGEoXCJudW1cIik7XG4gICAgICBsb3R0aWVfbGlzdFt0YXJnZXRfbnVtXS5zZXRTcGVlZCgxLjUpO1xuICAgICAgbG90dGllX2xpc3RbdGFyZ2V0X251bV0ucGxheSgpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuJCgnLnJlcG9ydC1idG5fX2xpbmsnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gIHZhciBzcGVlZCA9IDUwMDtcbiAgdmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xuICB2YXIgdGFyZ2V0ID0gJChocmVmID09IFwiI1wiIHx8IGhyZWYgPT0gXCJcIiA/IFwiaHRtbFwiIDogaHJlZik7XG4gIHZhciBwb3NpdGlvbiA9IHRhcmdldC5vZmZzZXQoKS50b3AgLSA1MDtcbiAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgc2Nyb2xsVG9wOiBwb3NpdGlvblxuICB9LCBzcGVlZCwgXCJzd2luZ1wiKTtcbiAgcmV0dXJuIGZhbHNlO1xufSk7XG5cbiQoXCIucmVwb3J0LWNvbnRlbnRcIikuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgdmFyIHRhcmdldF9oZWlnaHQgPSAkKHRoaXMpLmNoaWxkcmVuKFwiLnJlcG9ydC1jb250ZW50X19oZWFkXCIpLmhlaWdodCgpXG4gIGNvbnNvbGUubG9nKHRhcmdldF9oZWlnaHQpO1xuICBpZiAoREVWSUNFLmlzUGMpIHtcbiAgICB2YXIgY29tbW9uX2hlaWdodCA9IDUwO1xuICB9IGVsc2Uge1xuICAgIHZhciBjb21tb25faGVpZ2h0ID0gMzA7XG4gIH1cbiAgJCh0aGlzKS5jc3MoXCJtYXJnaW4tdG9wXCIsIHRhcmdldF9oZWlnaHQgLyAyICsgY29tbW9uX2hlaWdodCArIFwicHhcIik7XG59KTsiLCJsZXQgc2xpZGVDaGFuZ2VQZXJtaXQgPSBmYWxzZTtcbmlmICghJChcImh0bWxcIikuaGFzQ2xhc3MoXCJrclwiKSAmJiAhJChcImh0bWxcIikuaGFzQ2xhc3MoXCJ0d1wiKSAmJiAkKFwiaHRtbFwiKS5oYXNDbGFzcyhcInRvcFwiKSkge1xuICB2YXIgdGh1bWIgPSBuZXcgU3dpcGVyKFwiLnNwZWNpYWwtdGh1bWJfX2JveFwiLCB7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICBsb29wZWRTbGlkZXM6IDMsXG4gICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxuICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgY29udHJvbGxlcjoge1xuICAgICAgY29udHJvbDogc3dpcGVyXG4gICAgfSxcbiAgfSk7XG4gIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnNwZWNpYWwtc3dpcGVyXCIsIHtcbiAgICBlZmZlY3Q6ICdmYWRlJyxcbiAgICAvLyBhdXRvcGxheTogdHJ1ZSxcbiAgICBsb29wOiB0cnVlLFxuICAgIGxvb3BlZFNsaWRlczogMyxcbiAgICBmYWRlRWZmZWN0OiB7XG4gICAgICBjcm9zc0ZhZGU6IHRydWVcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgIH0sXG4gICAgdGh1bWJzOiB7XG4gICAgICBzd2lwZXI6IHRodW1iXG4gICAgfSxcbiAgfSk7XG4gIHN3aXBlci5vbigndG91Y2hFbmQnLCAoKSA9PiB7XG4gICAgc2xpZGVDaGFuZ2VQZXJtaXQgPSB0cnVlO1xuICB9KTtcbiAgc3dpcGVyLm9uKCdzbGlkZUNoYW5nZScsICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHRodW1iLnNsaWRlVG8oY3VycmVudCwgMzAwLCB0cnVlKTtcbiAgfSk7XG4gIHRodW1iLm9uKCdzbGlkZUNoYW5nZScsICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGh1bWIuYWN0aXZlSW5kZXg7XG4gICAgc3dpcGVyLnNsaWRlVG8oY3VycmVudCwgMzAwLCB0cnVlKTtcbiAgfSk7XG59IiwiJChcIiNjaGVja2JveFwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGlmICgkKFwiI2NoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIpKSB7XG4gICAgJChcIi5zdXBfX2J0bi0tbGlua1wiKS5yZW1vdmVDbGFzcyhcImpzLW9mZlwiKTtcbiAgfSBlbHNlIHtcbiAgICAkKFwiLnN1cF9fYnRuLS1saW5rXCIpLmFkZENsYXNzKFwianMtb2ZmXCIpO1xuXG4gIH1cbn0pOyIsInZhciB0b3RhbF93aWR0aCA9IDA7XG5cbmNvbnN0IGFqYXhfbWFrZV9pdGVtID0gKCkgPT4ge1xuICAkLmFqYXgoe1xuICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgdXJsOiBcIi4uL2Fzc2V0cy9kYXRhL25ld3MuanNvblwiLFxuICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgfSkudGhlbihcbiAgICBmdW5jdGlvbiAoanNvbikge1xuICAgICAgY29uc3QgTEFOR1VBR0UgPSAkKFwibWFpblwiKS5kYXRhKFwibGFuZ1wiKTtcbiAgICAgIG1ha2VfdGlja2VyKExBTkdVQUdFLCBqc29uKTtcbiAgICAgIG1ha2VfbmV3cyhMQU5HVUFHRSwganNvbik7XG4gICAgICAkKFwiLm12LXRpY2tlcl9fbGlzdC0taXRlbVwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAvLyBlbGVtZW50ID09IHRoaXNcbiAgICAgICAgdmFyIHRhcmdldF93aWR0aCA9ICQodGhpcykud2lkdGgoKTtcbiAgICAgICAgdG90YWxfd2lkdGggKz0gdGFyZ2V0X3dpZHRoO1xuICAgICAgfSk7XG4gICAgICBpZiAoREVWSUNFLmlzUGMpIHtcbiAgICAgICAgdmFyIHNwZWVkID0gMTAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNwZWVkID0gNTA7XG4gICAgICB9XG4gICAgICB2YXIgc2xpZGVyID0gZ3NhcC50byhcIi5tdi10aWNrZXJfX2xpc3QtLW1vdmVcIiwge1xuICAgICAgICBkdXJhdGlvbjogMSAqICh0b3RhbF93aWR0aCAvIHNwZWVkKSxcbiAgICAgICAgeDogLXRvdGFsX3dpZHRoLFxuICAgICAgICBlYXNlOiBMaW5lYXIuZWFzZU5vbmUsXG4gICAgICAgIHJlcGVhdDogLTEsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFsZXJ0KFwi44Ko44Op44O85pmC44Gr6KGo56S644GV44KM44KL44OG44Kt44K544OIXCIpO1xuICAgIH1cbiAgKTtcbn07XG5cbmNvbnN0IG1ha2VfdGlja2VyID0gKGxhbmcsIGpzb24pID0+IHtcbiAganNvbiA9IGpzb25bbGFuZ107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBqc29uW2ldO1xuICAgIGlmIChlbGVtZW50LmxpbmspIHtcbiAgICAgIHZhciB0ZXh0ID0gYDxhIGhyZWY9XCIke2VsZW1lbnQubGlua31cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+JHtlbGVtZW50LnRleHR9PC9hPmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0ZXh0ID0gYCR7ZWxlbWVudC50ZXh0fWA7XG4gICAgfVxuICAgIHZhciB0aWNrZXJfaXRlbSA9IGAgPGxpIGNsYXNzPVwibXYtdGlja2VyX19saXN0LS1pdGVtXCI+XG4gICAgPHAgY2xhc3M9XCJtdi10aWNrZXJfX2xpc3QtLWRhdGVcIj4ke2VsZW1lbnQuZGF0ZX08L3A+XG4gICAgPHAgY2xhc3M9XCJtdi10aWNrZXJfX2xpc3QtLXRleHRcIj4ke3RleHR9PC9wPlxuICAgIDwvbGk+YDtcbiAgICAkKFwiI3RpY2tlclwiKS5hcHBlbmQodGlja2VyX2l0ZW0pO1xuICB9XG4gIGlmIChqc29uLmxlbmd0aCA8PSA0KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0ganNvbltpXTtcbiAgICAgIGlmIChlbGVtZW50LmxpbmspIHtcbiAgICAgICAgdmFyIHRleHQgPSBgPGEgaHJlZj1cIiR7ZWxlbWVudC5saW5rfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj4ke2VsZW1lbnQudGV4dH08L2E+YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0ZXh0ID0gYCR7ZWxlbWVudC50ZXh0fWA7XG4gICAgICB9XG4gICAgICB2YXIgdGlja2VyX2l0ZW0gPSBgIDxsaSBjbGFzcz1cIm12LXRpY2tlcl9fbGlzdC0taXRlbVwiPlxuICAgICAgPHAgY2xhc3M9XCJtdi10aWNrZXJfX2xpc3QtLWRhdGVcIj4ke2VsZW1lbnQuZGF0ZX08L3A+XG4gICAgICA8cCBjbGFzcz1cIm12LXRpY2tlcl9fbGlzdC0tdGV4dFwiPiR7dGV4dH08L3A+XG4gICAgICA8L2xpPmA7XG5cbiAgICAgICQoXCIjdGlja2VyXCIpLmFwcGVuZCh0aWNrZXJfaXRlbSk7XG4gICAgfVxuICB9XG59O1xuY29uc3QgbWFrZV9uZXdzID0gKGxhbmcsIGpzb24pID0+IHtcbiAganNvbiA9IGpzb25bbGFuZ107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGpzb25baV07XG4gICAgaWYgKGVsZW1lbnQubGluaykge1xuICAgICAgdmFyIHRleHQgPSBgPGEgaHJlZj1cIiR7ZWxlbWVudC5saW5rfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj4ke2VsZW1lbnQudGV4dH08L2E+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRleHQgPSBgJHtlbGVtZW50LnRleHR9YDtcbiAgICB9XG4gICAgdmFyIG5ld3NfaXRlbSA9IGA8bGkgY2xhc3M9XCJtb2RhbC1uZXdzX19saXN0LS1pdGVtXCI+XG4gICAgPHAgY2xhc3M9XCJtb2RhbC1uZXdzX19saXN0LS1kYXRlXCI+JHtlbGVtZW50LmRhdGV9PC9wPlxuICAgIDxwIGNsYXNzPVwibW9kYWwtbmV3c19fbGlzdC0tdGV4dFwiPiR7dGV4dH08L3A+XG4gIDwvbGk+YDtcbiAgICAkKFwiI25ld3NcIikuYXBwZW5kKG5ld3NfaXRlbSk7XG4gIH1cbn07XG5cbmlmICgkKFwibWFpblwiKS5oYXNDbGFzcyhcInRvcFwiKSkge1xuICBhamF4X21ha2VfaXRlbSgpO1xufSIsImlmICgkKFwibWFpblwiKS5oYXNDbGFzcyhcInRvcFwiKSkge1xuICB2YXIgZG93ID0gW1wiU1VOXCIsIFwiTU9OXCIsIFwiVFVFXCIsIFwiV0VEXCIsIFwiVEhVXCIsIFwiRlJJXCIsIFwiU0FUXCJdO1xuICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zb2xlLmxvZyhcbiAgICB0b2RheS5nZXRGdWxsWWVhcigpICtcbiAgICAgIFwiL1wiICtcbiAgICAgIHRvZGF5LmdldE1vbnRoKCkgK1xuICAgICAgMSArXG4gICAgICBcIi9cIiArXG4gICAgICB0b2RheS5nZXREYXRlKCkgK1xuICAgICAgXCIvXCIgK1xuICAgICAgdG9kYXkuZ2V0RGF5KClcbiAgKTtcbiAgdmFyIG5vd19tb250aCA9IChcIjBcIiArICh0b2RheS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKTtcbiAgdmFyIG5vd19kYXRlID0gKFwiMFwiICsgdG9kYXkuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XG4gIHZhciBub3dfZG93ID0gZG93W3RvZGF5LmdldERheSgpXTtcbiAgdmFyIG5vd190aW1lID0gYCR7bm93X21vbnRofS4ke25vd19kYXRlfTxzcGFuPiR7bm93X2Rvd308L3NwYW4+YDtcbiAgJChcIi5oZWFkZXItZGF0ZVwiKS5odG1sKG5vd190aW1lKTtcbn1cbiIsImlmICgkKFwibWFpblwiKS5oYXNDbGFzcyhcInRvcFwiKSkge1xuICAkKHdpbmRvdykub24oXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLmpzLWxvYWRcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwianMtc2hvd1wiKTtcbiAgICB9KTtcbiAgfSk7XG4gICQoXCIud29ybGQtY2F0Y2ggc3BhblwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgIC8vIGVsZW1lbnQgPT0gdGhpc1xuICAgIHZhciB0ZXh0X2JveCA9IHRoaXM7XG4gICAgdmFyIHRleHQgPSB0ZXh0X2JveC50ZXh0Q29udGVudDtcbiAgICB0ZXh0X2JveC5pbm5lckhUTUwgPSBudWxsO1xuXG4gICAgdGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICB0ZXh0X2JveC5pbm5lckhUTUwgKz0gXCI8c3Bhbj5cIiArIGMgKyBcIjwvc3Bhbj5cIjtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8g44K544Kv44Ot44O844Or44OV44Kn44O844OJ44Kk44OzXG4gICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICBjb25zdCBzY3JvbGxBbW91bnQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgJChcIi5qcy1zY3JvbGxcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgaWYgKHNjcm9sbEFtb3VudCA+IHRhcmdldFBvc2l0aW9uIC0gd0hlaWdodCArIDIwMCkge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwianMtc2hvd1wiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59Il19
