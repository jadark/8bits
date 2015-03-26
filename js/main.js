$(document).ready(function(){

	createjs.MotionGuidePlugin.install();

	var loader = new createjs.LoadQueue();
	//loader.installPlugin(createjs.Sound);

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

	var miClick;

	loader.loadManifest([
		{id:"img", src:"img/fondoCelesteHome.jpg"},
		{id:"img", src:"img/fondoHome.jpg"},
		{id:"cartel1", src:"img/grassHome.png"},
		{id:"img", src:"img/juegaAhora.png"},
		{id:"img", src:"img/juegaAhoraOver.png"},
		{id:"img", src:"img/logoHome.png"},
		{id:"img", src:"img/nube1.png"},
		{id:"img", src:"img/nube2.png"},
		{id:"img", src:"img/personajes.png"},
		{id:"img", src:"img/pilarCuatro.png"},
		{id:"img", src:"img/pilarDos.png"},
		{id:"img", src:"img/pilarTres.png"},
		{id:"img", src:"img/pilarUno.png"},
		{id:"img", src:"img/sombraBotonPilar.png"},
		{id:"img", src:"img/fondoEligeAvatar.png"},
		{id:"img", src:"img/avioncito.png"},
		{id:"img", src:"img/avatarInicio/hombre/0.png"},
		{id:"img", src:"img/avatarInicio/hombre/1.png"},
		{id:"img", src:"img/avatarInicio/hombre/2.png"},
		{id:"img", src:"img/avatarInicio/hombre/3.png"},
		{id:"img", src:"img/avatarInicio/hombre/4.png"},
		{id:"img", src:"img/avatarInicio/mujer/0.png"},
		{id:"img", src:"img/avatarInicio/mujer/1.png"},
		{id:"img", src:"img/avatarInicio/mujer/2.png"},
		{id:"img", src:"img/avatarInicio/mujer/3.png"},
		{id:"img", src:"img/avatarInicio/mujer/4.png"},
		{id:"img", src:"img/avatarsCaras/hombre/0.png"},
		{id:"img", src:"img/avatarsCaras/hombre/1.png"},
		{id:"img", src:"img/avatarsCaras/hombre/2.png"},
		{id:"img", src:"img/avatarsCaras/hombre/3.png"},
		{id:"img", src:"img/avatarsCaras/hombre/4.png"},
		{id:"img", src:"img/avatarsCaras/mujer/0.png"},
		{id:"img", src:"img/avatarsCaras/mujer/1.png"},
		{id:"img", src:"img/avatarsCaras/mujer/2.png"},
		{id:"img", src:"img/avatarsCaras/mujer/3.png"},
		{id:"img", src:"img/avatarsCaras/mujer/4.png"},
		{id:"sonidoOver", src:"audios/click.mp3"},
		{id:"sonidoOver", src:"audios/click.ogg"},
		{id:"img", src:"audios/suspenso.mp3"},
		{id:"img", src:"audios/suspenso.ogg"}

		
		//{id:"json", src:"json/data.json"}
	]);

	loader.addEventListener("progress", cargando);
	loader.addEventListener("complete", handleComplete);
	loader.load()

	function cargando(event){ //CARGANDO
		//console.log('cargando... ' + event.progress);
		var $porcentaje = Math.floor(event.progress * 100);
		$('.cargador span').html($porcentaje);
		var anchoBarrita = ($porcentaje * 246 ) / 100
		$barrita.css('width', anchoBarrita + 'px')
		
	}

	function handleComplete(event)
	{
		TweenMax.to($('.logoCargador'), 0.64, {y:-200, opacity:0, ease:Back.easeInOut})
		TweenMax.to($('.baseBarrita'), 0.64, {x:-200, opacity:0, ease:Back.easeInOut})
		TweenMax.to($('.cargador span'), 0.64, {x:200, opacity:0, ease:Back.easeInOut, onComplete:function(){
			$wrapper.css('display','block');
			$('.cargador').remove();
			animarHome();
			activarBotones();
		
			$wrapper.append('<audio autoplay loop><source src="audios/suspenso.ogg" type="audio/ogg"><source src="audios/suspenso.mp3" type="audio/mpeg"></audio>');
			$wrapper.append('<audio id="beep"><source src="audios/click.ogg" type="audio/ogg"><source src="audios/click.mp3" type="audio/mpeg"></audio>');

			miClick = $("#beep")[0];

		}})		
	}

	function animarHome(){
		$('.avioncito').css('margin-right','1200px')
		var tlHome = new TimelineLite();

			tlHome.from($('.grass'), 0.64, {css:{opacity:0}})
			.from($('.personajes'), 0.64, {css:{opacity:0}})
			.from($('.logo'), 1, {css:{y:-200, opacity:0}, ease:Elastic.easeOut})
			.from($('.slogan'), 0.64, {css:{x:-1200}})
			.from($boton, 0.64, {css:{scaleX:0, scaleY:0, opacity:0}, ease:Linear.easeNone})
	}


	$boton.hover(function(){

		miClick.play();

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


	$('#botonJuegaHome').click(function(){
		$('.grass').html('<img src="img/grassHomeSombra.png">');
		TweenMax.to($layout, 1, {opacity:0, onComplete:function(){
			$layout.remove();
			$('.eligeAvatar').css('display', 'block');
			armarHombres();
			//$baseAvatar.html('<img src="img/avatarInicio/'+ $sexoSelected+'/base.jpg">');
			$baseAvatar.css('background-image','url("img/avatarInicio/'+ $sexoSelected +'/base.jpg")');
			$avatar.html('<img src="img/avatarInicio/'+ $sexoSelected+'/0.png">');

		}});
	})


	$('#botonMujer').click(function(){
		if ($(this).hasClass("activeOff").toString() == "true") {
			$('#botonMujer').addClass('activeOn');
			$('#botonMujer').removeClass('activeOff');
			$('#botonHombre').addClass('activeOff');
			$('#botonHombre').removeClass('activeOn');
			activarBotones();
			document.body.style.cursor='default';
			$sexoSelected = 'mujer'
			$posAvatar = 0;
			armarMujeres();
		}
	})

	$('#botonHombre').click(function(){
		if ($(this).hasClass("activeOff").toString() == "true") {
			$('#botonHombre').addClass('activeOn');
			$('#botonHombre').removeClass('activeOff');
			$('#botonMujer').addClass('activeOff');
			$('#botonMujer').removeClass('activeOn');
			activarBotones();
			document.body.style.cursor='default';
			$sexoSelected = 'hombre';
			$posAvatar = 0;
			armarHombres();
		}
	})
	
	function activarBotones(){
		if ($('#botonHombre').hasClass("activeOff").toString() == 'true') {
			TweenMax.to($('#botonHombre').find($activo), 0, {opacity:0});
		}

		if ($('#botonMujer').hasClass("activeOff").toString() == 'true') {
			TweenMax.to($('#botonMujer').find($activo), 0, {opacity:0});
		}

		if ($('#botonHombre').hasClass("activeOn").toString() == 'true') {
			TweenMax.to($('#botonHombre').find($activo), 0, {opacity:1});
			TweenMax.to($('#botonHombre').find($over), 0, {opacity:0});
		}

		if ($('#botonMujer').hasClass("activeOn").toString() == 'true') {
			TweenMax.to($('#botonMujer').find($activo), 0, {opacity:1});
			TweenMax.to($('#botonMujer').find($over), 0, {opacity:0});
		}
	};

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
	

	function armarHombres(){
		$baseAvatar.css('background-image','url("img/avatarInicio/'+ $sexoSelected +'/base.jpg")');
		ir_a_Avatar(0);
		$avatarThu.empty();
		for (var i = 0; i < 5; i++) {

			if (i == 0) {
				$avatarThu.append('<div id="'+ i +'" class="avatarOpc avatarActivado"><div class="avatarBase"><img src="img/avatarActiveM.jpg"></div><div class="avatarCara"><img src="img/avatarsCaras/hombre/'+ i +'.png"></div><div class="avatarTrama"><img src="img/avatarTrama.png"></div></div>');
				var $current = $avatarThu.find('.avatarOpc').last();
				TweenMax.to($current.find('.avatarTrama'), 0, {opacity:0});

			}else{
				$avatarThu.append('<div id="'+ i +'" class="avatarOpc"><div class="avatarBase"><img src="img/avatarActiveM.jpg"></div><div class="avatarCara"><img src="img/avatarsCaras/hombre/'+ i +'.png"></div><div class="avatarTrama"><img src="img/avatarTrama.png"></div></div>');
				var $current = $avatarThu.find('.avatarOpc').last();
				TweenMax.to($current.find('.avatarBase'), 0, {opacity:0});
			};

			//console.log($current);


			$current.click(function(){
				miClick.play();
				seleccionarOpcion($(this));
				$(this).addClass('avatarActivado');
				document.body.style.cursor='default';
			});

			TweenMax.from($current, 0.32, {opacity:0, y:+10, delay:0.16*i});

			$current.hover(function(){
				if ($(this).hasClass("avatarActivado").toString() == "false") {
					TweenMax.to($(this).find('.avatarTrama'), 0.32, {opacity:0});
					document.body.style.cursor='pointer';
				}
				
			}, function(){
				if ($(this).hasClass("avatarActivado").toString() == "false") {
					TweenMax.to($(this).find('.avatarTrama'), 0.32, {opacity:1});
					document.body.style.cursor='default';	
				}
				
			});

		};
	}

	function armarMujeres(){
		$baseAvatar.css('background-image','url("img/avatarInicio/'+ $sexoSelected +'/base.jpg")');
		ir_a_Avatar(0);
		$avatarThu.empty();
		for (var i = 0; i < 5; i++) {
			if (i == 0) {
				$avatarThu.append('<div id="'+ i +'" class="avatarOpc avatarActivado"><div class="avatarBase"><img src="img/avatarActiveM.jpg"></div><div class="avatarCara"><img src="img/avatarsCaras/mujer/'+ i +'.png"></div><div class="avatarTrama"><img src="img/avatarTrama.png"></div></div>');
				var $current = $avatarThu.find('.avatarOpc').last();
				TweenMax.to($current.find('.avatarTrama'), 0, {opacity:0});

			}else{
				$avatarThu.append('<div id="'+ i +'" class="avatarOpc"><div class="avatarBase"><img src="img/avatarActiveM.jpg"></div><div class="avatarCara"><img src="img/avatarsCaras/mujer/'+ i +'.png"></div><div class="avatarTrama"><img src="img/avatarTrama.png"></div></div>');
				var $current = $avatarThu.find('.avatarOpc').last();
				TweenMax.to($current.find('.avatarBase'), 0, {opacity:0});
			};

			$current.click(function(){
				miClick.play();
				seleccionarOpcion($(this));
				$(this).addClass('avatarActivado');
				document.body.style.cursor='default';
			});

			TweenMax.from($current, 0.32, {opacity:0, y:+10, delay:0.16*i});

			$current.hover(function(){
				if ($(this).hasClass("avatarActivado").toString() == "false") {
					TweenMax.to($(this).find('.avatarTrama'), 0.32, {opacity:0});
					document.body.style.cursor='pointer';
				}
				
			}, function(){
				if ($(this).hasClass("avatarActivado").toString() == "false") {
					TweenMax.to($(this).find('.avatarTrama'), 0.32, {opacity:1});
					document.body.style.cursor='default';	
				}
				
			});
		};
	}

	function seleccionarOpcion(selected){

		$.each($avatarThu.find('.avatarOpc'), function (ind, elem) { 
			TweenMax.to($(this).find('.avatarBase'), 0.32, {opacity:0});
			TweenMax.to($(this).find('.avatarTrama'), 0.32, {opacity:1});

			$(this).removeClass('avatarActivado');

		});

		TweenMax.to(selected.find('.avatarBase'), 0.32, {opacity:1});
		TweenMax.to(selected.find('.avatarTrama'), 0.32, {opacity:0});
		
		//$avatarSelected = $sexoSelected+selected.attr('id');
		$avatarSelected = selected.attr('id');
		$posAvatar = $avatarSelected;
		ir_a_Avatar($avatarSelected)

	}

	function ir_a_Avatar(posIni){

		//$posAvatar = posIni;

		TweenMax.to($avatar, 0.16, {y:0, opacity:0,scaleX:0, onComplete:function(){
			$avatar.html('<img src="img/avatarInicio/'+ $sexoSelected  +'/'+ posIni +'.png">');
			TweenMax.to($avatar, 0.16, {y:0, opacity:1,scaleX:1});
		}});
	}

	$flechitas.hover(function(){
		TweenMax.to($(this).find($overF), 0.16, {opacity:1});
		document.body.style.cursor='pointer';
		
	}, function(){
		TweenMax.to($(this).find($overF), 0.16, {opacity:0});
		document.body.style.cursor='default';
	})

	$fi.click(function(){
		miClick.play();
		if ($posAvatar == 0) {
			$posAvatar = 5;
		};

		$posAvatar = $posAvatar - 1;
		ir_a_Avatar($posAvatar)
		console.log($posAvatar);

		//$( "td:eq( 2 )" ).css( "color", "red" );
		
		seleccionarOpcion($avatarThu.find('.avatarOpc:eq(' + $posAvatar + ')'));
		$avatarThu.find('.avatarOpc:eq(' + $posAvatar + ')').addClass('avatarActivado');

	});

	$fd.click(function(){
		miClick.play();
		if ($posAvatar == 4) {
			$posAvatar = -1;
		};
		
		$posAvatar = parseInt($posAvatar) + 1;
		ir_a_Avatar($posAvatar)
		console.log($posAvatar);
		seleccionarOpcion($avatarThu.find('.avatarOpc:eq(' + $posAvatar + ')'));

		$avatarThu.find('.avatarOpc:eq(' + $posAvatar + ')').addClass('avatarActivado');

		

	});

})

function loadbox() {
    var heightTotal = $('.wrapper').height();
    $(".procesandobg").css('height', heightTotal);
    $(".procesandobg").css('display', 'block');
 }

function closeloading() {
     $(".procesandobg").css('display', 'none');
     $(".box_lightbox").css('display', 'none');
}

$(document).keyup(function(event){
    if(event.which==27){
        $(".procesandobg").css('display', 'none');
        $(".box_lightbox").css('display', 'none');
    }
});



$(document).ready(function () {
    $('.link_terms').click(function (e) {
        e.preventDefault();
        loadbox();
        $(".box_lightbox").css('display', 'block');
    });
    $('.close_modal').on('click', function (e) {
        e.preventDefault();
        closeloading();
        $('.slimScrollBar').css('top', '0');
    });

    $('.bt_asistir').on('click', function (e) {
        e.preventDefault();
    });
    $('.box_carrera').on('click', function () {
        $(this).next('.carrera_activa').css('display', 'block');
    });
    $('.box_carrera').on({
        mouseenter: function () {
            $(this).children('.bt_asistir').fadeIn(200);
        },
        mouseleave: function () {
            $(this).children('.bt_asistir').fadeOut(200);
        }
    });

    $('.close_carrera').on('click', function (e) {
        e.preventDefault();
        $(this).parent('div').removeAttr("style");
    });
});



 /*SCROLL BUSQUEDA AVANZADA */
 $( document ).ready(function() {
 	$('.txt_scroll').slimscroll({
        alwaysVisible: true,
        railVisible: true,
        distance: '-38px',
        height: '315px'
    });
    
 });

$(document).ready(function () {
    $('.selectcheck').on('change', function () {
        var selectText = $(this).children('select').children('option:selected').text();
        $(this).find('span.listselect').html(selectText);
    });

    $('.selectcheck').each(function (index, element) {
        var selectText = $(element).children('select').children('option:selected').text();
        $(element).find('span.listselect').html(selectText);
    })
});