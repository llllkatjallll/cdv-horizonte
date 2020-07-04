$(document).ready(function (){
    
/* Get innerHeight für vh  */   
  
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
/* Screen orientation lock to portrait     
    
    var myScreenOrientation = window.screen.orientation;
    
    myScreenOrientation.lock("portrait");
    myScreenOrientation.unlock(); */

/* Launch Screen automatisch ausblenden lassen */    
    
    setTimeout(function(){
        $('#screen--launch').addClass('slide-out-left');
    }, 4500);   
    
    
/* Intro Screen weiterklicken */    
    
    $('#btn--weiter--intro').click(function () {
        $('#screen--intro').addClass('slide-out--up');
    });
   
    
/* Informationen über Konstruktivismus und Jo Enzweiler auswählen und canceln und gekürzte Texte ausklappen */  
    
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
        setTimeout(
              function() 
              {
              $('#text--konkret').addClass('truncate');
                $('#btn--weiterlesen--konkret').removeClass('remove');
                $('#text--enzweiler').addClass('truncate');
                $('#btn--weiterlesen--enzweiler').removeClass('remove');
                $('#screen--kunst').scrollTop(0);
              }, 1000); 
    });    
    
    $('#btn--kunst').click(function () {
        $('#screen--kunst').toggleClass('slide-in--down');
    });   
    
    
/* Informationen über App auswählen und canceln und gekürzte Texte ausklappen */        
    
    $('#btn--info').click(function () {
        $('#screen--info').toggleClass('slide-in--down');
    });  
    
    $('#btn--cancel--info').click(function () {
        $('#screen--info').addClass('slide-out--up');
        $('#screen--info').removeClass('slide-in--down');
        setTimeout(
              function() 
              {
              $('#text--app').addClass('truncate');
                $('#btn--weiterlesen--app').removeClass('remove');
                $('#text--impressum').addClass('truncate-impressum');
                $('#btn--weiterlesen--impressum').removeClass('remove');
                $('#screen--info').scrollTop(0);
              }, 1000); 
    });   
    
    $('#btn--weiterlesen--app').click(function () {
        $(this).addClass('remove');
        $('#text--app').removeClass('truncate');
    });
    
    $('#btn--weiterlesen--impressum').click(function () {
        $(this).addClass('remove');
        $('#text--impressum').removeClass('truncate-impressum');
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
        $('#spiel--1').removeClass('slide-out-down');       
        $('#spiel--1').addClass('slide-in-up');       
    });  
    
    $('#btn--auswahl--2').click(function () {
        $('#spiel--2').removeClass('slide-out-down');       
        $('#spiel--2').addClass('slide-in-up');       
    });  
    
    $('#btn--auswahl--3').click(function () {
        $('#spiel--3').removeClass('slide-out-down');       
        $('#spiel--3').addClass('slide-in-up');       
    });  
    
    $('#btn--auswahl--4').click(function () {
        $('#spiel--4').removeClass('slide-out-down');       
        $('#spiel--4').addClass('slide-in-up');       
    });  
    
    $('#btn--auswahl--5').click(function () {
        $('#spiel--5').removeClass('slide-out-down');       
        $('#spiel--5').addClass('slide-in-up');       
    });  
    
    
