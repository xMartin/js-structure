window.UI = (function () {

	var displayElement = document.getElementById('display');

	function display (content, makeBold) {
		if (makeBold) {
			content = boldify(content);
		}
		displayElement.innerHTML = content;
	}

	function boldify (content) {
		return '<b>' + content + '</b>';
	}

	return {
		display: display
	};

})();
