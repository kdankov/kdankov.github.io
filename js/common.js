var debug = false;

function d(x){
	if(debug){ console.info(x); }
}

$(function(){

	$('a').click(function() {
		window.open( $(this).attr('href') );
		return false;
	})

	$("section ul a").each(function() {
		$(this).append('<span class="icon"></span>');
	}); 

	$('.blog		a span.icon').text('f');
	$('.twitter		a span.icon').text('B');
	$('.flickr		a span.icon').text('L');
	$('.lastfm		a span.icon').text('m');
	$('.zadimeno	a span.icon').text('2');
	$('.initlab		a span.icon').text('2');
	$('.email		a span.icon').text('M');
	$('.skype		a span.icon').text(':');

	$('<span class="icon">.</span>').appendTo('section h2');

	$('article header img').each(function() {
		var imgClass = $(this).attr('class');
		$(this).wrap('<span class="image-wrap ' + imgClass + '" style="width: auto; height: auto;"/>');
		$(this).removeAttr('class');
	});

});

WebFontConfig = {
	google: { families: [ 'PT+Sans' ] },
	custom: { families: [ 'PictosWeb' ], urls: [ '/fonts/fonts.css' ] },
	loading: function() {
		// Called when all the specified web-font provider modules (google, typekit, and/or custom) have reported that they have started loading fonts.

	},
	active: function() {
		// Called when all of the web fonts have either finished loading or failed to load, as long as at least one loaded successfully.

		$('#spinner').animate({ opacity: 0 }, 200, function(){
			spinner.stop();
			$('#card').addClass('animated');
		});
	},
	inactive: function() {
		// Called if the browser does not support web fonts or if none of the fonts could be loaded.
		
	}
};

(function(){
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();