/* Spiele canceln */        

    $('.btn--cancel--spiel--1').click(function () {
        $('#spiel--1').addClass('slide-out-down');       
        $('#spiel--1').removeClass('slide-in-up');       
        setTimeout(
              function() 
              {
                $('#wrapper--spiel--inner--1').removeClass('slide-left-1 slide-left-2');
               }, 1000); 
    });
    
    $('.btn--cancel--spiel--2').click(function () {
        $('#spiel--2').addClass('slide-out-down');       
        $('#spiel--2').removeClass('slide-in-up');       
        setTimeout(
              function() 
              {
                $('#wrapper--spiel--inner--2').removeClass('slide-left-1 slide-left-2');
               }, 1000); 
        $('#screen--spielen--2').removeClass('background-white');
        $('#screen--spielen--2 > article').removeClass('remove');
        $('#btn--starten--spiel--2').removeClass('remove');
        $('#btn--speichern--spiel--2').addClass('remove');
    });
    
    $('.btn--cancel--spiel--3').click(function () {
        $('#spiel--3').addClass('slide-out-down');
        $('#spiel--3').removeClass('slide-in-up');       
        setTimeout(
              function() 
              {
                $('#wrapper--spiel--inner--2').removeClass('slide-left-1 slide-left-2');
               }, 1000); 
    });
    
    $('.btn--cancel--spiel--4').click(function () {
        $('#spiel--4').addClass('slide-out-down');       
        $('#spiel--4').removeClass('slide-in-up');       
        setTimeout(
              function() 
              {
                $('#wrapper--spiel--inner--4').removeClass('slide-left-1 slide-left-2');
               }, 1000); 
    });
    
    $('.btn--cancel--spiel--5').click(function () {
        $('#spiel--5').addClass('slide-out-down');       
        $('#spiel--5').removeClass('slide-in-up');       
        setTimeout(
              function() 
              {
                $('#wrapper--spiel--inner--5').removeClass('slide-left-1 slide-left-2');
               }, 1000); 
        $('#screen--spielen--5').removeClass('background-white');
        $('#screen--spielen--5 > article').removeClass('remove');
        $('#btn--starten--spiel--5').removeClass('remove');
        $('#btn--speichern--spiel--5').addClass('remove');
    });        
    
    
 /* Hero-Screen Aktivierung */ 
 /* einzelne Event-Listener in den Spiel-Navigationen */ 
    
    var spiel1_played=false;   
    var spiel2_played=false; 
    var spiel3_played=false; 
    var spiel4_played=false; 
    var spiel5_played=false;
    
    $('#btn--weiterspielen--hero').click(function() {
        $("#screen--hero").addClass("slide-out-right");
        $("#screen--hero").removeClass("slide-in-left");
        spiel1_played=false;
        spiel2_played=false;
        spiel3_played=false;
        spiel4_played=false;
        spiel5_played=false;
    });

    
/* Navigation innerhalb des Spiels 1 */        
    
    $('#btn--weiter--einleitung--1').click(function () {
        $('#wrapper--spiel--inner--1').removeClass().addClass('slide-left-1');
        });    
    
    $('#btn--back--1--spiel--1').click(function () {
        $('#wrapper--spiel--inner--1').removeClass().addClass('slide-0');
        });
        
    $('#btn--starten--spiel--1').click(function () {
        $('#spiel--1').removeClass('remove');
        });     

    $('#btn--fertig--spiel--1').click(function () {
        $('#wrapper--spiel--inner--1').removeClass().addClass('slide-left-2');
        $('#container--spiel--1').addClass('remove');
        spiel1_played=true;
        if (spiel1_played==true && spiel2_played==true && spiel3_played==true && spiel4_played==true && spiel5_played==true){
            $("#screen--hero").removeClass("slide-out-right");
            $("#screen--hero").addClass("slide-in-left"); 
        }
    });     
    
    $('#btn--back--2--spiel--1').click(function () {
        $('#wrapper--spiel--inner--1').removeClass().addClass('slide-left-1');
        });    
    
/* Navigation innerhalb des Spiels 2 */      
    
    $('#btn--weiter--einleitung--2').click(function () {
        $('#wrapper--spiel--inner--2').removeClass().addClass('slide-left-1');
        });    
    
    $('#btn--back--1--spiel--2').click(function () {
        $('#wrapper--spiel--inner--2').removeClass().addClass('slide-0');
        });
    
    $('#btn--starten--spiel--2').click(function () {
        $('#screen--spielen--2').addClass('background-white');
        $('#container--spiel--2').removeClass('remove');
        $('#screen--spielen--2 > article').addClass('remove');
        $(this).addClass('remove');
        $('#btn--speichern--spiel--2').removeClass('remove');
        });    
    
    $('#btn--fertig--spiel--2').click(function () {
        $('#wrapper--spiel--inner--2').removeClass().addClass('slide-left-2');
        $('#container--spiel--2').addClass('remove');
        $('#screen--spielen--2').removeClass('background-white');
        $('#screen--spielen--2 > article').removeClass('remove');
        $('#btn--starten--spiel--2').removeClass('remove');
        $('#btn--speichern--spiel--2').addClass('remove');
        spiel2_played=true;
        if (spiel1_played==true && spiel2_played==true && spiel3_played==true && spiel4_played==true && spiel5_played==true){
            $("#screen--hero").removeClass("slide-out-right");
            $("#screen--hero").addClass("slide-in-left"); 
        }
        });
    
    $('#btn--back--2--spiel--2').click(function () {
        $('#wrapper--spiel--inner--2').removeClass().addClass('slide-left-1');
        });    
    
    
