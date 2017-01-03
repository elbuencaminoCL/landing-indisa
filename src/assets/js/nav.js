
	let $headerMenu = $( '#headerMenu' );
	let $headerList = $( '#headerList' );
	let $headerContainer = $( '#headerContainer' );
	let $headerLogoFigure = $( '.header__logo' );
	let $headerLogo = $( '#headerLogo' );

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