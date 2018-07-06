var loadSourcPicCount = 0;
var sourcePic = [
  "https://zky.koocdn.com/club/picture/c0acd5e63a5b44cb98173977b0969ffd.jpg",
  "https://zky.koocdn.com/club/picture/7d69adc999c14099abadd05cf892e848.jpg",
  "https://zky.koocdn.com/club/picture/5f1e15b90a1143f7b0901754b05328cb.jpg",
  "https://zky.koocdn.com/club/picture/2e10a172785d408296ec51f5c10122cb.jpg",
  "https://zky.koocdn.com/club/picture/79c4e6d8d823457499d18a4011009228.jpg",
  "https://zky.koocdn.com/club/picture/71ba91a44e0e49c58ae0526d9c14eeb2.jpg",
  "https://zky.koocdn.com/club/picture/28436a62a409481087640be40ef32135.jpg",
  "https://zky.koocdn.com/club/picture/8d07043d9b3c4913b9c9ab514631def6.jpg",
  "https://zky.koocdn.com/club/picture/2968d02d69854a0f868278fa600c480d.jpg",
  "https://zky.koocdn.com/club/picture/afe3ee202a06476a9b6c266efbab6a1b.jpg",
  "https://zky.koocdn.com/club/picture/ab49c3747f824197a6483efdca4712a1.jpg",
  "https://zky.koocdn.com/club/picture/cb8041a089be4fc48bde023f5f22d1bc.jpg",
  "https://zky.koocdn.com/club/picture/c06bb4c598ff4136ba12040a5355135a.jpg",
  "https://zky.koocdn.com/club/picture/6a7ae8d8f9f743c196c84711835ac010.jpg",
  "https://zky.koocdn.com/club/picture/740e8b93fb4840988f15063f18117234.jpg",
  "https://zky.koocdn.com/club/picture/89b51b46c2834bfe910b5247dfd0785a.jpg",
  "https://zky.koocdn.com/club/picture/8113e81373394529a8a1a1629cd27c5f.jpg",
  "https://zky.koocdn.com/club/picture/988c72dbad7943d5881a142b2e358e57.jpg",
  "https://zky.koocdn.com/club/picture/164e8302cf0b418492f21ecdd2098bae.jpg",
  "https://zky.koocdn.com/club/picture/f99c5f94d60b4fbab50334cdce70e2b0.jpg",
  "https://zky.koocdn.com/club/picture/4ff5931bfd154627ae3f3184d9f78cdd.jpg",
  "https://zky.koocdn.com/club/picture/c9b92f416c3e4bf48549a9ef038816f8.jpg",
  "https://zky.koocdn.com/club/picture/35845f3a013c43c98d7caa145349ca3f.jpg",
  "https://zky.koocdn.com/club/picture/1d9eae97acb34757bf7332ac09cf7049.jpg",
  "https://zky.koocdn.com/club/picture/dd90f01fe070448d812d56d6c8ef4fe0.jpg",
  "https://zky.koocdn.com/club/picture/ddf8bc91de434798a159beb62ad3b970.jpg",
  "https://zky.koocdn.com/club/picture/4c30462d6d79491ea0ebe8cb0ce8fe76.jpg",
  "https://zky.koocdn.com/club/picture/7a1585d9e67f4ac48cba3460173e0538.jpg",
  "https://zky.koocdn.com/club/picture/682f8d3130c449e2b77e16e7d970020e.jpg",
  "https://zky.koocdn.com/club/picture/40a575cab24f4cbdacb8fa7c0d851241.jpg",
  "https://zky.koocdn.com/club/picture/1cf2b6997cd3426fbb9596830759d9a3.jpg",
  "https://zky.koocdn.com/club/picture/f39ab46693cd4588969aa81311218b83.jpg",
  "https://zky.koocdn.com/club/picture/6e68eec97cbb45d8930470eebbf0b8af.jpg",
  "https://zky.koocdn.com/club/picture/9a72433267fd4bb59dd56f99126ee1b6.jpg",
  "https://zky.koocdn.com/club/picture/4dbd8d1041cd44689da930e31c4fb67d.jpg",
  "https://zky.koocdn.com/club/picture/20047aac4e9b4296adc67a4e1e7f67db.jpg",
  "https://zky.koocdn.com/club/picture/d0c37f953dab41439cddf07b4609144a.jpg",
  "https://zky.koocdn.com/club/picture/1f5b3c03357b490892f8f448aeea8e74.jpg",
  "https://zky.koocdn.com/club/picture/68f48d2ee33b469a89266e349a437288.jpg",
  "https://zky.koocdn.com/club/picture/8e8e87e122974d6e8bbb9327f303df0b.jpg",
  "https://zky.koocdn.com/club/picture/11716f957e4f4d599007c19833c42f88.jpg",
  "https://zky.koocdn.com/club/picture/732304b2611d4d5ba3be63a4bcf1ac94.jpg",
  "https://zky.koocdn.com/club/picture/5f4be824808847ecb64ac75522124eee.jpg",
  "https://zky.koocdn.com/club/picture/626d90a71d83447aa656c60d646fd286.jpg",
  "https://zky.koocdn.com/club/picture/1afbb7b7a66f4867b831d24d66600544.jpg",
  "https://zky.koocdn.com/club/picture/f4b39d722c9f4a5c8ebc0b2e11cfda18.jpg",
  "https://zky.koocdn.com/club/picture/e145fe28a08648c683ad0a2ced84b71f.jpg",
  "https://zky.koocdn.com/club/picture/0c4ff704acba4377a56d333af45df5a7.jpg",
  "https://zky.koocdn.com/club/picture/97c5f146b60f4de2bf3d7902bbc5c449.jpg",
  "https://zky.koocdn.com/club/picture/b6c9860d15384252b6604400f4ae9e27.jpg",
  "https://zky.koocdn.com/club/picture/44e234a9370b4130a055fae81780015e.jpg",
  "https://zky.koocdn.com/club/picture/e9a641f7129b4a6faae563f006f7da84.jpg",
  "https://zky.koocdn.com/club/picture/1ce8f0ab808941329602f988b85e74f7.jpg",
  "https://zky.koocdn.com/club/picture/38356a2047bf47b987c2af1d941f58f6.jpg",
  "https://zky.koocdn.com/club/picture/d6cf04f3897d412b958cead99bf60567.jpg",
  "https://zky.koocdn.com/club/picture/e853854cbf8b43baa846548a558e5b12.jpg",
  "https://zky.koocdn.com/club/picture/3f9bcf96873b46798417319184c97410.jpg",
  "https://zky.koocdn.com/club/picture/c0acd5e63a5b44cb98173977b0969ffd.jpg"
];
$(document).ready(function () {
  var isAndroid = navigator
      .userAgent
      .match(/android/ig),
    isIos = navigator
      .userAgent
      .match(/iphone|ipad/ig),
    isWinPhone = navigator
      .userAgent
      .match(/Windows Phone/ig);
  if (isAndroid || isWinPhone || isIos) {
    loadNBSourcePic();
  } else {
    window.location.href = "http://localhost:8080/yssweb.html"

  }
});

