//全ての読み込みが完了したら実行
$(window).on('load',function () {
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#container').css('display', 'block');
});
