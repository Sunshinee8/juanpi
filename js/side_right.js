(function() {
  //当前浏览器的高度
  let winH = document.documentElement.clientHeight;
  let t = parseFloat(winH) / 2;
  let timer1 = null;
  function getTop() {
    $("#top_a").click(function() {
      // console.log(1)
      let winT = document.documentElement.scrollTop;
      let cur = winT / 100;
      timer1 = setInterval(function() {
        document.documentElement.scrollTop = winT -= cur;
        if (winT <= 0) {
          clearInterval(timer1);
        }
      });
    });
  }
  window.onscroll = function() {
    //   console.log($('body').scrollTop())
    let st = document.documentElement.scrollTop;
    console.log(st);
    if (st >= t) {
      $("#side_other").css("opacity", "1");
    } else {
      $("#side_other").css("opacity", "0");
    }
  };
  getTop();
})();
