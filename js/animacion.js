$(document).ready(function(){

	var loader = new createjs.LoadQueue();

	//en esta variable guardamos el Sexo
	var $sexoSelected = 'hombre';
	var $avatarSelected;
	var $posAvatar = 0;

	var $wrapper = $('.wrapper'); 
	var $layout = $('.layout');
	var $boton = $('.boton');
	var $over = $boton.find($('.over'))
	var $activo = $boton.find($('.activo'))
	var $nubes = $layout.find($('.nubes'))
	var $nube1 = $nubes.find($('.nube1'));
	var $nube2 = $nubes.find($('.nube2'));
	var $nube3 = $nubes.find($('.nube3'));
	var $nube4 = $nubes.find($('.nube4'));
	var $pilares = $('.pilares');
	var $pilar = $pilares.find($('.pilar'));
	var $sombraPilar = $pilar.find($('.sombraPilar'));
	var $botonPilar = $pilar.find($('.botonPilar'));
	var $brillo = $('.brillo');
	var $redes = $('.redes');
	var $red = $redes.find($('.red'));
	var $overRed = $red.find($('.overRed'));
	var $barrita = $('.barrita');
	var $vistaAvatar = $('.eligeAvatar');
	var $avatarThu = $vistaAvatar.find('.avatarThu');
	var $baseAvatar = $vistaAvatar.find('.baseAvatar');
	var $avatar = $baseAvatar.find('.avatar');

	//Flechitas..............
	var $navegarAvatar = $('.navegarAvatar');
	var $flechitas = $navegarAvatar.find($('.flechita'));
	var $baseF = $flechitas.find('.baseF');
	var $overF = $flechitas.find('.overF');
	var $fi = $navegarAvatar.find('#fi');
	var $fd = $navegarAvatar.find('#fd');
	// --------//-----------//

	$boton.hover(function(){
		if ($(this).hasClass("activeOff").toString() == "true") {
			TweenMax.to($(this).find($over), 0.32, {opacity:1});
			document.body.style.cursor='pointer';	
		};
		
	}, function(){
		if ($(this).hasClass("activeOff").toString() == "true") {
			TweenMax.to($(this).find($over), 0.32, {opacity:0});
			document.body.style.cursor='default';
		};
	})

	$red.hover(function(){
		TweenMax.to($(this).find($overRed), 0.32, {opacity:1});
		document.body.style.cursor='pointer';
	}, function(){
		TweenMax.to($(this).find($overRed), 0.32, {opacity:0});
		document.body.style.cursor='default';
	})

	TweenMax.to($brillo, 32, {rotation:360, repeat:-1, yoyo:true});

	TweenMax.to($('.nube1'), 1.6, {x:10, repeat:-1, yoyo:true, ease:Linear.easeNone});
	TweenMax.to($('.nube2'), 1.7, {x:-10, repeat:-1, yoyo:true, ease:Linear.easeNone});
	TweenMax.to($('.nube3'), 1.6, {x:-12, repeat:-1, yoyo:true, ease:Linear.easeNone});
	TweenMax.to($('.nube4'), 1.8, {x:-14, repeat:-1, yoyo:true, ease:Linear.easeNone});

	TweenMax.to($('.avioncito'), 0.32, {y:2, repeat:-1, yoyo:true, ease:Linear.easeNone});
	TweenMax.to($('.avioncito'), 24, {x:-1600, repeat:-1, ease:Linear.easeNone});
	

})