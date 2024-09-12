

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse() {
	var startDate = new Date("2006-11-17T00:00:00");
	var currentDate = new Date();
	var seconds = (currentDate.getTime() - startDate.getTime()) / 1000;
	
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
	  hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
	  minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
	  seconds = "0" + seconds;
	}
	
	var result = "Days <span class=\"digit\">" + days + "</span> Hours <span class=\"digit\">" + hours + "</span> Minutes <span class=\"digit\">" + minutes + "</span>";
	$("#clock").html(result);
  
	var text = "THE WORLD JUST GOT LUCKIER SINCE ";
	$("#message-box").html(text);
  }
  
  // Call the function to start the clock
  timeElapse();
  
  // Update the clock every second
  setInterval(timeElapse, 1000);