/* Navigation innerhalb des Spiels 3 */      
    
    $('#btn--weiter--einleitung--3').click(function () {
        $('#wrapper--spiel--inner--3').removeClass().addClass('slide-left-1');
        });    
    
    $('#btn--back--1--spiel--3').click(function () {
        $('#wrapper--spiel--inner--3').removeClass().addClass('slide-0');
        });    
    
    $('#btn--starten--spiel--3').click(function () {
        $('#container--spiel--3').removeClass('remove');
        });     

    $('#btn--fertig--spiel--3').click(function () {
        $('#wrapper--spiel--inner--3').removeClass().addClass('slide-left-2');
        $('#container--spiel--3').addClass('remove');
        spiel3_played=true;
        if (spiel1_played==true && spiel2_played==true && spiel3_played==true && spiel4_played==true && spiel5_played==true){
            $("#screen--hero").removeClass("slide-out-right");
            $("#screen--hero").addClass("slide-in-left"); 
        }
        });
    
    $('#btn--back--2--spiel--3').click(function () {
        $('#wrapper--spiel--inner--3').removeClass().addClass('slide-left-1');
        });   

    
/* Navigation innerhalb des Spiels 4 */     
    
    $('#btn--weiter--einleitung--4').click(function () {
        $('#wrapper--spiel--inner--4').removeClass().addClass('slide-left-1');
        });
    
    $('#btn--back--1--spiel--4').click(function () {
        $('#wrapper--spiel--inner--4').removeClass().addClass('slide-0');
        });    

    $('#btn--starten--spiel--4').click(function () {
        $('#container--spiel--4').removeClass('remove');
        });     
    
    $('#btn--fertig--spiel--4').click(function () {
        $('#wrapper--spiel--inner--4').removeClass().addClass('slide-left-2');
        $('#container--spiel--4').addClass('remove');
        spiel4_played=true;
        if (spiel1_played==true && spiel2_played==true && spiel3_played==true && spiel4_played==true && spiel5_played==true){
            $("#screen--hero").removeClass("slide-out-right");
            $("#screen--hero").addClass("slide-in-left"); 
        }
        });
    
    $('#btn--back--2--spiel--4').click(function () {
        $('#wrapper--spiel--inner--4').removeClass().addClass('slide-left-1');
        });    
   
    
/* Navigation innerhalb des Spiels 5 */     
    
    $('#btn--weiter--einleitung--5').click(function () {
        $('#wrapper--spiel--inner--5').removeClass().addClass('slide-left-1');
        });    
    
    $('#btn--back--1--spiel--5').click(function () {
        $('#wrapper--spiel--inner--5').removeClass().addClass('slide-0');
        });  
    
    $('#btn--starten--spiel--5').click(function () {
        $('#screen--spielen--5').addClass('background-white');
        $('#container--spiel--5').removeClass('remove');
        $('#screen--spielen--5 > article').addClass('remove');
        $(this).addClass('remove');
        $('#btn--speichern--spiel--5').removeClass('remove');
        });      
    
    $('#btn--fertig--spiel--5').click(function () {
        $('#wrapper--spiel--inner--5').removeClass().addClass('slide-left-2');
        $('#container--spiel--5').addClass('remove');
        $('#screen--spielen--5').removeClass('background-white');
        $('#screen--spielen--5 > article').removeClass('remove');
        $('#btn--starten--spiel--5').removeClass('remove');
        $('#btn--speichern--spiel--5').addClass('remove');
        spiel5_played=true;
        if (spiel1_played==true && spiel2_played==true && spiel3_played==true && spiel4_played==true && spiel5_played==true){
            $("#screen--hero").removeClass("slide-out-right");
            $("#screen--hero").addClass("slide-in-left"); 
        }
        });    
    
    $('#btn--back--2--spiel--5').click(function () {
        $('#wrapper--spiel--inner--5').removeClass().addClass('slide-left-1');
        });  
    
/* Slick-Slider Implementierung  */
    
    
/* Navigation Audio-Player 1 */    

            var audioElement1 = document.createElement('audio');
    audioElement1.setAttribute('src', 'audio/spiel--1--audio.mpeg');
    
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
    
    
/* Navigation Audio-Player 2 */    
    
            var audioElement2 = document.createElement('audio');
    audioElement2.setAttribute('src', 'audio/spiel--2--audio.mpeg');
    
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
    
    
/* Navigation Audio-Player 3 */        
    
            var audioElement3 = document.createElement('audio');
    audioElement3.setAttribute('src', 'audio/spiel--3--audio.mpeg');
    
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
    
    
/* Navigation Audio-Player 4 */        
    
            var audioElement4 = document.createElement('audio');
    audioElement4.setAttribute('src', 'audio/spiel--4--audio.mpeg');
    
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
    
    
/* Navigation Audio-Player 5 */        
    
        var audioElement5 = document.createElement('audio');
    audioElement5.setAttribute('src', 'audio/spiel--5--audio.mpeg');
    
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
    
});


                  