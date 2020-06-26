$(document).ready(function (){
    

/* Launch Screen automatisch ausblenden lassen */    
    
    setTimeout(function(){
        $('#screen--launch').addClass('hide');
    }, 2000);
    setTimeout(function(){
        $('#screen--launch').addClass('remove');
    }, 2700);    
    
    
/* Intro Screen weiterklicken */    
    
    $('#btn--weiter--intro').click(function () {
        $('#screen--intro').addClass('slide-out--up');
    });
   
    
/* Informationen über Konstruktivismus und Jo ENzweiler auswählen und canceln und gekürzte Texte ausklappen */  
    
    $('#btn--weiterlesen--konkret').click(function () {
        $(this).addClass('remove');
        $('#text--konkret').removeClass('truncate');
    });

    $('#btn--weiterlesen--enzweiler').click(function () {
        $(this).addClass('remove');
        $('#text--enzweiler').removeClass('truncate');
    });
    
    $('#btn--cancel--kunst').click(function () {
        $('#screen--kunst').addClass('slide-out--up');
        $('#screen--kunst').removeClass('slide-in--down');
    });    
    
    $('#btn--kunst').click(function () {
        $('#screen--kunst').toggleClass('slide-in--down');
    });   
    
    
/* Informationen über App auswählen und canceln */        
    
    $('#btn--info').click(function () {
        $('#screen--info').toggleClass('slide-in--down');
    });  
    
    $('#btn--cancel--info').click(function () {
        $('#screen--info').addClass('slide-out--up');
        $('#screen--info').removeClass('slide-in--down');
    });     
    
    
/* Navigation Carousel */    
    
    $('#next-1').click(function () {
        $('#wrapper--auswahl--inner').removeClass().addClass('slide-left-1');
    });
    
    $('#next-2').click(function () {
        $('#wrapper--auswahl--inner').removeClass().addClass('slide-left-2');
    });    
    
    $('#next-3').click(function () {
        $('#wrapper--auswahl--inner').removeClass().addClass('slide-left-3');
    });   
    
    $('#next-4').click(function () {
        $('#wrapper--auswahl--inner').removeClass().addClass('slide-left-4');
    });    
    
    $('#next-5').click(function () {
        $('#wrapper--auswahl--inner').removeClass().addClass('slide-left-5');
    });    
    
     $('#last-1').click(function () {
        $('#wrapper--auswahl--inner').removeClass().addClass('slide-right-1');
    });
    
    $('#last-2').click(function () {
        $('#wrapper--auswahl--inner').removeClass().addClass('slide-right-2');
    });
    
    $('#last-3').click(function () {
        $('#wrapper--auswahl--inner').removeClass().addClass('slide-right-3');
    });
    
    $('#last-4').click(function () {
        $('#wrapper--auswahl--inner').removeClass().addClass('slide-right-4');
    });
    
    $('#last-5').click(function () {
        $('#wrapper--auswahl--inner').removeClass().addClass('slide-right-5');
    });
    
/* Spiele auswählen */    
    
    $('#btn--auswahl--1').click(function () {
        $('#spiel--1').removeClass('remove');
    });  
    
    $('#btn--auswahl--2').click(function () {
        $('#spiel--2').removeClass('remove');
    });  
    
    $('#btn--auswahl--3').click(function () {
        $('#spiel--3').removeClass('remove');
    });  
    
    $('#btn--auswahl--4').click(function () {
        $('#spiel--4').removeClass('remove');
    });  
    
    $('#btn--auswahl--5').click(function () {
        $('#spiel--5').removeClass('remove');
    });  
    
    
/* Spiele canceln */        

    $('.btn--cancel--spiel--1').click(function () {
        $('#wrapper--spiel--inner--1').removeClass('slide-left-1 slide-left-2');
        $('#spiel--1').addClass('remove');
    });
    
    $('.btn--cancel--spiel--2').click(function () {
        $('#wrapper--spiel--inner--2').removeClass('slide-left-1 slide-left-2');
        $('#spiel--2').addClass('remove');
    });
    
    $('.btn--cancel--spiel--3').click(function () {
        $('#wrapper--spiel--inner--3').removeClass('slide-left-1 slide-left-2');
        $('#spiel--3').addClass('remove');
    });
    
    $('.btn--cancel--spiel--4').click(function () {
        $('#wrapper--spiel--inner--4').removeClass('slide-left-1 slide-left-2');
        $('#spiel--4').addClass('remove');
    });
    
    $('.btn--cancel--spiel--5').click(function () {
        $('#wrapper--spiel--inner--5').removeClass('slide-left-1 slide-left-2');
        $('#spiel--5').addClass('remove');
    });        
    
    
/* Navigation innerhalb der Spiele */        
        
    $('#btn--weiter--einleitung--1').click(function () {
        $('#wrapper--spiel--inner--1').removeClass().addClass('slide-left-1');
        });    
    
    $('#btn--fertig--spiel--1').click(function () {
        $('#wrapper--spiel--inner--1').removeClass().addClass('slide-left-2');
        });
    
    
    $('#btn--weiter--einleitung--2').click(function () {
        $('#wrapper--spiel--inner--2').removeClass().addClass('slide-left-1');
        });    
    
    $('#btn--fertig--spiel--2').click(function () {
        $('#wrapper--spiel--inner--2').removeClass().addClass('slide-left-2');
        });
    
    
    $('#btn--weiter--einleitung--3').click(function () {
        $('#wrapper--spiel--inner--3').removeClass().addClass('slide-left-1');
        });    
    
    $('#btn--fertig--spiel--3').click(function () {
        $('#wrapper--spiel--inner--3').removeClass().addClass('slide-left-2');
        });
    
    
    $('#btn--weiter--einleitung--4').click(function () {
        $('#wrapper--spiel--inner--4').removeClass().addClass('slide-left-1');
        });    
    
    $('#btn--fertig--spiel--4').click(function () {
        $('#wrapper--spiel--inner--4').removeClass().addClass('slide-left-2');
        });
    
    
    $('#btn--weiter--einleitung--5').click(function () {
        $('#wrapper--spiel--inner--5').removeClass().addClass('slide-left-1');
        });    
    
    $('#btn--fertig--spiel--5').click(function () {
        $('#wrapper--spiel--inner--5').removeClass().addClass('slide-left-2');
        });    
    
    
/* Navigation Audio-Player */    

            var audioElement1 = document.createElement('audio');
    audioElement1.setAttribute('src', 'audio/spiel--1--audio.mp4');
    
    $('#play--1').click(function() {
        audioElement1.play();
        $(this).addClass("remove");
        $("#pause--1").removeClass("remove");
    });
    
    $('#pause--1').click(function() {
        audioElement1.pause();
        $(this).addClass("remove");
        $("#play--1").removeClass("remove");
    });
    
    
            var audioElement2 = document.createElement('audio');
    audioElement2.setAttribute('src', 'audio/spiel--2--audio.mp4');
    
    $('#play--2').click(function() {
        audioElement2.play();
        $(this).addClass("remove");
        $("#pause--2").removeClass("remove");
    });
    
    $('#pause--2').click(function() {
        audioElement2.pause();
        $(this).addClass("remove");
        $("#play--2").removeClass("remove");
    });
    
    
            var audioElement3 = document.createElement('audio');
    audioElement3.setAttribute('src', 'audio/spiel--3--audio.mp4');
    
    $('#play--3').click(function() {
        audioElement3.play();
        $(this).addClass("remove");
        $("#pause--3").removeClass("remove");
    });
    
    $('#pause--3').click(function() {
        audioElement3.pause();
        $(this).addClass("remove");
        $("#play--3").removeClass("remove");
    });
    
    
            var audioElement4 = document.createElement('audio');
    audioElement4.setAttribute('src', 'audio/spiel--4--audio.mp4');
    
    $('#play--4').click(function() {
        audioElement4.play();
        $(this).addClass("remove");
        $("#pause--4").removeClass("remove");
    });
    
    $('#pause--4').click(function() {
        audioElement4.pause();
        $(this).addClass("remove");
        $("#play--4").removeClass("remove");
    });
    
    
        var audioElement5 = document.createElement('audio');
    audioElement5.setAttribute('src', 'audio/spiel--5--audio.mp4');
    
    $('#play--5').click(function() {
        audioElement5.play();
        $(this).addClass("remove");
        $("#pause--5").removeClass("remove");
    });
    
    $('#pause--5').click(function() {
        audioElement5.pause();
        $(this).addClass("remove");
        $("#play--5").removeClass("remove");
    });
    
})
                  