(function($) {
	$.fn.capslide = function(options) {
		var opts = $.extend({}, $.fn.capslide.defaults, options);
		return this.each(function() {
			$this = $(this);
			var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
			
			if(!o.showcaption)	$this.find('.ic_caption').css('display','none');
			else $this.find('.ic_text').css('display','none');
				
			var _img = $this.find('img:first');
			var w = _img.css('width');
			var h = _img.css('height');
			$('.ic_caption',$this).css({'color':o.caption_color,'background-color':o.caption_bgcolor,'bottom':'0px','width':'100%'});
			$('.overlay',$this).css('background-color','#2f1619');
			$this.css({'width':'100%' , 'height':'100%', 'border':o.border});
			$this.hover(
				function () {
					if((navigator.appVersion).indexOf('MSIE 7.0') > 0)
					$('.overlay',$(this)).stop(true,true).show();
					else
					$('.overlay',$(this)).stop(true,true).fadeIn();
					if(!o.showcaption)
						$(this).find('.ic_caption').stop(true,true).slideDown(500);
					else
						$('.ic_text',$(this)).stop(true,true).slideDown(500);
				},
				function () {
					if((navigator.appVersion).indexOf('MSIE 7.0') > 0)
					$('.overlay',$(this)).stop(true,true).hide();
					else
					$('.overlay',$(this)).stop(true,true).fadeOut();
					if(!o.showcaption)
						$(this).find('.ic_caption').stop(true,true).slideUp(500);
					else
						$('.ic_text',$(this)).stop(true,true).slideUp(500);
				}
			);
		});
	};

})(jQuery);