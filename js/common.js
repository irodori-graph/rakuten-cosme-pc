

//  slick

jQuery(document).ready(function(){
  var $window = $(window);
	jQuery('#slider').slick({
		infinite: true,
		dots: false,
		slidesToShow: 1,
		centerMode: true, //要素を中央寄せ
		centerPadding: '0px', //両サイドの見えている部分のサイズ
		autoplay: true, //自動再生
		autoplaySpeed:4000,
		responsive: [{
			breakpoint:960,
				settings: {
					centerMode: false,
			}
		}]

	});

});
