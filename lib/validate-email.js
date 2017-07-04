(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

		return pattern.test(this.val())
	}
})(jQuery)
