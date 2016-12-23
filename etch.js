$(document).ready(function () {
	function gridSize (num) {
		$(".grid").remove();
		var i = 0;
		while (i < (num*num)) {
			$(".etch-wrapper").append("<div class='grid'></div>");
			i++;
		}

		$(".grid").css({
			width: 960 / num,
			height: 960 / num
		});

	};

	function colorGrid () {
		$(".grid").hover(function () {
			$(this).css("background-color", "#000");
		});
	}
	gridSize(16);
	colorGrid();

	$("button").on('click', function () {
		$(".grid").css("background-color", "#fff");
		gridSize(prompt("How many squares per side?"));
		colorGrid();
	});
});