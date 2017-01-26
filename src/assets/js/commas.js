
	numeral.language('es', {
    delimiters: {
        thousands: '.',
        decimal: ','
    }
	});

	numeral.language('es');

	function addDecimal(x) {
		let string = numeral( x ).format(  '0,0.000' );
		return string;
	}

	function addInteger(x) {
		let string = numeral( x ).format(  '0,0' );
		return string;
	}



	function addCommas(nStr) {
		nStr += '';
		var x = nStr.split(',');
		var x1 = x[0];
		var x2 = x.length > 1 ? ',' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + '.' + '$2');
		}
		return x1 + x2;
	}