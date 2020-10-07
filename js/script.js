
$(document).ready(function(){
  $('.slider').slick({
      arrows:false,
      dots:true,
      //adaptiveHeight:false,
      slidesToShow:1,
      slidesToScroll:1,
      speed:1000,
      infinite:false,
      //variableWidth: true,
      responsive:[
        {
            breakpoint: 540,
            settings: {
                arrows:false,
                dots:true,
            }
        }
    ]
  });
});


//слайдер 2


$(document).ready(function(){
  $('.sliders').slick({
      arrows:true,
      //adaptiveHeight:true,
      slidesToShow:2,
      slidesToScroll:2,
      speed:1000,
      infinite:false,
      //variableWidth: true,

      responsive:[
          {
            breakpoint: 1100,
              settings: {
                  slidesToShow:1,
                  slidesToScroll:1,
                  dots: true,
                  arrows:false,
              },
              
          } 
    ]
  });
});
