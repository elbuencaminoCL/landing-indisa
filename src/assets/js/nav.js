
	let $headerMenu = $( '#headerMenu' );
	let $headerList = $( '#headerList' );
	let $headerContainer = $( '#headerContainer' );
	let $headerLogoFigure = $( '.header__logo' );
	let $headerLogo = $( '#headerLogo' );
	let $initialModal = $( '#initialModal' );

	let $localStorage = $( '.localStorage' );
	let $isapreLink = $( '.isapreLink' );
	let $fonasaLink = $( '.fonasaLink' );



	if( localStorage.getItem( 'ip' ) ) {
		$initialModal.addClass( 'hidden' );
	}
	else {

		let popup = new Foundation.Reveal( $initialModal );

		popup.open();

		$localStorage.on( 'click', (e) => {
			e.preventDefault();
			$.getJSON("http://ipinfo.io",
		    function(data) {
		    	localStorage.setItem( 'ip', data.ip );
		    	console.log( localStorage.getItem( 'ip' ) );
		  	});
		})

		$isapreLink.on( 'click', (e) => {
			e.preventDefault();
			$.getJSON("http://ipinfo.io",
		    function(data) {
		    	window.location.replace("/isapre.html");
		    	localStorage.setItem( 'ip', data.ip );
		    	console.log( localStorage.getItem( 'ip' ) );
		  	});
		})

		$fonasaLink.on( 'click', (e) => {
			e.preventDefault();
			$.getJSON("http://ipinfo.io",
		    function(data) {
		    	window.location.replace("/");
		    	localStorage.setItem( 'ip', data.ip );
		    	console.log( localStorage.getItem( 'ip' ) );
		  	});
		})
	}

	$headerMenu.on( 'click', () => {
		$headerMenu.toggleClass( 'visible' );
		$headerList.toggleClass( 'visible' );
		$headerLogo.toggleClass( 'visible' );
		if( $headerMenu.hasClass( 'visible' ) ) {
			$headerLogoFigure.removeClass( 'text-center' );
		}
		else {
			$headerLogoFigure.addClass( 'text-center' );
		}
	});


	$headerContainer.on('sticky.zf.stuckto:top', function() {

		$headerMenu.addClass( 'visible' );
		$headerList.addClass( 'visible' );
		$headerLogoFigure.removeClass( 'text-center' );
		$headerLogo.addClass( 'visible' );

	}).on('sticky.zf.unstuckfrom:top', function(){

		$headerLogoFigure.addClass( 'text-center' );
	  $headerMenu.removeClass( 'visible' );
	  $headerList.removeClass( 'visible' );
		$headerLogo.removeClass( 'visible' );

	})