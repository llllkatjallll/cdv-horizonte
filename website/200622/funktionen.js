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
        $('#wrapper--auswahl--inner').toggleClass('slide-left-5');
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
        $('#wrapper--spiel--inner--1').toggleClass('slide-left-1');
        });    
    
    $('#btn--fertig--spiel--1').click(function () {
        $('#wrapper--spiel--inner--1').toggleClass('slide-left-2');
        });
    
    
    $('#btn--weiter--einleitung--2').click(function () {
        $('#wrapper--spiel--inner--2').toggleClass('slide-left-1');
        });    
    
    $('#btn--fertig--spiel--2').click(function () {
        $('#wrapper--spiel--inner--2').toggleClass('slide-left-2');
        });
    
    
    $('#btn--weiter--einleitung--3').click(function () {
        $('#wrapper--spiel--inner--3').toggleClass('slide-left-1');
        });    
    
    $('#btn--fertig--spiel--3').click(function () {
        $('#wrapper--spiel--inner--3').toggleClass('slide-left-2');
        });
    
    
    $('#btn--weiter--einleitung--4').click(function () {
        $('#wrapper--spiel--inner--4').toggleClass('slide-left-1');
        });    
    
    $('#btn--fertig--spiel--4').click(function () {
        $('#wrapper--spiel--inner--4').toggleClass('slide-left-2');
        });
    
    
    $('#btn--weiter--einleitung--5').click(function () {
        $('#wrapper--spiel--inner--5').toggleClass('slide-left-1');
        });    
    
    $('#btn--fertig--spiel--5').click(function () {
        $('#wrapper--spiel--inner--5').toggleClass('slide-left-2');
        });    
    
    
/* Navigation Audio-Player */    
    
    function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }
    
        var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'audio/Bad_Girl.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color","green");
    });
    
    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });
    
    $('#play').click(function() {
        audioElement.play();
        $("#status").text("Status: Playing");
        $(this).addClass("remove");
        $("#pause").removeClass("remove");
    });
    
    $('#pause').click(function() {
        audioElement.pause();
        $("#status").text("Status: Paused");
        $(this).addClass("remove");
        $("#play").removeClass("remove");
    });
    
    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });
})
                  