

//  slick

jQuery(document).ready(function(){
  var $window = $(window);
	jQuery('#slider').slick({
		infinite: true,
		dots: false,
		slidesToShow: 1,
		centerMode: true, //�v�f�𒆉���
		centerPadding: '0px', //���T�C�h�̌����Ă��镔���̃T�C�Y
		autoplay: true, //�����Đ�
		autoplaySpeed:4000,
		responsive: [{
			breakpoint:960,
				settings: {
					centerMode: false,
			}
		}]

	});

});
