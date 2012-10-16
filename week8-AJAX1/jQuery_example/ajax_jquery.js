//AJAX via jQuery

var ajax = function() {
	$.ajax({
		url: 'example3.php',
		type: 'GET',
		data: {
			name: 'David',
			school: 'USC'
		},
		success: function(msg) {
			$('#ajaxResponse').html(msg);
		}
	});
}