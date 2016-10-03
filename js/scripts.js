$(document).ready(function(){
	$(".button-collapse").sideNav({
		menuWidth: 300,
		closeOnClick: true
	});
	$('.tooltipped').tooltip({
		delay: 10
	});
	$('.carousel.carousel-slider').carousel({
		indicators: true,
		full_width: true
	});
	$("#servico ul.tabs").tabs();

	servicos();
	pacotes();
	galeria();
	filiais();
	reserva();
	voltar();
	menu();
	mostrarmais();

});

$(window).resize(function(){
	filiais();
})
$(window).scroll(function(){
	voltar();
	menu();
})

function menu(){
	var a = window.pageYOffset;
	if (a > 400){
		$("#header .menu").css({"background-color":"#263238"}).addClass("z-depth-2")

	}else{
		$("#header .menu").css({"background-color":"transparent"}).removeClass("z-depth-2")
	}
}

function banner(){
	$(".banner").cycle({
		prev: ".cores .preview .prev",
		next: ".cores .preview .next",
		timeout: 5000,
		speed: 600
	});
}

function servicos(){
	var a = $(".itens").attr("data-set");
	if (a == 1) {
		$(".itens").jCarouselLite({
	        btnNext: ".itens .next",
	        btnPrev: ".itens .prev",
	    	speed: 300,
	    	visible: 3
	    });
	}
}
function pacotes(){
	$("#pacotes .carrosel").cycle({
        next: ".content .next",
        prev: ".content .prev",
    	timeout: 0,
		speed: 600,
    	visible: 1
    });
}

function galeria(){
	$("#galeria .indices li").click(function(){
		var a = $(this).attr("data-indice");
		$("#galeria .indices li").removeClass("active");
		$(this).addClass("active");
		$("#galeria .images li").css({"display":"none"});
		$("#galeria .images li").each(function(){
			var b = $(this).attr("data-indice");
			if (a == b) {
				$(this).css({"display":"block"});
			}
		})
		if (a == 0) {
			$("#galeria .images li").css({"display":"block"});
		}
	})

	$("#galeria .next").click(function(){
		$('.carousel').carousel('next');
	})
	$("#galeria .prev").click(function(){
		$('.carousel').carousel('prev');
	})
}

function filiais(){
	$("#filiais .control li").click(function(){
		var a = $(this).attr("data-indice");
		$("#filiais .indices li").removeClass("active");
		$("#filiais .control li").removeClass("active");
		$(this).addClass("active");
		$("#filiais .images li").css({"display":"none"});
		$("#filiais .images li").each(function(){
			var b = $(this).attr("data-indice");
			if (a == b) {
				$(this).fadeIn("fast");
			}
		})
		$("#filiais .indices li").css({"display":"none"});
		$("#filiais .indices li").each(function(){
			var c = $(this).attr("data-indice");
			if (a == c) {
				$(this).fadeIn("fast");
			}
		});
	});
}

function reserva(){
	$("#reserva .but").click(function(){
		$(this).fadeToggle("fast");
		$("#reserva .lugares").fadeToggle("fast");
	});
	$("#reserva .item").click(function(){
		$("#reserva .mapa").fadeToggle("fast");
		$("#reserva .lugares").fadeToggle("fast");
	});
	$("#reserva .mapa i").click(function(){
		$("#reserva form").fadeIn("fast");
		$("#reserva .mapa").fadeToggle("fast");
	});
}

function voltar(){
	var a = window.pageYOffset;
	if (a > 800) {
		$(".voltar").fadeIn("fast")
	}else{
		$(".voltar").fadeOut("fast")
	}
}

function mostrarmais(){
	$("#servicos.interna i.n").click(function(){
		$(this).closest("li").find("blockquote").toggleClass("active")
	})
}


















