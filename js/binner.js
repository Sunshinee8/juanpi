(function() {
  let timer = null;
  let step = 0;
  function send() {
    $.ajax({
      url: "./json/binner.json",
      type: "get",
      async: false,
      success: function(data) {
        // console.log(data);
        binnerHtml(data);
        timer = setInterval(autoMove, 1800);
        changeTip();
      }
    });
  }
  function binnerHtml(data) {
    let imgs = ``;
    let as = ``;
    $.each(data, function(index, item) {
      imgs += `<img src="${item.img}" alt="">`;
      as += `<a></a>`;
    });
    $("#wrapper").html(imgs);
    $("#round").html(as);
  }
/**
 *------------------------------------- 轮播图滚动--------------------------
 */
  //滚动
  function autoMove() {
    step++;
    step === 3 ? (step = 0) : step;
    $("#wrapper img").eq(step).fadeIn().siblings().fadeOut();
    changeTip();
  }
  //焦点跟随
  function changeTip() {
    $("#round a").eq(step).addClass("current").siblings().removeClass("current");
  }
  send();
  changeTip();

  //鼠标滑上焦点 显示对应的图片
  console.log($("a[data-index]"));
  $("#round a").hover(function() {
    // console.log($(this));
    step = $(this).index() - 1;
    autoMove();
  });

  //鼠标滑上滑下
  $(".binner_content").hover(
    function() {
      $(".arrow").css("display", "block");
      clearInterval(timer);
    },
    function() {
      $(".arrow").css("display", "none");
      timer = setInterval(autoMove, 1800);
    }
  );
  //左右箭头
  $("#right").click(function() {
    autoMove();
  });
  $("#left").click(function() {
    // console.log(step);
    step -= 2;
    step < -1 ? (step = 1) : null;
    autoMove();
  });
})();
