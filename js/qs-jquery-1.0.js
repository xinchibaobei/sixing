//Blood_Wolf JQ�������֧�ֿ�Դ������ʹ�û���ο����������������лл������
//#ff8a00; �����Ƽ����޹�˾VIɫϵ
//��վ�ɺ��ݺ����Ƽ����޹�˾����ȫ�̲߻�/ҳ�����/���򿪷����. 24Сʱ����֧�֡��������Ƽ���http://www.68hanchen.com

window.onload = function () {
	for (var ii = 0; ii < document.links.length; ii++)
		document.links[ii].onfocus = function () { this.blur() }
}

//������
$(function(){
  $(".activesss").hover(function(){
	$(".Locate ul").stop(true,true)
    $(this).children('').next().stop(true,true).slideDown("fast");
  },function(){
    $(this).children('').next().stop(true,true).slideUp("fast");
  });
});

//bannerЧ��
$(function () {
	$('#slides').slides({
		preload: true,
		preloadImage: 'images/preloader.gif',
		play: 5000,
		pause: 1500,
		hoverPause: false
	});
});


//��Ʒ�л�
$(function () {
	$('#slides1').slides({
		preload: true,
		preloadImage: 'images/preloader.gif',
		play: 5000,
		pause: 1500,
		hoverPause: true
	});
});
$(function () {
	$('#slides2').slides({
		preload: true,
		preloadImage: 'images/preloader.gif',
		play: 5000,
		pause: 1500,
		hoverPause: true
	});
});
$(function () {
	$('#slides3').slides({
		preload: true,
		preloadImage: 'images/preloader.gif',
		play: 5000,
		pause: 1500,
		hoverPause: true
	});
});
