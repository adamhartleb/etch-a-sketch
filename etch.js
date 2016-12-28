$(document).ready(function () {
	function gridSize (num) {
		$(".grid").remove();
		var	cnt = num * num;
		var	str = '';
		while (cnt--) {
			str += "<div class='grid'></div>";
		}
		$(".etch-wrapper").append(str);

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