// 加载图片的函数
function loadNBSourcePic() {
  var sLen = sourcePic.length;
  var i;

  for (i = 0; i < sLen; i++) {
    var url = sourcePic[i];
    var img = new Image();
    img.src = url;
    img.onload = function () {
      loadSourcPicCount++;
      $(".lg-component-loading-progress").html(parseInt(loadSourcPicCount * 100 / sLen) + "%");
      if (loadSourcPicCount == sLen - 5) {
        setTimeout(function () {
          $(".lg-loading-page").hide();
          $('.lg-page-container').show();
          initMainPage()
        }, 500);
      }
    }
  }
}

function initMainPage() {

  var slide_two_str = $('.slide_two').html();
  var slide_three_str = $('.slide_three').html();
  var slide_four_str = $('.slide_four').html();
  var slide_five_str = $('.slide_five').html();
  var slide_six_str = $('.slide_six').html();
  var slide_seven_str = $('.slide_seven').html();
  var swiper = new Swiper('.lg-page-container', {
    direction: 'vertical',
    watchSlidesProgress: true,
    on: {
      progress: function (progress) {
        if (progress === -0) {

          $('.slide_one').addClass('slide_one_animation')
          $('.slide_one').addClass('zoomIn')
          $('.slide_one').addClass('animated')
          setTimeout(function () {
            $('.slide_two')
              .children()
              .remove()
          })
        }
        if (progress === 0.125) {
          $('.slide_one').removeClass('slide_one_animation')
          $('.slide_one').removeClass('zoomIn')
          $('.slide_one').removeClass('animated')
          if ($('.slide_two').children().length === 0) {
            $('.slide_two').append(slide_two_str)
          }
          setTimeout(function () {
            $('.slide_three')
              .children()
              .remove()
          })
        }
        if (progress === 0.25) {
          if ($('.slide_three').children().length === 0) {
            $('.slide_three').append(slide_three_str)
          }

          setTimeout(function () {
            $('.slide_four')
              .children()
              .remove()
            $('.slide_two')
              .children()
              .remove()
          })
        }
        if (progress === 0.375) {
          if ($('.slide_four').children().length === 0) {
            $('.slide_four').append(slide_four_str)
          }
          setTimeout(function () {
            $('.slide_five')
              .children()
              .remove()
            $('.slide_three')
              .children()
              .remove()
          })
        }
        if (progress === 0.5) {
          if ($('.slide_five').children().length === 0) {
            $('.slide_five').append(slide_five_str)
          }
          setTimeout(function () {
            $('.slide_six')
              .children()
              .remove()
            $('.slide_four')
              .children()
              .remove()
          })
        }
        if (progress === 0.625) {
          if ($('.slide_six').children().length === 0) {
            $('.slide_six').append(slide_six_str)
          }
          setTimeout(function () {
            $('.slide_seven')
              .children()
              .remove()
            $('.slide_five')
              .children()
              .remove()
          })
        }
        if (progress === 0.75) {
          if ($('.slide_seven').children().length === 0) {
            $('.slide_seven').append(slide_seven_str)
          }
          setTimeout(function () {
            $('.slide_six')
              .children()
              .remove()
          })
        }
        if (progress === 0.875) {
          setTimeout(function () {
            $('.slide_seven')
              .children()
              .remove()
          })
        }
        $('#href_submit')
          .on('click', function () {
            swiper.slideNext('1000');
          })
      }
    }
  });

  $("#share_btn").on("click", function () {
    $("#shareit").show();
  });

  $("#shareit").on("click", function () {
    $("#shareit").hide();
  })

  var url = 'http://club.neibu.koolearn.com:80/v1/senior/add';

  $('#sumbit').on('click', function () {
    var name = $('#name').val();
    var phone = $('#phone').val();
    var school = $('#school').val();
    var profession = $('#prefession').val();
    var grade = $('#grade').val();
    if (!name) {
      $('#alertText')
        .html('请输入姓名!')
        .removeClass("fadeOut")
        .addClass("fadeIn");
      setTimeout(function () {
        $('#alertText')
          .addClass("fadeOut")
          .removeClass("fadeIn")
      }, 1000)
      return;
    }
    if (!phone) {
      $('#alertText')
        .html('请输入手机号!')
        .removeClass("fadeOut")
        .addClass("fadeIn");
      setTimeout(function () {
        $('#alertText')
          .addClass("fadeOut")
          .removeClass("fadeIn")
      }, 1000)
      return;
    }
    if (!/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(phone)) {
      $('#alertText')
        .html('请输入正确的手机号!')
        .removeClass("fadeOut")
        .addClass("fadeIn");
      setTimeout(function () {
        $('#alertText')
          .addClass("fadeOut")
          .removeClass("fadeIn")
      }, 1000)
      return;
    }

    if (!school) {
      $('#alertText')
        .html('请输入录取学校!')
        .removeClass("fadeOut")
        .addClass("fadeIn");
      setTimeout(function () {
        $('#alertText')
          .addClass("fadeOut")
          .removeClass("fadeIn")
      }, 1000)
      return;
    }
    if (!profession) {
      $('#alertText')
        .html('请输入录取专业!')
        .removeClass("fadeOut")
        .addClass("fadeIn");
      setTimeout(function () {
        $('#alertText')
          .addClass("fadeOut")
          .removeClass("fadeIn")
      }, 1000)
      return;
    }
    if (!grade) {
      $('#alertText')
        .html('请输入初始分数!')
        .removeClass("fadeOut")
        .addClass("fadeIn");
      setTimeout(function () {
        $('#alertText')
          .addClass("fadeOut")
          .removeClass("fadeIn")
      }, 1000)
      return;
    }
    $
      .get(url + '?name=' + name + '&phone=' + phone + '&school=' + school + '&profession=' + profession + '&grade=' + grade, function (data) {
        $('#endS').html('<p>' + school + '</p><p>' + profession + '</p>')
        swiper.slideNext()
      })
  })

}