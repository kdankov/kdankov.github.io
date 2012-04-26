var opts = {
	lines: 4, // The number of lines to draw
	length: 0, // The length of each line
	width: 20, // The line thickness
	radius: 10, // The radius of the inner circle
	rotate: 0, // The rotation offset
	color: '#999', // #rgb or #rrggbb
	speed: 2.0, // Rounds per second
	trail: 10, // Afterglow percentage
	shadow: false, // Whether to render a shadow
	hwaccel: true, // Whether to use hardware acceleration
	className: 'spinner', // The CSS class to assign to the spinner
	zIndex: 2e9, // The z-index (defaults to 2000000000)
	top: '0', // Top position relative to parent in px
	left: '0' // Left position relative to parent in px
};
var target = document.getElementById('spinner');
var spinner = new Spinner(opts).spin(target);

