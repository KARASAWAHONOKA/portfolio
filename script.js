/*Acon インスタアイコン*/
$(function(){
	$(window).scroll(function (){
		$('.js-fade,.js-fade01').each(function(){
			var pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > pos - windowHeight + 100){
				$(this).addClass('scroll');
			}
		});
	});
});

/*Bcon お悩み*/
$(function(){
  $(window).scroll(function (){
      $('.onayami').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }
      });
  });
});
/*Bcon frame*/

$(function(){
  $(window).scroll(function (){
      $('.frame03').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 100){
            $(this).addClass('active');
          }
      });
  });
});
$(function(){
  $(window).scroll(function (){
      $('.frame02').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 280){
            $(this).addClass('active');
          }
      });
  });
});
$(function(){
  $(window).scroll(function (){
      $('.frame01').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 280){
            $(this).addClass('active');
          }
      });
  });
});
$(function(){
  $(window).scroll(function (){
      $('.frame04').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }
      });
  });
});
$(function(){
  $(window).scroll(function (){
      $('.frame09').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 330){
            $(this).addClass('active');
          }
      });
  });
});
$(function(){
  $(window).scroll(function (){
      $('.frame05').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 350){
            $(this).addClass('active');
          }
      });
  });
});
$(function(){
  $(window).scroll(function (){
      $('.frame06').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 240){
            $(this).addClass('active');
          }
      });
  });
});
$(function(){
  $(window).scroll(function (){
      $('.frame07').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 320){
            $(this).addClass('active');
          }
      });
  });
});
$(function(){
  $(window).scroll(function (){
      $('.frame08').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 370){
            $(this).addClass('active');
          }
      });
  });
});

/*Ccon 2つのサービス*/

/*Ccon　ボックス*/
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const wScroll = $(window).scrollTop();
          $(".C-boxL,.C-boxR").each(function () {
              const bPosition = $(this).offset().top;
          if (wScroll > bPosition - wHeight + 200) {
              $(this).addClass("fadeIn");
          }
      });
  });
});
/*conC　2つのサービス*/
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const wScroll = $(window).scrollTop();
          $(".sabisu,.kekka,.inst,.E-box1>h1,.NG-h2-PC,.NG-h2-SP,.instbae").each(function () {
              const bPosition = $(this).offset().top;
          if (wScroll > bPosition - wHeight + 200) {
              $(this).addClass("smooth");
          }
      });
  });
});
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const wScroll = $(window).scrollTop();
          $(".action-h2-PC,.action-h2-SP,.pink-bar01,.pink-bar02,.I-h2-PC,.I-h2-SP,.boder-yellow02").each(function () {
              const bPosition = $(this).offset().top;
          if (wScroll > bPosition - wHeight + 20) {
              $(this).addClass("smooth");
          }
      });
  });
});
/*Dcon タイトル、Econ タイトル、Fcon タイトル、Hcon タイトル*/
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const wScroll = $(window).scrollTop();
          $(".D-title,.profiletitle,.F-title,.kouka,.H-title,.I-title").each(function () {
              const bPosition = $(this).offset().top;
          if (wScroll > bPosition - wHeight + 200) {
              $(this).addClass("fadeIn01");
          }
      });
  });
});

/*Dcon　D-box2*/
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const wScroll = $(window).scrollTop();
          $(".D-box2").each(function () {
              const bPosition = $(this).offset().top;
          if (wScroll > bPosition - wHeight + 200) {
              $(this).addClass("fadeIn");
          }
      });
  });
});

/*conE　profileiphone*/
$(function(){
  $(window).scroll(function (){
      $('.profileiphone').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 20){
            $(this).addClass('active');
          }
      });
  });
});

/*conE 赤ボックス*/
$(function(){
  $(window).scroll(function (){
      $('.js-fadeL,.js-fadeR').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 20){
            $(this).addClass('fadeIn');
          }
      });
  });
});

