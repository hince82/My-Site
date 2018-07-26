


var pathname = window.location.pathname
  , width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;

if (width <= 769 && pathname !== '/mobile.html') {
    window.location = 'mobile.html';
}

//float scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;2
      }
    }
  });
});

//back to top button
$('<div ><a id = "scrollTop" href="#home">^</a></div>')
  .appendTo("#home");

//section sizes
$(function(){
	$(window).bind("load resize", function(){
		_winHeight = $(window).height();
    _winWidth = $(window).width();
			$("#home").css({"height": _winHeight});
			$("#contact").css({"height": _winHeight});
      $("#profile").css({"height": _winHeight});
      $("#profile .section").css({"height": _winHeight/2});
      $("#languages").css({"height": _winHeight});
      $("#about").css({"height": _winHeight});
      $(".slideOut, .button").css({"width": _winWidth/5});
      $(".slideContainer").css({"margin-left": _winWidth/40, "margin-right": _winWidth/40});
      $(".circle").css({"width": _winWidth/15, "line-height": (_winWidth/335), "margin-left": _winWidth/13, "margin-right": _winWidth/25});
      $("#scrollTop").css({"top": _winHeight*0.85, "z-index": 5});
      $("#about .section").css({'padding-top': _winHeight/10});


	});
});

//hide slideOut elements
$('.slideOut').hide();


$('#clickHandler').click(function(){ if ($('#0').empty())  {
                                                            getXML(0);  
                                                           }; return false; })


//display / hide slideOut elements when clicked
$('#butt1').click(function(){
  $('#slide1').slideToggle();

if ($('#1').empty())                     {
                                           getXML(1); 
                                         }
                            })


$('#butt2').click(function(){
  $('#slide2').slideToggle();
 if ($('#2').empty())                    {
                                           getXML(2); 
                                         }
                            })

$('#butt3').click(function(){
  $('#slide3').slideToggle();
if ($('#3').empty())                     {
                                           getXML(3); 
                                         }
                            })

function getXML(x){

 $.ajax({
            type: 'GET',
            url: 'xmlData.xml',
            cache: false,
            dataType: 'xml',
            success: function(xml) {

            var xmlDiv='';
              
      

            $(xml).find('root').each(function(){

             function makeList(xmlSplit){
                  xmlDiv += '<h4>';
                  xmlDiv += '<ul>';

                  var i=0;
                  var n=1;
                   while(n>0) {
              
                            n=xmlSplit.indexOf("|");
                            xmlDiv+='<li>'+xmlSplit.slice(0,n)+'</li>';
                             
                            xmlSplit=xmlSplit.slice(n+1,xmlSplit.length);

                             i++;
                               }

                   xmlDiv += '</ul>';
                   xmlDiv += '</h4>';

                               }

                

                  switch (x) {

                    case 1: $(xml).find('icerik[baslik="Hakkimda"]').each(function(){ 
                       var xmlSplit=$(this).text();  
              
                           makeList(xmlSplit);
                  
                                                                        });
                          break;                      

                           

                    case 2: $(xml).find('icerik[baslik="Tecrube"]').each(function(){ 
                         var xmlSplit=$(this).text();
                        makeList(xmlSplit);
               
                          });

                           break;

                    case 3:$(xml).find('icerik[baslik="Egitim"]').each(function(){ 
                         
                          var xmlSplit=$(this).text();
                           makeList(xmlSplit);
                  
                                                                        });

                            break;
                           
                     case 0:$(xml).find('icerik[baslik="ben"]').each(function(){ 
                         
                          
                             xmlDiv=$(this).text();                     });

                            break;
                           }
                 
                   
               
               $('<div>'+xmlDiv+'</div>').appendTo("#"+x);
                                                     }); 
                                          }
          });

}

              

//add class to button elements when hovered over
$('.button').hover(function() {
  $(this).addClass('prettyHover');
}, function() {
  $(this).removeClass('prettyHover');
});

//only show back to top button when scrolled past home section
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('#scrollTop').fadeIn();
    } else {
      $('#scrollTop').fadeOut();
    }

  });






