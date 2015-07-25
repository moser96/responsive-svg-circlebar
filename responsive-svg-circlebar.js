$( document ).ready(function() {
  $.each($("svg.bar"), function( k, v ) {
		var r = 100;
		var degrees = parseInt(v.dataset['progress']) * 3.5999,
			rad = degrees * Math.PI / 180,
			x = (Math.sin(rad) * r).toFixed(2),
			y = -(Math.cos(rad) * r).toFixed(2),
			lenghty = window.Number(degrees > 180),
			descriptions = ['M', 0, 0, 'v', -r, 'A', r, r, 1, lenghty, 1, x, y, 'z'];
		v.children[1].setAttribute('d', descriptions.join(' '));
		v.children[1].setAttribute('transform', 'translate(' + r + ', ' + r + ')');
	});
});