/*conE 下3つボックス*/
$(function(){
  $(window).scroll(function (){
      $('.js-fade-red01,.js-fade-red02,.js-fade-red03').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 20){
            $(this).addClass('fadeIn-red');
          }
      });
  });
});
/*conF　番号*/
$(function(){
  $(window).scroll(function (){
      $('.js-fade-no0L,.js-fade-no0R,.js-fade-no0L-udr,.js-fade-no0R-udr').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 20){
            $(this).addClass('fadeIn');
          }
      });
  });
});
/*conG　インスタ映え*/
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const wScroll = $(window).scrollTop();
          $(".G-box01>h2,.check").each(function () {
              const bPosition = $(this).offset().top;
          if (wScroll > bPosition - wHeight + 200) {
              $(this).addClass("fadeIn");
          }
      });
  });
});
/*conG　スマホBOX2つ　conG 一番下ボックス*/
$(function(){
  $(window).scroll(function (){
      $('.G-box02-a,.G-box02-b,.G-box03').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 20){
            $(this).addClass('fadeIn');
          }
      });
  });
});
/*conH　ボックス-a、文章*/
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const wScroll = $(window).scrollTop();
          $(".H-box-a").each(function () {
              const bPosition = $(this).offset().top;
          if (wScroll > bPosition - wHeight + 200) {
              $(this).addClass("fadeIn");
          }
      });
  });
});
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const wScroll = $(window).scrollTop();
          $(".H-box>h2").each(function () {
              const bPosition = $(this).offset().top;
          if (wScroll > bPosition - wHeight + 0) {
              $(this).addClass("fadeIn-a");
          }
      });
  });
});
/*conI　ボックス3つ*/
$(function(){
  $(window).scroll(function (){
      $('.js-fade-step01,.js-fade-step02,.js-fade-step03,.triangle01,.triangle02').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 0){
            $(this).addClass('fadeIn-step');
          }
      });
  });
});
/*conJ　お問い合わせフォーム*/
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const wScroll = $(window).scrollTop();
          $(".J-back>h3").each(function () {
              const bPosition = $(this).offset().top;
          if (wScroll > bPosition - wHeight + 0) {
              $(this).addClass("fadeIn");
          }
      });
  });
});
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const wScroll = $(window).scrollTop();
          $(".akamaru-mas").each(function () {
              const bPosition = $(this).offset().top;
          if (wScroll > bPosition - wHeight +  200) {
              $(this).addClass("fadeIn");
          }
      });
  });
});
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const wScroll = $(window).scrollTop();
          $(".J-box").each(function () {
              const bPosition = $(this).offset().top;
          if (wScroll > bPosition - wHeight +  200) {
              $(this).addClass("fadeIn");
          }
      });
  });
});

/*conK　会社概要*/
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const wScroll = $(window).scrollTop();
          $(".conk>h2,.K-box").each(function () {
              const bPosition = $(this).offset().top;
          if (wScroll > bPosition - wHeight +  200) {
              $(this).addClass("fadeIn");
          }
      });
  });
});


/*お問い合わせフォームエラー*/
$(function() {
	if($("#contactForm").length) {
		$("#contactForm").validate({
			rules: {
				name: {
					required: true
				},
				furigana: {
					required: true
				},
				tel: {
					required: true,
					number: true
				},
				email: {
					required: true,
					email: true
				},
				email_conf: {
					required: true,
					email: true,
					equalTo: '#email'
				},
				content: {
					required: true,
					maxlength: 100
				},
				'privacy_policy[]': {
					required: true
				}
			},
			messages: {
				name: {
					required: 'お名前を入力してください'
				},
				furigana: {
					required: 'ふりがなを入力してください'
				},
				email: {
					required: 'メールアドレスを入力してください',
					email: 'Eメールの形式で入力して下さい。'
				},
				tel: {
					required: '電話番号を入力してください',
					number: '数字のみ入力出来ます。'
				},
				content: {
					required: 'お問い合わせ内容を入力してください',
					maxlength: '最大文字数100を超えています。文章を短くして下さい。'
				},
				'privacy_policy[]': {
					required: 'プライバシーポリシーに同意してください'
				}
			},
			errorPlacement: function(error, element) {
				if(element.attr("name") == 'privacy_policy[]') {
					error.insertAfter(".checkbox_label");
				} else {
					// error.insertAfter(element);
          target = element.parent().next();
					error.insertAfter(target);
				}
			}
		});
	}
});